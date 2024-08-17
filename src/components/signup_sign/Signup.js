import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './signup.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Signup = () => {
    const [udata,setUdata]=useState({
        fname:"",
        email:"",
        mobile:"",
        password:"",
        cpassword:""
    });
    console.log(udata);
    const adddata = (e)=>{
        const {name,value} = e.target;
        setUdata(()=>{
            return{
                ...udata,
                [name]:value
            }
        })
    };

    const senddata = async(e)=>{
        e.preventDefault();
        const {fname ,email,mobile,password,cpassword}=udata;
        if (fname === ""){
            toast.warn("fname provide ",{
                position: "top-center",
            })
        }else if(email === ""){
            toast.warn("email provide ",{
                position: "top-center",
            })
        }
        const res = await fetch("register",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname, email, mobile, password, cpassword
            })
        });
        const data = await res.json();
        //console.log(data);
        if(res.status == 422 || !data){
            //alert("no data")
            toast.warn("Invalid details",{
                position: "top-center",
            })
        }else{
            //alert("data successfully added")
            toast.success("data succesfully added",{
                position: "top-center",
            })
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
                    <h1>SignUP</h1>
                    <div className='form_data'>
                        <label htmlFor='fname'>Your Name</label>
                        <input type='text' onChange={adddata} value={udata.fname} name='fname' id='fname'/>
                    </div>
                    <div className='form_data'>
                        <label htmlFor='email'>email</label>
                        <input type='email' onChange={adddata} value={udata.email} name='email' id='email'/>
                    </div>
                    <div className='form_data'>
                        <label htmlFor='number'>Mobile</label>
                        <input type='mobile' onChange={adddata} value={udata.mobile} name='mobile'  id='mobile'/>
                    </div>
                    <div className='form_data'>
                        <label htmlFor='password'>password</label>
                        <input type='password' onChange={adddata} value={udata.password} name='password' placeholder='atleast 6 characters' id='password'/>
                    </div>
                    <div className='form_data'>
                        <label htmlFor='cpassword'>password again</label>
                        <input type='cpassword' onChange={adddata} value={udata.cpassword} name='cpassword' placeholder='atleast 6 characters' id='cpassword'/>
                    </div>
                    <button className='signin_btn' onClick={senddata} >Continue</button>
                
                    <div className='signin_info'>
                        <p>Already have an account?</p>
                        <NavLink to='/login'><p>Signin</p></NavLink>
                    </div>
                </form>
            </div>  
            <ToastContainer />
        </div>
    </section>
  )
}

export default Signup
