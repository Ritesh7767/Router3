import { useState } from 'react'
import RoutingLayout from './RoutingLayout'
import Navlayout from './Navlayout'
import DataProvider from './DataProvider'
import IsAuthProvider from './IsAuthProvider'

function App() {

  return (
    <>
    <DataProvider>
      <IsAuthProvider>
        <Navlayout/>
        <RoutingLayout/>
      </IsAuthProvider>
    </DataProvider>
    </>
  )
}

export default App
