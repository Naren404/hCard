import FlexContainer from "../../../../Global/FlexContainer";
import Text from "../../../../Global/Text";

interface InfoFieldProps {
  label: string,
  value: string | number,
  style?: Record<string,string>,
}

const InfoField = (props: InfoFieldProps) => {
  const { label, value, style = {} } = props

  return ( 
    <FlexContainer 
      style={{ 
        justifyContent: 'flex-start', 
        alignItems: 'flex-end', 
        borderBottom: '1px solid grey',
        gap: '0',
        height: '20px',
        ...style
      }}>
      <Text 
        text={label}
        style={{ width: '90px' }}
      />

      <div style={{marginLeft: '4px'}}>{value}</div>
    </FlexContainer>
   );
}
 
export default InfoField;