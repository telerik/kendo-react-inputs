---
title: Overview
page_title: Overview | Kendo UI Switch for React
description: "Use the Kendo UI Switch component in a React project."
slug: overview_switch_kendouiforreact
position: 1
---

# Switch Overview

The Kendo UI Switch for React is a component that lets the user toggle between checked/unchecked states.

The Kendo UI Switch for React is part of the Inputs `npm` package of the Kendo UI suite for React.

**Screenshot here**

## Demos

### Default Setup

The example below demonstrates the default setup of a Kendo UI Slider for React.

```html-preview
  <div id="app"></div>
```
```jsx
  class SwitchComponent extends React.Component {
      constructor(props) {
          super(props);
      }
      onChange = (e) => {
          this.setState({
              checked: e.checked
          });
      };
      render() {
          return (
              <Switch
                  onChange={this.onChange}
              />
          );
      }
  }
  ReactDOM.render(
      <SwitchComponent />,
      document.getElementById('app')
  );
```

## Configuration

### Checked

Sets the initial value of the component. Each subsequent click moves the handle over the newly selected state.

```html-preview
  <div id="app"></div>
```
```jsx
    class SwitchContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                checked: true
            };
        }
        onChange = (e) => {
            this.setState({
                checked: e.checked
            });
        };
        render() {
            return (
                <Switch
                    checked={this.state.checked}
                    onChange={this.onChange}
                />
            );
        }
    }
    ReactDOM.render(
        <SwitchContainer />,
        document.getElementById('app')
    );
```

### Labels

The title of the labels can be controlled by using the [`onLabel`]({% slug api_switch_kendouiforreact %}#onlabel-stringdefault-decrease) and [`offLabel`]({% slug api_switch_kendouiforreact %}#offlabel-stringdefault-increase) properties, which accept `string` parameters.

```html-preview
  <div id="app"></div>
```
```jsx
    class SwitchContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                onLabel: 'ON',
                offLabel: 'OFF'
            };
        }
        onChange = (e) => {
            this.setState({
                checked: e.checked
            });
        };
        render() {
            return (
                <Switch
                    offLabel={this.state.offLabel}
                    onChange={this.onChange}
                    onLabel={this.state.onLabel}
                />
            );
        }
    }
    ReactDOM.render(
        <SwitchContainer />,
        document.getElementById('app')
    );
```

### State

The Switch is designed as a stateless component. To store its state and configuration properties, wrap it in a high-order component.

The [`onChange`]({% slug api_switch_kendouiforreact %}#onchange-function) event fires each time a user interacts with the Switch. The new value is passed as an argument to the `onChange` callback.

```html
  <div id="app"></div>
```
```jsx
    class SwitchContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                checked: true
            };
        }
        onChange = (e) => {
            this.setState({
                checked: e.checked
            });
        };
        render() {
            return (
                <Switch
                    checked={this.state.checked}
                    onChange={this.onChange}
                />
            );
        }
    }
    ReactDOM.render(
        <SwitchContainer />,
        document.getElementById('app')
    );
```

### Features

The component can be disabled, when its [`disabled`]({% slug api_switch_kendouiforreact %}#disabled-booleandefault-false) property is set to `true`.

```html-preview
  <div id="app"></div>
```
```jsx
    class SwitchContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                checked: false,
                disabled: true
            };
        }
        onChange = (e) => {
            this.setState({
                checked: e.checked
            });
        };
        render() {
            return (
                <Switch
                    checked={this.state.checked}
                    disabled={this.state.disabled}
                    onChange={this.onChange}
                />
            );
        }
    }
    ReactDOM.render(
        <SwitchContainer />,
        document.getElementById('app')
    );
```

For detailed information on the Kendo UI Switch for React configuration, refer to its [client-side API documentation]({% slug api_switch_kendouiforreact %}).

## Keyboard Navigation

Below is the list with the keyboard shortcuts the Switch supports.

| SHORTCUT                            | DESCRIPTION         |
|:---                                 |:---                 |
| `Upper Arrow` & `Right Arrow` keys  | Sets the component to checked state. |
| `Down Arrow` & `Left Arrow` keys    | Sets the component to unchecked state. |

## Accessibility

For accessibility radio or checkbox components many times require a fieldset and legend elements or an ARIA substitute. But in this case with thet Switch component, it’s not needed because the labels by themselves are clear.

## Suggested Links

* [API Reference of the Slider Component]({% slug api_switch_kendouiforreact %})
