import React, { Component } from "react"
import { ToggleLink } from "./ToggleLink";
import {CatagoryButton} from "./CatagoryButton";

export class CategoryNavigation extends Component {
    render() {
        return <React.Fragment>
            <ToggleLink to={ this.props.baseUrl } exact={ true }>All</ToggleLink>
            { this.props.categories && this.props.categories.map( cat =>
                <CatagoryButton cat={ cat } baseUrl={ this.props.baseUrl } />
            )}
        </React.Fragment>
    }
}