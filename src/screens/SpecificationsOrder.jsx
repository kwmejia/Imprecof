import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, SafeAreaView } from 'react-native'
import { InfoContext } from '../context/InfoContext';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { stylesG } from '../themes/globalTheme';
import firebaseDB from '../config/fb';
import { useNavigation } from '@react-navigation/native';

export const SpecificationsOrder = () => {

  const { serviceInfo } = useContext(InfoContext);
  const { nombre, area, equipo, tipo, id } = serviceInfo;
  const navigation = useNavigation();


  const handleEditCall = () => {
    const docRef = doc(firebaseDB, 'services', id);
    updateDoc(docRef, {
      pending: false,
      typeService: 'Soporte llamada'
    });
    navigation.goBack();
  }

  const handleEditVisit = () => {
    const docRef = doc(firebaseDB, 'services', id);
    updateDoc(docRef, {
      pending: false,
      typeService: 'Soporte Visita'
    });
    navigation.goBack();

  }
  return (
    <SafeAreaView style={stylesG.container}>
      <Text>Cliente:</Text>
      <View style={stylesG.input}>
        <Text>{nombre}</Text>
      </View>

      <Text>Area:</Text>
      <View style={stylesG.input}>
        <Text>{area}</Text>
      </View>

      <Text>Equipo: </Text>
      <View style={stylesG.input}>
        <Text>{equipo}</Text>
      </View>

      <View style={stylesG.input}>
        <Text>{tipo}</Text>
      </View>


      <TouchableOpacity
        style={stylesG.btn}
        activeOpacity={0.5}
        onPress={handleEditCall}
      >
        <Text style={stylesG.textBtn}>SOPORTE LLAMADA</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ ...stylesG.btn, marginTop: 15 }}
        activeOpacity={0.5}
        onPress={handleEditVisit}
      >
        <Text style={stylesG.textBtn}>SOPORTE VISITA</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}