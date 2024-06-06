import React from 'react';

const Main = ({ children }) => {
    return (
        <main className="flex-grow p-4">
            {children}
        </main>
    );
};

export default Main;
