import React,{useState, useContext} from 'react'
import { Btn, Button, Container, Flexing, Icon, Input, Wrapper } from './style'
import {FozilInfo} from '../context'
import { data } from '../mock'

export const Navbar = () => {
    const [text, setText] = useState('kino')

    const [title, setTitle] = useState('')

    const [mock,setMock] = useContext(FozilInfo)


    const getSearch = (e) =>{
      const newDatas = mock.filter((value)=> value.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setMock(newDatas)
      if(e.target.value == ''){
          setMock(data)
      }
    }



    return (
        <Container>
            <Wrapper>
                <Flexing>
                    <Input onChange={getSearch} type='text' placeholder='Aria'  />
                    <Btn><Icon/></Btn>
                </Flexing>
            </Wrapper>
            <Wrapper ramka>
                <Button style={{background: text == 'kino' && '#FFFFFF'}} onClick={()=> setText('kino')}>Kino</Button>
                <Button style={{background: text == 'cartoon' && '#FFFFFF'}} onClick={()=> setText('cartoon')}>Cartoon</Button>
                <Button style={{background: text == 'movies' && '#FFFFFF'}} onClick={()=> setText('movies')}>Movies</Button>
                <Button style={{background: text == 'komedy' && '#FFFFFF'}} onClick={()=> setText('komedy')}>Komedy</Button>
            </Wrapper>
        </Container>
    )
}


export default Navbar
