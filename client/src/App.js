import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { MainWrapper } from './components/MainWrapper';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainWrapper>
              <Home />
            </MainWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
