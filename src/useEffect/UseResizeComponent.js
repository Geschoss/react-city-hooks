import React, { useState, useEffect } from 'react';
import Island from '../common/Island';
import Text from '../common/Text';


class UseResizeComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize = () => {
        this.setState({
            width: window.innerWidth
        })
    };

    render() {

        return (
        <Island title="subscribe component useEffect">
            <Text text={this.state.width}/>
        </Island>
        )
    }
}


export default UseResizeComponent;
