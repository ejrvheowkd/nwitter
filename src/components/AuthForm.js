import { authService } from "fBase";
import React, { useState } from "react";

const AuthForm =() =>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [newAccount,setNewAccount] = useState(true);
    const [error,setError] = useState("");
    const onChange = (event) =>{
        const {target:{name,value}} =event;
        if(name==="email")
        {   
            setEmail(value);
        }
        else if(name==="password")
        {
            setPassword(value);
        }
    };
    const onSubmit=async(event)=>{
        let data;
        event.preventDefault();//새로고침을 막고 event 사용 안하면 사라짐 정보
        try{
        if(newAccount){
             data =await authService.createUserWithEmailAndPassword(email,password);
        } else {
             data = await authService.signInWithEmailAndPassword(email,password);    
        }
        } catch(error){
        setError(error.message);
        }
    };
    const toggleAccount = () => setNewAccount((prev)=>!prev);

return (
    <>
    <form onSubmit={onSubmit} className="container">
            <input name ="email" type="email" placeholder="email" required value={email} onChange={onChange} className="authInput"/>
            <input name = "password" type="password" placeholder="Possword" required value={password} onChange={onChange} className="authInput"/>
            <input type="submit"  className="authInput authSubmit" value={newAccount?"Create Account":"Log In"}/>
            {error && <span className="authError">{error}</span>}
        </form>
        <span onClick={toggleAccount} className="authSwitch">
            {newAccount?"Sign In":"Create Account"}</span>
        </>
);
}

export default AuthForm;