import './App.css';
import CarForm from "./components/CarForm/CarForm";
import Cars from "./components/Cars/Cars";

const App = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export default App;