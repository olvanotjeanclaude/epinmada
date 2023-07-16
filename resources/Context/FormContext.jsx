import React from "react";
import { createContext, useContext, useState } from "react";


const initValue = {
    contextErrors: [],
    setContextErrors: () => { },
};

const FormContext = createContext(initValue);

const FormContextProvider = ({ children }) => {
    const [contextErrors, setContextErrors] = useState(initValue.contextErrors);

    return <FormContext.Provider value={{
        contextErrors,
        setContextErrors,
    }}>
        {children}
    </FormContext.Provider>
}

export default FormContextProvider;

export const useFormContext = () => {
    const formContext = useContext(FormContext);

    return {
        ...formContext
    };
}