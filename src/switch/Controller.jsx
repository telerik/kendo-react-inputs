import keycode from 'keycode';
import Model from './Model';

const DEFAULT_THRESHOLD = 5;

const noop = () => { /*noop*/ };

export default class Controller {
    constructor(updateView = noop, onChange = noop) {
        this.handlePosition = 0;
        this.wrapperOffset = 0;
        this.handleOffset = 0;
        this.handleMargin = 4;

        this.updateView = updateView;
        this.onChange = onChange;
    }

    get constrain() {
        return this.wrapperOffset - this.handleOffset - this.handleMargin;
    }

    updateState({ wrapperOffset, handleOffset, checked, animate = true, coords, handleMargin }) {
        this.wrapperOffset = wrapperOffset;
        this.handleOffset = handleOffset;
        this.coords = coords;
        this.handleMargin = handleMargin;

        this.checked = checked;

        this.updateView(this.updateModel(checked ? this.constrain : 0, animate));
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
        const { left, right } = this.coords;
        const overElement = pageX > left && pageX < right;

        if (overElement) {
            const delta = pageX - this.lastPressX;
            const position = this.limit(this.handlePosition + delta);

            this.lastPressX = pageX;
            this.handlePosition = position;
            this.updateView(this.updateModel(this.handlePosition));
        }
        if (pageX > right) {
            this.updateView(this.updateModel(this.constrain));
        }

        if (pageX < left) {
            this.updateView(this.updateModel(0));
        }
    }

    onKeyDown = (event) => {
        event.preventDefault();
        const { keyPressed } = event;
        if (keyPressed === keycode.codes.space || keyPressed === keycode.codes.Enter) {
            this.change(!this.checked);
        }
    }
}
