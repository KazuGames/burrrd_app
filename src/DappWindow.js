// DAppWindow.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import Header from './Header';
import GradientBackground from './GradientBackground';

const IconButton = ({ onPress, source }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconButton}>
      <Image source={source} style={styles.icon} />
    </TouchableOpacity>
  );
};

const DAppWindow = () => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=burrrd&vs_currencies=usd')
      .then(response => response.json())
      .then(data => {
        const priceNumber = Number(data.burrrd.usd);
        setPrice(priceNumber.toFixed(8));
      });
  }, []);

  return (
    <GradientBackground>
      <Header />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>DON'T GET STABBED</Text>
        <Text style={styles.info}>Stay tuned for our latest updates and announcements!</Text>
        {price && <Text style={styles.priceText}>1 BURRRD ≈ {price} USD</Text>}
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.burrrdlottery.com/')}>
          <Text>BURRRD LOTTERY</Text>
        </TouchableOpacity>
        <View style={styles.iconButtonsContainer}>
          <IconButton onPress={() => Linking.openURL('https://t.me/burrrd')} source={require('../assets/icon1.png')} />
          <IconButton onPress={() => Linking.openURL('https://twitter.com/BURRRD')} source={require('../assets/icon2.png')} />
          <IconButton onPress={() => Linking.openURL('https://www.coingecko.com/en/coins/burrrd')} source={require('../assets/icon3.png')} />
        </View>
        <View style={styles.textButtonsContainer}>
          <TouchableOpacity style={styles.smallButton} onPress={() => Linking.openURL('https://www.burrrd.club/buy')}>
            <Text>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton} onPress={() => Linking.openURL('https://www.burrrd.club')}>
            <Text>Website</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton} onPress={() => Linking.openURL('https://birdeye.so/token/F8qtcT3qnwQ24CHksuRrSELtm5k9ob8j64xAzj3JjsMs?chain=solana')}>
            <Text>Chart</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../assets/anim (2).gif')} // Adjust the gif path
          style={styles.gif}
        />
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start', // Aligns children along the vertical axis at the start
    alignItems: 'center',
    marginTop: 70, // Reduced margin top
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  priceText: {
    marginTop: 270,
    fontSize: 26,
    color: '#ffffff',
    fontWeight: '800',
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginTop: 48,
    alignSelf: 'center',
    borderRadius: 160,
    borderWidth: 3,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 3,  // Adjust shadow offset as needed
      height: 3, // Adjust shadow offset as needed
    },
    shadowOpacity: 0.3, // Adjust shadow opacity as needed
    shadowRadius: 5,    // Adjust shadow radius as needed
    elevation: 3,       // Adjust elevation as needed
    fontSize: 24,
    paddingVertical: 24,
    paddingHorizontal: 40,
  },
  iconButton: {
    bottom: -150,
    backgroundColor: '#FFF',
    width: 50, // Adjust size as needed
    height: 50, // Adjust size as needed
    borderRadius: 25, // Half of width and height to make the button round
    borderWidth: 3,
    borderColor: '#000',
    justifyContent: 'center', // Center the icon vertically
    alignItems: 'center', // Center the icon horizontally
    margin: 8, // Add some margin around the buttons
  },
  icon: {
    width: 20, // Adjust size as needed
    height: 20, // Adjust size as needed
    resizeMode: 'contain', // Make sure the icon fits in the button
  },
  iconButtonsContainer: {
    flexDirection: 'row', // Arrange the buttons in a row
    justifyContent: 'space-between', // Add space around the buttons
    width: '60%', // Adjust as needed
  },
  smallButton: {
    left: -50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginTop: -20, // Adjust as needed
    alignSelf: 'center',
    borderRadius: 80, // 5rem, assuming 1rem = 16
    borderWidth: 3,
    borderColor: '#000',
    margin: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1.0,
    shadowRadius: 0,
    elevation: 10,
    fontSize: 12, // 0.75rem, assuming 1rem = 16
    paddingVertical: 12, // 0.75rem, assuming 1rem = 16
    paddingHorizontal: 20, // 1.25rem, assuming 1rem = 16
  },
  textButtonsContainer: {
    flexDirection: 'row', // Arrange the buttons in a row
    justifyContent: 'space-between', // Add space around the buttons
    width: '60%', // Adjust as needed
  },
  gif: {
    top: -950, // Adjusted the top property
    left: 15,
    width: 800, // Adjust the width of the gif
    height: 800, // Adjust the height of the gif
    resizeMode: 'contain', // Make sure your gif fits in the specified dimensions
  },
  info: {
    bottom: -570,
    color: 'white',
  },
});

export default DAppWindow;
