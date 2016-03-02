const BUTTONS_COUNT = 2;

const calculateTrackSize = (wrapperWidth, offset) => {
    const scaleLeft = parseFloat(offset, 10) * BUTTONS_COUNT;
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
//tests
const calculateTickSizes = (trackWidth, min, max, step) => {
    const elementCount = (Math.floor((max - min) / step)) + 1;
    let result = [];
    let usedWidth = 0;
    let endPoint = 0;
    const distStep = trackWidth / (max - min);
    for (let i = 0; i < elementCount; i++) {
        if (i === 0 || i === elementCount - 1) {
            endPoint += (step / 2) * distStep;
        } else {
            endPoint += step * distStep;
        }
        const size = Math.round(endPoint - usedWidth);
        result.push(size);
        usedWidth += size;
    }
    return result;
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

const decreaseValueToStep = (value, step) => {
    if (value % step === 0) {
        return value - step;
    }
    return value - (value % step);
};

const increaseValueToStep = (value, step) => value - (value % step) + step;

const snapValue = (value, step) => {
    const left = decreaseValueToStep(value, step);
    const right = increaseValueToStep(value, step);
    if (value % step === 0) {
        return value;
    }
    if (right - value <= step / 2) {
        return right;
    }
    return left;
};

export default {
    calculateTrackSize,
    calculateTicksCount,
    calculateTickSizes,
    decreaseValueToStep,
    increaseValueToStep,
    trimValue,
    snapValue
};
