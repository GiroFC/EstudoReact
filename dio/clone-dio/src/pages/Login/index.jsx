import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'

 const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <Button>Teste 1</Button>
            <Link to='/'>Para a home</Link>
        </>
    )
}

export default Login