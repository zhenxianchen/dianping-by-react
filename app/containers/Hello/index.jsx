import React from 'react'

import Header from '../../components/Header/index'
import Carousel from './subpage/Carousel'
import Recommend from './subpage/Recommend'
import List from './subpage/List'

class Hello extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            now: Date.now()
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    render() {
        return (
            <div>
                <Header title="hello页面"/>
                <p onClick={this.clickHandler}>hello world {this.state.now}</p>
                <hr/>
                <Carousel/>
                <Recommend/>
                <List/>
            </div>
        )
    }
    clickHandler() {
        this.setState({
            now: Date.now()
        })
    }
}

export default Hello