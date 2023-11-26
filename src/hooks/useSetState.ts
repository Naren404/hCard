import { Dispatch, useReducer } from "react"

function useSetState<State>(initState: State): [State, Dispatch<Partial<State>>]{
  const reducerFn = (state: State, newState: Partial<State>) => ({...state, ...newState })

  const [state, setState] = useReducer(reducerFn, initState)

  return [state, setState]
}

export default useSetState