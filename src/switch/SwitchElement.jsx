import * as React from 'react';
import styles from '@telerik/kendo-theme-default/styles/switch/main';
import classnames from 'classnames';
import Draggable from '@telerik/kendo-react-draggable';

const propTypes = {
    checked: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    offLabel: React.PropTypes.string,
    onLabel: React.PropTypes.string,
    onChange: React.PropTypes.func,
    onKeyDown: React.PropTypes.func
};

const defaultProps = {
    onLabel: 'On',
    offLabel: 'Off'
};

class SwitchElement extends React.Component {
    render() {
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
                        <span className={styles['switch-label-on']}>{this.props.onLabel}</span>
                        <span className={styles['switch-label-off']}>{this.props.offLabel}</span>
                    </span>
                </span>
            </span>
        );
    }
}

SwitchElement.propTypes = propTypes;
SwitchElement.defaultProps = defaultProps;

export default Draggable(SwitchElement);
