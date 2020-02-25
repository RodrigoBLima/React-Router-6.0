
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
    return (
        <>
            <div>

                <h1>Página inicial</h1>
                <Link to="login" >Login</Link>
                <Link to="register" >Cadastro</Link>

            </div>
            <Outlet />
        </>
    )
}
