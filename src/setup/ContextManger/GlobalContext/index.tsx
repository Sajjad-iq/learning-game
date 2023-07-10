import { createContext, ReactNode } from 'react'
import winSound from '../../../assets/audio/win.mp3'
import loseSound from '../../../assets/audio/lose.mp3'

type ProviderChildrenType = {
    children: ReactNode
}

export const GlobalContext = createContext<any>({})

const GlobalContextProvider = ({ children }: ProviderChildrenType) => {

    const WinSound = () => new Audio(winSound).play()
    const LoseSound = () => new Audio(loseSound).play()

    return (
        <GlobalContext.Provider value={{ WinSound, LoseSound }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider