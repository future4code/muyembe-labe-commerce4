import React from 'react';
import ListProdutos from './ListProdutos';

export default class Produtos extends React.Component {
    render (){
        return (
            <div>
                <p>Produtos</p>
                <ListProdutos />
            </div>
        );
    }
}