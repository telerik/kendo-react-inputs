import Draggable from '../../src/Draggable';
import { mousedown, mousemove, mouseup, touchstart, touchmove, touchend, gesturestart, gesturemove } from '../interaction';

describe('Draggable', () => {
    let el;
    let draggable;
    let handler;

    beforeEach(() => {
        el = document.createElement("div");
        document.body.appendChild(el);
    });

    afterEach(() => {
        draggable && draggable.destroy();
        document.body.removeChild(el);
    });

    describe("Press", () => {
        beforeEach(() => {
            handler = jasmine.createSpy("onPress");

            draggable = new Draggable(el, {
                press: handler
            });
        });

        it('executes press with coordinates on mousedown', () => {
            mousedown(el, 100, 200);

            const args = handler.calls.mostRecent().args[0];

            expect(args.pageX).toEqual(100);
            expect(args.pageY).toEqual(200);
        });

        it("executes press with coordinates on touchstart", () => {
            touchstart(el, 100, 200);

            const args = handler.calls.mostRecent().args[0];

            expect(args.pageX).toEqual(100);
            expect(args.pageY).toEqual(200);
        });

        it("ignores multi touches", () => {
            touchstart(el, 100, 200);
            gesturestart(el, 100, 200, 101, 201);

            expect(handler).toHaveBeenCalledTimes(1);
        });
    });

    describe("Mouse Drag", () => {
        beforeEach(() => {
            handler = jasmine.createSpy("onDrag");

            draggable = new Draggable(el, {
                drag: handler
            });

            mousedown(el, 100, 200);
            mousemove(el, 101, 201);
        });

        it("triggers drag for down + move", () => {
            expect(handler).toHaveBeenCalled();
        });

        it("stops listening when released", () => {
            mouseup(el, 101, 201);
            mousemove(el, 101, 201);

            expect(handler).toHaveBeenCalledTimes(1);
        });
    });

    describe("Touch drag", () => {
        beforeEach(() => {
            handler = jasmine.createSpy("onDrag");

            draggable = new Draggable(el, {
                drag: handler
            });

            touchstart(el, 100, 200);
            touchmove(el, 101, 201);
        });

        it("triggers drag for down + move", () => {
            expect(handler).toHaveBeenCalled();
        });

        it("disposes drag handlers properly", () => {
            draggable.destroy();
            draggable = null;

            touchmove(el, 101, 201);

            expect(handler).toHaveBeenCalledTimes(1);
        });

        it("ignores gestures", () => {
            gesturemove(el, 101, 201, 102, 202);
            expect(handler).toHaveBeenCalledTimes(1);
        });
    });

    describe("Mouse up", () => {
        it("triggers release", () => {
            handler = jasmine.createSpy("onRelease");

            draggable = new Draggable(el, {
                release: handler
            });

            mousedown(el, 99, 200);
            mousemove(el, 101, 201);
            mouseup(el, 101, 201);
            expect(handler).toHaveBeenCalled();
        });
    });

    describe("Touch end", () => {
        beforeEach(() => {
            handler = jasmine.createSpy("onRelease");

            draggable = new Draggable(el, {
                release: handler
            });

            touchstart(el, 100, 200);
            touchmove(el, 101, 201);
            touchend(el, 101, 201);
        });

        it("triggers release on touchend", () => {
            expect(handler).toHaveBeenCalled();
        });

        it("disposes drag handlers properly", () => {
            draggable.destroy();
            draggable = null;

            touchend(el, 101, 201);

            expect(handler).toHaveBeenCalledTimes(1);
        });
    });

    describe('Emulated mouse events', () => {
        it("ignores mouse after touch", () => {
            handler = jasmine.createSpy("onPress");

            draggable = new Draggable(el, {
                press: handler,
                release: handler
            });

            // mouse events are triggered
            touchstart(el, 100, 200);
            touchend(el, 100, 200);
            mousedown(el, 100, 200);
            mouseup(el, 100, 200);

            expect(handler).toHaveBeenCalledTimes(2);
        });

        it("restores mouse listeners after a while", () => {
            const clock = jasmine.clock();
            clock.install();
            handler = jasmine.createSpy("onPress");

            draggable = new Draggable(el, {
                press: handler,
                release: handler
            });

            // mouse events are triggered
            touchstart(el, 100, 200);
            touchend(el, 100, 200);
            clock.tick(20000);
            mousedown(el, 100, 200);
            mouseup(el, 100, 200);

            expect(handler).toHaveBeenCalledTimes(4);
            clock.uninstall();
        });
    });
});
