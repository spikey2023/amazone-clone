'use client'

import { store, persistedStore } from '@/store'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import React from 'react'

const Provider = ({children}:{children:React.ReactNode}) => {
  return (
    //Add redux store to the provider to access the store
    <ReduxProvider store = {store}>
        <PersistGate persistor={persistedStore}>
            {children}
        </PersistGate>
    </ReduxProvider>
  )
}

export default Provider