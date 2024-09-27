
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/Styles/Colors.css"
import Navbar1 from './Components/Navbar/Navbar';
// import HomePage from './Pages/HomePage';
import AppRoutes from './Routes';
// import { BrowserRouter} from 'react-router-dom';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <Navbar1 />
        {/* <Route path='/' element={<AppRoutes />} /> */}
        <AppRoutes/>
      {/* </BrowserRouter> */}
      <AppRoutes />
    </div>
  );
}

export default App;
