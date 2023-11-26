import { Dispatch } from "react";

import Button from "../../Global/Button";
import FlexContainer from "../../Global/FlexContainer";
import InputBox from "../../Global/InputBox";
import Text from "../../Global/Text";

interface CardBuilderProps {
  state: Record<string, string | number>,
  setState: Dispatch<Partial<Record<string, string | number>>>
}

const CardBuilder = (props: CardBuilderProps) => {
  const {state, setState} = props

  const {
      country,
      email,
      givenName,
      houseName,
      phone,
      postcode,
      stateName,
      street,
      suburb,
      surname,
  } = state

console.log('state', state);

  return ( 
    <FlexContainer backgroundColor='white' alignItems="start" direction="column">
      <h1>hCard Builder</h1>

      <div style={{ width:'95%' }}>
        <Text text='personal details' />
        <hr />
      </div>
      
      <FlexContainer justifyContent='flex-start'>
          <InputBox label='given name' type='text' value = {givenName} handleOnChange={(e) => setState({ givenName: e?.target?.value})} />
          <InputBox label='surname' type='text' value= {surname} handleOnChange={(e) => setState({ surname: e?.target?.value})} />
      </FlexContainer>

      <FlexContainer justifyContent='flex-start'>
          <InputBox label='email' type='email' value={email} handleOnChange={(e) => setState({ email: e?.target?.value})} />
          <InputBox label='phone' type='phone' value={phone} handleOnChange={(e) => setState({ phone: e?.target?.value})} />
      </FlexContainer>

      <div style={{ width:'95%' }}>
        <Text text='address' />
        <hr />
      </div>
      
      <FlexContainer justifyContent='flex-start'>
          <InputBox label='house name or #' type='text' value={houseName} handleOnChange={(e) => setState({ houseName: e?.target?.value})} />
          <InputBox label='street' type='text' value={street} handleOnChange={(e) => setState({ street: e?.target?.value})} />
      </FlexContainer>

      <FlexContainer justifyContent='flex-start'>
          <InputBox label='suburb' type='text' value={suburb} handleOnChange={(e) => setState({ suburb: e?.target?.value})} />
          <InputBox label='state' type='text' value={stateName} handleOnChange={(e) => setState({ stateName: e?.target?.value})} />
      </FlexContainer>

      <FlexContainer justifyContent='flex-start'>
          <InputBox label='postcode' type='number' value={postcode} handleOnChange={(e) => setState({ postcode: e?.target?.value})} />
          <InputBox label='country' type='text' value={country} handleOnChange={(e) => setState({ country: e?.target?.value})} />
      </FlexContainer>

      <FlexContainer justifyContent='flex-start'>
        <Button buttonText="Upload Avatar" onclick={() => console.log("upload avatar")} type='secondary' />
        <Button buttonText="Create hCard" onclick={() => console.log("create hCard")} />
      </FlexContainer>
    </FlexContainer>
   );
}
 
export default CardBuilder;