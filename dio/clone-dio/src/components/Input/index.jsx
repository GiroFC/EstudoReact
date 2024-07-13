import React from 'react'
import { Controller } from "react-hook-form"
import {
    InputContainer,
    IconContainer,
    InputText,
    ErrorText,
} from './styles'

const Input = ({ control, leftIcon, name, required, errorMensage, ...rest }) => {


    return (
        <>
        <InputContainer>
            {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
            <Controller
                name={name}
                control={control}
                rules={{required: {required}}}
                render={({ field }) => (
                    <InputText {...field} {...rest} />
                )}
            />

        </InputContainer>
        {errorMensage ? <ErrorText>{errorMensage}</ErrorText> : null}

        </>
    )
}

export { Input }
