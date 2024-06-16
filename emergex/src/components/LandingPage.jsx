eimport React, { useRef, useEffect } from 'react';
import gsap from "gsap";
import './LandingPage.css';
import Navbar from './Navbar';
import { isMobile } from 'react-device-detect';
import { useGSAP } from '@gsap/react';

export default function LandingPage() {
    const titleRef = useRef(null);
    const homeContainer = useRef(null)
    useGSAP(() => {
        const titleElement = titleRef.current;

        gsap.to(titleElement.children, {
            y: -40,
            stagger: 0.05,
            delay: 2.8,
            duration: 0.5,
            ease: "back.out",
        });
        gsap.to(".landing-description", {
            y: 0,
            opacity: 1,
            delay: 4,
            duration: 1,
            ease: "back.out",
            onComplete: () => {
                console.log("Description animation completed");
            }
        });

        if (isMobile) {
            console.log("mobile detected");
        } else {
            gsap.fromTo(".land-title", {
                opacity: 1,
                y: 0,
            }, {
                y: 150,
                opacity: 0,
                scrollTrigger: {
                    trigger: ".landing",
                    start: "bottom bottom",
                    end: "bottom top",
                    scrub: true,
                }
            });
            const tl = gsap.timeline();
            tl.fromTo(".landing-description", {
                opacity: 1,
                y: 0,
            }, {
                y: 150,
                opacity: 0,
                scrollTrigger: {
                    trigger: ".landing",
                    start: "bottom bottom",
                    end: "bottom top",
                    scrub: true,
                }
            });

        }
    },{scope: homeContainer});

    return (
        <div className='mainpage' id='home' ref={homeContainer}>
            <div className='landing'>

                <h1 ref={titleRef} className='land-title'>
                    {Array.from("Xinnovate").map((letter, index) => (
                        <div key={index} className="letter">{letter}</div>
                    ))}
                </h1>
                <h3 className='landing-description'>Kerela's Largest Web3 Hackathon</h3>
                <h3 className='landing-description'>by <strong>EmergeX</strong> in collaboration with Kerala Blockchain Academy and XDC blockchain.</h3>
                <h3 className='landing-description'>Coming on 13-14 July.</h3>
            </div>
        </div>
    );
}
