import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, Animated } from 'react-native';
import { stylesG } from '../themes/globalTheme';

export const ServiceAprovatedComponent = () => {

  const [fadeIn, setFadeIn] = useState(new Animated.Value(0))
  const navigation = useNavigation();
  useEffect(() => {
    Animated.timing(
      fadeIn,
      {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true
      }
    ).start();
    redirect();
  }, []);


  const redirect = () => {
    setTimeout(() => {
      navigation.navigate('HomeScreen')
    }, 4000);
  }

  return (
    <View style={{ ...stylesG.container, justifyContent: 'center', alignItems: 'center' }}>

      <Animated.View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20, opacity: fadeIn }}>
        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Recibimos tu </Text>
        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>orden</Text>
      </Animated.View>
      <Animated.Image style={{ width: '70%', height: 220, opacity: fadeIn }} source={require('../../assets/aprobado.png')} />
      <Animated.View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, opacity: fadeIn }}>
        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Pronto nos</Text>
        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>comunicaremos</Text>
        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>contigo</Text>
      </Animated.View>
    </View>
  );
}
