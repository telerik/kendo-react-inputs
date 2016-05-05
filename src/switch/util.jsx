const getTranslateX = (element) => {
    const transXRegex = /\.*translateX\((.*)px\)/i;
    return parseInt(transXRegex.exec(element.style.transform)[1]);
};


const componentElements = (node, styles) => {
    const handle = node.getElementsByClassName(styles['switch-handle'])[0];
    const background = node.getElementsByClassName(styles['switch-background'])[0];
    const wrapper = node.getElementsByClassName(styles['switch-container'])[0];

    return {
        handle,
        background,
        wrapper
    };
};

const calculateConstrain = (elements) => {
    const { handle, wrapper } = elements;
    const constrain = wrapper.offsetWidth - handle.offsetWidth - 4;
    return constrain;
};

export {
    getTranslateX,
    calculateConstrain,
    componentElements
};
