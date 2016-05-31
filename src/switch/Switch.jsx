import * as React from 'react';
import ReactDOM from 'react-dom';
import styles from '@telerik/kendo-theme-default/styles/switch/main';
import keycode from 'keycode';
import SwitchElement from './SwitchElement';
import { SwitchController } from '@telerik/kendo-inputs-common';

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
        this.controller = new SwitchController(
            this.updateView,
            this.change
        );
    }

    componentDidMount() {
        const node = ReactDOM.findDOMNode(this);
        this.elements = this.componentElements(node);

        this.controller.updateState({
            wrapperOffset: this.elements.wrapper.offsetWidth,
            handleOffset: this.elements.handle.offsetWidth,
            checked: this.props.checked,
            animate: false,
            coords: {
                left: this.elements.wrapper.getBoundingClientRect().left,
                right: this.elements.wrapper.getBoundingClientRect().right
            },
            handleMargin: parseInt(getComputedStyle(this.elements.handle)['margin-right'])
        });
    }

    componentWillUpdate(nextProps) {
        this.controller.updateState({
            wrapperOffset: this.elements.wrapper.offsetWidth,
            handleOffset: this.elements.handle.offsetWidth,
            checked: nextProps.checked,
            coords: {
                left: this.elements.wrapper.getBoundingClientRect().left,
                right: this.elements.wrapper.getBoundingClientRect().right
            },
            handleMargin: parseInt(getComputedStyle(this.elements.handle)['margin-right'])
        });
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

    addAnimation(model) {
        if (model.transition === true) {
            model.transition = 'all 200ms ease-out';
        } else {
            model.transition = 'none';
        }
        return model;
    }

    updateView = ({ handle }) => {
        const handleAnimation = this.addAnimation(handle);
        this.applyStyle(this.elements.handle, handleAnimation);
    }

    componentElements = (node) => {
        const handle = node.getElementsByClassName(styles['switch-handle'])[0];
        const wrapper = node.getElementsByClassName(styles['switch-container'])[0];

        return {
            handle,
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

    onKeyDown = (event) => {
        event.preventDefault();
        const { keyCode } = event;
        if (keyCode === keycode.codes.space || keyCode === keycode.codes.enter) {
            this.controller.onChange(!this.props.checked);
        }
    }

    render() {
        const switchProps = {
            ...this.props,
            onKeyDown: this.ifEnabled(this.onKeyDown),
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
