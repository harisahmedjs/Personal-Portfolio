import React, { useState } from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import Form from 'react-bootstrap/Form';


function Contact() {
  //states
  const [names, setNames] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


 
  return (
    <>
      <section>
        <Container fluid id="home">
          <Container className="home-content">
            <h1 className="text-center">GET IN TOUCH</h1>
            <h5 className="text-center">I would like to know the final requirements of your project. Please get in touch with me and share details about your project.</h5>
            <div>
              <Form.Control
                placeholder="Name"
                style={{ margin: '0 auto' }}
                className="w-50 mt-5"
                onChange={(e) => setNames(e.target.value)}
                value={names}
              />
              <Form.Control
                placeholder="Email"
                type="email"
                style={{ margin: '0 auto' }}
                className="w-50 mt-3"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ margin: '0 auto', height: '10rem ' }}
                className="w-50 mt-3"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <div className="text-center">
            
                <Button  className='mt-5'>Send message</Button>
                <p className="mt-5"></p>
              </div>
            </div>
          </Container>
        </Container>
      </section>
    </>
  );
}

export default Contact;