import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';
import SafariView from 'react-native-safari-view';
import Header from '../Components/Header';
import BottomBar from '../Components/BottomBar';
var links = new Array();

export default class FoodScreen extends Component {

  constructor() {
    super();
    links = new Array();
    //Adds to the list of links. Just add and remove entries as neccesary
    links.push({ title: 'myRutgers', url: 'https://cas.rutgers.edu/login?service=https://my.rutgers.edu/portal/Login', src: require('../images/Links/myRutgers.imageset/University-75.png') });
    links.push({ title: 'Sakai', url: 'https://cas.rutgers.edu/login?service=https%3A%2F%2Fsakai.rutgers.edu%2Fsakai-login-tool%2Fcontainer', src: require('../images/Links/sakai.imageset/Classroom-75.png') });
    links.push({ title: 'Library Hours', url: 'https://m.libraries.rutgers.edu/hours.php', src: require('../images/Links/clock.imageset/Clock-75.png') });
    links.push({ title: 'Targum', url: 'http://www.dailytargum.com/', src: require('../images/Links/news.imageset/News-75.png') });
    links.push({ title: 'RU Listings', url: 'https://www.rulistings.com', src: require('../images/Links/sale.imageset/Sales_75.png') });
    links.push({ title: 'Rutgers Reddit', url: 'https://m.reddit.com/r/rutgers/', src: require('../images/Links/reddit.imageset/Reddit-75.png') });
    links.push({ title: 'The Medium', url: 'https://rutgersthemedium.wordpress.com', src: require('../images/Links/monkey.imageset/Monkey_75.png') });
    links.push({ title: 'Student Organizations', url: 'https://rutgers.collegiatelink.net', src: require('../images/Links/organization.imageset/Map_75.png') });
    links.push({ title: 'Grades', url: 'https://cas.rutgers.edu/login?service=https://my.rutgers.edu/portal/Login%3fuP_fname=my-grades&uP_args=', src: require('../images/Links/grades.imageset/Exam-75.png') });
    links.push({ title: 'eCollege', url: 'https://cas.rutgers.edu/login?service=http%3A%2F%2Fonlinelearning.rutgers.edu%2Facademics.php', src: require('../images/Links/ecollege.imageset/Student-75.png') });
    links.push({ title: 'Financial Aid', url: 'https://finservices.rutgers.edu/otb/chooseSemester.htm?login=cas', src: require('../images/Links/bank.imageset/Bank-75.png') });

    this.sfViewController = this.sfViewController.bind(this);
  }

  sfViewController(link) {
    //When iOS 8.0 or Higher, it opens SafariViewController
    SafariView.isAvailable()
      .then(SafariView.show({
        url: link.url,
        tintColor: '#ed4545',
        barTintColor: 'white',
        readerMode: true
      }))
      .catch(error => {
        //When iOS 8.0 or Lower, it opens in Safari Browser
        Linking.openURL(link.url);
      });
  }


  LinkList() {
    return links.map(link =>
      <TouchableOpacity key={link.title} onPress={() => this.sfViewController(link)}>
      <View>
      <View style={styles.viewStyle}>
      <Image style={{ width: 30, height: 30, marginRight: 30, marginLeft: 16 }} source={link.src}/>
      <Text style={styles.textStyle}>{link.title}</Text>
      </View>
      <View
        style={{
          borderBottomColor: 'rgb(200, 199, 204)',
          borderBottomWidth: 1,
          marginHorizontal: 16
        }}
      />
      </View>
      </TouchableOpacity>
    );
  }
    render() {
      return (
        <View style={styles.home}>
          <Header
            text={'Links'}
          />
          <ScrollView>
          {this.LinkList()}
          </ScrollView>
          <BottomBar hs={true} bus={true} fs={true} ls={false} mr={true}/>
        </View>
      );
    }

}

const styles = {
    home: {
      flex: 1,
      backgroundColor: 'rgb(255, 255, 255)'
    },
    textStyle: {
      fontFamily: 'system font',
      fontSize: 18
    },
    viewStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10
    }
};
