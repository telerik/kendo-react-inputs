import util from '../src/util';

describe('Slider Math', () => {
    it('calculate slider track width', () => {
        const width = util.calculateTrackSize(130, 34);
        expect(width).toEqual(60);
    });

    it('calculate ticks count with default values', () => {
        const width = util.calculateTicksCount();
        expect(width).toEqual(1);
    });

    it('calculate ticks count when small step is 0', () => {
        const fn = () => util.calculateTicksCount(0, 0, 0);
        expect(fn).toThrowError(Error, "Invalid argument: smallStep must be a positive number");
    });

    it('calculate ticks count when small step is bigger than max', () => {
        const width = util.calculateTicksCount(10, 1, 11);
        expect(width).toEqual(1);
    });

    it('calculate ticks count when small step is smaller than min and result is not an int', () => {
        const width = util.calculateTicksCount(10, 5, 2);
        expect(width).toEqual(3);
    });

    it('calculate ticks count when min and max are negative numbers', () => {
        const width = util.calculateTicksCount(-10, -20, 2);
        expect(width).toEqual(6);
    });

    it('middle ticks has average tick width as a value', () => {
        const widths = util.calculateTickSizes(130, 0, 10, 2);

        expect(widths[1]).toEqual(26);
    });

    it('trim value when bigger than max', () => {
        const min = 0;
        const max = 10;
        const value = 11;
        expect(util.trimValue(max, min, value)).toEqual(10);
    });

    it('trim value when smaller than min', () => {
        const min = 0;
        const max = 10;
        const value = -3;
        expect(util.trimValue(max, min, value)).toEqual(0);
    });

    it('do not trim value when in range', () => {
        const min = 0;
        const max = 10;
        const value = 7;
        expect(util.trimValue(max, min, value)).toEqual(7);
    });

    it('decrease value when int', () => {
        const value = util.decreaseValueToStep({ value: 3, smallStep: 1, max: 10, min: 0 });
        expect(value).toEqual(2);
    });

    it('decrease value when float', () => {
        const value = util.decreaseValueToStep({ value: 3, smallStep: 2, max: 10, min: 0 });
        expect(value).toEqual(2);
    });

    it('increase value when float', () => {
        const value = util.increaseValueToStep({ value: 3, smallStep: 2, max: 10, min: 0 });
        expect(value).toEqual(4);
    });

    it('increase value should respect max', () => {
        const value = util.increaseValueToStep({ value: 3, smallStep: 2, max: 4, min: 0 });
        expect(value).toEqual(4);
    });

    it('increase value when int', () => {
        const value = util.increaseValueToStep({ value: 2, smallStep: 2, max: 10, min: 0 });
        expect(value).toEqual(4);
    });

    it('decrease value should respect min', () => {
        const value = util.decreaseValueToStep({ value: 3, smallStep: 2, max: 10, min: 2 });
        expect(value).toEqual(2);
    });

    it('snap value to tick', () => {
        const value = util.snapValue({ value: 2, smallStep: 1, max: 10, min: 0 });
        expect(value).toEqual(2);
    });

    it('snap value to the left', () => {
        const value = util.snapValue({ value: 5, smallStep: 4, max: 10, min: 0 });
        expect(value).toEqual(4);
    });

    it('snap value to the right', () => {
        const value = util.snapValue({ value: 7, smallStep: 4, max: 10, min: 0 });
        expect(value).toEqual(8);
    });

    it('snap value when step and value are floats', () => {
        const value = util.snapValue({ value: 7.5, smallStep: 4.5, max: 10, min: 0 });
        expect(value).toEqual(9);
    });

    it('snap value to tick when no reminder', () => {
        const value = util.snapValue({ value: 8, smallStep: 4, max: 10, min: 0 });
        expect(value).toEqual(8);
    });

    it('distribute pixels when unequal reminder is left', () => {
        const ticks = util.calculateTickSizes(130, 0, 14, 2);
        expect(ticks[0]).toEqual(9);
        expect(ticks[1]).toEqual(19);
        expect(ticks[2]).toEqual(18);
        expect(ticks[5]).toEqual(18);
    });

    it('distribute pixels when no reminder is left', () => {
        const ticks = util.calculateTickSizes(130, 0, 10, 2);
        expect(ticks[0]).toEqual(13);
        expect(ticks[1]).toEqual(26);
    });

    it('distribute pixels when last tick is floating', () => {
        const ticks = util.calculateTickSizes(130, 0, 7, 3);
        expect(ticks[0]).toEqual(28);
        expect(ticks[1]).toEqual(56);
        expect(ticks[2]).toEqual(27);
    });

    it('distribute pixels when min max and step are floating numbers', () => {
        const ticks = util.calculateTickSizes(130, 0, 5.2, 1.2);
        expect(ticks[0]).toEqual(15);
        expect(ticks[1]).toEqual(30);
    });

    it('distribute pixels when min max and step are floating numbers', () => {
        const ticks = util.calculateTickSizes(130, 0, 5.2, 1.2);
        expect(ticks[0]).toEqual(15);
        expect(ticks[1]).toEqual(30);
    });

    it('value from track is calulated to max possible value', () => {
        const props = { max: 10, min: 0, smallStep: 2 };
        const wrapperOffset = 120;
        const left = 40;
        const length = 130;
        const value = util.valueFromTrack(props, wrapperOffset, left, length);
        expect(value).toEqual(10);
    });

    it('value from track is calulated to step value', () => {
        const props = { max: 10, min: 0, smallStep: 2 };
        const wrapperOffset = 100;
        const length = 130;
        const value = util.valueFromTrack(props, wrapperOffset, length);
        expect(value).toEqual(8);
    });
});
