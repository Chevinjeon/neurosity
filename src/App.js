import './App.css';
import ImageGenerator from './Assets/ImageGenerator/ImageGenerator';
import PreLoader from './Components/PreLoader'
function App() {
  return (
    <>
    <PreLoader />

    <div>
      <ImageGenerator/>
    </div>
    </>
  );
}

export default App;
