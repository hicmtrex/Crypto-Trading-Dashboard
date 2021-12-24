import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import HomeScreen from './screen/HomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewPlanScreen from './screen/NewPlanScreen';
import TableScreen from './screen/TableScreen';
import StoreProvider from './context/StoreProvider';
import CoinDetail from './screen/CoinDetail';

const App = () => {
  return (
    <Router>
      <StoreProvider>
        <Header />
        <Container>
          <main>
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/history' element={<TableScreen />} />
              <Route path='/new_plan' element={<NewPlanScreen />} />
              <Route path='/coin/:id' element={<CoinDetail />} />
            </Routes>
          </main>
        </Container>
      </StoreProvider>
    </Router>
  );
};

export default App;
