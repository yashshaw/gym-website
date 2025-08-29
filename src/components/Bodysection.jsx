import React from 'react'
import bgVideo from '../assets/gym_design.mp4';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Bodysection = () => {
// Import your video file

const toggleText = ["Lifters", "Gainers", "Builders", "Transformers"];
const myColor = ["text-red-500", "text-orange-500", "text-green-500", "text-yellow-500", "text-black"];
const [index, setIndex] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % toggleText.length);
        }, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
    }, []);

return (
    <>
        <div className="hero min-h-screen" style={{ minHeight: '84vh', position: 'relative', overflow: 'hidden' }}>
            <div className="hero-overlay" style={{ position: 'absolute', width: '100%', height: '98%', zIndex: 1 }}>
                <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    disabledpictureinpicture: true,
                    width: '100%',
                    height: '100%',
                    // objectFit: 'fill',
                    left: 0,
                    top: 0,
                    zIndex: 0,
                }}
                src={bgVideo}
            />
                <div className="max-w-md" style={{ position: 'absolute', top: '20%', left: '10%'}}>
                    <h1 className="mb-5 text-5xl font-bold">Hi {<span className={`mb-5 text-5xl font-bold ${myColor[index]}`}>{toggleText[index]}</span>}</h1> 
                    <p className="mb-5">
                        Unlock your potential in the new era of fitness.
                    </p>
                    <Link to='/program' target='_blank' className="btn btn-soft btn-primary border-red-400">Get Started</Link>
                    <Link to='/about' target='_blank' className="btn btn-outline btn-secondary border-white m-5">Watch Reviews</Link>
                </div>
            </div>

        </div>
    </>
)
}

export default Bodysection