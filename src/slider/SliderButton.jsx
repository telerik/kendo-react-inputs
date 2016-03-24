import * as React from 'react';
import classnames from 'classnames';
import styles from '@telerik/kendo-theme-default/styles/slider/main';

const SliderButton = (props) => {
    const { increase, vertical, title, onClick } = props;
    const buttonClasses = classnames({
        [styles.button]: true,
        [styles['button-increase']]: increase,
        [styles['button-decrease']]: !increase
    });
    const spanClasses = classnames({
        [styles.icon]: true,
        [styles['i-arrow-e']]: increase && !vertical,
        [styles['i-arrow-w']]: !increase && !vertical,
        [styles['i-arrow-n']]: increase && vertical,
        [styles['i-arrow-s']]: !increase && vertical
    });

    const buttonProps = {
        title: title,
        className: buttonClasses
    };

    if (!props.disabled) {
        Object.assign(buttonProps, {
            onClick: onClick
        });
    }

    return (
        <a {...buttonProps}>
            <span aria-hidden="true" className={spanClasses}></span>
        </a>
    );
};

SliderButton.propTypes = {
    disabled: React.PropTypes.bool,
    increase: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    title: React.PropTypes.string,
    vertical: React.PropTypes.bool
};

export default SliderButton;
