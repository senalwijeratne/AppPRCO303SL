import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import HomeScreen from './components/home/Home.js'
import BookmarkScreen from './components/bookmark/Bookmark.js'
import HistoryScreen from './components/history/History.js'
import MessagesScreen from './components/messages/Messages.js'
import ProfileScreen from './components/profile/Profile.js'

export default TabNavigator(
  {
    Home: { screen: HomeScreen },
    Bookmark: { screen: BookmarkScreen },
    History: { screen: HistoryScreen },
    Messages: { screen: MessagesScreen },
    Profile: { screen: ProfileScreen }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Home') {
          iconName = "search"
        } else if (routeName === 'Bookmark') {
          iconName = "bookmark"
        } else if (routeName === 'History') {
          iconName = "history"
        } else if (routeName === 'Messages') {
          iconName = "chat"
        } else if (routeName === 'Profile') {
          iconName = "person"
        }

        return <MaterialIcons name={iconName} size={26} color={tintColor} />
      },
    }),
    tabBarComponent: NavigationComponent,
    tabBarPosition: "bottom",
    animationEnabled: true, //swipe left-and-right animation for tabs
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: "#2D9CDB",
      bottomNavigationOptions: {
        activeLabelColor:"#2D9CDB",
        style: {
          height: 56,
          elevation: 8,
          position: "absolute",
          left: 0,
          bottom: 0,
          right: 0,

          //I cant get the shadow to work, Need to fix it somehow

          // shadowColor: "#000000",
          // shadowOffset: { width: 3, height: 3 },
          // shadowOpacity: 1,
          // shadowRadius: 5,
        },
        tabs: {
          Home: { /* unique tab options/styles/colours and stuff */ }
        }
      }
    }
  }
)
