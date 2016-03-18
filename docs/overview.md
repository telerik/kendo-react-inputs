---
title: Overview
page_title: Overview | Kendo UI Inputs for React
description: "Learn which Kendo UI components for React the Inputs package delivers."
slug: overview_inputs_kendouiforreact
position: 1
---

// location of the file (gulp docs displays files in the docs directory only)

// the name of the file README.md, while the metadata follow the established pattern

// slugs when approached from GitHub result in error 500

// should we show Gulp Tasks section (external or internal)

// should we list each and every file in each and every directory

// Get Started general where to locate, gulp docs cli command?, add license/copyright/disclaimers?

// in GitHub will there be Date Inputs, Interaction, ScrollBar, ToolBar repos (acc to the listed packages in the wire frame)

# Kendo UI Inputs for React (draft)

## Inputs Package Overview

Inputs are fields which allow for an input of data based on a specific and predefined format. The Inputs package includes the Kendo UI for React MaskedTextBox, NumericTextBox, Switch, and Slider components.

### MaskedTextBox

The MaskedTextBox allows user input based on a specific format that can be defined through using mask options. Mask options represent mask rules and determine the format of the content that is expected to be filled out. The MaskedTextBox also has predefined rules which specify the required or optional input of digits, letters, and characters. It supports configuration options that can be set during initialization, such as the value of the component and its mask, custom mask rules, prompt characters, and culture names, and provides for the application of custom rules for its configuration options.

### NumericTextBox

The NumericTextBox supports numeric entries only and converts input elements into a numeric, percentage, or currency textbox. Its conversion data types are applied according to their predefined format. The NumericTextBox renders spin buttons which allow the increase and decrease of values based on predefined steps and also supports cultures. It supports configuration options that can be set during initialization, such as the minimum and maximum values, incremental steps, number precision and format.  

### Switch

The Switch is used to display two exclusive choices&mdash;when initialized, it shows the currently selected option; when users slide it, they reveal and, in this way, select the other option.

### Slider  

The Slider lets users select a value from a predefined range. The values can be increased or decreased over a pre-defined step by dragging a handle along the track, or by clicking the side arrow buttons. The component supports two modes of display&mdash;horizontal and vertical.

## Inputs Package GitHub Repository

All files related to the installation, configuration and documentation of the Kendo UI Inputs components for React are stored in GitHub. Find more about the Inputs package repository below.

### Structure

The content of the Inputs GitHub repository is distributed between a number of directories.

| Directory   | Content                                                       | Comments
|:---         |:---                                                           |:---      
|`src`        | Contains the source code of the Inputs components for React.  | All files should be have the `.jsx` extensions so that the build scripts are able to pick them.
|`src/slider` | Contains the source code of the Slider component.             |
|`test`       | Contains the tests for the Inputs components for React.       | The tests are transpiled just like the source code itself, and are run using Jasmine in NodeJS.
|`test/slider`| Contains the tests for the Slider component.                  |
|`examples`   | Hosts the demos for the Inputs components fro React.          |
|`docs`       | Contains the markdown files that document the specifics of the Inputs components for React. |
|`e2e`        | Contains...                                                   |
|`e2e/slider` | Contains...                                                   |

### Gulp Tasks

| Command`          | Result                                                        
|:---               |:---                                                           
|`build-npm-package`| Builds the scripts and styles in `dist/npm` in CommonJS format.  
|`build-cdn`        | Builds the scripts and styles in `dist/cdn` in UMD format.      
|`start`            | Starts the `webpack-dev-server`&mdash;with browsersync in front of it&mdash;suitable for example preview, development, and testing.        
|`test`             | Runs the tests with Jasmine in NodeJS.
|`watch-test`       | Runs the tests in the `watch` mode.                                                   
|`docs`             | Launches a preview server for the documentation in the `docs` directory.                                                  

## Suggested Links

Articles on Kendo UI Inputs components for React:

* [Get Started with the MaskedTextBox Component](...)
* [Client-Side API Reference of the MaskedTextBox Component](...)
* [Get Started with the NumericTextBox Component](...)
* [Client-Side API Reference of the NumericTextBox Component](...)
* [Get Started with the Switch Component](...)
* [Client-Side API Reference of the Switch Component](...)
* [Get Started with the Slider Component]({% slug overview_slider_kendouiforreact %})
* [Client-Side API Reference of the Slider Component]({% slug api_slider_kendouiforreact %})
