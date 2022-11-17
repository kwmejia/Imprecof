import { createContext, useEffect, useState } from "react";;
import AsyncStorage from '@react-native-async-storage/async-storage';


export const InfoContext = createContext();

export const InfoProvider = ({ children }) => {

  const [infoService, setInfoService] = useState({
    nombre: '',
    telefono: '',
    direccion: '',
    equipo: '',
    tipo: '',
    area: '',
    createdAt: new Date(),
    pending: true
  });

  const [serviceInfo, setServiceInfo] = useState({});



  return (
    <InfoContext.Provider
      value={{
        infoService,
        setInfoService,
        setServiceInfo,
        serviceInfo
      }}
    >
      {children}
    </InfoContext.Provider>
  )
}