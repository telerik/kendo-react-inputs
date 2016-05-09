---
title: Overview
page_title: Overview | Kendo UI Slider for React
description: "Use the Kendo UI Slider component in a React project."
slug: overview_slider_kendouiforreact
position: 1
---

# Slider Overview

The Kendo UI Slider for React is a component that lets the user increase, decrease, and select pre-defined values by dragging its handle along the track, or by clicking the side arrow buttons.

The Kendo UI Slider for React is part of the Inputs `npm` package of the Kendo UI suite for React.

**Figure 1: A horizontal template of the Kendo UI Slider for React**

![Horizontal template of the Slider](images/slider.png)

1. Arrow buttons
2. Handle
3. Track
4. Selection indicator
5. Tick

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
              step: 2,
              value: 5
          };
      }

      onChange = (e) => {
          this.setState({
              value: e.value
          });
      }

      render() {
          return (
              <KendoReactInputs.Slider
                  max = {this.state.max}
                  min = {this.state.min}
                  onChange = {this.onChange}
                  smallStep = {this.state.step}
                  value = {this.state.value}
              />);
      }
  }

  ReactDOM.render(
      <SliderContainer />,
      document.getElementById('app')
  );
```

## Configuration

### Buttons

When enabled, the side buttons increase or decrease the component value with the pre-defined step. If the initial value does not directly match to a specific tick and the user clicks either of the buttons, the handle is placed on the next available tick. Each subsequent click moves the handle over the available ticks.

**Showing and Hiding**

By default, the [`showButtons`]({% slug api_slider_kendouiforreact %}#showbuttons-booleandefault-true) configuration property is set to `true`. If set to `false`, the buttons do not appear.

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
                step: 2,
                value: 5,
                showButtons: false
            };
        }

        onChange = (e) => {
            this.setState({
                value: e.value //e.value contains the newly set value of the component
            });
        }

        render() {
            return (
                <KendoReactInputs.Slider
                    max = {this.state.max}
                    min = {this.state.min}
                    onChange = {this.onChange}
                    smallStep = {this.state.step}
                    value = {this.state.value}
                    showButtons = {this.state.showButtons}
                />
            );
        }
    }

    ReactDOM.render(
        <SliderContainer />,
        document.getElementById('app')
    );
```

**Titles**

