import React, { useContext, useState } from 'react'
import './signup.css'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LoginContext } from '../context/ContextProvider'
const Signin = () => {
    const [logdata,setData] = useState({
        email:"",
        password:""
    });
    console.log(logdata);
    const { account , setAccount} = useContext(LoginContext);
    const adddata = (e) =>{
        const {name,value}=e.target;
        setData(()=>{
            return{
                ...logdata,
                [name]:value
            }
        })
    };
    const senddata = async(e)=>{
        e.preventDefault();
        const { email, password} = logdata;
        const res = await fetch("/login",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,password
            })
        });
        const data = await res.json();
        console.log(data);
        if(res.status == 400 || !data){
            console.log("Invalid details");
            toast.warn("Invalid details",{
                position: "top-center",
            })
        }else{
            console.log("data valid");
            setAccount(data);
            toast.success("valid details",{
                position: "top-center",
            })
            setData({...logdata,email:"",password:""});
        }
    }

  return (
    <section>
        <div className='sign_container'>
            <div className='sign_header'>
                <img src='./amazon_logo_navbar.png' alt=''/>
            </div>
            <div className='sign_form'>
                <form method='POST'>
                    <h1>Sign_In</h1>
                    <div className='form_data'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' onChange={adddata} value={logdata.email} name='email' id='email'/>
                    </div>
                    <div className='form_data'>
                        <label htmlFor='password'>password</label>
                        <input type='password' onChange={adddata} value={logdata.password} name='password' placeholder='atleast 6 characters' id='password'/>
                    </div>
                    <button className='signin_btn' onClick={senddata}>Continue</button>
                </form>
            </div>
            <div className='create_accountinfo'>
                <p>New to Amazon?</p>
                <button><NavLink to='/register'>Create your account</NavLink></button>
            </div>
        </div>
        <ToastContainer/>
    </section>
  )
}

export default Signin
