[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm version](https://badge.fury.io/js/%40telerik%2Fkendo-react-inputs.svg)](https://badge.fury.io/js/%40telerik%2Fkendo-react-inputs)
[![Build Status](https://travis-ci.org/telerik/kendo-react-inputs.svg?branch=master)](https://travis-ci.org/telerik/kendo-react-inputs)

# Kendo UI Inputs for React

* [Overview](https://github.com/telerik/kendo-react-inputs#overview)
* [Basic Usage](https://github.com/telerik/kendo-react-inputs#basic-usage)
* [Installation](https://github.com/telerik/kendo-react-inputs#installation)
* [Browser Support](https://github.com/telerik/kendo-react-inputs#browser-support)
* [Glossary](https://github.com/telerik/kendo-react-inputs#glossary)
  * [Component](https://github.com/telerik/kendo-react-inputs#component)
  * [Package](https://github.com/telerik/kendo-react-inputs#package)

## Overview

This repository contains the source code and documentation of the Kendo UI Inputs package for React.

Currently, the package includes the Slider and Switch components.

Telerik works on porting the ones listed below too:

* ColorPicker
* MaskedTextBox
* NumericTextBox

For more information on upcoming Inputs features, refer to the [Roadmap](https://github.com/telerik/kendo-react-inputs/blob/master/docs/roadmap.md).

## Basic Usage

The Slider lets users select a value from a predefined range. These values can be increased or decreased over a pre-defined step by dragging a handle along the track, or by clicking the side arrow buttons.

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
        onChange(e) {
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

For more examples and available configuration options, refer to the [Slider documentation](https://github.com/telerik/kendo-react-inputs/blob/master/docs/slider/index.md).


The Switch The Kendo UI Switch for React is a component that lets the user toggle between checked/unchecked states.

````html-preview
    <div id="app"></div>
````
````jsx
    class SwitchContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                checked: false,
                disabled: false,
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
                    checked={this.state.checked}
                    disabled={this.state.disabled}
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
````

For more examples and available configuration options, refer to the [Switch documentation section](https://github.com/telerik/kendo-react-inputs/blob/master/docs/switch/index.md).

## Installation

The Inputs components are published as a [public scoped NPM package](https://docs.npmjs.com/misc/scope) in the [Telerik organization](https://www.npmjs.com/~telerik) in http://npmjs.org/.

Install it using NPM.

```sh
npm install --save @telerik/kendo-react-inputs;
```

Once installed, import the module.

```jsx
// ES2015 module syntax
import {Slider, Switch} from 'kendo-react-inputs';
```
```jsx
// CommonJS format
var Slider = require('kendo-react-inputs').Slider;
var Switch = require('kendo-react-inputs').Switch;
```

## Browser Support

The Inputs components work in all browsers supported by the React framework&mdash;Internet Explorer 9 and later versions.

## Glossary

Below are explained the basic terms the suite for React applies.

### Component

A Component refers to a [React Component](https://facebook.github.io/react/docs/jsx-in-depth.html#html-tags-vs.-react-components).

### Package

A package contains one or more components, developed in a single repository and distributed in a single NPM package. For example, the Slider, MaskedTextBox, NumericTextBox, and Switch components for React are part of the Inputs Package.
