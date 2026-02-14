import { createContext } from "react";

export const userContext = createContext();

const Context = ({ children }) => {
 let name = "Ayo"

 
 
  return (
    <userContext.Provider value={{name}}>
      {children}
    </userContext.Provider>
  );
};

export default Context;
