import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { allDataPull, allDataPull2 } from '../actions';
var dt = new Array();

class AllList extends Component {

  componentDidUpdate() {
    if(this.props.procc == 'Data Here2') {
      this.props.allDataPull(this.props.nearbydata);
    }
  }

    renderList() {
      if(this.props.khere == 'no') {
        return (
          <Text>{this.props.khere}</Text>
        );
      } else if(this.props.khere == 'keys here') {
        this.props.allDataPull2(this.props.allkeys);
        return (
          <Text>{this.props.khere}</Text>
        );
      } else if(this.props.khere == 'data here') {
        //console.log(this.props.alldata);
        for(var i = 0; i < this.props.alldata.length; i++) {
          var obj = { stop: this.props.allkeys[i], info: this.props.alldata[i] };
          dt.push(obj);
        }
        
        return (
          <Text>{this.props.khere}</Text>
        );
      }
      return (
        <Text>ERROR</Text>
      );
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
  const { nearbydata, nbd_here, khere, procc, allkeys, alldata } = state.bus;

  return { nearbydata, nbd_here, khere, procc, allkeys, alldata };
};

export default connect(mapStateToProps, { allDataPull, allDataPull2 })(AllList);
