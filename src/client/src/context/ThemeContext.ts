import { useContext } from 'react';
import { Theme } from 'shared/interfaces/Theme'

type Dispatch = (theme: Theme) => void

export const ThemeStateContext = useContext<Theme | undefined>(undefined);
export const ThemeDispatchContext = useContext<Dispatch | undefined>(undefined);