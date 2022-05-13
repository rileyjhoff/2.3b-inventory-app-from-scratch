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
            {game.home_name}
            {game.away_name}
          </div>
          <div className="scores">
            {game.home_score}
            {game.away_score}
          </div>
        </div>
      </Link>
    </Card>
  );
}
