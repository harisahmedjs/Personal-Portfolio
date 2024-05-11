import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Particle from '../Particle';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
      <Row style={{ justifyContent: 'center', paddingBottom: '20px', marginTop: '100px' }}>
          <Col md={6}>
            <h1 className="project-heading">
              Reach <strong className="purple">Out</strong>
            </h1>
            <p>
              Feel free to contact me for any inquiries or just to say hello! You can also connect
              with me on social media.
            </p>
            {/* Add your contact information or social media links here */}
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', padding: '20px 0' }}>
          <Col md={6}>
            <h1 className="project-heading">
              Contact <strong className="purple">Me</strong>
            </h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Enter your message" required />
              </Form.Group>

              <Button variant="primary" type="submit" style={{ marginTop: '25px' }}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
       
      </Container>
    </Container>
  );
};

export default Contact;
