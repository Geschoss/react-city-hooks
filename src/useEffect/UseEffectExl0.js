import React from 'react';
import Island from '../common/Island';
import Text from '../common/Text';
import Input from '../common/Input';

class UseEffectExl0 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'React'
        };
    }

    handleChange = (value) => {
        this.setState({
            title: value
        });
    };

    render() {
        return (
            <Island title="Simple useEffect">
                <Text text={this.state.title} />
                <Input onChange={this.handleChange} />
            </Island>
        )
    }
}

export default UseEffectExl0;
