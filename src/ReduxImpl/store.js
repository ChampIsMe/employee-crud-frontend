import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {encryptTransform} from 'redux-persist-transform-encrypt';
import {generateString, getCookie, removeCookie, setCookie} from '../helpers/AppUtil.js';
import {EmployeeSlice} from './Reducers/EployeeSlice.js';

const environment = import.meta.env.VITE_APP_CURRENT_ENV
let existingpass = getCookie('storepass')
if (!existingpass) {
  let pass = generateString(24)
  removeCookie('storepass')
  setCookie('storepass', pass)
}


const persistConfig = {
  key: 'root', version: 1, storage,
  //Secure local storage
  transforms: [
    encryptTransform({
      secretKey: getCookie('storepass'),
      onError: function (error) {
        console.log({ error })
      }
    })
  ]
}
const allReducers = combineReducers({
  [EmployeeSlice.reducerPath]: EmployeeSlice.reducer
//  ...Other reducers go here
})

const persistedReducer = persistReducer(persistConfig, allReducers)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false
  }).concat(EmployeeSlice.middleware),
  devTools: environment === 'development'
})
