import React from 'react';
import ItemCarrinho from './ItemCarrinho';

export default class Carrinho extends React.Component {
    render (){
        return (
            <div>
                <p>Carrinho</p>
                <ItemCarrinho/>
            </div>
        );
    }
}