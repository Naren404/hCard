import './App.css'

import Grid from './components/Global/Grid'
import CardBuilder from './components/Local/CardBuilder'
import CardRenderer from './components/Local/CardRenderer'

import useForm from "./hooks/useForm";

function App() {
  const {
    state,
    callbacks: {
       setState 
      }
  } = useForm()

  return (
    <Grid cols={2} direction='column'>
      <CardBuilder state={state} setState={setState} />
      
      <CardRenderer state={state} />
    </Grid>
  )
}

export default App
