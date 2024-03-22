import React from 'react'
import BannerImage from '../Assets/about-background-image.jpg';
import { FiArrowRight } from 'react-icons/fi';
import { Navigate, useNavigate } from 'react-router-dom';


export const Home = () => {
    const navigate = useNavigate();

    const navigateToSignIn = () => {
       navigate('/signin');
      };

  return(
    <div className='home-container'>
        <div className='home-banner-container'>
            
            <div className="home-text-section">
                <h1 className='primary-heading'>
                Budget Tracking in Easiest Form
                </h1>
                <p className='primary-text'>
                At Commence Bank, we know life’s best moments can come with financial challenges. 
                Our mission? To help people and businesses solve financial challenges 
                so they can focus on the things that matter most. For nearly 160 years, 
                we’ve provided individuals, businesses and communities with the innovative solutions and 
                personal attention they need to achieve the things that matter to them. We provide both the high-touch 
                personal service and innovative financial solutions our customers need to allow them to bank when, where 
                and how they prefer.
                </p>
                <button className='secondary-button'onClick={navigateToSignIn}>
                    Sign Up Now <FiArrowRight />
                </button>
            </div>
            <div className='home-image-container'>
                <img src={BannerImage} alt=""/>
            </div>
        </div>
    </div>
  );
}
