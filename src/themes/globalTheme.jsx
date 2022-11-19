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
    borderColor: '#000',
    padding: 22,
    borderRadius: 25,
    marginBottom: 17,
    backgroundColor: '#F2EDED'
  },

  btn: {
    width: 300,
    height: 78,
    backgroundColor: '#68538D',
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

  logo: {
    paddingHorizontal: 100,
    height: 102,
    width: '80%'
  },

  title: {
    fontSize: 24,
    color: '#FFFDFD',
    fontWeight: 'bold',
  },

  titleScreen: {
    fontSize: 20,
    marginBottom: 20,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 5
  }

});