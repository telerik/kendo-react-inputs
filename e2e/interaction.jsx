/* eslint max-params: [2, 5] */

const aMouseEvent = (type, x, y) =>
        new MouseEvent(type, {
            bubbles: true,
            cancelable: true,
            view: window,
            clientX: x,
            clientY: y
        });

const aTouch = (el, x, y, id) =>
    new Touch({
        identifier: id,
        target: el,
        pageX: x,
        pageY: y
    });

const aTouchEvent = (type, touches) =>
    new TouchEvent(type, {
        touches: (type === "touchend" ? [] : touches),
        changedTouches: touches
    });

export function mousedown(element, x, y) {
    element.dispatchEvent(aMouseEvent("mousedown", x, y));
}

export function mousemove(element, x, y) {
    element.dispatchEvent(aMouseEvent("mousemove", x, y));
}

export function mouseup(element, x, y) {
    element.dispatchEvent(aMouseEvent("mouseup", x, y));
}

export function touchstart(element, x, y) {
    element.dispatchEvent(aTouchEvent("touchstart", [ aTouch(element, x, y, 100) ]));
}

export function touchmove(element, x, y) {
    element.dispatchEvent(aTouchEvent("touchmove", [ aTouch(element, x, y, 100) ]));
}

export function touchend(element, x, y) {
    element.dispatchEvent(aTouchEvent("touchend", [ aTouch(element, x, y, 100) ]));
}

export function gesturestart(element, x1, y1, x2, y2) {
    element.dispatchEvent(aTouchEvent("touchstart", [
        aTouch(element, x1, y1, 100),
        aTouch(element, x1, y2, 101)
    ]));
}

export function gesturemove(element, x1, y1, x2, y2) {
    element.dispatchEvent(aTouchEvent("touchmove", [
        aTouch(element, x1, y1, 100),
        aTouch(element, x1, y2, 101)
    ]));
}

export function gestureend(element, x1, y1, x2, y2) {
    element.dispatchEvent(aTouchEvent("touchend", [
        aTouch(element, x1, y1, 100),
        aTouch(element, x1, y2, 101)
    ]));
}
