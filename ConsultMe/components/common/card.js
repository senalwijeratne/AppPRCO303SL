import React, {Component} from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  Dimensions,
} from 'react-native'

export default class Card extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <TouchableOpacity style={styles.cardContainer} onPress={() => Alert.alert('Card was pressed')}>
        <View style={styles.userInformations}>
          <Image source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}} />
          <Text>blah!</Text>
        </View>
        <Text style={styles.status}>blah!</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
   width: Dimensions.get('window').width - 40,
   height: Dimensions.get('window').height / 6,
   backgroundColor: 'yellow',
   marginTop: 5,
   marginBottom: 5,
   // elevation: 3,
   //I cant get the shadow to work, Need to fix it somehow

   shadowColor: "green",
   shadowOffset: { width: 30, height: 20 },
   shadowOpacity: 1,
   shadowRadius: 50,
  },
  userInformations: {
    /*...*/
  },
  status: {
    /*...*/
  },
})
