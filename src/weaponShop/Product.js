import React, {Component} from "react";

export class Product extends Component {
    render() {
        return <div className="card m-1 p-1 bg-light" key={this.props.product.id}>
            <h4>
                { this.props.product.name }
                <span className="badge badge-pill badge-primary float-right">
                    ${ this.props.product.price.toFixed(2) }
                </span>
            </h4>
            <div className="card-text bg-white p-1">
                { this.props.product.description }
            </div>
        </div>
    }
}