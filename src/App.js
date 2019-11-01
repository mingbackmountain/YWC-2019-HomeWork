import React from 'react';
import Navbar from './components/Navbar'
import Container from './components/Container'
import RegisterDate from './components/RegisterDate'
import Banner from './components/Banner'
import Date from './components/Date'
import Detail from './components/Detail'
import BottomBanner from './components/BottomBanner'
import BottomLogo from './components/BottomLogo'
import UpperFooter from './components/UpperFooter'
import BottomFooter from './components/BottomFooter'
import ConditionDetail from './components/ConditionDetail'
import GlobalStyle from './components/GlobalStyle'
import {useData} from './utils/data'

function App() {
  const data =  useData()
  if (data) {
    return(
      <div>
        <Navbar navbarItems={data.navbarItems}/>
        <Banner />
        <Container>
          <Date duration={data.duration}/>
          <RegisterDate/>
          <Detail detail={data.detail}/>
          <ConditionDetail condition={data.condition}/>
          <BottomBanner/>
          <BottomLogo/>
        </Container>
        <UpperFooter/>
        <BottomFooter/>
        <GlobalStyle/>
      </div>
    )
  }
  return(
    <div>Bye Bye YWC</div>
  )
}

export default App;
