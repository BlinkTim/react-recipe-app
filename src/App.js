import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

const App = () => {
  return (
    <Router>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </Main>
      <Footer />
    </Router>
  );
};

export default App;
