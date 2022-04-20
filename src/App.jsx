import React from "react";
import Header from "./layout/Header";
import Home from "./pages/Home";
import './sass/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;