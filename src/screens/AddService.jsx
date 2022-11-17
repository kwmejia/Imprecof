import React, { useContext, useEffect, useState } from 'react';
import { Text, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { stylesG } from '../themes/globalTheme';
import { InfoContext } from '../context/InfoContext';

export const AddService = () => {

  const [infoUser, setInfoUser] = useState({
    nombre: '',
    telefono: '',
    direccion: '',
    equipo: '',
    tipo: '',
    area: '',
    createdAt: new Date(),
    pending: true
  });
  const navigation = useNavigation();
  const { setInfoService } = useContext(InfoContext);



  const handleNext = () => {
    const { nombre, telefono, direccion } = infoUser;

    if ([nombre, telefono, direccion].includes('')) {
      Alert.alert('Hay campos vacíos');
      return;
    }

    setInfoService(infoUser);
    navigation.navigate("HelpYouScreen");


  }

  return (
    <SafeAreaView style={stylesG.container}>
      <Text>AddService</Text>
      <TextInput
        style={stylesG.input}
        placeholder="Nombre de la empresa"
        onChangeText={text => setInfoUser({ ...infoUser, nombre: text })}
        value={infoUser?.nombre}
      />

      <TextInput
        style={stylesG.input}
        placeholder="Teléfono de contacto"
        onChangeText={text => setInfoUser({ ...infoUser, telefono: text })}
        value={infoUser?.telefono}
      />

      <TextInput
        style={stylesG.input}
        placeholder="Dirección"
        onChangeText={text => setInfoUser({ ...infoUser, direccion: text })}
        value={infoUser?.direccion}
      />



      <TouchableOpacity
        activeOpacity={0.5}
        style={stylesG.btn}
        onPress={handleNext}
      >
        <Text style={stylesG.textBtn}>Continuar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

