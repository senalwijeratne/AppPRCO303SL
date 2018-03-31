import React, {Component} from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'

import Card from '../common/card.js/'

export default class HistoryScreen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={{ fontSize: 30 }}>History</Text>
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
  }
})
