---
title: Overview
page_title: Overview | Kendo UI Slider for React
description: "Use the Kendo UI Slider component in a React project."
slug: overview_slider_kendouiforreact
position: 1
---

# Slider Overview

The Kendo UI Slider is a React component that lets users select a value from a predefined range. The values can be increased or decreased over a pre-defined step by dragging a handle along the track, or by clicking the side arrow buttons. When used in its horizontal mode, the Slider component displays the smallest value on the left and the largest on the right. When used in its vertical mode, the Slider component displays the smallest value on the bottom and the largest on the top.

The Kendo UI Slider for React is a component that is part of the Inputs `npm` package of the Kendo UI for React suite. It is designed as a stateless component, which means that to store its state and configuration options, you should use a high-order component.

The main purpose of the Slider is to offer an extended functionality over the native `<input type="range" />` component.

**Figure 1. A horizontal template of the Kendo UI Slider for React**

Vasko goes here: template screen - horizontal, parts indicated:
1. track
2. handle
3. ticks
4. arrow buttons
5. button title

**Figure 2. A vertical template of the Kendo UI Slider for React**

Vasko goes here: template screen - vertical, parts indicated:
1. track
2. handle
3. ticks
4. arrow buttons
5. button title

## Configuration

### Buttons

When enabled, the side buttons increase or decrease the component value with the pre-defined step. If the initial value cannot be directly matched to a specific tick, the handle is placed to the next possible tick when either of the buttons is clicked. Then each subsequent click moves the handle over the ticks. By default, the `buttons` configuration option is set to `true`. If set to `false`, the buttons do not appear.

```html
  <div id="app"></div>
```
```jsx
    class SliderContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                max: 10,
                min: 0,
                step: 2,
                buttons: false
            };
        }
        onChange = (e) => {
            this.setState({
                value: e.value //e.value contains the newly set value of the component
            });
        }
        render() {
            return (
                <Slider
                    max = {this.state.max}
                    min = {this.state.min}
                    onChange = {this.onChange}
                    smallStep = {this.state.step}
                    buttons = {this.state.buttons}
                />
            );
        }
    }

    ReactDOM.render(
        <SliderContainer />,
        document.getElementById('app')
    );
```

The title of the buttons can be controlled by using the `decreaseButtonTitle` and `increaseButtonTitle` options. These options accept `string` parameters.

```html
  <div id="app"></div>
```
```jsx
    class SliderContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                max: 10,
                min: 0,
                step: 2,
                increaseButtonTitle: 'Inc',
                decreaseButtonTitle: 'Dec'
            };
        }
        onChange = (e) => {
            this.setState({
                value: e.value
            });
        }
        render() {
            return (
                <Slider
                    max = {this.state.max}
                    min = {this.state.min}
                    onChange = {this.onChange}
                    smallStep = {this.state.step}
                    increaseButtonTitle = {this.state.increaseButtonTitle}
                    decreaseButtonTitle = {this.state.decreaseButtonTitle}
                />
            );
        }
    }

    ReactDOM.render(
        <SliderContainer />,
        document.getElementById('app')
    );
```

### Steps

The step option is used to split the track on equal ticks based on the `min` and `max` values. For example, if `min: 0`, `max: 4` and `smallStep: 1`, the Slider displays ticks indicating four steps. If `min: 2`, `max: 4` and `smallStep: 1`, the Slider displays two steps.

The step is defined through the `smallStep` option. The small steps are applied whenever users interact with the Slider. For example, when the side arrow buttons are clicked, or when the handle is dragged, the Slider value changes with small steps.

The `smallStep` option accepts both `integer` and `floating` values.

```html
  <div id="app"></div>
```
```jsx
    class SliderContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                max: 10,
                min: 0,
                step: 2.5
            };
        }
        onChange = (e) => {
            this.setState({
                value: e.value
            });
        }
        render() {
            return (
                <Slider
                    max = {this.state.max}
                    min = {this.state.min}
                    onChange = {this.onChange}
                    smallStep = {this.state.step}
                />
            );
        }
    }

    ReactDOM.render(
        <SliderContainer />,
        document.getElementById('app')
    );
```

### Ticks

Along the track, the ticks indicate the values resulting from each incremented pre-defined step. Ticks are configured through the `tickPlacement` option. They can be set to appear along the upper side or bottom side of a horizontal Slider, on the left or right side of a vertical Slider, or on both sides of the track. If necessary, they can be set not to show at all.   

```html
  <div id="app"></div>
```
```jsx
     class SliderContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                max: 10,
                min: 0,
                step: 2.5,
                tickPlacement: "none"
            };
        }
        onChange = (e) => {
            this.setState({
                value: e.value
            });
        }
        render() {
            return (
                <Slider
                    max = {this.state.max}
                    min = {this.state.min}
                    onChange = {this.onChange}
                    smallStep = {this.state.step}
                    tickPlacement = {this.state.tickPlacement}
                />
            );
        }
    }

    ReactDOM.render(
        <SliderContainer />,
        document.getElementById('app')
    );
```

