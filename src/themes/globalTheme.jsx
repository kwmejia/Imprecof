import { StyleSheet, StatusBar } from "react-native";

export const stylesG = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    marginTop: StatusBar.currentHeight
  },

  input: {
    width: 350,
    // height: 65,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#111111',
    padding: 22,
    borderRadius: 25,
    marginBottom: 17,
  },

  btn: {
    width: 300,
    height: 78,
    backgroundColor: '#3730A3',
    padding: 25,
    borderRadius: 25,
    marginTop: 50,
    alignSelf: 'center'
  },

  textBtn: {
    textAlign: 'center',
    fontSize: 24,
    color: '#FFF'
  },

});