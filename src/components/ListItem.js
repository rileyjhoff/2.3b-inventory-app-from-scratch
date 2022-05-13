import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ListItem({ game }) {
  return (
    <Card>
      <Link to={`/item/${game.id}`}>
        <div className="game">
          <Card.Title>{game.date}</Card.Title>
          <div className="teams">
            <div>{game.home_name}</div>
            <div>{game.away_name}</div>
          </div>
          <div className="scores">
            <div>{game.home_score}</div>
            <div>{game.away_score}</div>
          </div>
        </div>
      </Link>
    </Card>
  );
}
