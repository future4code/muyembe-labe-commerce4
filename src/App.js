import React from 'react';
import logo from './logo.svg';
import './App.css';
import Produtos from './components/Produtos/Produtos';
import Filtro from './components/Filtro/Filtro';
import Carrinho from './components/Carrinho/Carrinho';

function App() {
  return (
    <div className="App">
     <Produtos/>
     <Filtro/>
     <Carrinho/>
    </div>
  );
}

export default App;
