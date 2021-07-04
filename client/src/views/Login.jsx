import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PirateService from '../services/PirateServices';
import { useHistory } from "react-router-dom";

const Login = () => {
    const pirateService = new PirateService();

    const [loginForm, setLoginForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    });

    const [isLogin, setIsLogin] = useState(true);
    const history = useHistory();

    const loginUser = async () => {
        console.log(loginForm);
        try {
            if (!!isLogin) {
                const login = await pirateService.loginUser(loginForm);
                console.log("🚀 ~ file: Login.jsx ~ line 19 ~ loginUser ~ login", login)
                history.push("/");

            } else {
               /*  const myObj = {email: loginForm.email, password: loginForm.password } */
                const register = await pirateService.registerUser(loginForm) ;
                console.log(register);
            }
            

        } catch (err) {
            return err;
        }
    }
    return (
        <div className="login-container">
            <h1>{isLogin ? 'Inicia sesión' : 'Registra tus datos'}</h1>
            <Form >
                {!isLogin && (
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="first_name" value={loginForm.username}
                            onChange={(e) => setLoginForm({ ...loginForm, [e.target.name]: e.target.value })} />
                    </Form.Group>
                )}
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="last_name" value={loginForm.username}
                    onChange={(e) => setLoginForm({ ...loginForm, [e.target.name]: e.target.value })} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email" value={loginForm.email}
                        onChange={(e) => setLoginForm({ ...loginForm, [e.target.name]: e.target.value })} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" autocomplete="off" value={loginForm.password}
                        onChange={(e) => setLoginForm({ ...loginForm, [e.target.name]: e.target.value })} />
                </Form.Group>
                <Button onClick={() =>loginUser() } variant="primary">
                    {isLogin ? 'Login' : 'Registrarse'}
                </Button>
            </Form>
            {isLogin ? (
                <p>
                    ¿Aún no tienes una cuenta?

                    <Button variant="link" onClick={() => setIsLogin(false)}>Regístrate</Button>
                </p>
            ) : (
                <p>
                    ¿Ya tienes una cuenta?
                    <Button variant="link" onClick={() => setIsLogin(true)}>Ir al Login</Button>
                </p>
            )}

        </div>
    )
}

export default Login;