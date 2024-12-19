import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/screens/auth/Login'
import Splashscreen from './src/screens/auth/Splashscreen'
import SignUp from './src/screens/auth/SignUp'
import HomeList from './src/screens/home/Home'

const App = () => {
  return (
    <View>
      {/* <Splashscreen/> */}
      {/* <Login/> */}
      <SignUp/>
      {/* <HomeList/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({})