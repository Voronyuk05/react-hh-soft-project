import { ReactElement } from "react"
import './Main.scss'

export const Main: React.FC<{children: ReactElement}> = ({children}): JSX.Element => {
    return (
        <main>
            {children}
        </main>
    )
}