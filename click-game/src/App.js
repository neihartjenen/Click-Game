mport React, { Component } from 'react';
// important components 
import CharacterCard from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";


class App extends Component {
  state = {
    cards: cards,
    score: 0,
    topScore: 0,
    message: "Click on Different Characters to Earn Points"
  };
