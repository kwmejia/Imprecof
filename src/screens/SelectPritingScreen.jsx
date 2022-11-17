import React, { useContext, useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import firebaseDB from '../config/fb';
import { InfoContext } from '../context/InfoContext';
import { stylesG } from '../themes/globalTheme';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

export const SelectPritingScreen = () => {

  const [loading, setLoading] = useState(false);
  const [areaPicker, setAreaPicker] = useState('');
  const [equipoPicker, setEquipoPicker] = useState('');
  const { infoService, setInfoService } = useContext(InfoContext);
  const navigation = useNavigation();

  console.log('desde', infoService);

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
        <Picker
          style={stylesG.input}
          selectedValue={areaPicker}
          onValueChange={(itemValue) => {
            setAreaPicker(itemValue);
            setInfoService({ ...infoService, area: itemValue });
          }}
        >
          {dataArea.map((area, index) => <Picker.Item key={index} label={area.label} value={area.value} />)}
        </Picker>

        <Picker
          style={stylesG.input}
          selectedValue={equipoPicker}
          onValueChange={(itemValue) => {
            setEquipoPicker(itemValue)
            setInfoService({ ...infoService, equipo: itemValue });
          }
          }

        >
          {dataEquipo.map((equipo, index) => <Picker.Item key={index} label={equipo.label} value={equipo.value} />)}

        </Picker>

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