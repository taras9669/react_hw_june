import './App.css';
import NewUser from "./components/newUser/NewUser";
import NewComment from "./components/newComment/NewComment";

const App = () => {
    return (
        <div>
          <div>ADD User: <NewUser/></div>
          <div>ADD Comment: <NewComment/></div>
        </div>
    );
};

export default App;