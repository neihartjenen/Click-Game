import React, { Component } from 'react';
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
 
  handleClick = (id, clicked) => {

    const cardOrder = this.state.cards;

    if (clicked) {
      cardOrder.forEach((card, index) => {
        cardOrder[index].clicked = false;
      });
      return this.setState({
        card: cardOrder.sort(() => Math.random() - 0.5),
        message: "You guessed wrong!",
        score: 0
      })
    }
    else {
      cardOrder.forEach((card, index) => {
        if (id === card.id) {
          cardOrder[index].clicked = true;
        }
      });

      const { topScore, score } = this.state;
      const newScore = score + 1;
      const newTopScore = newScore > topScore ? newScore : topScore;

      return this.setState({
        card: cardOrder.sort(() => Math.random() - 0.5),
        message: "You are correct!",
        score: newScore,
        topScore: newTopScore,
      })
    }
  };
}