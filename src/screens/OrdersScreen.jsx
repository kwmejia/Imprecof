import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ServiceComponent } from '../components/ServiceComponent';
import { stylesG } from '../themes/globalTheme';
import firebaseDB from '../config/fb';

export const OrdersScreen = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices();
  }, [])

  const getServices = () => {
    const collectionRef = collection(firebaseDB, 'services');
    const qry = query(collectionRef, where('pending', '==', true), orderBy('createdAt', 'desc'));

    const data = onSnapshot(qry, querySnapshot => {
      setServices(
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          area: doc.data().area,
          direccion: doc.data().direccion,
          equipo: doc.data().equipo,
          nombre: doc.data().nombre,
          telefono: doc.data().telefono,
          tipo: doc.data().tipo,
          createdAt: doc.data().createdAt
        }))
      )
    });
  }


  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={stylesG.container}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#68538D' }}>Servicios Pendientes</Text>
        {services.map(service => <ServiceComponent key={service.id} service={service} />)}
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}
