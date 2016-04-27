import Model from '../../src/switch/Model';

const transition = 'all 200ms ease-out';

describe('Model', () => {
    it('sets default value', () => {
        const model = new Model();
        expect(model.background.marginLeft).toBe('0px');
        expect(model.handle.transform).toBe('translateX(0px)');
    });

    it('adds animation', () => {
        const model = new Model(10, true);
        expect(model.background.transition).toBe(transition);
        expect(model.handle.transition).toBe(transition);
    });

    it('does not add animation', () => {
        const model = new Model(10, false);
        expect(model.background.transition).not.toBe(transition);
        expect(model.handle.transition).not.toBe(transition);
    });

    it('sets correct transition value', () => {
        const model = new Model(10, true);
        expect(model.background.marginLeft).toBe('10px');
        expect(model.handle.transform).toBe('translateX(10px)');
    });
});
