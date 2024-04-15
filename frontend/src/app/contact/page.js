"use client"
import React, { useEffect, useState } from 'react'
import "@/css/contact.css"
import Link from 'next/link';
import { TiContacts } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";





function ContactPage() {
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[message,setMessage] = useState('');
    const[formSubmitBool,setFormSubmitBool] = useState(false);
    const[nameError,setNameError] = useState(false);
    const[emailError,setEmailError] = useState(false);
    const[messageError,setMessageError] = useState(false);
    const[formSuccess,setFormSuccess] = useState(false);
    
    const[successMessage,setSuccessMessage] = useState('');
    const[errorMessage,setErrorMessage] = useState('');
    const[isLoading,setIsLoading] = useState(false);
    

    useEffect(()=>{
        setErrorMessage('');
        setSuccessMessage('');
        if(name.length > 1&&email.length > 1&&message.length > 1){
            setFormSuccess(true);
        }else{
            setFormSuccess(false);
        }
        if(formSubmitBool){
            console.log('run')
            if(name.length <2){
                setNameError(true);
            }else{
            
                setNameError(false);
            }

            if(email.length <4){
                setEmailError(true);
            }else{
                setEmailError(false);
            }

            if(message.length < 3){
                setMessageError(true);
            }else{
                setMessageError(false);
            }
    

        }
        return ()=>{
            setFormSubmitBool(false);

        }
        

    },[name,message,email,formSubmitBool])

    console.log(formSubmitBool)


    async function ContactFormHandler(event){
        setFormSubmitBool(true);
        event.preventDefault();
        if(formSuccess){
            setIsLoading(true);
            const payload = JSON.stringify({name:name,email:email,message:message});
            try{
                const response = await fetch("http://34.201.110.19/api/user",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:payload,
                });
                const result = await response.json();
                if(result?.status){
                    setIsLoading(false);
                    setSuccessMessage(result?.message);
                }
            }catch(err){
                setIsLoading(false);
                setErrorMessage(err.message);
            }

        }
    
    
    }
  return (
    <div className='contact-parent-main-wrapper'>
    <div className='contact-main-wrapper'>

        {/*  */}
        
        <div className='contact-parent-detail-wrapper'>
            <h1>
                Connect With Me
            </h1>
            <div className='contact-map-section'>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28255.156832353616!2d85.27934334977893!3d27.7205402577202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb189021984781%3A0xc02431dabe5b419d!2sSwayambhu%20Buddha%20Park%20-%20Ring%20Road!5e0!3m2!1sen!2snp!4v1713081135854!5m2!1sen!2snp" width="100%" height="200" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='contact-detail-container-wrapper'>
                <div className='contact-detail-email-and-number-container'>
                    <div>
                        <div>
                            <FaPhoneAlt className='contact-icons' />
                        </div>
                        <div>
                            <p>Phone</p>
                            <p>+977-9813694977</p>
                        </div>
                    </div>
                    <div>
                        <div>
                             <MdOutlineEmail className='contact-icons' />
                        </div>
                        <div>
                            <p>Email</p>
                            <p>tseringlama9813694977@gmail.com</p>

                        </div>
                    </div>
                </div>
                {/* ---------------------------------- */}
                <div className='contact-detail-email-and-number-container'>
                    <div>
                        <div>
                            <TiContacts className='contact-icons' />
                        </div>
                        <div>
                            <p>Address</p>
                            <p>Nepal/kathamandu/swayambhu</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='socail-medai-link-container'>
                <Link href="">
                    <FaFacebook className='social-icon' />
                </Link>
                <Link href="">
                    <FaLinkedin className='social-icon'/>
                </Link>
                <Link href="">
                    <FaInstagram className='social-icon'/>
                </Link>
          

            </div>
        </div>


        {/* ---------------------------------------------------------- */}
        <form onSubmit={ContactFormHandler} className='contact-form-container'>
            {/* <h1>Contact Me</h1> */}
            {
                successMessage.length > 1&&
                <p className='successmessage'>{successMessage}</p>
            }
            <div>
                <div>
                 <label htmlFor="">Name</label>
                    <input type="text" placeholder='enter a name' onChange={(e)=>setName(e.target.value)}/>
                     {
                         nameError&&
                         <p className='error'>Name is required field!</p>
                     }
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='enter a email' onChange={(e)=>setEmail(e.target.value)}/>
                    {
                         emailError&&
                         <p className='error'>Email is required field!</p>
                     }
                </div>
            </div>
            <div className='contact-message-container'>
                <label>Message</label>
                <textarea placeholder='enter a message' onChange={(e)=>setMessage(e.target.value)}>
                </textarea>
                {
                         messageError&&
                         <p className='error'>Message is required field!</p>
                     }
            </div>
            <p className='error_message'>{errorMessage}</p>
            <button>{isLoading?'.....':'Send Message'}</button>
        </form>


    </div>
    </div>
  )
}

export default ContactPage