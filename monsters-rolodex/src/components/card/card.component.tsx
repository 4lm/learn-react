//import { Component } from "react";

import { Monster } from "../../App";

import "./card.styles.css";

interface ICardProps extends Monster {
  alt: string;
}

const Card = ({ id, name, email, alt }: ICardProps) => {
  return (
    <div className="card-container" key={id}>
      <img
        alt={alt}
        src={`https://robohash.org/${id}/?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

/*
export class CardByClass extends Component {
  render() {
    const { id, name, email, alt } = this.props;

    return (
      <div className="card-container" key={id}>
        <img
          alt={alt}
          src={`https://robohash.org/${id}/?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}
*/

export default Card;
