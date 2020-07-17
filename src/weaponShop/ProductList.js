import React, {Component} from "react";
import { Product } from "./Product"

export class ProductList extends Component {
    render() {
        if (this.props.products == null || this.props.products.length === 0){
            return <h5 className ="p-2">No Products</h5>
        }
        return this.props.products.map(p =>
            <Product product={ p }/>
        )
    }
}