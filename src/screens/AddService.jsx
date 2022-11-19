import React, { useContext, useEffect, useState } from 'react';
import { Text, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { stylesG } from '../themes/globalTheme';
import { InfoContext } from '../context/InfoContext';
import { Image } from 'react-native';

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
    <KeyboardAwareScrollView>
      <SafeAreaView style={stylesG.container}>
        <Image style={{ width: '85%', height: 160, marginTop: 0 }} source={require('../../assets/cuatro.png')} />
        <Text style={stylesG.titleScreen}>INGRESA TUS DATOS</Text>
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
          keyboardType="numeric"

        />

        <TextInput
          style={stylesG.input}
          placeholder="Dirección"
          onChangeText={text => setInfoUser({ ...infoUser, direccion: text })}
          value={infoUser?.direccion}
        />



        <TouchableOpacity
          activeOpacity={0.5}
          style={{ ...stylesG.btn, marginTop: 10 }}
          onPress={handleNext}
        >
          <Text style={stylesG.textBtn}>Continuar</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}