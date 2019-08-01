import styled from 'styled-components';
import './styles.css';

export const PlanetInfo = styled.a `
    display: flex;
    justify-content: flex-start;
    text-align: flex-start;
    width: 330px;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
    color: yellow;
`;

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 300px;
    height: 180px;
    background-color: #4F4F4F;
    margin: 0 auto;
    padding-top:  15px;
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 100px;
    border-radius: 8px 8px 0px 0px;
`;

export const BtnRandom = styled.button `
    display: flex;
    justify-content: center;
    color: black;
    font-family: 'StarWarsBtn';
    background-color: yellow;
    text-align: center;
    border-radius: 0px 0px 8px 8px;
    width: 330px;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    cursor: pointer;
    &:hover{
        background-color: #FFD700;
        opacity: 0.7;
        transition: all 0.50s;
    }
`;

export const GeneralContainer = styled.div `
    margin: 0 auto;
`;

export const HeaderSW = styled.header `
    color: yellow;
    font-family: 'StarWarsHeader';
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    font-size: 130px;
    margin-top: 15px;
`;
