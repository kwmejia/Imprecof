import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { stylesG } from '../themes/globalTheme';

export const HomeScreen = () => {

  const navigation = useNavigation();
  return (
    <SafeAreaView style={stylesG.container}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={stylesG.btn}
          onPress={() => navigation.navigate('AddService')}
        >
          <Text style={stylesG.textBtn}>Cliente</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          style={stylesG.btn}
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <Text style={stylesG.textBtn}>ADMINISTRACIÓN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}