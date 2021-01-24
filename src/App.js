import React from 'react';
import Carrinho from './components/Carrinho/Carrinho';
import Filtros from './components/Filtro/Filtros';
import Produtos from './components/Produtos/Produtos';


const produtos = [
  {
    id: 1,
    name: 'Aerolito',
    valor: 2000,
    photo: 'https://picsum.photos/200/200?a=1',
  },
  {
    id: 2,
    name: 'Brinquedo',
    valor: 100,
    photo: 'https://picsum.photos/200/200?a=1',
  },
  {
    id: 3,
    name: 'Camisa Espacial',
    valor: 80,
    photo:'https://picsum.photos/200/200?a=1',
  },
  {
    id: 4,
    name: 'Onibus Espacial',
    valor: 700000,
    photo:'https://picsum.photos/200/200?a=1',
  },
  {
    id: 5,
    name: 'Roupa Espacial',
    valor: 20,
    photo:'https://picsum.photos/200/200?a=1',
  },
  {
    id: 6,
    name: 'Satelite Antigo',
    valor: 600000,
    photo: 'https://picsum.photos/200/200?a=1',
  },
  {
    id: 7,
    name: 'Satelite Novo',
    valor: 900000,
    photo:'https://picsum.photos/200/200?a=1',
  },
  {
    id: 8,
    name: 'Viagem Espacial',
    valor: 400000,
    photo:'https://picsum.photos/200/200?a=1',
  },

]


class App extends React.Component {
  state = {
    minFiltro: '',
    maxFiltro: '',
    nameFiltro: '',
    produtoCarrinho: []

  }

  onChangeMinFiltro = (event) => {
    this.setState({minFiltro: event.target.value})
  }
  onChangeMaxFiltro = (event) => {
    this.setState({maxFiltro: event.target.value})
  }
  onChangeNameFiltro = (event) => {
    this.setState({nameFiltro: event.target.value})
  }

  onAddCarrinho = (produtoId) => {
    const produtoCarrinho = this.state.produtoCarrinho.find(produto => produtoId === produto.id)

  if(produtoCarrinho) {
    const novoCarrinho = this.state.produtoCarrinho.map(produto => {
      if(produtoId === produto.id) {
        return {
          ...produto,
          quantity: produto.quantity + 1
        }
      }
      return produto
    })

    this.setState({produtoCarrinho: novoCarrinho})
    } else {
      const addProduto = produtos.find(produto => produtoId === produto.id)

      const novoCarrinho = [...this.state.produtoCarrinho, {...addProduto, quantity: 1}]

      this.setState({produtoCarrinho: novoCarrinho})
    }
  }
  removeCarrinho = (produtoId) => {
    const novoCarrinho = this.state.produtoCarrinho.map((produto) => {
      if(produto.id === produtoId) {
        return {
          ...produto,
          quantity: produto.quantity - 1
        }
      }
      return produto
    }).filter((produto) => produto.quantity > 0)

    this.setState({produtoCarrinho: novoCarrinho})
  }

  render (){
    return (
    <div className="App">
      <Carrinho
      produtoCarrinho={this.state.produtoCarrinho}
      removeCarrinho={this.removeCarrinho}/>
      <Filtros
      minFiltro = {this.state.minFiltro}
      maxFiltro = {this.state.maxFiltro}
      nameFiltro = {this.state.nameFiltro}
      onChangeMinFiltro = {this.onChangeMinFiltro}
      onChangeMaxFiltro = {this.onChangeMaxFiltro}
      onChangeNameFiltro = {this.onChangeNameFiltro} />     
      <Produtos
      produtos={produtos}
      minFiltro = {this.state.minFiltro}
      maxFiltro = {this.state.maxFiltro}
      nameFiltro = {this.state.nameFiltro}
      onAddCarrinho={this.onAddCarrinho} />     
    </div>
    );
  }
}

export default App;
