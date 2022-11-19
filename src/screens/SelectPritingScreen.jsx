import React, { useContext, useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { collection, addDoc } from 'firebase/firestore';
import firebaseDB from '../config/fb';
import { InfoContext } from '../context/InfoContext';
import { stylesG } from '../themes/globalTheme';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { Image } from 'react-native';
import LoaderComponent from '../components/LoaderComponent';

export const SelectPritingScreen = () => {

  const [loading, setLoading] = useState(false);
  const [areaPicker, setAreaPicker] = useState('');
  const [equipoPicker, setEquipoPicker] = useState('');
  const { infoService, setInfoService } = useContext(InfoContext);
  const navigation = useNavigation();

  const dataArea = [
    { label: 'CONTADURIA', value: 'CONTADURIA' },
    { label: 'CONTABILIDAD', value: 'CONTABILIDAD' },
    { label: 'ADMINISTRACIÓN', value: 'ADMINISTRACIÓN' },
    { label: 'OTRA', value: 'OTRA' },
  ];

  const dataEquipo = [
    { label: 'TOSHIBA 123', value: 'TOSHIBA 123' },
    { label: 'EPSON L377', value: 'EPSON L377' },
    { label: 'SAMSUNG T8', value: 'SAMSUNG T8' },
    { label: 'OTRA', value: 'OTRA' },
  ];

  const handleSubmit = async () => {
    const { area, equipo } = infoService;
    if ([area, equipo].includes('')) {
      Alert.alert('Todos los campos son obligatorios');
      return
    }

    try {
      setLoading(true);
      await addDoc(collection(firebaseDB, 'services'), infoService);
      setLoading(false);
      navigation.navigate("ServiceAprovatedComponent");
    } catch (e) {
      console.log(e);
    }

  }

  if (loading) {
    return (
      <LoaderComponent />
    )
  }

  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={stylesG.container}>
        <Image style={{ width: '80%', height: 200, marginTop: 0 }} source={require('../../assets/ocho.png')} />

        <TouchableOpacity style={{ ...stylesG.input, justifyContent: 'center', height: 70, marginTop: 20 }}>

          <Picker
            selectedValue={areaPicker}
            onValueChange={(itemValue) => {
              setAreaPicker(itemValue);
              setInfoService({ ...infoService, area: itemValue });
            }}

          >
            {dataArea.map((area, index) => <Picker.Item key={index} label={area.label} value={area.value} />)}
          </Picker>
        </TouchableOpacity>

        <TouchableOpacity style={{ ...stylesG.input, justifyContent: 'center', height: 70 }}>
          <Picker
            selectedValue={equipoPicker}
            onValueChange={(itemValue) => {
              setEquipoPicker(itemValue)
              setInfoService({ ...infoService, equipo: itemValue });
            }}
          >
            {dataEquipo.map((equipo, index) => <Picker.Item key={index} label={equipo.label} value={equipo.value} />)}

          </Picker>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          style={{ ...stylesG.btn, marginTop: 15 }}
          onPress={handleSubmit}
        >
          <Text style={stylesG.textBtn}>ENVIAR</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}