The title of the buttons can be controlled by using the [`decreaseButtonTitle`]({% slug api_slider_kendouiforreact %}#decreasebuttontitle-stringdefault-decrease) and [`increaseButtonTitle`]({% slug api_slider_kendouiforreact %}#increasebuttontitle-stringdefault-increase) properties, which accept `string` parameters.

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
                step: 2,
                increaseButtonTitle: 'Inc',
                decreaseButtonTitle: 'Dec',
                value: 5
            };
        }

        onChange = (e) => {
            this.setState({
                value: e.value
            });
        }

        render() {
            return (
                <KendoReactInputs.Slider
                    max = {this.state.max}
                    min = {this.state.min}
                    onChange = {this.onChange}
                    smallStep = {this.state.step}
                    increaseButtonTitle = {this.state.increaseButtonTitle}
                    decreaseButtonTitle = {this.state.decreaseButtonTitle}
                    value = {this.state.value}
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

The [`step`]({% slug api_slider_kendouiforreact %}#steps) property is used to split the track on equal ticks based on the [`min`]({% slug api_slider_kendouiforreact %}#min-numberdefault-0) and [`max`]({% slug api_slider_kendouiforreact %}#max-numberdefault-10) values. For example, if the `min` value is `0` (zero), the `max` value is `4` (four) and the [`smallStep`]({% slug api_slider_kendouiforreact %}#smallstep-numberdefault-1) is `1` (one), the Slider displays ticks indicating four steps. If the `min` value is `2` (two), the `max` value is `4` (four) and the `smallStep` is `1` (one), the Slider displays two steps.

The step is defined through the `smallStep` property. The small steps are applied whenever the user interacts with the Slider. When the side arrow buttons are clicked, or when the handle is dragged, the Slider value changes with small steps.

The `smallStep` property accepts both `integer` and `float` values.

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
                value: 5
            };
        }

        onChange = (e) => {
            this.setState({
                value: e.value
            });
        }

        render() {
            return (
                <KendoReactInputs.Slider
                    max = {this.state.max}
                    min = {this.state.min}
                    onChange = {this.onChange}
                    smallStep = {this.state.step}
                    value = {this.state.value}
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

Along the track, the ticks indicate the values resulting from each incremented pre-defined step.

**Placement**

Ticks are configured through the [`tickPlacement`]({% slug api_slider_kendouiforreact %}#tickplacement-stringdefault-both) property. They can be set to appear along the upper side or bottom side of a horizontal Slider, on the left or right side of a vertical Slider, or on both sides of the track. If necessary, they can be set not to show at all.

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
                step: 2.5,
                tickPlacement: "after",
                value: 5
            };
        }

        onChange = (e) => {
            this.setState({
                value: e.value
            });
        }

        render() {
            return (
                <KendoReactInputs.Slider
                    max = {this.state.max}
                    min = {this.state.min}
                    onChange = {this.onChange}
                    smallStep = {this.state.step}
                    tickPlacement = {this.state.tickPlacement}
                    value = {this.state.value}
                />
            );
        }
    }

    ReactDOM.render(
        <SliderContainer />,
        document.getElementById('app')
    );
```

**Titles**

The [`title`]({% slug api_slider_kendouiforreact %}#title-stringfunction) property defines the titles of the ticks. By default, the title of each tick corresponds to its value. If you want to customize the title, use a callback.

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
                value: 5
            };
        }

        title = (value) => {
            if (value > 5) { //`value` contains the value of the current tick being rendered
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
                <KendoReactInputs.Slider
                    max = {this.state.max}
                    min = {this.state.min}
                    onChange = {this.onChange}
                    smallStep = {this.state.step}
                    title = {this.title}
                    value = {this.state.value}
                />
            );
        }
    }

    ReactDOM.render(
        <SliderContainer />,
        document.getElementById('app')
    );
```

**Width**

The [`fixedTickWidth`]({% slug api_slider_kendouiforreact %}#fixedtickwidth-number) property sets the width between each two ticks along the track. Its value must be set in pixels. When the property is enabled, the component gets resized to fit all ticks with the corresponding width. If the `fixedTickWidth` property is not set, the component adjusts the size of the ticks in a way that the sum matches the actual size of the component.

```html-preview
  <div id="app"></div>
```
```jsx
    class SliderContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                max: 8,
                min: 0,
                step: 2,
                fixedTickWidth: 100, //the value should be set in pixels
                value: 5
            };
        }

        onChange = (e) => {
            this.setState({
                value: e.value //e.value contains the newly set value of the component
            });
        }

        render() {
            return (
                <KendoReactInputs.Slider
                    max = {this.state.max}
                    min = {this.state.min}
                    onChange = {this.onChange}
                    smallStep = {this.state.step}
                    fixedTickWidth = {this.state.fixedTickWidth}
                    value = {this.state.value}
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

The Slider supports two modes of orientations&mdash;horizontal, which is the default one, and vertical, which can be applied by setting the [`vertical`]({% slug api_slider_kendouiforreact %}#vertical-booleandefault-false) property to `true`.

In horizontal mode, the Slider component displays the smallest value to the left and the largest to the right. In vertical, the component displays the smallest value at the bottom and the largest at the top.

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
                step: 2,
                value: 5
            };
        }

        onChange = (e) => {
            this.setState({
                value: e.value
            });
        }

        render() {
            return (
                <KendoReactInputs.Slider
                    max = {this.state.max}
                    min = {this.state.min}
                    onChange = {this.onChange}
                    smallStep = {this.state.step}
                    vertical
                    value = {this.state.value}
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

The Slider is designed as a stateless component. To store its state and configuration properties, wrap it in a high-order component.

The [`onChange`]({% slug api_slider_kendouiforreact %}#onchange-function) event fires each time a user interacts with the Slider. The new value is passed as an argument to the `onChange` callback.

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
                value: 5
            };
        }

        onChange = (e) => {
            this.setState({
                value: e.value //e.value contains the newly set value of the component
            });
        }

        render() {
            return (
                <KendoReactInputs.Slider
                    max = {this.state.max}
                    min = {this.state.min}
                    onChange = {this.onChange}
                    smallStep = {this.state.step}
                    value = {this.state.value}
                />
            );
        }
    }

    ReactDOM.render(
        <SliderContainer />,
        document.getElementById('app')
    );
```

### Features

The Slider allows you to prevent user interaction with the component. By default, the Slider is enabled and the [`disabled`]({% slug api_slider_kendouiforreact %}#disabled-booleandefault-false) property is set to `false`. To disable it, set `disabled` to `true`.

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
                step: 2,
                disabled: true,
                value: 5
            };
        }

        onChange = (e) => {
            this.setState({
                value: e.value //e.value contains the newly set value of the component
            });
        }

        render() {
            return (
                <KendoReactInputs.Slider
                    max = {this.state.max}
                    min = {this.state.min}
                    onChange = {this.onChange}
                    smallStep = {this.state.step}
                    disabled = {this.state.disabled}
                    value = {this.state.value}
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
| `Tab`                               | (Accessibility mode) Focus the handle element.         |

## Accessibility

The Slider is WAI ARIA-accessible through the `Tab` key. The `aria-valuemin`, `aria-valuemax`, and `aria-valuetext` properties define the accessibility values when the user drags the handle of the Slider or interacts with the Slider through its buttons.

## Responsiveness

One of the solutions for dynamic resizing in React applications is the [`css-element-queries`](http://marcj.github.io/css-element-queries/) package. It provides resize events using CSS and can be easily implemented along with the Kendo UI Slider for React.

For an example of a possible implementation, refer to [this GitHub repository](https://github.com/telerik/kendo-react-inputs/blob/master/examples/cdn.html).

## Suggested Links

* [API Reference of the Slider Component]({% slug api_slider_kendouiforreact %})
