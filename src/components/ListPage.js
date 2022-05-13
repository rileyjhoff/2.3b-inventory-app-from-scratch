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
  });

  return (
    <div className="list-page">
      {scores.map((score, i) => (
        <ListItem key={i} score={score} />
      ))}
    </div>
  );
}
