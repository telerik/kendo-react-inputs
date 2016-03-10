const BUTTONS_COUNT = 2;

const calculateFixedTrackSize = ({ max, min, smallStep, fixedTickWidth }) =>
    ((max - min) / smallStep) * fixedTickWidth;

const calculateTrackSize = (wrapperWidth, offset) => {
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

const calculateValueFromTick = (index, props) => {
    const { max, min, smallStep, vertical } = props;
    const value = min + (index * smallStep);

    return vertical ? Math.abs(value - max) : value;
};

const calculateValueFromTrack = (clientRect, pageOffset, props) => {
    let length, wrapperOffset, position;

    if (props.vertical) {
        position = clientRect.bottom;
        length = clientRect.top - position;
        wrapperOffset = pageOffset.pageY - position;
    } else {
        position = clientRect.left;
        length = clientRect.right - position;
        wrapperOffset = pageOffset.pageX - position;
    }

    return valueFromTrack(props, wrapperOffset, position, length);
};

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

const calculateHandlePosition = ({ handleWidth, trackWidth, min, max, value }) => {
    const halfHandleWidth = Math.floor(handleWidth / 2);
    return Math.floor((trackWidth / Math.abs(max - min) * (value - min)) - halfHandleWidth);
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

const decreaseValueToStep = (props) => {
    const { max, min, smallStep, value } = props;
    if (value % smallStep === 0) {
        return value - smallStep;
    }
    let updatedValue = value - (value % smallStep);
    updatedValue = trimValue(max, min, updatedValue);
    return updatedValue;
};

const increaseValueToStep = (props) => {
    const { max, min, smallStep, value } = props;
    let updatedValue = value - (value % smallStep) + smallStep;
    updatedValue = trimValue(max, min, updatedValue);
    return updatedValue;
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

const valueFromTrack = (props, wrapperOffset, left, length) => {
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
