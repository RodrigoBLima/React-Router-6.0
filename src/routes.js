import React from 'react';
import {
    Routes,
    Route
} from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Login from './pages/Login'

export default function MainRoutes() {
    return (
        <Routes>

            <Route path="/" element={<Dashboard />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
            {/* <Route path="/profile/:id" element={<Profile />} > */}
            <Route path="/profile/" element={<Profile />} >
                <Route path="/newprodut" element={<h1>Cadastrar produto</h1>} />
                <Route path="changepassword" element={<h1>Trocar senha</h1>} />
            </Route >


            <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
    )
}