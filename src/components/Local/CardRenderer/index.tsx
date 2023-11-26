import FlexContainer from "../../Global/FlexContainer";
import Text from "../../Global/Text";

import userAvatar from "../../../assets/user-avatar.png"
import InfoField from "./components/InfoField";

interface CardRendererProps {
  state: Record<string, string | number>,
}

const CardRenderer = (props: CardRendererProps) => {
  const {
    state: {
      country,
      email,
      givenName,
      houseName,
      phone,
      postcode,
      stateName,
      street,
      suburb,
      surname
    }} = props

  return ( 
    <FlexContainer backgroundColor='rgb(207 214 221)' style={{ height: '100%', width: '100%' }}>
      <FlexContainer direction="column" style={{ gap: '0' }}>
        <FlexContainer style={{ margin: '0', padding: '0', gap: '0', width: '500px' , backgroundColor: '#394f63',  justifyContent: 'space-between'}}>
            <Text 
              text={`${givenName} ${surname}`}
              style={{
                color: 'white',
                margin: '6px',
              }} />

            <img src={userAvatar} width={50} height={60} style={{ margin: '6px', position: 'relative', top: '20px'}}/>
        </FlexContainer>
        
        <FlexContainer backgroundColor="white" style={{margin: '0', width: '500px', padding: '0'}}>
          <div style={{width: '100%'}}>
              <InfoField label="email" value={email} />

              <InfoField label="phone" value={phone} />

              <InfoField label="address" value={`${houseName} ${street}`} />

              <InfoField label="" value={`${suburb} ${stateName ? ',' :'' } ${stateName}`} />

              <FlexContainer style={{justifyContent: 'flex-start'}}>
                <InfoField label="postcode" value={postcode} style={{ flexBasis: '45%' }} />

                <InfoField label="country" value={country} style={{ flexBasis: '45%' }} />
              </FlexContainer>
          </div>
        </FlexContainer>
       </FlexContainer>
    </FlexContainer>
   );
}
 
export default CardRenderer;