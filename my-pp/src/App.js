
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/Styles/Colors.css"
import Navbar1 from './Components/Navbar/Navbar';
import BrnadImagesCarousel from './Components/BrandImagesCarousel/BrnadImagesCarousel';
function App() {

  return (
    <div className="App">
   <Navbar1/>
   <BrnadImagesCarousel/>
    </div>
  );
}

export default App;
