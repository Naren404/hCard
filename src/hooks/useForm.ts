import useSetState from "./useSetState"

const defaultState = {
  country: '',
  email: '',
  givenName: '',
  houseName: '',
  phone: '',
  postcode: null,
  stateName: '',
  street: '',
  suburb: '',
  surname: '',
}

function useForm() {
  const [state, setState] = useSetState<typeof defaultState>(defaultState)

  return {
    state,
    callbacks: {
      setState,
    }
  }
}

export default useForm