import * as React from 'react';
import ReactDOM from 'react-dom';
import styles from '@telerik/kendo-theme-default/styles/switch/main';
import keycode from 'keycode';
import SwitchContainer from './SwitchContainer';
import * as util from './util';

const propTypes = {
    checked: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    offLabel: React.PropTypes.string,
    onLabel: React.PropTypes.string,
    onChange: React.PropTypes.func
};

const DEFAULT_THRESHOLD = 5;

class Switch extends React.Component {
    componentDidMount() {
        const node = ReactDOM.findDOMNode(this);
        this.elements = util.componentElements(node, styles);
        this.constrain = util.calculateConstrain(this.elements);
    }

    onPress = (e) => {
        this.originPressX = e.pageX;
    }

    onRelease = (e) => {
        const delta = Math.abs(this.originPressX - e.pageX);
        const snapPoint = this.constrain / 2;

        if (delta < DEFAULT_THRESHOLD) {
            this.change(!this.props.checked);
            return;
        }
        const translate = util.getTranslateX(this.elements.handle);
        if (translate > snapPoint) {
            this.change(true);
        } else {
            this.change(false);
        }
    }

    onDrag = (e) => {
        const delta = e.pageX - this.lastPressX;
        this.lastPressX = e.pageX;

        const currentTranslate = util.getTranslateX(this.elements.handle);
        let position = currentTranslate + delta;
        position = this.limitTranslate(position);
        this.positionHandle(position);
    }

    change(checked) {
        this.animateHandle(checked);
        this.props.onChange({ checked: checked });
    }

    positionHandle(position) {
        this.elements.handle.style.transform = 'translateX(' + position + 'px)';
        this.elements.background.style.marginLeft = position + 'px';
    }

    animateHandle(checked) {
        const { handle, background } = this.elements;
        if (checked) {
            handle.style.transform = 'translateX(' + this.constrain + 'px)';
            background.style.marginLeft = this.constrain + 'px';
        } else {
            handle.style.transform = 'translateX(0px)';
            background.style.marginLeft = 0 + 'px';
        }
        handle.style.transition = 'all 200ms ease-out';
        background.style.transition = 'all 200ms ease-out';
    }

    onKeyDown = (event) => {
        event.preventDefault();
        const handler = this.keyBinding[event.keyCode];

        if (handler && !this.props.disabled) {
            const value = handler();
            this.change(value);
        }
    }

    keyBinding = {
        [keycode.codes.left]: () => false,
        [keycode.codes.right]: () => true,
        [keycode.codes.down]: () => false,
        [keycode.codes.up]: () => true
    };

    limitTranslate(value) {
        if (value > this.constrain) {
            return this.constrain;
        }

        if (value < 0) {
            return 0;
        }

        return value;
    }

    render() {
        const switchProps = {
            ...this.props,
            onKeyDown: this.onKeyDown
        };

        if (!this.props.disabled) {
            Object.assign(switchProps, {
                onPress: this.onPress,
                onDrag: this.onDrag,
                onRelease: this.onRelease
            });
        }
        return (
            <SwitchContainer {...switchProps} />
        );
    }
}

Switch.propTypes = propTypes;

export default Switch;
