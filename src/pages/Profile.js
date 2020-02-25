import React from 'react'
import { useParams, useNavigate, Outlet } from 'react-router-dom'

export default function Profile() {
    // const { id } = useParams() 
    const navigate = useNavigate()
    return (
        <>
            <div>
                {/* profile : {id} */}
                Perfil fo usuário
            <button onClick={() => navigate('/')}>Voltar para o dashboard</button>
            </div>
            <Outlet />
        </>
    )
}
