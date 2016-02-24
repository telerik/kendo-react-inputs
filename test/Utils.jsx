import util from '../src/util';

describe('Slider Math', () => {
    it('calculate slider track width', () => {
        const width = util.calculateTrackWidth(130, 34);
        expect(width).toEqual(60);
    });

    it('calculate area count with integer division', () => {
        const areas = util.calculateAreasCount(10, 0, 2);
        expect(areas).toEqual(5);
    });

    it('calculate area count with non-integer division', () => {
        const areas = util.calculateAreasCount(10, 5, 2);
        expect(areas).toEqual(2);
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

    it('calculate tick size based on track width and areas count', () => {
        const width = util.averageTickSize(120, 6);
        expect(width).toEqual(20);
    });

    it('tick width is floored', () => {
        const width = util.averageTickSize(130, 6);
        expect(width).toEqual(21);
    });

    it('calculate first and last tick width', () => {
        const tickCount = 2;
        const avgTickSize = 10;
        const expectedTickSize = 5;

        const widths = util.calculateTicksSize(tickCount, avgTickSize);

        expect(widths[0]).toEqual(expectedTickSize);
        expect(widths[1]).toEqual(expectedTickSize);
    });

    it('ceil calculations for first and last tick', () => {
        const tickCount = 2;
        const avgTickSize = 3;
        const expectedTickSize = 2;

        const widths = util.calculateTicksSize(tickCount, avgTickSize);

        expect(widths[0]).toEqual(expectedTickSize);
        expect(widths[1]).toEqual(expectedTickSize);
    });

    it('middle ticks has averate tick width as a value', () => {
        const tickCount = 3;
        const avgTickSize = 10;

        const widths = util.calculateTicksSize(tickCount, avgTickSize);

        expect(widths[1]).toEqual(avgTickSize);
    });
});
