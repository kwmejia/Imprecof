import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { stylesG } from '../themes/globalTheme';

export const LoginScreen = () => {

  const [visiblePassword, setVisiblePassword] = useState(true);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={stylesG.container}>
      {/* <View style={styles.contTitle}>
        <Text style={styles.title}>INICIO SESIÓN</Text>
      </View> */}

      <View style={{ flex: 1 }}>
        <TextInput
          style={{ ...stylesG.input, marginTop: 50 }}
          placeholder="Usuario"

        />

        <View style={{ ...stylesG.input, flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 0, alignItems: 'center' }}>
          <TextInput
            style={{ height: 70, width: '90%', fontSize: 16 }}
            placeholder="Contraseña"
            secureTextEntry={visiblePassword}
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
          onPress={() => navigation.navigate("OrdersScreen")}
        >
          <Text style={stylesG.textBtn}>INGRESAR</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};

