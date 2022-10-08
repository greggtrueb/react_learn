import React, { Component } from "react"
import { ToggleLink } from "./ToggleLink";

export class CatagoryButton extends Component {
    render() {
        return <React.Fragment>
            <ToggleLink key={ this.props.cat } to={`${this.props.baseUrl}/${ this.props.cat.toLowerCase()}`}>{ this.props.cat }</ToggleLink>
        </React.Fragment>
    }
}