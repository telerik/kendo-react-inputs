---
title: Overview
page_title: Overview | Kendo UI Slider for React
description: "Initialize the Kendo UI Slider for React and learn its basic configuration options."
slug: overview_slider_kendouiforreact
position: 1
---

# Slider Overview

The Kendo UI Slider for React is a widget that allows for a numeric input of values. The values can be increased or decreased over a pre-defined step by dragging a handle along the track, or by clicking the side arrow buttons.

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

## Initialization

To initialize the Kendo UI Slider for React:

1. Import the Kendo UI Slider for React npm package. The `react` and `react-DOM` npm packages are its dependencies, so once the Slider package is imported, the other two are automatically updated and loaded.
2. Create a state to define the ...
3. Call the `render()` method to ...

## Configuration

### Buttons

The side arrow buttons increase or decrease the values with the pre-defined step when clicked. By default, the `buttons` configuration option is set to `true`. If set to `false`, the buttons do not appear.

```html
    //code goes here
```

The buttons can display a name in the form of a tooltip. The `decreaseButtonTitle` and `increaseButtonTitle` options define the size of the title, if set.  

```html
    //code goes here
```

### Steps

The Slider supports two types of steps&mdash;a large and a small one.

The large step is set through the `min` and `max` options, which determine the number of large steps that appear when the Slider is displayed. For example, if `min: 0` and `max: 4`, the Slider displays ticks indicating four large steps. If `min: 2` and `max: 4`, the Slider displays two large steps.

The small step is defined through the `step` option. The small steps are applied whenever users interact with the Slider&mdash;for example, when the side arrow buttons are clicked or when the handle is dragged, the Slider value changes with small steps.

The `value` option commands the number of selected large steps that are displayed when the Slider is initially loaded.

The `value` and `step` parameters accept both integers and floating numbers.

```html
    //code goes here
```

### Ticks

Along the track, the ticks indicate the values resulting from each incremented pre-defined step. Ticks are configured through the `tickPlacement` option. They can be set to appear along the upper side or bottom side of a horizontal Slider, on the left or right side of a vertical Slider, or on both sides of the track. If necessary, they can be set not to show at all.   

```html
    //code goes here
```

The `title` option defines the title of the ticks. By default, the titles of each tick corresponds to its value. If you want them to show a particular title, define a callback which returns the title values you set in it.  

```html
    //code goes here
```

The `fixedtickwidth` option sets the width between each two ticks along the track. Its value must be set in pixels.

```html
    //code goes here
```

### Orientation

The default orientation of the Slider is horizontal. The `vertical` option, when set to `true`, allows you to change the orientation to vertical.

```html
    //code goes here
```

### State

By default, the Slider is a stateless component. The `onChange` event allows you to control its state.  

```html
    //code goes here
```

For detailed information on the Kendo UI Slider for React configuration, refer to its [client-side API documentation]({% slug ... %}).

## Keyboard Navigation

Below is the list with the keyboard shortcuts the Slider supports.

| SHORTCUT                            | DESCRIPTION         |
|:---                                 |:---                 |
| `Upper Arrow` & `Right Arrow` keys  | Increase the displayed Slider value with a small step. |
| `Down Arrow` & `Left Arrow` keys    | Decrease the displayed Slider value with a small step. |
| `Home`                              | Set the Slider to its minimum value.                   |
| `End`                               | Set the Slider to its maximum value.                   |
| `Tab`                               | (Accessibility mode) Focus elements.                   |

## Accessibility (Petyo - no?)

The Slider is WAI ARIA-accessible through the `Tab` key. The `aria-valuemin`, `aria-valuemax`, and `aria-valuetext` options define the accessibility values that are chosen on dragging the handle of the Slider.

## Demos

### Default Setup

The example below demonstrates the default setup of a Kendo UI Slider for React.

```html.preview
  //code goes here
```

### Scenario 1 (automatic generation of consequential numbers - possible, no?)

The example below demonstrates a Kendo UI Slider for React with ... (describe scenario).

```html.preview
  //code goes here
```

## Suggested Links (for Overviews only, Prev/Next nav at the end of each article)

* [Client-Side API Reference for Kendo UI Slider for React](...)
