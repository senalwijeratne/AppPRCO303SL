import React, {Component} from 'react'
import { Text, View } from 'react-native'

import Card from '../common/card.js/'

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'orange' }}>
        <Text>Home!</Text>
        <Card />
        <Card />
      </View>
    )
  }
}
