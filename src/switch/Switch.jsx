import * as React from 'react';
import ReactDOM from 'react-dom';
import styles from '@telerik/kendo-theme-default/styles/switch/main';
import SwitchElement from './SwitchElement';
import Controller from './Controller';

const propTypes = {
    checked: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    offLabel: React.PropTypes.string,
    onLabel: React.PropTypes.string,
    onChange: React.PropTypes.func
};

class Switch extends React.Component {
    constructor(props) {
        super(props);

        this.controller = new Controller(
            this.updateView,
            this.change
        );
    }

    componentDidMount() {
        const node = ReactDOM.findDOMNode(this);
        this.elements = this.componentElements(node);

        this.updateView(this.controller.updateState({
            wrapperOffset: this.elements.wrapper.offsetWidth,
            handleOffset: this.elements.handle.offsetWidth,
            checked: this.props.checked,
            animate: false
        }));
    }

    componentWillUpdate(nextProps) {
        this.updateView(this.controller.updateState({
            wrapperOffset: this.elements.wrapper.offsetWidth,
            handleOffset: this.elements.handle.offsetWidth,
            checked: nextProps.checked
        }));
    }

    componentWillUnmount() {
        this.controller = null;
        this.elements = null;
    }

    applyStyle(element, props) {
        Object.keys(props).forEach((x) => {
            element.style[x] = props[x];
        });
    }

    updateView = ({ handle, background }) => {
        this.applyStyle(this.elements.handle, handle);
        this.applyStyle(this.elements.background, background);
    }

    componentElements = (node) => {
        const handle = node.getElementsByClassName(styles['switch-handle'])[0];
        const background = node.getElementsByClassName(styles['switch-background'])[0];
        const wrapper = node.getElementsByClassName(styles['switch-container'])[0];

        return {
            handle,
            background,
            wrapper
        };
    }

    change = (checked) => {
        this.props.onChange({ checked });
    }

    ifEnabled = (callback) => (
        (...args) => {
            if (!this.props.disabled) {
                callback(...args);
            }
        }
    )

    render() {
        const switchProps = {
            ...this.props,
            onKeyDown: this.ifEnabled(this.controller.onKeyDown),
            onPress: this.ifEnabled(this.controller.onPress),
            onDrag: this.ifEnabled(this.controller.onDrag),
            onRelease: this.ifEnabled(this.controller.onRelease)
        };

        return (
            <SwitchElement {...switchProps} />
        );
    }
}

Switch.propTypes = propTypes;

export default Switch;
