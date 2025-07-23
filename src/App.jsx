import { Button, Typography } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';


const { Title } = Typography;

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Routes>
          <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
