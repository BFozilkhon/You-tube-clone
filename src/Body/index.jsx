import React, {useContext} from 'react'
import { FozilInfo } from '../context'
import { Card, Container, Img, Title } from './style'
export const Body = () => {

    const [mock, setMock] = useContext(FozilInfo)

    return (
        <Container>
            {
                mock.map((value)=>{
                    return(
                        <Card>
                             <Img src={value.url} />
                             <Title>{value.name}</Title>
                             <Title>{value.view}k views</Title>
                        </Card>
                    )
                })
            }
        </Container>
    )
}


export default Body
