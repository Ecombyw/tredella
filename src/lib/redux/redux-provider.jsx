'use client'
import React from "react";
import { Persistor, store } from "./index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const ReduxProvider = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={Persistor}>{children}</PersistGate>
        </Provider>
    );
};

export default ReduxProvider;
