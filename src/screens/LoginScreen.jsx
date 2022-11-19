import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { stylesG } from '../themes/globalTheme';
import firebaseDB from '../config/fb';
import { Image } from 'react-native';

export const LoginScreen = () => {

  const [visiblePassword, setVisiblePassword] = useState(true);
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleSubmit = async () => {

    if ([user, password].includes('')) {
      Alert.alert('Hay campos vacíos'); ('Credenciales incorrectas');
      return;
    }

    const collectionRef = collection(firebaseDB, 'imprecof');
    const qry = query(collectionRef, where('usuario', '==', user.trim()), where('password', '==', password.trim()));
    await onSnapshot(qry, querySnapshot => {
      setUsers(
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          user: doc.data().usuario,
          password: doc.data().password,
        }))
      )
    });

    console.log(users);
    if (!users[0]) {
      Alert.alert('Credenciales incorrectas');
      return;
    }
    setUser('');
    setPassword('');
    navigation.navigate("TopTab");
  }

  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={stylesG.container}>

        <Image source={require('../../assets/IMPRECOF.png')} style={stylesG.logo} />


        <TextInput
          style={{ ...stylesG.input, marginTop: 20 }}
          placeholder="Usuario"
          onChangeText={text => setUser(text)}
          value={user}
        />

        <View style={{ ...stylesG.input, flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 0, alignItems: 'center' }}>
          <TextInput
            style={{ height: 70, width: '90%', fontSize: 16 }}
            placeholder="Contraseña"
            secureTextEntry={visiblePassword}
            onChangeText={text => setPassword(text)}
            value={password}
          />
          <Icon
            style={{ alignSelf: 'flex-end' }}
            type="material-community"
            name={visiblePassword ? "eye-outline" : "eye-off-outline"}
            onPress={() => setVisiblePassword(!visiblePassword)}
          />
        </View>


        <TouchableOpacity
          style={stylesG.btn}
          activeOpacity={0.7}
          onPress={handleSubmit}
        >
          <Text style={stylesG.textBtn}>INGRESAR</Text>

        </TouchableOpacity>


      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

