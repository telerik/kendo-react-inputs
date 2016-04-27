import * as React from 'react';
import ReactDOM from 'react-dom';
//import styles from '@telerik/kendo-theme-default/styles/example/main';
import classnames from 'classnames';
import Draggable from '@telerik/kendo-react-draggable';
import * as util from './util';

const propTypes = {
    checked: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    offLabel: React.PropTypes.string,
    onLabel: React.PropTypes.string,
    onChange: React.PropTypes.func
};

class SwitchContainer extends React.Component {
    componentDidMount() {
        const components = util.componentElements(ReactDOM.findDOMNode(this));
        const constrain = util.calculateConstrain(components);

        if (this.props.checked) {
            components.handle.style.transform = 'translateX(' + constrain + 'px)';
            components.background.style.marginLeft = constrain + 'px';
        }
    }

    render() {
        const { onLabel = "On", offLabel = "Off" } = this.props;
        const switchClasses = classnames({
            'km-switch': true,
            'km-widget': true,
            'km-switch-off': !this.props.checked,
            'km-switch-on': this.props.checked,
            'k-state-disabled': this.props.disabled
        });

        const handleStyle = {
            transform: 'translateX(0px)'
        };

        return (
            <span className={switchClasses}>
                <span className="km-switch-wrapper">
                    <span className="km-switch-background"></span>
                </span>
                <span className="km-switch-container">
                    <span className="km-switch-handle" style={handleStyle}>
                        <span className="km-switch-label-on">{onLabel}</span>
                        <span className="km-switch-label-off">{offLabel}</span>
                    </span>
                </span>
            </span>
        );
    }
}

SwitchContainer.propTypes = propTypes;

export default Draggable(SwitchContainer);
