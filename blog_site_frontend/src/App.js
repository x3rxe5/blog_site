import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

const HELLO_QUERY = gql`
  query {
    hello
  }
`;

function App() {
  const { data, error } = useQuery(HELLO_QUERY);
  if (error) console.error(error);
  console.log(data);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
