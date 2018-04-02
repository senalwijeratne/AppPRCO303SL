import React, {Component} from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'

import Card from '../common/card.js/'

export default class HomeScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={{ fontSize: 30 }}>Home</Text>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 60,
    paddingTop: 15
  }
})
