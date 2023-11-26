import './index.css'

type InputBoxProps = {
  value: string | number,
  handleOnChange: React.ChangeEventHandler<HTMLInputElement>,
  label?: string,
  type?: string,
  required?: boolean,
}

const InputBox = (props: InputBoxProps) => {
  const {label, type = 'text', value, handleOnChange, required = false} = props

  return ( 
    <label className='label'>
      {label}
      <input className='input-box' type={type} value= {value} onChange= {handleOnChange} required = {required} />
    </label>
   );
}
 
export default InputBox;