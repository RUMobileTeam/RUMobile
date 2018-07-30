import axios from 'axios';

import {
  NEARBYBUS,
  ALLBUS,
  ACTIVEROUTES,
  INACTIVEROUTES,
  BUS_DATA_HERE
} from './types';

var geodist = require('geodist');
var agency_id = '1199';
var base_url = 'https://transloc-api-1-2.p.mashape.com/';
var all_stops_url = base_url + 'stops.json?agencies=' + agency_id;
var all_routes_url = base_url + 'routes.json?agencies=' + agency_id;

export const getBusStops =  () => {
  var stops = {};
  var active_routs = {};
  var nearby_stops = [];
  var all_stops = [];
  var user_location = {};
  var nearby_count = 3;
  var routes_active = [];
  var routes_inactive = [];

  var getUserLocation = new Promise((resolve, reject) => {
    user_location = {};
    navigator.geolocation.getCurrentPosition(
      (position) => {
        user_location.lat = position.coords.latitude;
        user_location.lon = position.coords.longitude;
        resolve(user_location);
      },
      (error) => {
        console.log(error.message);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 6000 },
    );
  });

  var getActiveRoutes = new Promise((resolve, reject) => {
    axios({
      method:'get',
      url: all_routes_url,
      headers: {
        'Accept': 'application/json',
        'X-Mashape-Key': 'Pcl9MfLNF0mshcAni8CgyFuxVXTap1NA0RxjsnoxN4439f9hBq'
      },
    })
    .then(response => {
      data = response.data.data[agency_id];
      for (i in data) {
        if (data[i]['is_active']) {
          rid = data[i]['route_id'];
          active_routs[rid] = data[i]['short_name'];
          routes_active.push(data[i]['short_name']);
        } else {
          routes_inactive.push(data[i]['short_name']);
        }
      };

      resolve(active_routs);
    });
  });

  return (dispatch) => {

    Promise.all([getUserLocation, getActiveRoutes]).then((value) => {
      dispatch({ type: ACTIVEROUTES, payload: routes_active });
      dispatch({ type: INACTIVEROUTES, payload: routes_inactive });
      axios({
        method:'get',
        url: all_stops_url,
        headers: {
          'Accept': 'application/json',
          'X-Mashape-Key': 'Pcl9MfLNF0mshcAni8CgyFuxVXTap1NA0RxjsnoxN4439f9hBq'
        },
      })
      .then(response => {
        data = response.data.data;
        var temp = [];
        for (i in data) {
          s = {};
          route = [];
          s.name = data[i]['name'];
          for (i in data[i]['routes']) {
            rid = data[i]['routes'][i];
            if (active_routs[rid]) {
              rname = active_routs[rid];
              route.push(rname);
            }
          }
          s.route = route;
          distance = geodist(user_location, data[i].location, {exact: true, unit: 'miles'});
          s.distance = distance;
          all_stops.push(s);
          temp.push(distance);
        };
        nearby = temp.sort().slice(0,nearby_count);
        temp_list = [];
        for (i in all_stops) {
          if (nearby.includes(all_stops[i].distance)) {
            s = {};
            s.name = all_stops[i].name;
            s.route = all_stops[i].route;
            s.distance = all_stops[i].distance.toFixed(2);
            temp_list.push(s);
          }
        };
        nearby_stops = temp_list.slice(0,nearby_count);
        dispatch({ type: NEARBYBUS, payload: nearby_stops });
        dispatch({ type: ALLBUS, payload: all_stops });
        dispatch({ type: BUS_DATA_HERE, payload: 'here' });
      });
    });
  };
};
