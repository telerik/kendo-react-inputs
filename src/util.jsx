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

const averageTickSize = (trackWidth, props) => {
    const { max, min, smallStep } = props;
    const distance = max - min;
    return Math.floor(trackWidth / distance) * smallStep;
};

const calculateTickSizes = (tickCount, avgTickSize) =>
    Array(tickCount)
    .fill(avgTickSize)
    .map((width, index, array) => {
        if (index === 0 || index === array.length - 1) {
            return Math.ceil(width / 2);
        }

        return width;
    });

const distributeReminderPixels = (trackWidth, tickSizes, props) => {
    let ticks = Array.from(tickSizes);
    const { max, min, smallStep } = props;
    const reminder = trackWidth % (max - min);
    const distributionStep = ticks.length / reminder;

    if (reminder === 0 && ticks.length < 2 ) {
        ticks = ticks.map(() => (trackWidth / Math.abs(min - max) * smallStep) / 2);
        return ticks;
    }
    ticks = distributePixels(ticks, reminder, distributionStep);

    return ticks;
};

const createDistributionRange = (reminder, value) => {
    let distributionRange = [];
    let sum = 0;

    for (let i = 0; i < reminder; i++) {
        distributionRange.push(Math.round(sum));
        sum += value;
    }
    return distributionRange;
};

const distributePixels = (tickSizes, reminder, distributionStep) => {
    const distributionRange = createDistributionRange(reminder, distributionStep);

    for (let i = 0; i < distributionRange.length; i++) {
        const index = distributionRange[i];
        tickSizes[index] += 1;
    }
    return tickSizes;
};

const trimValue = (max, min, value) => {
    if (value > max) {
        return max;
    }
    if (value < min) {
        return min;
    }
    return value;
};

const decreaseValueToStep = (value, smallStep) => {
    if (value % smallStep === 0) {
        return value - smallStep;
    }
    return value - (value % smallStep);
};

const increaseValueToStep = (value, smallStep) => value - (value % smallStep) + smallStep;

export default {
    averageTickSize,
    calculateAreasCount,
    calculateTrackWidth,
    calculateTicksCount,
    calculateTickSizes,
    createDistributionRange,
    decreaseValueToStep,
    increaseValueToStep,
    distributePixels,
    trimValue,
    distributeReminderPixels
};
