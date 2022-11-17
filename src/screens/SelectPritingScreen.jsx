import React, { useContext, useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import firebaseDB from '../config/fb';
import { InfoContext } from '../context/InfoContext';
import { stylesG } from '../themes/globalTheme';
import { useNavigation } from '@react-navigation/native';

export const SelectPritingScreen = () => {

  const [loading, setLoading] = useState(false);
  const { infoService, setInfoService } = useContext(InfoContext);
  const navigation = useNavigation();

  console.log('desde', infoService);

  const handleSubmit = async () => {
    const { area, equipo } = infoService;
    if ([area, equipo].includes('')) {
      console.log('Todos los campos son obligatorios');
      return
    }

    try {
      setLoading(true);
      await addDoc(collection(firebaseDB, 'services'), infoService);
      setLoading(false);
      navigation.navigate("HomeScreen");
    } catch (e) {
      console.log(e);
    }

  }

  if (loading) {
    return (
      <View style={{ ...stylesG.container, justifyContent: 'center' }}>
        <ActivityIndicator size={40} />
        <Text>Cargando ...</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={stylesG.container}>
      <Text>SelectPritingScreen</Text>

      <View>

        <TextInput
          style={stylesG.input}
          placeholder="Area"
          onChangeText={text => setInfoService({ ...infoService, area: text })}
        />

        <TextInput
          style={stylesG.input}
          placeholder="Equipo"
          onChangeText={text => setInfoService({ ...infoService, equipo: text })}
        />

        <TouchableOpacity
          activeOpacity={0.5}
          style={{ ...stylesG.btn, marginTop: 15 }}
          onPress={handleSubmit}
        >
          <Text style={stylesG.textBtn}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}