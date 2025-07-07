import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    margin-top: 100px;
    padding: 0 16px;
`;
const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;

    // @media (max-width: 960px) {
    //     flex
    // }
`;
const Title = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};

    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;
const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const ToggleButtonGroup = styled.div`
    display: flex;
    border: 2px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    &:hover{
        background: ${({ theme }) => theme.primary + 30};
    }

    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }

    ${({ active, theme }) =>
        active &&
        `
            background: ${theme.primary + 30};
        `
    }
`;

const Divider = styled.div`
    width: 2px;
    background: ${({ theme }) => theme.primary};
`;

const Projects = () => {
    const [toggle, setToggle] = useState("all");
    return <Container id="Projects">
        <Wrapper>
            <Title>Projects</Title>
            <Desc style={{
                marginBottom: "40px",
            }}>
                I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
            </Desc>

            <ToggleButtonGroup>
                <ToggleButton active={toggle === "all"} onClick={() => setToggle("all")}>All</ToggleButton>
                <Divider />
                <ToggleButton active={toggle === "web app"} onClick={() => setToggle("web app")}>WEB APP'S</ToggleButton>
                <Divider />
                <ToggleButton active={toggle === "android app"} onClick={() => setToggle("android app")}>ANDROID APP'S</ToggleButton>
                <Divider />
                <ToggleButton active={toggle === "machine learning"} onClick={() => setToggle("machine learning")}>MACHINE LEARNING</ToggleButton>
            </ToggleButtonGroup>
        </Wrapper>
    </Container >

}

export default Projects