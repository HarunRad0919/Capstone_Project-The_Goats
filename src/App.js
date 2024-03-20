// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './RegisterPage/RegisterPage';
import SignInPage from './SignInPage/SignInPage';
import NavBar from './Navbar';
import HomePage from './MainPage/451R-website-main/src/Home'
import AboutUs from './AboutPage/About'
import ContactUs from './ContactPage/Contact'

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contactus" element={<ContactUs />} />
            </Routes>
        </Router>
    );
}

export default App;