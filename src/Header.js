// src/Header.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.text}>BURRRD</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute', // Set position to absolute
    top: 0, // Position at the top of the screen
    backgroundColor: '#F6BE4D',
    padding: 5,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%', // Take up the full width of the screen
  },
  logo: {
    top: 6,
    width: 50,
    height: 50,
    marginRight: 10,
  },
  text: {
    top: 6,
    left: -3,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Header;
