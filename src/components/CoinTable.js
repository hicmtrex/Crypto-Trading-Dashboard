import React from 'react';
import { Link } from 'react-router-dom';
import millify from 'millify';

const CoinTable = ({ coin }) => {
    
  return (
    <tr>
      <td>
        <img style={{ width: '30px' }} src={coin.iconUrl} alt='' />
      </td>
      <td>{coin.name}</td>
      <td>$ {coin.price}</td>
      <td>$ {millify(coin.marketCap)}</td>
      <td>$ {coin.allTimeHigh.price}</td>
      <td>{coin.rank}</td>
      <td>
        <Link to={`/coin/${coin.id}`} className='btn btn-primary'>
          Info
        </Link>
      </td>
    </tr>
  );
};

export default CoinTable;
