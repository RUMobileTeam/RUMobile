import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
var boxes = new Array();
var k = 0;
 class NearbyItem extends Component {

   createbox() {
     for(var i = 0; i < this.props.stop.b.info.length; i++) {
       if(this.props.stop.b.info[i].title == 'A') {
         var obj = { h: 23, src: require('../images/BI/biA.png')}
         boxes.push(obj);
       } else if(this.props.stop.b.info[i].title == 'B') {
         var obj = { h: 23, src: require('../images/BI/biB.png')}
         boxes.push(obj);
       } else if(this.props.stop.b.info[i].title == 'C') {
         var obj = { h: 23, src: require('../images/BI/biC.png')}
         boxes.push(obj);
       } else if(this.props.stop.b.info[i].title == 'EE') {
         var obj = { h: 29, src: require('../images/BI/biEE.png')}
         boxes.push(obj);
       } else if(this.props.stop.b.info[i].title == 'F') {
         var obj = { h: 23, src: require('../images/BI/biF.png')}
         boxes.push(obj);
       } else if(this.props.stop.b.info[i].title == 'H') {
         var obj = { h: 23, src: require('../images/BI/biH.png')}
         boxes.push(obj);
       } else if(this.props.stop.b.info[i].title == 'LX') {
         var obj = { h: 29, src: require('../images/BI/biLX.png')}
         boxes.push(obj);
       } else if(this.props.stop.b.info[i].title == 'All Campuses') {
         var obj = { h: 37, src: require('../images/BI/biALL.png')}
         boxes.push(obj);
       } else if(this.props.stop.b.info[i].title == 'New Brunsquick 1 Shuttle') {
         var obj = { h: 33, src: require('../images/BI/biS1.png')}
         boxes.push(obj);
       } else if(this.props.stop.b.info[i].title == 'New Brunsquick 2 Shuttle') {
         var obj = { h: 33, src: require('../images/BI/biS2.png')}
         boxes.push(obj);
       } else if(this.props.stop.b.info[i].title == 'RBHS/Hospital') {
         var obj = { h: 48, src: require('../images/BI/biRBHS.png')}
         boxes.push(obj);
       } else if(this.props.stop.b.info[i].title == 'REX B') {
         var obj = { h: 48, src: require('../images/BI/biREXB.png')}
         boxes.push(obj);
       } else if(this.props.stop.b.info[i].title == 'REX L') {
         var obj = { h: 48, src: require('../images/BI/biREXL.png')}
         boxes.push(obj);
       } else if(this.props.stop.b.info[i].title == 'Weekend 1') {
         var obj = { h: 35, src: require('../images/BI/biW1.png')}
         boxes.push(obj);
       } else if(this.props.stop.b.info[i].title == 'Weekend 2') {
         var obj = { h: 35, src: require('../images/BI/biW2.png')}
         boxes.push(obj);
       } else {
         var obj = { h: 23, src: require('../images/BI/biN.png')}
         boxes.push(obj);
       }
     }
     //console.log("Box Data")
    // console.log(boxes);
    k = boxes.length;
   }
   boxReset() {
     k--;
     if(k == 0) {
       boxes = new Array();
     }
     //console.log(k);
   }
   renderBus() {
     return boxes.map(box =>
       <View>
       <Image style={{ width: box.h, height: 23, marginRight: 6, marginTop: 2 }} source={box.src}/>
       {this.boxReset()}
       </View>
     );
   }

    render() {
      {this.createbox()}
      return (
        <View style={styles.viewStyle}>
        <View
        style={{
          borderBottomColor: 'rgb(200, 199, 204)',
          borderBottomWidth: 1,
          marginBottom: 10.5
        }}
        />
          <View style={styles.viewStyle2}>
            <Text style={styles.textStyle}>{this.props.stop.a.stop}</Text>
            <Text style={styles.textStyle2}>{this.props.stop.a.distance}.0 mi</Text>
          </View>
          <View style={styles.viewStyle3}>
          {this.renderBus()}
          </View>
        </View>
      );
    }

}

const styles = {
  textStyle: {
    fontFamily: 'system font',
    fontSize: 17,
    fontWeight: '100'
  },
  textStyle2: {
    fontFamily: 'system font',
    fontSize: 12,
    color: 'rgb(155, 155, 155)'
  },
  viewStyle: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8.5
  },
  viewStyle2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  viewStyle3: {
    flexDirection: 'row',
  }
};

export default NearbyItem;
