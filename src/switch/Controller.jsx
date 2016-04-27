import keycode from 'keycode';
import Model from './Model';

const DEFAULT_THRESHOLD = 5;

export default class Controller {
    constructor(updateView = this.noop, onChange = this.noop) {
        this.handlePosition = 0;
        this.wrapperOffset = 0;
        this.handleOffset = 0;

        this.updateView = updateView;
        this.onChange = onChange;
    }

    get constrain() {
        return this.wrapperOffset - this.handleOffset - 4;
    }

    updateState({ wrapperOffset, handleOffset, checked, animate = true }) {
        this.wrapperOffset = wrapperOffset;
        this.handleOffset = handleOffset;

        this.checked = checked;

        return this.updateModel(checked ? this.constrain : 0, animate);
    }

    change(checked) {
        this.checked = checked;

        this.updateView(this.updateModel(checked ? this.constrain : 0));

        this.onChange(checked);
    }

    updateModel(position, animate = true) {
        return new Model(position, animate);
    }

    limit = (value) => {
        if (value > this.constrain) {
            return this.constrain;
        }

        if (value < 0) {
            return 0;
        }

        return value;
    };

    noop = () => { /*noop*/ };

    onPress = ({ pageX }) => {
        this.lastPressX = this.originalPressX = pageX;
    }

    onRelease = ({ pageX }) => {
        const delta = Math.abs(this.originalPressX - pageX);
        const snapPoint = this.constrain / 2;
        const checked = delta < DEFAULT_THRESHOLD ? !this.checked : this.handlePosition > snapPoint;

        this.change(checked);
    }

    onDrag = ({ pageX }) => {
        const delta = pageX - this.lastPressX;
        const position = this.limit(this.handlePosition + delta);

        this.lastPressX = pageX;
        this.handlePosition = position;

        this.updateView(this.updateModel(this.handlePosition));
    }

    onKeyDown = (event) => {
        event.preventDefault();
        const handler = this.keyBinding[event.keyCode];

        if (handler) {
            this.change(handler());
        }
    }

    keyBinding = {
        [keycode.codes.left]: () => false,
        [keycode.codes.right]: () => true,
        [keycode.codes.down]: () => false,
        [keycode.codes.up]: () => true
    };
}
