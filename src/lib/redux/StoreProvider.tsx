"use client";
import React, { useRef } from "react";
import { AppStore, persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = store;
  }
  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};

export default StoreProvider;
