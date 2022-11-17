import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { stylesS } from '../themes/serviceTheme';
import { InfoContext } from '../context/InfoContext';

export const ServiceComponent = ({ service }) => {
  // console.log('services:', services);
  const navigation = useNavigation();
  const { nombre, tipo, direccion, telefono, equipo } = service;
  const { serviceInfo, setServiceInfo } = useContext(InfoContext);


  const setData = () => {
    setServiceInfo(service);
    navigation.navigate("SpecificationsOrder")
  }

  return (
    <TouchableOpacity
      style={stylesS.container}
      onPress={setData}
    >
      <Text>Nombre Empresa : {nombre}</Text>
      <View style={stylesS.specs}>
        <Text>Tipo: {tipo}, Dirección: {direccion} , telefono: {telefono}, equipo: {equipo}</Text>
      </View>
    </TouchableOpacity>
  );
}
