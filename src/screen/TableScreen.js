import { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import StoreContext from '../context/store-context';

const TableScreen = () => {
  const { plans, deletePlan } = useContext(StoreContext);
  const navigate = useNavigate();

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      deletePlan(id);
      navigate('/history');
    }
  };

  return (
    <>
      <h1 className='text-center my-3'>Trade History</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Crypto</th>
            <th>Buy Price</th>
            <th>Sell price</th>
            <th>Bought date</th>
            <th>Sell date</th>
            <th>Profit/Loss</th>
            <th>Target price</th>
            <th>What i did wrong</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{plan.name}</td>
              <td>{plan.boughtPrice}</td>
              <td>{plan.sellPrice}</td>
              <td>{plan.boughtDate}</td>
              <td>{plan.sellDate}</td>
              <td style={{ color: plan.profitLoss > 0 ? 'green' : 'red' }}>
                <strong>
                  {' '}
                  {plan.profitLoss > 0
                    ? `$+${plan.profitLoss}`
                    : `$${plan.profitLoss}`}
                </strong>
              </td>
              <td>{plan.targetPrice}</td>
              <td>{plan.whatDidWrong}</td>
              <td>
                <Button
                  onClick={() => {
                    deleteHandler(plan);
                  }}
                  variant='danger'
                >
                  <i className='fas fa-trash'></i>
                </Button>
              </td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </Table>
    </>
  );
};

export default TableScreen;
