import React, {Component} from 'react'
import { Text, View, Button } from 'react-native'

export default class MessagesScreen extends Component {
  static navigationOptions = {
    header: null, //This is how you hide the header
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>Coming Soon</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Test') }
        />
      </View>
    )
  }
}
