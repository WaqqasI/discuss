import React, { FunctionComponent, useState } from 'react';
import { ThemeStateContext, ThemeDispatchContext} from "../../context/ThemeContext";
import { Theme } from "shared/interfaces/Theme";
import { darkTheme } from 'shared/themes/dark'

export const ThemeProvider: FunctionComponent<{}> = ({ children }) => {
    const [state, dispatch] = useState<Theme>(darkTheme)
    return (
        <>
            <ThemeStateContext.Provider value={state}>
                <ThemeDispatchContext.Provider value={dispatch}>
                    {children}
                </ThemeDispatchContext.Provider>
            </ThemeStateContext.Provider>
        </>
     )
}