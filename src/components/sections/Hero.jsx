import React from 'react';
import styled from 'styled-components';
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/Rizwan.jpeg";
import { Tilt } from 'react-tilt';
import HeroBgAnimation from "../../HeroBgAnimation";
import { motion } from "framer-motion";
import { headContainerAnimation, headContentAnimation, headTextAnimation } from "../../utils/motion";
import StarCanvas from "../canvas/Stars";

const HeroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    z-index: 1;

    @media (max-width: 960px) {
        padding: 66px 16px
    }

    @media (max-width: 640px) {
        padding: 32px 16px;
    }

    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroInnerContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;

    @media (max-width: 960px) {
        flex-direction: column;
    }
`;
const HeroLeftContainer = styled.div`
    width: 100%;
    order: 1;

    @media (max-width: 960px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        gap: 6px;
        flex-direction: column;
        align-items: center;
    }
`;
const HeroRightContainer = styled.div`
    width: 100%;
    order: 2;
    display: flex;
    justify-content: end;

    @media (max-width: 960px) {
        order: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 80px;
    }

    @media (max-width: 640px) {
        margin-bottom: 30px;
    }
`;

const Title = styled.div`
    font-weight: 700;
    font-size: 50px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;

    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 640px) {
        font-size: 32px;
        line-height: 48px;
        margin-bottom: 8px;
    }
`;
const TextLoop = styled.div`
    font-weight: 600;
    font-size: 32px;
    display: flex;
    align-items: center;
    gap: 12px;
    
    color: ${({ theme }) => theme.text_primary};
    
    @media (max-width: 960px) {
        text-align: center;
        justify-content: center;
    }
        
    @media (max-width: 640px) {
        font-size: 22px;
        margin-bottom: 16px;
    }

    @media (max-width: 500px) {
        font-size: 20px;
    }
`;
const Span = styled.div`
    cursor: pointer;
    color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 42px;
    color: ${({ theme }) => theme.text_primary + 95};

    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 640px) {
        font-size: 16px;
        line-height: 32px;
    }
`;

const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;

    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;

    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1), hsla(294, 100%, 50%, 1), hsla(271, 100%, 50%, 1));
    background-size: 200% 200%; /* Allows animation to shift */
    background-position: left;
    transition: background-position 0.5s ease, box-shadow 0.4s ease-in-out, transform 0.4s ease;

    box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
    border-radius: 50px;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    color: white;

    @media (min-width: 768px){
        &:hover {
            background-position: right; /* Shift the gradient on hover */
            transform: scale(1.05);
            box-shadow: 10px 10px 60px #1F2634;
            filter: brightness(1.05);
        }
    }

    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    }
`;


const Img = styled.img`
    border-radius: 50%;
    width: 100%;
    heigth: 100%;
    max-width: 400px;
    max-height: 400px;
    border: 2px solid ${({ theme }) => theme.primary};

    @media (max-width: 640px) {
        max-width: 240px;
        max-height: 240px;
    }
`;

const HeroBg = styled.div`
    position: absolute;
    display: flex;
    top: 50%;
    rigth: 0;
    bottom: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    max-width: 1360px;
    justify-content: end;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);

    @media (max-width: 960px) {
        justify-content: center;
        padding: 0 0px;
    }
`;

const Hero = () => {
    return (
        <div id='About'>
            <HeroContainer>
                <HeroBg>
                    <StarCanvas />
                    <HeroBgAnimation />
                </HeroBg>
                <motion.div {...headContainerAnimation}>
                    <HeroInnerContainer>
                        <HeroLeftContainer>
                            <motion.div {...headTextAnimation}>
                                <Title>
                                    Hi, I am <br /> {Bio.name}
                                </Title>
                                <TextLoop>
                                    I am a
                                    <Span>
                                        <Typewriter options={{
                                            strings: Bio.roles,
                                            autoStart: true,
                                            loop: true,
                                            delay: 40
                                        }} />
                                    </Span>
                                </TextLoop>
                            </motion.div>
                            <motion.div {...headContentAnimation}>
                                <SubTitle>{Bio.description}</SubTitle>
                            </motion.div>
                            <ResumeButton
                                href='https://drive.google.com/file/d/1poum5l3qjKwe4lJk-macFMz_lAz9_MEM/view?usp=sharing'
                                target='_blank'
                                rel='noopener noreferrer'
                            >Check Resume</ResumeButton>
                        </HeroLeftContainer>
                        <HeroRightContainer>
                            <motion.div {...headContentAnimation}>
                                <Tilt>
                                    <Img src={HeroImg} alt="Rizwan Mehmood" />
                                </Tilt>
                            </motion.div>
                        </HeroRightContainer>
                    </HeroInnerContainer>
                </motion.div>
            </HeroContainer>
        </div>
    )
}

export default Hero;
