import { createStore,applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import rootReducer from '../Reducer/Index'

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['score']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, (applyMiddleware(thunk)))
export const persistor = persistStore(store)