The `title` option defines the titles of the ticks. By default, the title of each tick corresponds to its value. If you want a tick to display a particular title, define a callback. It will be called with its current value as a parameter and return the title of the `tick` that is to be rendered.

```html
  <div id="app"></div>
```
```jsx
    class SliderContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                max: 10,
                min: 0,
                step: 2
            };
        }
        title = (e) => {
            if (e.value > 10) { //e.value contains the value of the current tick being rendered
                return 'high'
            }

            return 'low'
        }
        onChange = (e) => {
            this.setState({
                value: e.value //e.value contains the newly set value of the component
            });
        }
        render() {
            return (
                <Slider
                    max = {this.state.max}
                    min = {this.state.min}
                    onChange = {this.onChange}
                    smallStep = {this.state.step}
                />
            );
        }
    }

    ReactDOM.render(
        <SliderContainer />,
        document.getElementById('app')
    );
```

The `fixedtickwidth` option sets the width between each two ticks along the track. Its value must be set in pixels. When the option is enabled, the component gets resized to fit all ticks with the corresponding width. If no `fixedTickWidth` options is defined, the component adjusts the size of the ticks in a way that the sum matches the actual size of the component.

```html
  <div id="app"></div>
```
```jsx
    class SliderContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                max: 10,
                min: 0,
                step: 2,
                fixedTickWidth: 20 //the value should be set in pixels
            };
        }
        onChange = (e) => {
            this.setState({
                value: e.value //e.value contains the newly set value of the component
            });
        }
        render() {
            return (
                <Slider
                    max = {this.state.max}
                    min = {this.state.min}
                    onChange = {this.onChange}
                    smallStep = {this.state.step}
                    fixedTickWidth = {this.state.fixedTickWidth}
                />
            );
        }
    }

    ReactDOM.render(
        <SliderContainer />,
        document.getElementById('app')
    );
```

### Orientation

The default orientation of the Slider is horizontal. The `vertical` option, when set to `true`, allows you to change the orientation to vertical.

```html
  <div id="app"></div>
```
```jsx
    class SliderContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                max: 10,
                min: 0,
                step: 2
            };
        }
        onChange = (e) => {
            this.setState({
                value: e.value
            });
        }
        render() {
            return (
                <Slider
                    max = {this.state.max}
                    min = {this.state.min}
                    onChange = {this.onChange}
                    smallStep = {this.state.step}
                    vertical
                />
            );
        }
    }

    ReactDOM.render(
        <SliderContainer />,
        document.getElementById('app')
    );
```

### State

The Slider is a stateless component. That is why it should be placed within a high-order component that controls its state and holds the configuration. The `onChange` event is fired each time when a user interaction with the component happens. The new value is then passed as an argument to the `onChange` callback, so that you are able to handle the state of the component when needed.

```html
  <div id="app"></div>
```
```jsx
    class SliderContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                max: 10,
                min: 0,
                step: 2
            };
        }
        onChange = (e) => {
            this.setState({
                value: e.value //e.value contains the newly set value of the component
            });
        }
        render() {
            return (
                <Slider
                    max = {this.state.max}
                    min = {this.state.min}
                    onChange = {this.onChange}
                    smallStep = {this.state.step}
                />
            );
        }
    }

    ReactDOM.render(
        <SliderContainer />,
        document.getElementById('app')
    );
```

For detailed information on the Kendo UI Slider for React configuration, refer to its [client-side API documentation]({% slug api_slider_kendouiforreact %}).

## Keyboard Navigation

Below is the list with the keyboard shortcuts the Slider supports.

| SHORTCUT                            | DESCRIPTION         |
|:---                                 |:---                 |
| `Upper Arrow` & `Right Arrow` keys  | Increase the displayed Slider value with a small step. |
| `Down Arrow` & `Left Arrow` keys    | Decrease the displayed Slider value with a small step. |
| `Home`                              | Set the Slider to its minimum value.                   |
| `End`                               | Set the Slider to its maximum value.                   |
| `Tab`                               | (Accessibility mode) Focus the handle element.                   |

## Accessibility

The Slider is WAI ARIA-accessible through the `Tab` key. The `aria-valuemin`, `aria-valuemax`, and `aria-valuetext` options define the accessibility values that are chosen on dragging the handle of the Slider or on interacting with the Slider through its buttons.

## Demos

### Default Setup

The example below demonstrates the default setup of a Kendo UI Slider for React.

```html-preview
  <div id="app"></div>
```
```jsx
  class SliderContainer extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              max: 10,
              min: 0,
              step: 2
          };
      }
      onChange = (e) => {
          this.setState({
              value: e.value
          });
      }
      render() {
          return (
              <Slider
                  max = {this.state.max}
                  min = {this.state.min}
                  onChange = {this.onChange}
                  smallStep = {this.state.step}
              />);
      }
  }

  ReactDOM.render(
      <SliderContainer />,
      document.getElementById('app')
  );
```

### Scenario 1

The example below demonstrates a Kendo UI Slider for React with ... (describe scenario).

```html-preview
  //code goes here
```

## Suggested Links

* [Client-Side API Reference for Kendo UI Slider for React]({% slug api_slider_kendouiforreact %})
