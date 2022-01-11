import React,{createContext,  useState} from 'react'
import { data } from './mock'

export const FozilInfo = createContext()


export const CONTEXT = ({children}) => {
    // const [text, setText] = useContext(OdilInfo)

    const [mock, setMock] = useState(data['kino'])


    return (
        <FozilInfo.Provider value={[mock, setMock]}>
         {children}
        </FozilInfo.Provider>
    )
}

// 1context
export default CONTEXT