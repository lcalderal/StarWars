import React, {Component} from 'react';
import './styles.css';
import {PlanetInfo, Container, BtnRandom, GeneralContainer, HeaderSW} from './styles';

class Planet extends Component{

    constructor(props){
        super(props);
        this.state = {
            planets: [],
            planetName: '',
            planetPop: '',
            planetClimate: '',
            planetTerrain: ''
        };

        this.loadPlanet = this.loadPlanet.bind(this);
        this.randomPlanet = this.randomPlanet.bind(this);
        this.onClick = this.onClick.bind(this);

    }

    loadPlanet(callback){

        //attributing the API to a variable
        let url = 'https://swapi.co/api/planets/';
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            //using the parameter to access "results"
            this.setState({planets: json.results});
            callback()
            console.log(json.results);
        })
        
    }

    randomPlanet(){
        let state = this.state;

        //calculating the random number
        let randomNumber = Math.floor(Math.random() * this.state.planets.length);
        
        //attributing array values ​​to props
        state.planetName = this.state.planets[randomNumber].name;
        state.planetPop = this.state.planets[randomNumber].population;
        state.planetClimate = this.state.planets[randomNumber].climate;
        state.planetTerrain = this.state.planets[randomNumber].terrain;
        this.setState(state);
    } 

    onClick(){
        this.loadPlanet(this.randomPlanet);
    }

    render(){
        return(

            //using the styled components from React
            <GeneralContainer>

                <HeaderSW>STAR WARS</HeaderSW>

                <Container>
                    <PlanetInfo>NAME: {this.state.planetName}</PlanetInfo><br/>
                    <PlanetInfo>POPULATION: {this.state.planetPop}</PlanetInfo><br/>
                    <PlanetInfo>CLIMATE: {this.state.planetClimate}</PlanetInfo><br/>
                    <PlanetInfo>TERRAIN: {this.state.planetTerrain}</PlanetInfo><br/>
                </Container>
                <BtnRandom onClick={this.onClick}>Star Button</BtnRandom>
            </GeneralContainer> 
        );
    }
}

export default Planet;