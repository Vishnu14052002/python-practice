import React, { use, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [loginClick, setLoginClick] = useState(false);
    const [registerClick, setRegisterClick] = useState(false);
    const [loginUserName, setLoginUserName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [registerUserName, setRegisterUserName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginState, setLoginState] = useState(false);
    const [userToken, setUserToken] = useState('')
    console.log(loginState)

    async function handleLogin(e){
        e.preventDefault();

        try{
            const res = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "email" : loginUserName,
                    "password" : loginPassword
                }),
            })

            const data = await res.json();
            setUserToken(data.token)
            localStorage.setItem('token', data.token);
            console.log(data)
            if(data.message == 'login successfull'){
                navigate('/tasks');
                setLoginState(true);
            }


        }
        catch(err){
            console.log(err)
        }
    }

    function handleRegister(e){
        e.preventDefault();
    }

    return (
        <div>
            <h1>to do app</h1>
            <button onClick={() => {setLoginClick(true),setRegisterClick(false)}}>login</button>
            <button onClick={() => {setLoginClick(false),setRegisterClick(true)}}>register</button>
            <br></br><br></br>
            {loginClick && (
                <form>
                    <input onChange={(e) => setLoginUserName(e.target.value)} placeholder='enter email'></input><br></br><br></br>
                    <input onChange={(e) => setLoginPassword(e.target.value)} type='password' placeholder='enter password'></input><br></br><br></br>
                    <button onClick={handleLogin}>login</button>
                </form>
            )}
            {registerClick && (
                <form>
                    <input onChange={(e) => setRegisterUserName(e.target.value)} placeholder='enter name'></input><br></br><br></br>
                    <input onChange={(e) => setRegisterEmail(e.target.value)} placeholder='enter email'></input><br></br><br></br>
                    <input onChange={(e) => setRegisterPassword(e.target.value)} placeholder='enter password'></input><br></br><br></br>
                    <button onClick={handleRegister}>register</button>
                </form>
            )}
            
        </div>
    )
}

export default Home
