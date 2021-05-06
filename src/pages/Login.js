import React from 'react';
import { useParams } from 'react-router-dom';

const Login = () => {
        const { id } = useParams ();
        return(
        <h1> Ini adalah halaman {id}</h1>
    );
}
export default Login;