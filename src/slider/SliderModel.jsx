import util from './util';

class SliderModel {
    constructor(props, wrapper, track) {
        this.props = props;
        this.wrapper = wrapper;
        this.track = track;
        this.tickSizes = this.getTickSizes();
    }

    getTickSizes() {
        const { max, min, smallStep } = this.props;
        const trackWidth = this.trackWidth();

        return util.calculateTickSizes(trackWidth, min, max, smallStep);
    }

    trackWidth() {
        if (this.props.fixedTickWidth) {
            return util.calculateFixedTrackSize(this.props);
        }

        return util.calculateTrackSize(
            this.elementSize(this.wrapper),
            this.elementOffset(this.track)
        );
    }

    resizeTrack() {
        const orientation = this.props.vertical ? 'height' : 'width';
        const trackWidth = this.trackWidth();

        this.track.style[orientation] = `${trackWidth}px`;
    }

    resizeTicks(ticksConainer, ticks) {
        const dimension = this.props.vertical ? "height" : "width";

        [ ...ticks ].map((tick, index) => tick.style[dimension] = `${this.tickSizes[index]}px`);

        if (this.props.vertical) {
            this.adjustPadding(ticksConainer);
        }
    }

    resizeWrapper() {
        const dimension = this.props.vertical ? "height" : "width";
        const wrapperSize = this.elementSize(this.wrapper);
        const trackWidth = util.calculateTrackSize(wrapperSize, this.elementOffset(this.track));
        const fixedTrackWidth = util.calculateFixedTrackSize(this.props);

        if (trackWidth > fixedTrackWidth) {
            this.wrapper.style[dimension] = `${ wrapperSize - (trackWidth - fixedTrackWidth)}px`;
        } else {
            this.wrapper.style[dimension] = `${ wrapperSize + (fixedTrackWidth - trackWidth)}px`;
        }
    }

    positionHandle(dragHandle) {
        const { max, min, vertical } = this.props;
        const position = vertical ? 'bottom' : 'left';
        const trackWidth = this.trackWidth();
        const value = util.trimValue(max, min, this.props.value);

        const handlePosition = util.calculateHandlePosition({
            min,
            max,
            value,
            trackWidth,
            handleWidth: dragHandle.offsetWidth
        });

        dragHandle.style[position] = `${handlePosition}px`;
    }

    positionSelection(dragHandle, selection) {
        const dimension = this.props.vertical ? 'height' : 'width';
        const handleWidth = Math.floor(dragHandle.offsetWidth / 2);
        const handleOffset = this.elementOffset(dragHandle);

        selection.style[dimension] = `${handleOffset + handleWidth}px`;
    }

    adjustPadding(ticksConainer) {
        const totalTickSize = this.tickSizes.reduce((prev, curr) => prev + curr, 0);
        const trackWidth = this.trackWidth();
        const reminder = trackWidth - totalTickSize;

        if (reminder !== 0) {
            const padding = reminder + this.elementOffset(this.track);
            ticksConainer.style.paddingTop = `${padding}px`;
        }
    }

    elementOffset(element) {
        const { vertical } = this.props;
        const style = getComputedStyle(element);

        return parseInt(vertical ? style.bottom : style.left, 10);
    }

    elementSize(element) {
        const { vertical } = this.props;

        return vertical ? element.clientHeight : element.clientWidth;
    }
}

export default SliderModel;
