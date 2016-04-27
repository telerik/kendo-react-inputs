import * as React from 'react';
import ReactDOM from 'react-dom';
import Switch from '../src/switch/Switch';

class SwitchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            disabled: false,
            onLabel: 'ON',
            offLabel: 'OFF'
        };
    }
    onChange = (e) => {
        this.setState({
            checked: e.checked
        });
    };
    render() {
        return (
            <Switch
                checked={this.state.checked}
                disabled={this.state.disabled}
                offLabel={this.state.offLabel}
                onChange={this.onChange}
                onLabel={this.state.onLabel}
            />
        );
    }
}
ReactDOM.render(
    <SwitchContainer />,
    document.getElementById('app')
);
