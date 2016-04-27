export default class Model {
    constructor(value = 0, animate) {
        const transition = animate ? 'all 200ms ease-out' : 'none';

        this.handle = {
            transform: 'translateX(' + value + 'px)',
            transition: transition
        };

        this.background = {
            marginLeft: value + 'px',
            transition: transition
        };
    }
}
