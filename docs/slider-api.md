---
title: Client-Side API
page_title: Client-Side API | Kendo UI Slider for React
description: "Configure and customize the Kendo UI Slider for React through its client-side API reference."
slug: api_slider_kendouiforreact
position: 2
---

# kendoSlider (?)

Represents the Kendo UI Slider for React widget.

## Buttons

#### buttons `Boolean`*(default: "true")*

Makes the Slider side arrow buttons appear. When set to `false` the buttons are not displayed.

#### decreaseButtonTitle `String`*(default: "Decrease")*

The title of the decrease button of the Slider.

#### increaseButtonTitle `String`*(default: "Increase")*

The title of the increase button of the Slider.

## Steps  

#### max `Number`*(default: 10)*

The maximum value (large step) of the Slider. The attribute accepts both integers and floating numbers.

#### min `Number`*(default: 0)*

The minimum value (large step) of the Slider. The attribute accepts both integers and floating numbers.

#### smallStep `Number`*(default: 1)*

The small step value of the Slider. The attribute accepts only positive numbers.

#### value `Number`

The selected value (number of large steps) of the Slider when initially displayed.

## Ticks

#### tickPlacement `String`*(default: "both")*

Denotes the location of the tick marks in the Slider.

The available options are:

* `before` - Tick marks are located to the top side of the horizontal track or to the right side of a vertical track.
* `after` - Tick marks are located to the bottom side of the horizontal track or to the left side of the vertical track.
* `both` - Tick marks are located on both sides of the track.
* `none` - Tick marks are not visible.

#### title `String|Number`

Defines title of the ticks. The default title for each tick is its Slider value.

#### fixedtickwidth `Number`*(default: 20)*

Sets the width between each two ticks along the track. The value must be set in pixels.

## Orientation

#### vertical `Boolean`*(default: "false")*

Changes the orientation of the Slider from horizontal to vertical when set to `true`.

## State

#### onChange

Kireto goes here
