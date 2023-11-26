import { ReactNode } from "react";
import './index.css'

type FlexContainerProps = {
  backgroundColor?: string,
  children: ReactNode,
  direction?: string,
  justifyContent?: string,
  alignItems?: string,
  style?: Record<string,string>,
}

const FlexContainer = (props: FlexContainerProps) => {
  const { backgroundColor, children, direction = 'row', justifyContent = 'center', alignItems = 'center', style = {} } = props

  const containerStyle = {
    backgroundColor: backgroundColor,
    flexDirection: direction,
    justifyContent: justifyContent,
    alignItems: alignItems,
    padding: '4px',
    margin: '4px',
    gap: '12px',
    ...style,
  }

  return ( 
    <div className='container' style={containerStyle}>
      {children}
    </div>
   );
}
 
export default FlexContainer;