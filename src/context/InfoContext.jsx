import { createContext, useState } from "react";

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