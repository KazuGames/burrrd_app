// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Header from './src/Header';
import GradientBackground from './src/GradientBackground';
import DappWindow from './src/DappWindow';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DappWindow" component={DappWindow} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const handleButtonPress = () => {
    // Navigate to DappWindow when button is pressed
    navigation.navigate('DappWindow');
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.upperTitleText}>BURRRD</Text>
          <View style={styles.imageContainer}>
            <Text style={styles.lowerTitleText}>DApp</Text>
            <Image
              source={require('./assets/Burd-title-image.png')}
              style={styles.image}
            />
          </View>
        </View>
        <Header />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleButtonPress}>
          <Image
            source={require('./assets/burrrd-start.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <View style={styles.bottomImageContainer}>
          <Image
            source={require('./assets/test.png')}
            style={styles.bottomImage}
          />
        </View>
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 200,
    marginTop: -270,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 80,
  },
  image: {
    width: 120,
    height: 120,
  },
  upperTitleText: {
    bottom: -40,
    fontSize: 54,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  lowerTitleText: {
    left: 15,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  buttonContainer: {
    marginTop: -130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    width: 300,
    height: 300,
  },
  bottomImageContainer: {
    position: 'absolute',
    bottom: 0,
  },
  bottomImage: {
    width: 300,
    height: 150,
    resizeMode: 'cover',
  },
});

export default App;
