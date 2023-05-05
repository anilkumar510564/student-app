import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <>
       <Routes>
        {
          routes.map(route =>
            <Route  path={route.path}   element={route.element} />
          )
        }
      </Routes>
    </>
  );
}

export default App;
