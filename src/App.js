import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Products from "./Products";

function App() {
  const [search, setSearch] = useState('');
  const [data, setBata] = useState([])
  const YOUR_APP_ID = 'db981594';
  const YOUR_APP_KEY = '854b4f0f7e01554fa2e2fb3b0b80d97b'

  const submitHanler = (e) => {
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=2&calories=591-722&health=alcohol-free`)
      .then(r => r.json())
      .then(d => {
        setBata(d.hits)
      })

  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Food Receipe</h1>
          <Form onSubmit={submitHanler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type='text' onChange={(e) => setSearch(e.target.value)} value={search} />
              <Button variant="primary" type='submit' >Primary</Button>
            </Form.Group>
          </Form>
        </Col>
        </Row>
        <Row>
        <Col>
          {data.length >= 1 ? <Products data={data} /> : null}
        </Col>
      </Row>
    </Container>



  );
}

export default App;
