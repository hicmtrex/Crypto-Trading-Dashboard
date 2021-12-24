import React, { useEffect } from 'react';
import { Alert, Row, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import CoinTable from '../components/CoinTable';
import Loader from '../components/Loader';
import { getCoinsList } from '../store/slices/coinSlices';

const HomeScreen = () => {
  const { coins, loading, error } = useSelector((state) => state.coinsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoinsList());
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <Row className='mt-5'>
      <h1 className='text-center mb-2'>Cryptocurrency Exchange</h1>
      {error && <Alert variant='danger'>{error}</Alert>}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>icon</th>
            <th>Crypto</th>
            <th>Price</th>
            <th>MarketCap</th>
            <th>All time high</th>
            <th>Rank</th>

            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <CoinTable key={coin.id} coin={coin} />
          ))}
        </tbody>
      </Table>
    </Row>
  );
};

export default HomeScreen;
