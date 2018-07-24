import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
//Xu add "getBusStops"
import { nbDataPull, nbDataPull2, getBusStops } from '../actions';
import NearbyItem from './NearbyItem';

class NearbyList extends Component {

  componentWillMount() {
    this.props.nbDataPull();

    //Xu --2
    this.props.getBusStops();
    //end --2
  }

  componentDidUpdate() {
    if(this.props.nbd_here == 'Data Here') {
      this.props.nbDataPull2(this.props.nearbydata);
    }
  }
//<Text key={stop.stop}>{stop.stop}</Text>
  renderList() {
    if(this.props.nbd_here == 'Data Here2') {
      //console.log(this.props.nearbydata);
      //console.log(this.props.nearbydata2);
      var arr = new Array();
      for(var i = 0; i < this.props.nearbydata.length; i++) {
        var a = this.props.nearbydata[i];
        var b = this.props.nearbydata2[i];
        var obj = { a, b };
        arr.push(obj);
      }
      console.log(arr);
      return arr.map(stop =>
        <NearbyItem stop={stop} key={stop.a.stop}/>
      );
    } else {
      return (
        <Text>Pulling Data, Please Wait</Text>
      )
    }
  }

    render() {
      return (
        <View>
          {this.renderList()}
        </View>
      );
    }

}

const styles = {
};

const mapStateToProps = state => {
  //Xu add "getBusStops"
  const { collapse, nearbydata, nbd_here, nearbydata2, getBusStops } = state.bus;
  //Xu add "getBusStops"
  return { collapse, nearbydata, nbd_here, nearbydata2, getBusStops };
};
//Xu add "getBusStops"
export default connect(mapStateToProps, { nbDataPull, nbDataPull2, getBusStops })(NearbyList);
