interface TextProps {
  text: string,
  style?: Record<string, string>,
}

const Text = (props: TextProps) => {
  const {text, style = {}} = props
  
  const textStyle = {
    textTransform: 'uppercase',
    fontWeight: '600',
    color: '#788694',
    margin: 0,
    ...style
  }

  return ( 
    <div style={textStyle}>{text}</div>
   );
}
 
export default Text;