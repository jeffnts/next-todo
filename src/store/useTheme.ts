import produce from 'immer'
import { create } from 'zustand'


type Props = {
    state: {
        theme: 'dark' | 'light'
    },
    actions: {
        setTheme: () => void
    }
}

export const useTheme = create<Props>(
    set => ({
        state: {
            theme: 'dark'
        },
        actions: {
            setTheme() {
                set(state => ({
                    ...produce(state, draft => {
                        if(state.state.theme === 'dark'){
                            draft.state.theme = 'light'
                        }else {
                            draft.state.theme = 'dark'
                        }
                    })
                }))
            },
        }
    })
)