//Xu --1
import axios from 'axios';
//end --1

import {
  COLLAPSE_BUS_ROW,
  NEARBY_DATA_PULL,
  PULLING_NEARBY_DATA,
  PULLING_NEARBY_DATA_2,
  ALL_DATA_KEYS,
  ADK_HERE,
  NB_ALL_DATA,
  ALL_DATA,

  //Xu --2
  NEARBYBUS,
  ALLBUS,
  ACTIVEROUTES,
  INACTIVEROUTES,
  //end --2

} from './types';

var nextbus = require('nextbusjs');

//Xu --3
var geodist = require('geodist');
var agency_id = '1199';
var base_url = 'https://transloc-api-1-2.p.mashape.com/';
var all_stops_url = base_url + 'stops.json?agencies=' + agency_id; // + '&callback=call';
var all_routes_url = base_url + 'routes.json?agencies=' + agency_id; // + '&callback=call';
//end --3

var ru = nextbus.client();

export const buttonRotate =  (bool) => {
    return {
      type: COLLAPSE_BUS_ROW,
      payload: bool
    };
};

// Xu --4
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
      });
    });
  };
};
//end --4


export const nbDataPull = () => {
  return (dispatch) => {
    dispatch({ type: PULLING_NEARBY_DATA, payload: 'pulling' });
    ru.cacheAgency("rutgers", 40.4, 40.6, function(err) {
    var nearest = ru.closestStops(40.4860, -74.4208);
    var arr = new Array();
    for (var key in nearest) {
      var obj = { stop: key, distance: nearest[key] };
      arr.push(obj);
    }
    console.log(arr);
    dispatch({ type: NEARBY_DATA_PULL, payload: arr });
    dispatch({ type: PULLING_NEARBY_DATA, payload: 'Data Here' });
  });
  };
};

export const nbDataPull2 = (data) => {
  var arr = new Array();
  for(var i = 0; i < data.length; i++) {
    arr.push(data[i].stop)
  }
  //console.log(arr);
  return (dispatch) => {
    dispatch({ type: PULLING_NEARBY_DATA, payload: 'Data Here7' });
    var k = 0
    ru.cacheAgency("rutgers", 40.4, 40.6, function(err) {
      for(var i = 0; i< arr.length; i++) {
        ru.stopPredict(arr[i], null, function (err, data) {
          var obj = { val: k, info: data };
          k++;
          dispatch({ type: PULLING_NEARBY_DATA_2, payload: obj});
          if(k == arr.length) {
              dispatch({ type: PULLING_NEARBY_DATA, payload: 'Data Here2' });
              dispatch({ type: NB_ALL_DATA, payload: 'Data Here2' });
          }
        }, 'both');
      }
    });
  }
};

export const allDataPull = (data) => {
  return (dispatch) => {
    dispatch({ type: NB_ALL_DATA, payload: 'Data Here7' });
    var arr = new Array();
    var dataArr = new Array();
    for(var i = 0; i < data.length; i++) {
      dataArr.push(data[i].stop);
    }
    ru.cacheAgency('rutgers', 40.4, 40.6, function (err) {
      var stops = ru.getStops(false);
      for(var i = 0; i < stops.length; i++) {
        arr.push(stops[i].title);
      }
      arr = arr.filter(val => !dataArr.includes(val));
      //console.log(arr);
      dispatch({ type: ALL_DATA_KEYS, payload: arr });
      dispatch({ type: ADK_HERE, payload: 'keys here'});
    });
  }
}

export const allDataPull2 = (d) => {
  return (dispatch) => {
    dispatch({ type: ADK_HERE, payload: ''});
    var k = 0;
    ru.cacheAgency('rutgers', 40.4, 40.6, function (err) {
      for(var i = 0; i < d.length; i++) {
        ru.stopPredict(d[i], null, function (err, data) {
          k++;
          dispatch({ type: ALL_DATA, payload: data });
          if(k == d.length) {
            dispatch({ type: ADK_HERE, payload: 'data here'});
          }
        }, 'both');
      }
    });
  }
};
