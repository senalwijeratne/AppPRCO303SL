/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';
// import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

import HomeScreen from './components/home/Home.js'
import BookmarkScreen from './components/bookmark/Bookmark.js'
import HistoryScreen from './components/history/History.js'
import MessagesScreen from './components/messages/Messages.js'
import ProfileScreen from './components/profile/Profile.js'

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
//
// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <BottomNavigation
//         labelColor="#9E9E9E"
//         rippleColor="black"
//         style={{
//           height: 56,
//           elevation: 8,
//           position: "absolute",
//           left: 0,
//           bottom: 0,
//           right: 0,
//
//           //I cant get the shadow to work, Need to fix it somehow
//
//           // shadowColor: "#008000",
//           // shadowOffset: { width: 3, height: 3 },
//           // shadowOpacity: 1,
//           // shadowRadius: 5,
//         }}
//         shifting= "" // this takes boolean but this works somehow
//         // onTabChange={newTabIndex => alert(`New Tab at position ${newTabIndex}`)}
//         >
//         <Tab
//           label="Search"
//           icon={<Icon size={24} color="#9E9E9E" name="search" />}
//           activeIcon={<Icon size={24} color="#2D9CDB" name="search" />}
//           activeLabelColor="#2D9CDB"
//         />
//         <Tab
//           label="Bookmark"
//           icon={<Icon size={24} color="#9E9E9E" name="bookmark" />}
//           activeIcon={<Icon size={24} color="#2D9CDB" name="bookmark" />}
//           activeLabelColor="#2D9CDB"
//         />
//         <Tab
//           label="History"
//           icon={<Icon size={24} color="#9E9E9E" name="history" />}
//           activeIcon={<Icon size={24} color="#2D9CDB" name="history" />}
//           activeLabelColor="#2D9CDB"
//         />
//         <Tab
//           label="Messages"
//           icon={<Icon size={24} color="#9E9E9E" name="chat" />}
//           activeIcon={<Icon size={24} color="#2D9CDB" name="chat" />}
//           activeLabelColor="#2D9CDB"
//         />
//         <Tab
//           label="Profile"
//           icon={<Icon size={24} color="#9E9E9E" name="person" />}
//           activeIcon={<Icon size={24} color="#2D9CDB" name="person" />}
//           activeLabelColor="#2D9CDB"
//         />
//       </BottomNavigation>
//
//
//     );
//   }
// }





export default TabNavigator({
  Home: { screen: HomeScreen },
  Bookmark: { screen: BookmarkScreen },
  History: { screen: HistoryScreen },
  Messages: { screen: MessagesScreen },
  Profile: { screen: ProfileScreen }
})




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
