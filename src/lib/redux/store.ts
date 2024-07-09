import { configureStore } from "@reduxjs/toolkit"
import { RootReducer } from '../redux/rootReducer';
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

const configPersist = {
    key: "movie search",
    storage,
    whitelist: ['']
}
const persistedReducer = persistReducer(configPersist, RootReducer)

export const makeStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    })
};

const store = makeStore()
const persistor = persistStore(store)

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export { store, persistor };