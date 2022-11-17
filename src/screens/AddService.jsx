import React, { useContext, useState } from 'react';
import { Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
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


  const handleNext = async () => {
    const { nombre, telefono, direccion } = infoUser;

    if ([nombre, telefono, direccion].includes('')) {
      console.log('Hay campos vacíos');
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
      />

      <TextInput
        style={stylesG.input}
        placeholder="Teléfono de contacto"
        onChangeText={text => setInfoUser({ ...infoUser, telefono: text })}
      />

      <TextInput
        style={stylesG.input}
        placeholder="Dirección"
        onChangeText={text => setInfoUser({ ...infoUser, direccion: text })}
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

