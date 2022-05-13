import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { updateScore, getScoreById } from '../services/fetch-utils';

export default function UpdatePage() {
  const { push } = useHistory();
  const { id } = useParams();
  const [score, setScore] = useState({
    date: '',
    home_name: '',
    away_name: '',
    home_score: '',
    away_score: '',
  });

  useEffect(() => {
    async function load() {
      const score = await getScoreById(id);
      setScore(score);
    }
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await updateScore(score);
    push('/');
  }

  return (
    <div className="update-page">
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="date"
          bsPrefix="game-date"
          value={score.date}
          onChange={(e) => setScore({ ...score, date: e.target.value })}
        />
        <Form.Group as={Row}>
          <Col></Col>
          <Col>Team</Col>
          <Col>Score</Col>
        </Form.Group>
        <Form.Group as={Row} className="home-team">
          <Form.Label column>Home</Form.Label>
          <Col>
            <Form.Control
              type="text"
              value={score.home_name}
              onChange={(e) => setScore({ ...score, home_name: e.target.value })}
            />
          </Col>
          <Col>
            <Form.Control
              type="number"
              value={score.home_score}
              onChange={(e) => setScore({ ...score, home_score: e.target.value })}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="away-team">
          <Form.Label column>Away</Form.Label>
          <Col>
            <Form.Control
              type="text"
              value={score.away_name}
              onChange={(e) => setScore({ ...score, away_name: e.target.value })}
            />
          </Col>
          <Col>
            <Form.Control
              type="number"
              value={score.away_score}
              onChange={(e) => setScore({ ...score, away_score: e.target.value })}
            />
          </Col>
        </Form.Group>
        <Button type="submit">Update Game</Button>
      </Form>
    </div>
  );
}
