import React, { useContext } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { InfoContext } from '../context/InfoContext';
import { stylesG } from '../themes/globalTheme';

export const HelpYouScreen = () => {

  const { infoService, setInfoService } = useContext(InfoContext);
  const navigation = useNavigation();


  const handleImagen = () => {
    setInfoService({ ...infoService, tipo: 'Calidad de imagen' });
    navigation.navigate("SelectPritingScreen");
  }

  const handleSoporteTecnico = () => {
    setInfoService({ ...infoService, tipo: 'Necesito Soporte Técnico' });
    navigation.navigate("SelectPritingScreen");

  }

  const handleToner = () => {
    setInfoService({ ...infoService, tipo: 'Necesito Tóner' });
    navigation.navigate("SelectPritingScreen");
  }

  const handleConfiguraciones = () => {
    setInfoService({ ...infoService, tipo: 'Necesito Configuraciones' });
    navigation.navigate("SelectPritingScreen");
  }

  return (
    <SafeAreaView style={stylesG.container}>
      <Text>Como podemos ayudarte hoy</Text>

      <TouchableOpacity
        activeOpacity={0.5}
        style={{ ...stylesG.btn, marginTop: 15 }}
        onPress={handleImagen}
      >
        <Text style={stylesG.textBtn}>CALIDAD DE IMÁGEN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={{ ...stylesG.btn, marginTop: 15 }}
        onPress={handleSoporteTecnico}
      >
        <Text style={stylesG.textBtn}>SOPORTE TECNICO</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={{ ...stylesG.btn, marginTop: 15 }}
        onPress={handleToner}
      >
        <Text style={stylesG.textBtn}>NECESITO TÓNER</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={{ ...stylesG.btn, marginTop: 15 }}
        onPress={handleConfiguraciones}
      >
        <Text style={stylesG.textBtn}>CONFIGURACIONES</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
