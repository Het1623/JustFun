
import About from './About';
import './App.css';
import Navblack from './components/Navblack';
import TextForm from './components/TextForm';
function App() {
  return (
    // React.Fragment is used to wrap multiple elements without adding extra div
   <>
<Navblack title="TextApp" knowUs="Contact me"/> 
{/* Here we are passing the props to the Navblack component */}
    
    <div className="container my-3">
      
    <TextForm heading="Enter your text here : " welcome = "Here Again"/>
    <About/>
    </div>
    
   </>
  );
}

export default App;
