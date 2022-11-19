import React, { useContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { InfoContext } from '../context/InfoContext';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { stylesG } from '../themes/globalTheme';
import firebaseDB from '../config/fb';
import { useNavigation } from '@react-navigation/native';
import { stylesS } from '../themes/serviceTheme';
import { styles } from '../themes/SpecificationsTheme';
import LoaderComponent from '../components/LoaderComponent';

export const SpecificationsOrder = () => {

  const { serviceInfo } = useContext(InfoContext);
  const [loading, setLoading] = useState(false);
  const { nombre, area, equipo, tipo, id, direccion } = serviceInfo;
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

  if (loading) {
    return (
      <LoaderComponent />
    )
  }


  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={stylesG.container}>

        <Text style={styles.titleSection}>Cliente</Text>
        <View style={stylesG.input}>
          <Text>{nombre}</Text>
        </View>

        <Text style={styles.titleSection}>Area:</Text>
        <View style={stylesG.input}>
          <Text>{area}</Text>
        </View>

        <Text style={styles.titleSection}>Equipo: </Text>
        <View style={stylesG.input}>
          <Text>{equipo}</Text>
        </View>

        <Text style={styles.titleSection}>Especificación: </Text>
        <View style={stylesG.input}>
          <Text>{tipo}</Text>
        </View>

        <Text style={styles.titleSection}>Dirección: </Text>
        <View style={stylesG.input}>
          <Text>{direccion}</Text>
        </View>


        <TouchableOpacity
          style={{ ...stylesG.btn, marginTop: 10 }}
          activeOpacity={0.5}
          onPress={handleEditCall}
        >
          <Text style={stylesG.textBtn}>SOPORTE LLAMADA</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...stylesG.btn, marginTop: 15, marginBottom: 20 }}
          activeOpacity={0.5}
          onPress={handleEditVisit}
        >
          <Text style={stylesG.textBtn}>SOPORTE VISITA</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}