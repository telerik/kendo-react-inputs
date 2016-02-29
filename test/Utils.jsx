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
        const width = util.averageTickSize(130, { "max": 11, "min": 0, "smallStep": 2 });
        expect(width).toEqual(22);
    });

    it('tick width is floored', () => {
        const width = util.averageTickSize(130, { "max": 11, "min": 0, "smallStep": 3 });
        expect(width).toEqual(33);
    });

    it('calculate first and last tick width', () => {
        const tickCount = 2;
        const avgTickSize = 10;
        const expectedTickSize = 5;

        const widths = util.calculateTickSizes(tickCount, avgTickSize);

        expect(widths[0]).toEqual(expectedTickSize);
        expect(widths[1]).toEqual(expectedTickSize);
    });

    it('ceil calculations for first and last tick', () => {
        const tickCount = 2;
        const avgTickSize = 3;
        const expectedTickSize = 2;

        const widths = util.calculateTickSizes(tickCount, avgTickSize);

        expect(widths[0]).toEqual(expectedTickSize);
        expect(widths[1]).toEqual(expectedTickSize);
    });

    it('middle ticks has average tick width as a value', () => {
        const tickCount = 3;
        const avgTickSize = 10;

        const widths = util.calculateTickSizes(tickCount, avgTickSize);

        expect(widths[1]).toEqual(avgTickSize);
    });

    it('distribute pixels across ticks when reminder is equal to ticks count', () => {
        const tickSizes = util.calculateTickSizes(10, 15);
        const widths = util.distributeReminderPixels(130, tickSizes, {
            "min": 0,
            "max": 11,
            "smallStep": 1
        });
        expect(widths[0]).toEqual(9);
        expect(widths[1]).toEqual(16);
    });

    it('distribute pixels across ticks when reminder is less than ticks count', () => {
        const tickSizes = util.calculateTickSizes(9, 11);
        const widths = util.distributeReminderPixels(130, tickSizes, {
            "min": 0,
            "max": 15,
            "smallStep": 6
        });
        expect(widths[0]).toEqual(7);
        expect(widths[1]).toEqual(12);
    });

    it('distribute pixels across ticks when reminder is zero', () => {
        const tickSizes = util.calculateTickSizes(9, 11);
        const widths = util.distributeReminderPixels(130, tickSizes, {
            "min": 0,
            "max": 13,
            "smallStep": 6
        });
        expect(widths[0]).toEqual(6);
        expect(widths[1]).toEqual(11);
    });

    it('distribute pixels across ticks when reminder is more than ticks count', () => {
        const tickSizes = util.calculateTickSizes(9, 11);
        const widths = util.distributeReminderPixels(130, tickSizes, {
            "min": 0,
            "max": 12,
            "smallStep": 1
        });
        expect(widths[0]).toEqual(7);
        expect(widths[1]).toEqual(12);
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

    it('distribute pixels for every tick', () => {
        const range = util.createDistributionRange(3, 1);
        const expectedRange = [ 0, 1, 2 ];
        expect(range).toEqual(expectedRange);
    });

    it('distribute pixels for every even tick', () => {
        const range = util.createDistributionRange(3, 2);
        const expectedRange = [ 0, 2, 4 ];
        expect(range).toEqual(expectedRange);
    });

    it('distribute pixels for reminder smaller than 1', () => {
        const range = util.createDistributionRange(3, 0.85);
        const expectedRange = [ 0, 1, 2 ];
        expect(range).toEqual(expectedRange);
    });

    it('distribute pixels for reminder bigger than 1', () => {
        const range = util.createDistributionRange(3, 1.85);
        const expectedRange = [ 0, 2, 4 ];
        expect(range).toEqual(expectedRange);
    });

    it('decrease value when int', () => {
        const value = util.decreaseValueToStep(3,1);
        expect(value).toEqual(2);
    });

    it('decrease value when float', () => {
        const value = util.decreaseValueToStep(3,2);
        expect(value).toEqual(2);
    });

    it('increase value when float', () => {
        const value = util.increaseValueToStep(3,2);
        expect(value).toEqual(4);
    });
    it('increase value when int', () => {
        const value = util.increaseValueToStep(2,2);
        expect(value).toEqual(4);
    });
});
