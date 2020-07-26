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
    message: "Click on Different Characters to Earn Points!"
  };
  
  handleClick = (id, clicked) => {

    const cardOrder = this.state.cards;

    if (clicked) {
      cardOrder.forEach((card, index) => {
        cardOrder[index].clicked = false;
      });
      return this.setState({
        card: cardOrder.sort(() => Math.random() - 0.5),
        message: "You are wrong!",
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

  render() {
    return (
      <div>

        <Wrapper>
          <Title>
            <div className="text-center">
              <h1 id="message-title">{this.state.message}</h1>
            </div>
            <div className="gameScores text-center">
              <p><strong>Score:</strong> {this.state.score} | <strong>Top Score:</strong> {this.state.topScore}</p>
            </div>
          </Title>
          {console.log(this.state.cards)}
          <div className="row">
            {this.state.cards.map(cards => {

              return (
                <div className="col-sm-3 mt-5"> <CharacterCard
                  id={cards.id}
                  key={cards.id}
                  image={cards.image}
                  name={cards.name}
                  card={cards.card}
                  clicked={cards.clicked}
                  handleClick={this.handleClick}
                /></div>
              )
            })}  </div>
        </Wrapper>
      </div>
    );
  }
}

export default App;