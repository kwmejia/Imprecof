import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { stylesS } from '../themes/serviceTheme';
import { InfoContext } from '../context/InfoContext';

export const ServiceComponent = ({ service }) => {
  // console.log('services:', services);
  const navigation = useNavigation();
  const { nombre, tipo, direccion, telefono, equipo, createdAt } = service;
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
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontWeight: 'bold', color: "#666262" }}>Nombre Cliente </Text>
        <Text style={{ fontWeight: 'bold', marginRight: 20, color: "#666262" }}>{nombre}</Text>
      </View>

      <View style={stylesS.specs}>
        <Text style={{ color: "#666262", fontWeight: '600' }}>Especificaciones:   <Text style={{ fontWeight: '400' }}>{tipo}</Text> </Text>
        <Text style={{ color: "#666262", fontWeight: '600' }}>Dirección:   <Text style={{ fontWeight: '400' }}>{direccion}</Text> </Text>
        <Text style={{ color: "#666262", fontWeight: '600' }}>Teléfono:   <Text style={{ fontWeight: '400' }}>{telefono}</Text> </Text>
        <Text style={{ color: "#666262", fontWeight: '600' }}>Equipo:   <Text style={{ fontWeight: '400' }}>{equipo}</Text> </Text>
      </View>
    </TouchableOpacity>
  );
}
