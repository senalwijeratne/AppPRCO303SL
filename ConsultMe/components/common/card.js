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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class Card extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <TouchableOpacity style={styles.cardContainer} onPress={() => this.props.navigation.navigate('Test') activeOpacity={0.9}>
        <View style={styles.userInformations}>
          <Image style={{width: 60, height: 60, borderRadius: 30}} source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}} />
        </View>
        <View style={{flex:2, justifyContent:'flex-end', flexDirection: 'row'}}>
          <View style={{flex:1, justifyContent:'flex-end', flexDirection: 'column', borderWidth: 1}}>
            <Text style={{ fontSize: 25 }}>Ikhwan Kal</Text>
            <Text style={styles.status}>Cardiologist</Text>
          </View>
          <View style={{flex:1, justifyContent:'space-evenly', alignItems:'center', flexDirection: 'row', borderWidth: 1}}>
            <View style={{alignItems:'center'}}>
              <MaterialIcons name={'star'} size={20} color={'#F2B01E'}/>
              <Text style={{ fontSize: 15 }}>5/5</Text>
            </View>
            <View style={{alignItems:'center'}}>
              <MaterialIcons name={'attach-money'} size={20}/>
              <Text style={{ fontSize: 15 }}>Rs. 1000</Text>
            </View>
            <View style={{alignItems:'center'}}>
              <MaterialIcons name={'location-on'} size={20}/>
              <Text style={{ fontSize: 15 }}>5 Km</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    width: Dimensions.get('window').width - 30,
    // height: 150,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 3,
    elevation: 2,
  },
  userInformations: {
    borderWidth: 1,
    flex: 2,
    flexDirection: 'row',
  },
  status: {
    fontSize: 15
  },
})
