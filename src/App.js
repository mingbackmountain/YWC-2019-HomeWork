import React from 'react';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import {useData} from './utils/data'

function App() {
  const data = useData()

    return(
      <div>
        {/* <Navbar /> */}
        <Banner />
      </div>
    )
}

export default App;
