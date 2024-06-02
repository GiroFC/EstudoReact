import React from 'react'

import { InputContainer} from './styles'
function Input({onClick, value, onChange}) {
  return (
    <InputContainer>
        <input value={value} onChange={onChange}/>
        <button onClick={onClick}>Buscar</button>
    </InputContainer>
  )
}

export default Input;