import React, { createContext, useState, useContext } from "react";
const AppContext = createContext();

export function ApplicationProvider({ children }) {
  const [token, setToken] = useState();
  const [nameUser, setNameUser] = useState();
  const [nBilhete, setBilhete] = useState();
  const [tipoConta, setTipoConta] = useState();
  const [idUser, setIdUser] = useState();
  const [idTaxista, setIdTaxista] = useState();

  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
        nameUser,
        setNameUser,
        idUser,
        setIdUser,
        idTaxista, 
        setIdTaxista,
        nBilhete,
        setBilhete,
        tipoConta,
        setTipoConta
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApplication() {
  const context = useContext(AppContext);
  return context;
}
