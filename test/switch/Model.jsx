import Model from '../../src/switch/Model';

const transition = 'all 200ms ease-out';

describe('Model', () => {
    it('sets default value', () => {
        const model = new Model();
        expect(model.handle.transform).toBe('translateX(0px)');
    });

    it('adds animation', () => {
        const model = new Model(10, true);
        expect(model.handle.transition).toBe(true);
    });

    it('does not add animation', () => {
        const model = new Model(10, false);
        expect(model.handle.transition).not.toBe(transition);
    });

    it('sets correct transition value', () => {
        const model = new Model(10, true);
        expect(model.handle.transform).toBe('translateX(10px)');
    });
});
