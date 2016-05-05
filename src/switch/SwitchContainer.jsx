import * as React from 'react';
import ReactDOM from 'react-dom';
import styles from '@telerik/kendo-theme-default/styles/switch/main';
import classnames from 'classnames';
import Draggable from '@telerik/kendo-react-draggable';
import * as util from './util';

const propTypes = {
    checked: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    offLabel: React.PropTypes.string,
    onLabel: React.PropTypes.string,
    onChange: React.PropTypes.func,
    onKeyDown: React.PropTypes.func
};

class SwitchContainer extends React.Component {
    componentDidMount() {
        const node = ReactDOM.findDOMNode(this);
        const components = util.componentElements(node, styles);
        const constrain = util.calculateConstrain(components);

        if (this.props.checked) {
            components.handle.style.transform = 'translateX(' + constrain + 'px)';
            components.background.style.marginLeft = constrain + 'px';
        }
    }

    render() {
        const { onLabel = "On", offLabel = "Off" } = this.props;
        const switchClasses = classnames({
            [styles.switch]: true,
            [styles.widget]: true,
            [styles['switch-off']]: !this.props.checked,
            [styles['switch-on']]: this.props.checked,
            [styles['state-disabled']]: this.props.disabled
        });

        const handleStyle = {
            transform: 'translateX(0px)'
        };

        const switchProps = {
            'onKeyDown': this.props.onKeyDown,
            'tabIndex': 0
        };

        return (
            <span className={switchClasses} { ...switchProps }>
                <span className={styles['switch-wrapper']}>
                    <span className={styles['switch-background']}></span>
                </span>
                <span className={styles['switch-container']}>
                    <span className={styles['switch-handle']} style={handleStyle}>
                        <span className={styles['switch-label-on']}>{onLabel}</span>
                        <span className={styles['switch-label-off']}>{offLabel}</span>
                    </span>
                </span>
            </span>
        );
    }
}

SwitchContainer.propTypes = propTypes;

export default Draggable(SwitchContainer);
