import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const App = () => {
  const [img, setImg] = useState(''); // Initial empty state for the image URL.

  const getCat = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      console.log(data); // Debug: Check what is returned from the API.
      setImg(data[0].url); // Set the image URL from the API response.
    } catch (error) {
      console.error('Error fetching the cat image:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Cliquer ici pour avoir un chat</Text>
      <Image source={{ uri: img }} style={styles.img} />
      <Button onPress={getCat} title="Nouveau Chat" color="#f00" />
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '80%',
    height: '60%',
    marginBottom: '5%',
    marginTop: '5%',
  },
});

export default App;