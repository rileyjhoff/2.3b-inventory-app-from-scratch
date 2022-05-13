import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

export default function CreatePage() {
  return (
    <div className="create-page">
      <Form>
        <Form.Group as={Row}>
          <Col></Col>
          <Col>Team</Col>
          <Col>Score</Col>
        </Form.Group>
        <Form.Group as={Row} className="home-team">
          <Form.Label column>Home</Form.Label>
          <Col>
            <Form.Control type="text" />
          </Col>
          <Col>
            <Form.Control type="number" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="away-team">
          <Form.Label column>Away</Form.Label>
          <Col>
            <Form.Control type="text" />
          </Col>
          <Col>
            <Form.Control type="number" />
          </Col>
        </Form.Group>
        <Button type="submit">Submit </Button>
      </Form>
    </div>
  );
}
