import React from 'react';


export default class ItemCarrinho extends React.Component {
    render (){
        return (
            <div>
                <p>{this.props.carItem.quantity}x</p>
                <p>{this.props.carItem.name}</p>
                <button onClick={() => this.props.removeCarrinho(this.props.carItem.id)}>Remover</button>
            </div>
        );
    }
}