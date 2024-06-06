import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={theme}>
            <div className="min-h-screen flex flex-col">
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
            </div>
        </div>
    );
};

const AppWithTheme = () => (
    <ThemeProvider>
        <App />
    </ThemeProvider>
);

export default AppWithTheme;
