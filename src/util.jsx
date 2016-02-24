const BUTTONS_COUNT = 2;

const calculateTrackWidth = (wrapperWidth, offsetLeft) => {
    const scaleLeft = parseFloat(offsetLeft, 10) * BUTTONS_COUNT;
    const scaleWidth = wrapperWidth - scaleLeft - BUTTONS_COUNT;

    return scaleWidth;
};

const calculateTicksCount = (max = 0, min = 0, smallStep = 1) =>
    calculateAreasCount(max, min, smallStep) + 1;

const calculateAreasCount = (max = 0, min = 0, smallStep = 1) => {
    if (smallStep <= 0 ) {
        throw new Error("Invalid argument: smallStep must be a positive number");
    }

    return Math.floor(Math.abs(min - max) / smallStep);
};

const averageTickSize = (trackWidth, areaCount) => Math.floor(trackWidth / areaCount);

const calculateTicksSize = (tickCount, avgTickSize) =>
    Array(tickCount)
    .fill(avgTickSize)
    .map((width, index, array) => {
        if (index === 0 || index === array.length - 1) {
            return Math.ceil(width / 2);
        }

        return width;
    });

export default {
    calculateAreasCount,
    calculateTrackWidth,
    calculateTicksCount,
    calculateTicksSize,
    averageTickSize
};
