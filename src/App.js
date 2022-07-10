/*реалізувати 3 маршрути
todos - при переході на який тягнуться всі todo з https://jsonplaceholder.typicode.com/todos

    albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums

    comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
    при натисканні на комментар тягнеться пост, до якого належіить цей коментар всі його пости. приклад запиту https://jsonplaceholder.typicode.com/posts/ID
    id поста взяти з коментаря (postId)

відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.*/


import {Route, Routes} from "react-router-dom";
import AllTodosPage from "./pages/AllTodosPage/AllTodosPage";
import AllAlbumsPage from "./pages/AllAlbumsPage/AllAlbumsPage";
import Layout from "./components/Layout/Layout";
import AllCommentsPage from "./pages/AllCommentsPage/AllCommentsPage";
import PostPage from "./pages/PostPage/PostPage";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'todos'} element={<AllTodosPage/>}/>
                <Route path={'albums'} element={<AllAlbumsPage/>}/>
                <Route path={'comments'} element={<AllCommentsPage/>}/>
                    <Route path={'post'} element={<PostPage/>}/>
                <Route/>
            </Route>
        </Routes>
    );
};

export default App;