import EventsExample from './components/EventsExample';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import UsersPage from './components/UsersPage';
import TodosPages from './components/TodosPages';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

function App() {
  return (
    <Router>
        <ul>
          <li><Link to="/">Events</Link></li>
          <li><Link to="/todos">Todos</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
        <Routes>
          <Route path="/todos" element={<TodosPages />} />
          <Route path="/todos/:id" element={<TodoItemPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserItemPage />} />
          <Route path="/" element={<EventsExample />} />
        </Routes>
    </Router>
  );
}

export default App;