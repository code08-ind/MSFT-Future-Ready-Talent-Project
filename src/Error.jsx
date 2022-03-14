import React, { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';

const Error = () => {
    document.title = "Error! Cocktail Not Found";
    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    }, []);
    return (
        <>
            <>
                <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h1 className="text-center mt-5 mains" data-aos="flip-up">
                        Error! The Cocktail You Entered Cannot Be Found Out! Enter The Correct Nam
                    </h1>
                    <Link to="/" className="text-center mt-5" style={{ textAlign: 'center', color: "red", fontWeight: "bold", textDecoration: "none" }}>Go To Home Page</Link>
                </div>
            </>
        </>
    );
}

export default Error;
