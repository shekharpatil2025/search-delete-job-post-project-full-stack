import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import AllPosts from './components/AllPosts';
import Create from './components/Create';
import Edit from './components/Edit';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import OAuth2Callback from './components/OAuth2Callback';

import ProtectedRoute from './routes/ProtectedRoute';

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* PUBLIC ROUTES */}

        <Route
          path="/"
          element={<AllPosts />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route path="/oauth2/callback" element={<OAuth2Callback />} />

        {/* ADMIN ROUTES */}

        <Route
          path="/create"
          element={
            <ProtectedRoute role="ADMIN">
              <Create />
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit/:id"
          element={
            <ProtectedRoute role="ADMIN">
              <Edit />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}
export default App;