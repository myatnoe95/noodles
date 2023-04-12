import { createContext, ReactNode, useState } from "react";

const initialValue = {
  registerData: {} as IRegisterData,
  setRegisterData: () => {},
};

export interface IRegisterData {
  first_name: string;
  last_name: string;
  address: string;
  province: string;
  city: string;
  zip_code: string;
  age: string;
  user_name: string;
  password: string;
}

interface IRegisterContext {
  registerData: IRegisterData;
  setRegisterData: React.Dispatch<React.SetStateAction<IRegisterData>>;
}

const RegisterContext = createContext<IRegisterContext>(initialValue);

const RegisterProvider = ({ children }: { children: ReactNode }) => {
  const [registerData, setRegisterData] = useState<IRegisterData>({});

  return (
    <RegisterContext.Provider
      value={{
        registerData,
        setRegisterData,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export { RegisterContext, RegisterProvider };
