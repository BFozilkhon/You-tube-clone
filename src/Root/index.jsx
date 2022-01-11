import React from 'react'
import Body from '../Body'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { Container, Wrapper } from './style'

export const App = () => {
  return (
    <Container>
      <Sidebar/>
      <Wrapper>
        <Navbar/>
        <Body/>
      </Wrapper>
    </Container>
  )
}


export default App