const calculateFixedTrackSize = ({ max, min, smallStep, fixedTickWidth }) =>
    ((max - min) / smallStep) * fixedTickWidth;

const calculateTrackSize = (wrapperWidth, offset) => {
    const BUTTONS_COUNT = 2;
    const trackOffset = parseFloat(offset, 10) * BUTTONS_COUNT;
    const trackWidth = wrapperWidth - trackOffset - BUTTONS_COUNT;

    return trackWidth;
};

const calculateTicksCount = (max = 0, min = 0, smallStep = 1) =>
    calculateAreasCount(max, min, smallStep) + 1;

const calculateAreasCount = (max = 0, min = 0, smallStep = 1) => {
    if (smallStep <= 0 ) {
        throw new Error("Invalid argument: smallStep must be a positive number");
    }

    return Math.floor(Math.abs(min - max) / smallStep);
};

const calculateValueFromTick = (index, { max, min, smallStep, vertical }) => {
    const value = min + (index * smallStep);

    return vertical ? Math.abs(value - max) : value;
};

const calculateValueFromTrack = (clientRect, pageOffset, props) => {
    let length, wrapperOffset;

    if (props.vertical) {
        const { top, bottom } = clientRect;
        length = top - bottom;
        wrapperOffset = pageOffset.pageY - bottom;
    } else {
        const { left, right } = clientRect;
        length = right - left;
        wrapperOffset = pageOffset.pageX - left;
    }

    return valueFromTrack(props, wrapperOffset, length);
};

const valueFromTrack = (props, wrapperOffset, length) => {
    const { max, min, smallStep } = props;
    const distance = max - min;
    const clickOffset = wrapperOffset / length;
    const maxTickValue = distance - (distance % smallStep);
    const maxOffset = (100 / distance) * maxTickValue / 100;
    let value = max;

    if (clickOffset < maxOffset) {
        value = Math.floor(((wrapperOffset) / length) * distance + min);
    }

    return snapValue(extendProps(props, { value }));
};

const calculateTickSizes = (trackSize, min, max, step) => {
    const elementCount = Math.floor((max - min) / step) + 1;
    const distStep = trackSize / (max - min);
    let result = [];
    let usedSpace = 0;
    let endPoint = 0;

    for (let i = 0; i < elementCount; i++) {
        if (i === 0 || i === elementCount - 1) {
            endPoint += (step / 2) * distStep;
        } else {
            endPoint += step * distStep;
        }

        const size = Math.round(endPoint - usedSpace);

        result.push(size);

        usedSpace += size;
    }

    return result;
};

const calculateHandlePosition = ({ handleWidth, trackWidth, min, max, value }) => {
    const halfHandleWidth = Math.floor(handleWidth / 2);
    const step = trackWidth / Math.abs(max - min);

    return Math.floor((step * (value - min)) - halfHandleWidth);
};

const decreaseValueToStep = ({ max, min, smallStep, value }) => {
    if (value % smallStep === 0) {
        return value - smallStep;
    }

    const result = value - (value % smallStep);

    return trimValue(max, min, result);
};

const increaseValueToStep = ({ max, min, smallStep, value }) => {
    const result = value - (value % smallStep) + smallStep;

    return trimValue(max, min, result);
};

const snapValue = (props) => {
    const { smallStep, value } = props;
    const left = decreaseValueToStep(props);
    const right = increaseValueToStep(props);

    if (value % smallStep === 0) {
        return value;
    }

    if (right - value <= smallStep / 2) {
        return right;
    }

    return left;
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

const identity = (value) => value;

const extendProps = (target, ...sources) => Object.assign({}, target, ...sources);

export default {
    calculateFixedTrackSize,
    calculateValueFromTick,
    calculateValueFromTrack,
    calculateTrackSize,
    calculateTicksCount,
    calculateTickSizes,
    calculateHandlePosition,
    decreaseValueToStep,
    identity,
    increaseValueToStep,
    trimValue,
    snapValue,
    valueFromTrack
};
