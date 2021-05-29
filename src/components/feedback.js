import React from "react";
import { Button,Form } from "react-bootstrap";
export default function FEEDBACK(params) {
     return (
<>
<div className="form-cc">
<Form >
  <Form.Group controlId="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="desc">
    <Form.Label>Feedback</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  </Form>
  <Button my-2 variant="dark">Submit</Button>
  </div>
</>
    )
    }