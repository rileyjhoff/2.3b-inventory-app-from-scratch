import React, { useEffect, useState } from 'react';
import { getAllScores } from '../services/fetch-utils';
import ListItem from './ListItem';

export default function ListPage() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    async function load() {
      const scores = await getAllScores();
      setScores(scores);
    }
    load();
  }, []);

  return (
    <div className="list-page">
      <h3>Scores</h3>
      <div className="games">
        {scores.map((game, i) => (
          <ListItem key={i} game={game} />
        ))}
      </div>
    </div>
  );
}
