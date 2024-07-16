import React from "react";
import { useNavigate } from 'react-router-dom';

function Contact (props)
{

    const navigate = useNavigate();

    const handleHome = ()=>
    {
        navigate('/');

    }
    

    
    return(
        <div >
        <img src="https://tradepsychology.com/wp-content/uploads/2020/04/contact-us-1-min.png" style={{marginLeft:'400px'}}/>
        
        <button  onClick={handleHome} style={{padding:'5px',color:'white',background:'blue'}}>Home</button>
        
        </div>
    )
}
export default Contact