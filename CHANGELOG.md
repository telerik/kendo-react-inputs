<a name="0.1.3"></a>
## [0.1.3](https://github.com/telerik/kendo-react-inputs/compare/v0.1.2...v0.1.3) (2016-05-20)


### Bug Fixes

* **slider:** define default props ([#30](https://github.com/telerik/kendo-react-inputs/issues/30)) ([66dcefb](https://github.com/telerik/kendo-react-inputs/commit/66dcefb))
* **slider:** fix how document events are attached/removed ([7a2801a](https://github.com/telerik/kendo-react-inputs/commit/7a2801a))
* **slider:** focus draghandle when component is clicked [#15](https://github.com/telerik/kendo-react-inputs/issues/15) ([c83de7f](https://github.com/telerik/kendo-react-inputs/commit/c83de7f))


### Features

* **slider:** add drag and drop functionality ([4a04f20](https://github.com/telerik/kendo-react-inputs/commit/4a04f20))
* **slider:** add pressed state to slider handle ([a54f75f](https://github.com/telerik/kendo-react-inputs/commit/a54f75f))



<a name="0.1.2"></a>
## 0.1.2 (2016-03-31)


### Bug Fixes

* Move react and react-dom as peer dependencies ([baff189](https://github.com/telerik/kendo-react-inputs/commit/baff1898bf4315b28fb159fcc2186bab5c60c66b)), fixes [#10](https://github.com/telerik/kendo-react-inputs/issues/10)


<a name="0.1.1"></a>
## 0.1.1 (2016-03-31)


### Bug Fixes

* Correct global variable in CDN ([3e94e2a](https://github.com/telerik/kendo-react-inputs/commit/3e94e2a)), closes [#9](https://github.com/telerik/kendo-react-inputs/issues/9)



<a name="0.1.0"></a>
# [0.1.0](https://github.com/telerik/kendo-react-inputs/compare/45e54f9...v0.1.0) (2016-03-30)


### Bug Fixes

* fix tick click when min is negative value ([93eaa56](https://github.com/telerik/kendo-react-inputs/commit/93eaa56))
* import kendo-inputs-common module correctly ([140729c](https://github.com/telerik/kendo-react-inputs/commit/140729c))
* include necessary NPM scripts ([7ff25d2](https://github.com/telerik/kendo-react-inputs/commit/7ff25d2))
* lint error ([88517d6](https://github.com/telerik/kendo-react-inputs/commit/88517d6))
* remove array.fill for browser compatibility ([b7b2fe4](https://github.com/telerik/kendo-react-inputs/commit/b7b2fe4))
* The CDN example works now ([560ab6d](https://github.com/telerik/kendo-react-inputs/commit/560ab6d))
* use currentTarget for determining value and prevent default on draghandle click ([ffe2423](https://github.com/telerik/kendo-react-inputs/commit/ffe2423))
* wrong path to the Slider module ([13292d8](https://github.com/telerik/kendo-react-inputs/commit/13292d8))

### Features

* when clicked last element of the sclae the widget will set max value ([a601d81](https://github.com/telerik/kendo-react-inputs/commit/a601d81))
* **styling:** Add reference to the theme base ([45e54f9](https://github.com/telerik/kendo-react-inputs/commit/45e54f9))
* add click on tick functionality ([1305d4a](https://github.com/telerik/kendo-react-inputs/commit/1305d4a))
* add disabled state of the widget ([030ca7f](https://github.com/telerik/kendo-react-inputs/commit/030ca7f))
* add fixedTickWidth option ([b93832b](https://github.com/telerik/kendo-react-inputs/commit/b93832b))
* add increase/decrease buttons functionality ([07206f8](https://github.com/telerik/kendo-react-inputs/commit/07206f8))
* add keyboard navigation ([44eca6d](https://github.com/telerik/kendo-react-inputs/commit/44eca6d))
* add option for localizing drag handle title ([526d930](https://github.com/telerik/kendo-react-inputs/commit/526d930))
* add Slider component basic rendering ([e2cdd34](https://github.com/telerik/kendo-react-inputs/commit/e2cdd34))
* add snap to tick functionality when clicking on the scale ([94cfbcf](https://github.com/telerik/kendo-react-inputs/commit/94cfbcf))
* add tickplacement option ([547b1bb](https://github.com/telerik/kendo-react-inputs/commit/547b1bb))
* add titles for ticks and callback for titles functionality ([240c604](https://github.com/telerik/kendo-react-inputs/commit/240c604))
* add track click change on value for vertical slider ([e43ffe2](https://github.com/telerik/kendo-react-inputs/commit/e43ffe2))
* add vertical selection resizing ([a507702](https://github.com/telerik/kendo-react-inputs/commit/a507702))
* adjust classes based on orientation ([05745b5](https://github.com/telerik/kendo-react-inputs/commit/05745b5))
* adjust reminder tick width on vertical slider to be on top ([a139eff](https://github.com/telerik/kendo-react-inputs/commit/a139eff))
* **widget:** add pixel distribution and handle positioning ([c1f5e56](https://github.com/telerik/kendo-react-inputs/commit/c1f5e56))
* buttons titles can be changed from options ([88d46c7](https://github.com/telerik/kendo-react-inputs/commit/88d46c7))
* click on tick in vertical slider sets correct value ([2a984df](https://github.com/telerik/kendo-react-inputs/commit/2a984df))
* correctly assign icon for increasing/decreasing buttons ([3785cfe](https://github.com/telerik/kendo-react-inputs/commit/3785cfe))
* implement SliderButton and SliderTrack ([e3a527f](https://github.com/telerik/kendo-react-inputs/commit/e3a527f))
* implement SliderTick and SliderTicks components ([6394b1d](https://github.com/telerik/kendo-react-inputs/commit/6394b1d))
* option for show or hide inc dec buttons ([a12d21d](https://github.com/telerik/kendo-react-inputs/commit/a12d21d))
* resize selection div based on current dragHandle position ([3ca528a](https://github.com/telerik/kendo-react-inputs/commit/3ca528a))
* rezise wrapper when vertical slider and fixedTickWidth is enabled ([34dad8f](https://github.com/telerik/kendo-react-inputs/commit/34dad8f))
* ticks position and sizing intiial implmentation ([39e2aa5](https://github.com/telerik/kendo-react-inputs/commit/39e2aa5))
* use slider CSS module instead of CDN ([ecaca46](https://github.com/telerik/kendo-react-inputs/commit/ecaca46))
* **widget:** add vertical rendering for the widget ([3325eab](https://github.com/telerik/kendo-react-inputs/commit/3325eab))
* **widget:** added calculateValueFromTick helper function ([62cbcf3](https://github.com/telerik/kendo-react-inputs/commit/62cbcf3))
* **widget:** initial commit ([ac75d1c](https://github.com/telerik/kendo-react-inputs/commit/ac75d1c))



<a name="0.1.0"></a>
# 0.1.0 (2016-03-31)




<a name="0.1.0"></a>
# [0.1.0](https://github.com/telerik/kendo-react-inputs/compare/45e54f9...v0.1.0) (2016-03-30)


### Bug Fixes

* fix tick click when min is negative value ([93eaa56](https://github.com/telerik/kendo-react-inputs/commit/93eaa56))
* import kendo-inputs-common module correctly ([140729c](https://github.com/telerik/kendo-react-inputs/commit/140729c))
* include necessary NPM scripts ([7ff25d2](https://github.com/telerik/kendo-react-inputs/commit/7ff25d2))
* lint error ([88517d6](https://github.com/telerik/kendo-react-inputs/commit/88517d6))
* remove array.fill for browser compatibility ([b7b2fe4](https://github.com/telerik/kendo-react-inputs/commit/b7b2fe4))
* The CDN example works now ([560ab6d](https://github.com/telerik/kendo-react-inputs/commit/560ab6d))
* use currentTarget for determining value and prevent default on draghandle click ([ffe2423](https://github.com/telerik/kendo-react-inputs/commit/ffe2423))
* wrong path to the Slider module ([13292d8](https://github.com/telerik/kendo-react-inputs/commit/13292d8))

### Features

* when clicked last element of the sclae the widget will set max value ([a601d81](https://github.com/telerik/kendo-react-inputs/commit/a601d81))
* **styling:** Add reference to the theme base ([45e54f9](https://github.com/telerik/kendo-react-inputs/commit/45e54f9))
* add click on tick functionality ([1305d4a](https://github.com/telerik/kendo-react-inputs/commit/1305d4a))
* add disabled state of the widget ([030ca7f](https://github.com/telerik/kendo-react-inputs/commit/030ca7f))
* add fixedTickWidth option ([b93832b](https://github.com/telerik/kendo-react-inputs/commit/b93832b))
* add increase/decrease buttons functionality ([07206f8](https://github.com/telerik/kendo-react-inputs/commit/07206f8))
* add keyboard navigation ([44eca6d](https://github.com/telerik/kendo-react-inputs/commit/44eca6d))
* add option for localizing drag handle title ([526d930](https://github.com/telerik/kendo-react-inputs/commit/526d930))
* add Slider component basic rendering ([e2cdd34](https://github.com/telerik/kendo-react-inputs/commit/e2cdd34))
* add snap to tick functionality when clicking on the scale ([94cfbcf](https://github.com/telerik/kendo-react-inputs/commit/94cfbcf))
* add tickplacement option ([547b1bb](https://github.com/telerik/kendo-react-inputs/commit/547b1bb))
* add titles for ticks and callback for titles functionality ([240c604](https://github.com/telerik/kendo-react-inputs/commit/240c604))
* add track click change on value for vertical slider ([e43ffe2](https://github.com/telerik/kendo-react-inputs/commit/e43ffe2))
* add vertical selection resizing ([a507702](https://github.com/telerik/kendo-react-inputs/commit/a507702))
* adjust classes based on orientation ([05745b5](https://github.com/telerik/kendo-react-inputs/commit/05745b5))
* adjust reminder tick width on vertical slider to be on top ([a139eff](https://github.com/telerik/kendo-react-inputs/commit/a139eff))
* **widget:** add pixel distribution and handle positioning ([c1f5e56](https://github.com/telerik/kendo-react-inputs/commit/c1f5e56))
* buttons titles can be changed from options ([88d46c7](https://github.com/telerik/kendo-react-inputs/commit/88d46c7))
* click on tick in vertical slider sets correct value ([2a984df](https://github.com/telerik/kendo-react-inputs/commit/2a984df))
* correctly assign icon for increasing/decreasing buttons ([3785cfe](https://github.com/telerik/kendo-react-inputs/commit/3785cfe))
* implement SliderButton and SliderTrack ([e3a527f](https://github.com/telerik/kendo-react-inputs/commit/e3a527f))
* implement SliderTick and SliderTicks components ([6394b1d](https://github.com/telerik/kendo-react-inputs/commit/6394b1d))
* option for show or hide inc dec buttons ([a12d21d](https://github.com/telerik/kendo-react-inputs/commit/a12d21d))
* resize selection div based on current dragHandle position ([3ca528a](https://github.com/telerik/kendo-react-inputs/commit/3ca528a))
* rezise wrapper when vertical slider and fixedTickWidth is enabled ([34dad8f](https://github.com/telerik/kendo-react-inputs/commit/34dad8f))
* ticks position and sizing intiial implmentation ([39e2aa5](https://github.com/telerik/kendo-react-inputs/commit/39e2aa5))
* use slider CSS module instead of CDN ([ecaca46](https://github.com/telerik/kendo-react-inputs/commit/ecaca46))
* **widget:** add vertical rendering for the widget ([3325eab](https://github.com/telerik/kendo-react-inputs/commit/3325eab))
* **widget:** added calculateValueFromTick helper function ([62cbcf3](https://github.com/telerik/kendo-react-inputs/commit/62cbcf3))
* **widget:** initial commit ([ac75d1c](https://github.com/telerik/kendo-react-inputs/commit/ac75d1c))



