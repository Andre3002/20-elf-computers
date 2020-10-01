import React, { Component } from 'react'
import './ComponentList.css'
import slugify from 'slugify';

export default class ComponentList extends Component {
    render() {
        const {features}=this.props
        
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
}
