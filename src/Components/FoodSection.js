
import React, { Component } from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';

class FoodSection extends Component {

  returnImage() {
    var x = null
    if(this.props.food.genre_name == 'Breakfast Meats') {
      x = require('../images/food/BreakfastMeats.jpg');
      return x;
    } else if(this.props.food.genre_name == 'Breakfast Entrees') {
      x = require('../images/food/BreakfastEntrees.jpg');
      return x;
    } else if(this.props.food.genre_name == 'Breakfast Bakery') {
      x = require('../images/food/BreakfastBakery.jpg');
      return x;
    } else if(this.props.food.genre_name == 'Breakfast Misc') {
      x = require('../images/food/BreakfastMisc.jpg');
      return x;
    } else if(this.props.food.genre_name == 'Salad Bar') {
      x = require('../images/food/SaladBar.jpg');
      return x;
    } else if(this.props.food.genre_name == 'Entrees') {
      x = require('../images/food/Entrees.jpg');
      return x;
    } else if(this.props.food.genre_name == 'Sauces & Gravies') {
      x = require('../images/food/SaucesGravies.jpg');
      return x;
    } else if(this.props.food.genre_name == 'Starch & Potatoes') {
      x = require('../images/food/StarchPotatoes.jpg');
      return x;
    } else if(this.props.food.genre_name == 'Veggies') {
      x = require('../images/food/Veggies.jpg');
      return x;
    } else if(this.props.food.genre_name == 'Desserts') {
      x = require('../images/food/Desserts.jpg');
      return x;
    } else if(this.props.food.genre_name == 'Bakery Misc') {
      x = require('../images/food/BakeryMisc.jpg');
      return x;
    } else if(this.props.food.genre_name == 'Cook To Order Bar') {
      x = require('../images/food/CookToOrder.jpg');
      return x;
    } else if(this.props.food.genre_name == 'Wok/ Mongolian Grill') {
      x = require('../images/food/WokMongolianGrill.jpg');
      return x;
    } else if(this.props.food.genre_name == 'Pizza/ Pasta') {
      x = require('../images/food/PizzaPasta.jpg');
      return x;
    } else if(this.props.food.genre_name == 'Soups') {
      x = require('../images/food/Soups.jpg');
      return x;
    } else if(this.props.food.genre_name == 'Deli Bar Entree') {
      x = require('../images/food/DeliBarEntre.jpg');
      return x;
    } else {
      x = require('../images/food/noimage.jpg');
      return x;
    }
  }
  renderFoods() {
    return this.props.food.items.map(item =>
      <View key={item} style={styles.sectionTextBox}>
        <Text style={styles.sectionText}>{item}</Text>
      </View>
    );
  }
  render() {
    console.log(this.props.food);
    return (
      <View>
        <View style={styles.sectionImgBox}>
          <ImageBackground source={this.returnImage()} style={styles.sectionImage}>
            <Text style={styles.sectionTitle}>{this.props.food.genre_name}</Text>
          </ImageBackground>
        </View>
        {this.renderFoods()}
      </View>
    );
  }
}

const styles = {
  sectionImgBox: {
    height: 80,
    flexDirection: 'row',
  },
  sectionImage: {
    flex: 1,
    justifyContent: 'center',
  },
  sectionTextBox: {
    borderColor: 'rgb(237, 237, 237)',
    borderBottomWidth: 1,
  },
  sectionTitle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 34,
    fontWeight: '300',
  },
  sectionText: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 18,
  },
};

export default FoodSection;
