const BUTTON_TYPES = {
  primary: { background: '#3fa9e2' },
  secondary: { background: '#758e9d' },
}

interface ButtonProps {
  buttonText: string,
  type?: string,
  onclick: () => void,
}

const Button = (props: ButtonProps) => {
  const {buttonText, type = 'primary', onclick} = props
  
  const buttonStyle = {
    background: type ? BUTTON_TYPES[type].background : ''
  }

  return ( 
    <button onClick={onclick} style={buttonStyle}>
      {buttonText}
    </button>
   );
}
 
export default Button;