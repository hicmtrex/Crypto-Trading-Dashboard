import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row, Image, ListGroup } from 'react-bootstrap';
import Loader from '../components/Loader';
import HTMLReactParser from 'html-react-parser';
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { getCoinById } from '../store/slices/coinSlices';
import Message from '../components/Message';

const CoinDetail = () => {
  const params = useParams();
  const id = params.id.toString();
  const { coin, loading, error } = useSelector((state) => state.coinById);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoinById(id));
  }, [dispatch, params]);

  const description = coin?.description?.replace(/<[^>]*>?/gm, '');

  const stats = [
    {
      title: 'Price to USD',
      value: `$ ${coin?.price && coin?.price}`,
      icon: <DollarCircleOutlined />,
    },
    { title: 'Rank', value: coin?.rank, icon: <NumberOutlined /> },

    {
      title: '24h Volume',
      value: `$ ${coin?.volume && coin?.volume}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: 'Market Cap',
      value: `$ ${coin?.marketCap && coin?.marketCap}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: 'All-time-high(daily avg.)',
      value: `$ ${coin?.allTimeHigh?.price}`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: 'Number Of Markets',
      value: coin?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: 'Number Of Exchanges',
      value: coin?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: 'Aprroved Supply',
      value: coin?.approvedSupply ? <CheckOutlined /> : <StopOutlined />,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: 'Aprroved Supply',
      value: coin?.approvedSupply ? <CheckOutlined /> : <StopOutlined />,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: 'Total Supply',
      value: `$ ${coin?.totalSupply}`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: 'Circulating Supply',
      value: `$ ${coin?.circulatingSupply}`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  if (loading || !coin) return <Loader />;

  return (
    <>
      <Row className='mt-5'>
        <h2>
          <Image
            style={{ width: '50px', marginBottom: '20px' }}
            src={coin?.iconUrl}
          />{' '}
          {coin.name} ({coin.symbol})
        </h2>
        {error && <Message>{error}</Message>}
        <Col md={6} className='me-5'>
          <h4>{coin?.name} Value Statistics</h4>
          <p>
            An overview showing the statistics of {coin?.name}, such as the base
            and quote currency, the rank, and trading volume.
          </p>
          {stats.map(({ icon, title, value }) => (
            <Col className='coin-stats'>
              <Col className='coin-stats-name'>
                <p>{icon}</p>
                <p>{title}</p>
              </Col>
              <p className='stats'>{value}</p>
            </Col>
          ))}
        </Col>
        <Col md={5}>
          <Col className='coin-value-statistics-heading'>
            <h4>Other Stats Info</h4>
            <p>
              An overview showing the statistics of {coin?.name}, such as the
              base and quote currency, the rank, and trading volume.
            </p>
          </Col>
          {genericStats.map(({ icon, title, value }) => (
            <Col className='coin-stats'>
              <Col className='coin-stats-name'>
                <p>{icon}</p>
                <p>{title}</p>
              </Col>
              <p className='stats'>{value}</p>
            </Col>
          ))}
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col md={8}>
          <h3 style={{ color: '#0275d8' }}>What is {coin?.name} ?</h3>
          {description}
        </Col>

        <Col md={4}>
          <ListGroup variant='flush'>
            <h4>{coin?.name} Links</h4>
            {coin?.links?.map((link, index) => (
              <ListGroup.Item
                className='coin-link my-2'
                key={index}
                style={{ flexDirection: 'row' }}
              >
                {link.type}
                <a
                  style={{ color: '#0071bd' }}
                  href={link.url}
                  className='link-name float-md-end'
                  target='_blank'
                >
                  {link?.name}
                </a>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default CoinDetail;
