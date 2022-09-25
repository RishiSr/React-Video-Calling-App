import logo from './logo.svg';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Video from './Component/Video';
import Header from './Component/Header';
import Option from './Component/Option';
import Notification from './Component/Notification';

function App() {
  return (
    <div className='app' >
      <Header />
      <Video />
      <Notification />
      <Option />



    </div>

  );
}

export default App;
