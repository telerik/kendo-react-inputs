[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Kendo UI Inputs Components for React

* [Overview](https://github.com/telerik/kendo-react-inputs#overview)
* [Glossary](https://github.com/telerik/kendo-react-inputs#glossary)
  * [Component](https://github.com/telerik/kendo-react-inputs#component)
  * [Package](https://github.com/telerik/kendo-react-inputs#package)
  * [Package Version](https://github.com/telerik/kendo-react-inputs#package-version)
* [Inputs Components](https://github.com/telerik/kendo-react-inputs#inputs-package-components)
* [Basic Usage](https://github.com/telerik/kendo-react-inputs#basic-usage)
* [Get Started](https://github.com/telerik/kendo-react-inputs#get-started)
  * [Prerequisites](https://github.com/telerik/kendo-react-inputs#prerequisites)
  * [Installation](https://github.com/telerik/kendo-react-inputs#installation)

## Overview

This repository holds the source code files and documentation of the Kendo UI components for React included in the Inputs distribution of the suite.

## Glossary

Below are explained the basic terms used the Kendo UI suite for React applies.

### Component

A Component is a Kendo UI control developed to operate in the React ecosystem. For example, the Kendo UI Slider for React is a component.

### Package

A package is a conventional term used to designate a group of several components which share common functionalities and/or common codebase. For example, the Kendo UI Slider, MaskedTextBox, NumericTextBox, and Switch components for React are part of the Inputs Package.

### Package Version

Each package has a package release version of its own&mdash;for example, Inputs v.3.5.

Because of the continuous release cycle, Marketing Releases include packages with different versions. For example, the R2 2016 Marketing Release may feature the Inputs v.3.5 and Buttons v.2.1 releases.

## Inputs Components

Currently, the Kendo UI Inputs for React consists of the Slider component.

For more information on other components intended for implementation, refer to the [Roadmap of the Kendo UI Inputs for React](https://github.com/telerik/kendo-react-inputs/blob/master/docs/roadmap.md).

## Basic Usage

The Kendo UI Slider for React lets users select a value from a predefined range. These values can be increased or decreased over a pre-defined step by dragging a handle along the track, or by clicking the side arrow buttons.

The demo below demonstrates the basic usage of the component.

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

For more information, refer to the [documentation on the Slider](https://github.com/telerik/kendo-react-inputs/blob/master/docs/slider/overview.md).

## Get Started

Below are listed the steps for you to follow when setting up and running the Inputs components.

### Installation

To install the Kendo UI Inputs for React, run the command below.

    npm install kendo-react-inputs;

    //ES6 Modules
    import Slider from 'kendo-react-inputs';
    //or
    import { Slider } from 'kendo-react-inputs';

### Browser Support

The Kendo UI Inputs components for React support all browsers that are supported by the React framework&mdash;Internet Explorer 9 and later.
