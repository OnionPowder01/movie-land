import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));

const MyPage = () => {
    return (
        <App />
    )
}

root.render(<MyPage />)