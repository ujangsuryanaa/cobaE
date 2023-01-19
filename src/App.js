import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import Landing from './page/Landing';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
