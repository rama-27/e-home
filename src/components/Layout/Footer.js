import 'boxicons';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
const Footer=()=> {
    const [showTopBtn,setShowTopBtn]=useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>400){
                setShowTopBtn(true);
            }else{
                setShowTopBtn(false);
            }
        });
        
    },[]);

    function goTop(){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });
    }


  return (
    <Container fluid>
        <div className="copyright"><p>&copy; 2024 e-Home. All Rights are Reserved.</p></div>
        <div className="socials">
            <ul className='listofsocials'>
                <li>
                    <a href="https://www.linkedin.com" target='_blank' rel="noreferrer">
                    <box-icon type="logo" name="linkedin-square"></box-icon>

                    </a>
                </li>
                <li>
                    
                    <a href="https://www.meta.com" target='_blank' rel="noreferrer">
                    <box-icon type="logo" name="facebook-square"></box-icon>
                    </a>
                </li>
                <li>
                    <a href="https://www.github.com" target='_blank' rel="noreferrer">
                    <box-icon type="logo" name="github"></box-icon>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com" target='_blank' rel="noreferrer">
                    <box-icon type="logo" name="instagram"></box-icon>
                    </a>
                </li>
            </ul>
        </div>
        {
            showTopBtn &&(
                <div className="top-btn" onClick={goTop}>
                    <i className="fas fa-arrow-up"></i>
                </div>
            )
        }
    </Container>
  )
}

export default Footer