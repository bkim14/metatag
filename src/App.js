import './App.css';

import One from "./One";
import Two from "./Two";
import Three from './Three';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>MainPage</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<One/>}/>
          <Route path="/two" exact element={<Two/>}/>
          <Route path="/three/:boardId" exact element={<Three/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
