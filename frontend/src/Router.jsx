import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Important páginas y componentes
import Redireccion from './Components/Redireccion/Redireccion';
import Auth from './Pages/Auth/Auth';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Inicio from './Pages/Home/Inicio';
import Admin from './Pages/Admin/Admin';
import Global from './Pages/Global/Global';
import PlayGlobal from './Pages/Play/PlayGlobal';
import Estadisticas from './Pages/Estadisticas/Estadisticas';

export default function Router() {
    return (

        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Redireccion />}></Route>
                    <Route path='/auth' element={<Auth />}>
                        <Route path='/auth/login' element={<Login />} />
                        <Route path='/auth/register' element={<Register />} />
                    </Route>
                    <Route path='/app' element={<Global />}>
                        <Route path='/app/inicio' element={<Inicio />}></Route>
                        <Route path='/app/admin' element={<Admin />}></Route>
                        <Route path='/app/play' element={<PlayGlobal />}></Route>
                        <Route path='/app/estadisticas' element={<Estadisticas />}></Route>
                    </Route>
                </Routes>

            </BrowserRouter>
        </>

    );
}
