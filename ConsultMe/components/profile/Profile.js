import React, {Component} from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  Alert,
} from 'react-native'
import { Avatar, Divider } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class ProfileScreen extends Component {
  render() {
    return (
      //The below ScrollView doesn't scroll, I need to work on that
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image style={{ width: Dimensions.get('window').width, height: 200, position: 'absolute' }} source={require('./polygon.png')} />
        <View style={{ width: Dimensions.get('window').width, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', paddingRight: 15 }}>
          <MaterialIcons name={'edit'} size={30} color={'white'} onPress={() => Alert.alert('fire \'edit details\'')} />
        </View>
        <Avatar
          width= {130}
          height= {130}
          rounded
          title="HM" //Need a function that takes the name and gets the initials
          // source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
          activeOpacity={1}
          containerStyle={{ marginTop:90, borderWidth:2, borderColor:'white' }}
          onLongPress={()=>Alert.alert('change pic?')}
        />
        <Text style={{ fontSize: 30, color:'#4F4F4F' }}>Hashan Maduwantha</Text>
        <View style={{ width: Dimensions.get('window').width - 30, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 20, }}>
          <Text style={{ fontSize: 25, color:'#4F4F4F' }}>DETAILS</Text>
          <View style={{ height: 20 }} />

          <Text style={{ fontSize: 20 }}>Email:</Text>
          <View style={{ height: 5 }} />
          <Text style={{ fontSize: 15, justifyContent:'flex-end' }}>&emsp;example@blah.com</Text>
          <View style={{ height: 10 }} />

          <Text style={{ fontSize: 20 }}>Telephone No:</Text>
          <View style={{ height: 5 }} />
          <Text style={{ fontSize: 15, justifyContent:'flex-end' }}>&emsp;07X-XXXXXXX</Text>
          <View style={{ height: 10 }} />

          <Text style={{ fontSize: 20 }}>Date of Birth:</Text>
          <View style={{ height: 5 }} />
          <Text style={{ fontSize: 15, justifyContent:'flex-end' }}>&emsp;1995-05-28</Text>
          <View style={{ height: 10 }} />
        </View>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 60,
    paddingTop: 15
  }
})
