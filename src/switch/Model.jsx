export default class Model {
    constructor(value = 0, animate) {
        this.handle = {
            transform: 'translateX(' + value + 'px)',
            transition: animate
        };
    }
}
