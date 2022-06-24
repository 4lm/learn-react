import { Component } from "react";

import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        const { id, name, email } = monster;
        return (
          <Card
            key={id}
            id={id}
            name={name}
            email={email}
            alt={`monster ${name}`}
          />
        );
      })}
    </div>
  );
};

export class CardListByClass extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { id, name, email } = monster;
          return (
            <Card
              key={id}
              id={id}
              name={name}
              email={email}
              alt={`monster ${name}`}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
