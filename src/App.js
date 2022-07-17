import css from "./App.module.css"
import Comments from "./components/comments/Comments";
import Posts from "./components/posts/Posts";
const App = () => {
    return (
        <div className={css.header}>
          <Comments/>
          <Posts/>
        </div>
    );
};

export default App;