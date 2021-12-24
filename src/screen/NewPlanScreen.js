import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import StoreContext from '../context/store-context';

const NewPlanScreen = () => {
  const { getPlans } = useContext(StoreContext);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [buyP, setBuyP] = useState('');
  const [sellP, setSellP] = useState('');
  const [buyD, setBuyD] = useState('');
  const [sellD, setSellD] = useState('');
  const [profLoss, setProfLoss] = useState(0);
  const [targetP, setTargetP] = useState('');
  const [whatWrong, setWhatWrong] = useState('');

  const addPlanHandler = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000).toString();
    getPlans(id, name, buyP, sellP, buyD, sellD, profLoss, targetP, whatWrong);
    navigate('/history');
  };

  return (
    <Container>
      <h1 className='text-center my-3'>Add Trade Plan</h1>
      <Row className='mt-2 justify-content-center'>
        <Col md={4}>
          <Form onSubmit={addPlanHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Crypto name</Form.Label>
              <Form.Control
                type='text'
                placeholder='crypto name'
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>
            <Form.Group controlId='buyPrice'>
              <Form.Label>Buy Price</Form.Label>
              <Form.Control
                type='text'
                placeholder='buy price'
                onChange={(e) => setBuyP(e.target.value)}
                value={buyP}
              />
            </Form.Group>
            <Form.Group controlId='sellPrice'>
              <Form.Label>Sell Price</Form.Label>
              <Form.Control
                type='text'
                placeholder='sell price'
                onChange={(e) => setSellP(e.target.value)}
                value={sellP}
                required
              />
            </Form.Group>
            <Form.Group controlId='buyDate'>
              <Form.Label>Buy Date</Form.Label>
              <Form.Control
                type='text'
                placeholder='YYYY/MM/DD'
                onChange={(e) => setBuyD(e.target.value)}
                value={buyD}
                required
              />
            </Form.Group>
            <Form.Group controlId='sellDate'>
              <Form.Label>Sell Date</Form.Label>
              <Form.Control
                type='text'
                placeholder='YYYY/MM/DD'
                onChange={(e) => setSellD(e.target.value)}
                value={sellD}
                required
              />
            </Form.Group>
            <Form.Group controlId='profitLoss'>
              <Form.Label>Profit/Loss</Form.Label>
              <Form.Control
                type='number'
                placeholder='1000'
                onChange={(e) => setProfLoss(e.target.value)}
                value={profLoss}
                required
              />
            </Form.Group>
            <Form.Group controlId='profitLoss'>
              <Form.Label>Target Price</Form.Label>
              <Form.Control
                type='text'
                placeholder='$15.0'
                onChange={(e) => setTargetP(e.target.value)}
                value={targetP}
                required
              />
            </Form.Group>
            <Form.Group controlId='wrong' className='mb-3'>
              <Form.Label>What i did wrong</Form.Label>
              <Form.Control
                type='text'
                placeholder='nothing'
                onChange={(e) => setWhatWrong(e.target.value)}
                value={whatWrong}
                required
              />
            </Form.Group>
            <Button type='submit' className='col-12'>
              Add Plan
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NewPlanScreen;
