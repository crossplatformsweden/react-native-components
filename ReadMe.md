[![Crossplatform](https://crossplatform.se/wp-content/uploads/2018/05/Crossplatform-Sweden-AB-01_web.jpg)](https://www.crossplatform.se/)

<!-- language-all: javascript -->

# Crossplatform React-Native Components

Beautiful React-Native components using [react-native-paper](https://github.com/callstack/react-native-paper) and other libraries. If using a paper provider your theme should be applied to all the components.

## [Show me Components!](#components)

**Package renamed**  
Previous package name: `@crossplatform/react-native-components`  
New package name: `react-native-cross-components`

## Install
Install with [react-native-paper](https://github.com/callstack/react-native-paper) if you don't already have it.
Install with [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) if you don't already have it.


```bash
	npm i react-native-paper 
	npm i react-native-cross-component
  npm i react-native-vector-icons
  react-native link
```

Or if you're hanging with the cool kids

```bash
	yarn add react-native-paper 
	yarn add react-native-cross-component
  yarn add react-native-vector-icons
  react-native link
```

### Important Icons! 

When using [Expo](https://www.expo.io/) icons are bundled. When ejected you need to install these yourself.

Note that version of [**React-Native-Vector-Icons**](https://github.com/oblador/react-native-vector-icons) is bound by [Expo](https://www.expo.io) for compatibility.

The iconset used is currently [FontAwesome v4 icons](https://fontawesome.com/v4.7.0/icons/). Ability to customize which iconset is used might be added. 

If you're **not** using [Expo](https://www.expo.io/):

```bash
	npm i react-native-vector-icons@4.5.0 
```
```bash
	yarn add react-native-vector-icons@4.5.0
```

## Documentation
See our GitHub Pages generated from code comments. This documentation is also available as intellisense / auto complete.

* **[API Documentation](https://crossplatformsweden.github.io/react-native-components/)**

The **[styles](https://crossplatformsweden.github.io/react-native-components/modules/_styles_.html)** used by this library are exported for your convenience.

See **[Components](#components)** below for examples

---

[![npm](https://img.shields.io/npm/v/react-native-cross-components.svg)](https://www.npmjs.com/package/react-native-cross-components) 
[![npm](https://img.shields.io/npm/dt/react-native-cross-components.svg)](https://www.npmjs.com/package/react-native-cross-components) 
[![Build status](https://img.shields.io/azure-devops/build/crossplatformsweden/parkeraapp/15.svg)](https://crossplatformsweden.visualstudio.com/ParkeraApp/_build/latest?definitionId=15) 
[![codecov](https://codecov.io/gh/crossplatformsweden/react-native-components/branch/master/graph/badge.svg)](https://codecov.io/gh/crossplatformsweden/react-native-components) 
[![dependencies](https://david-dm.org/crossplatformsweden/react-native-components/status.svg)](https://david-dm.org/crossplatformsweden/react-native-components) 
[![peer dependencies](https://img.shields.io/david/peer/crossplatformsweden/react-native-components.svg)](https://github.com/crossplatformsweden/react-native-components)
[![Prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
![GitHub](https://img.shields.io/github/license/crossplatformsweden/react-native-components.svg) 

[![React Native](https://img.shields.io/badge/React%20Native-v0.57-blue.svg)](https://facebook.github.io/react-native/) 
[![React Native Paper](https://img.shields.io/badge/React%20Native%20Paper-v2.2.4-blue.svg)](https://github.com/callstack/react-native-paper) 
[![React Native Vector Icons](https://img.shields.io/badge/React%20Native%20Vector%20Icons-v4.5.0-blue.svg)](https://github.com/oblador/react-native-vector-icons) 
[![React Native Indicators](https://img.shields.io/badge/React%20Native%20Indicators-v0.13.0-blue.svg)](https://github.com/n4kz/react-native-indicators) 
[![React Native Modal](https://img.shields.io/badge/React%20Native%20Modal-v7.0.0-blue.svg)](https://github.com/react-native-community/react-native-modal) 

[![GitHub forks](https://img.shields.io/github/forks/crossplatformsweden/react-native-components.svg?style=social&label=Fork)](https://github.com/crossplatformsweden/react-native-components)
[![GitHub stars](https://img.shields.io/github/stars/crossplatformsweden/react-native-components.svg?style=social&label=Star)](https://github.com/crossplatformsweden/react-native-components)
[![GitHub watchers](https://img.shields.io/github/watchers/crossplatformsweden/react-native-components.svg?style=social&label=Watch)](https://github.com/crossplatformsweden/react-native-components)
[![Twitter Follow](https://img.shields.io/twitter/follow/crossplatformse.svg?style=social)](https://twitter.com/crossplatformse)

## Table of Contents
- [Crossplatform React-Native Components](#crossplatform-react-native-components)
  * [Components](#components)
    + [CrossButton](#crossbutton)
    + [CrossBusyIndicator](#crossbusyindicator)
    + [CrossSpinner](#crossspinner)
    + [CrossLabel](#crosslabel)
    + [CrossEditor](#crosseditor)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## Components
### CrossButton
![](https://media.giphy.com/media/MohS56wPG7AgPGteu1/giphy.gif)

Renders an [FontAwesome Button](https://github.com/oblador/react-native-vector-icons#iconbutton-component) if only `iconName` is supplied, else an [Paper Button](https://callstack.github.io/react-native-paper/button.html).

For properties and documentation, see **[API reference - Class CrossButton](https://crossplatformsweden.github.io/react-native-components/classes/_components_buttons_crossbutton_.crossbutton.html)**. 

Styles can be customized using [ButtonStyle, IconStyle and style properties](https://crossplatformsweden.github.io/react-native-components/interfaces/_components_buttons_crossbutton_.icrossbuttonprops.html).

However, react-native-paper is currently missing the option to customize **[fontSize](https://github.com/callstack/react-native-paper/issues/546)**.

**Examples**

Button with **[title](https://crossplatformsweden.github.io/react-native-components/interfaces/_components_modals_crossbusyindicator_.ibusyindicatorprops.html#type)**, but no icon and **[mode](https://crossplatformsweden.github.io/react-native-components/interfaces/_components_buttons_crossbutton_.icrossbuttonprops.html#mode)** *contained* (background color):

```typescript
	import { CrossButton } from 'react-native-cross-components';
	
	export const ButtonComp => () => (
 		<CrossButton
            title="Click me"
            mode="contained"
            onPress={() => OnButtonPress('Pressed button with no icon')}
          />
	);
```

Button with **[title](https://crossplatformsweden.github.io/react-native-components/interfaces/_components_modals_crossbusyindicator_.ibusyindicatorprops.html#type)** and **[iconName](https://crossplatformsweden.github.io/react-native-components/interfaces/_components_buttons_crossbutton_.icrossbuttonprops.html#iconname)**, default *text* **[mode](https://crossplatformsweden.github.io/react-native-components/interfaces/_components_buttons_crossbutton_.icrossbuttonprops.html#mode)** (no background):

```typescript
	import { CrossButton } from 'react-native-cross-components';
	
	export const ButtonComp => () => (
          <CrossButton
            title="Click me"
            iconName="home"
            onPress={() => OnButtonPress('Pressed button with icon')}
          />
	);
```
	
Clickable icon:

```typescript
	import { CrossButton } from 'react-native-cross-components';
	
	export const ButtonComp => () => (
          <CrossButton
            iconName="map"
            onPress={() => OnButtonPress('Pressed icon with no title')}
            backgroundColor="transparent"
          />
	);
```

### CrossBusyIndicator
![](https://media.giphy.com/media/1jYwyqHG3zWRcKucSg/giphy.gif)

Renders a [react-native-modal](https://github.com/react-native-community/react-native-modal) containing cool animations from [react-native-indicators](https://github.com/n4kz/react-native-indicators).

For properties and documentation, see **[API reference - Class CrossBusyIndicator](https://crossplatformsweden.github.io/react-native-components/classes/_components_modals_crossbusyindicator_.crossbusyindicator.html)**. 

**Examples**

Feedback **[message](https://crossplatformsweden.github.io/react-native-components/interfaces/_components_modals_crossbusyindicator_.ibusyindicatorprops.html#message)** and *PacmanIndicator* **[type](https://crossplatformsweden.github.io/react-native-components/interfaces/_components_modals_crossbusyindicator_.ibusyindicatorprops.html#type)** (because, why not).

```typescript
	<CrossBusyIndicator
		  isBusy={this.state.isBusy}
		  type='PacmanIndicator'
		  isCancelButtonVisible={true}
		  message="Loading.."
		  onCancel={() => this.setState({ isBusy: false })}
	/>
```

Non-cancellable and custom styles for `spinnerProps` and `messageStyle`:

```typescript
	<CrossBusyIndicator
		  spinnerProps={{ color: 'red', type: 'WaveIndicator' }}
		  messageStyle={{ color: 'red' }}
		  isBusy={this.state.isBusy2}
		  isCancelButtonVisible={false}
		  message="Resistance is futile"
	/>
```

Custom **[modal](https://crossplatformsweden.github.io/react-native-components/interfaces/_components_modals_crossbusyindicator_.ibusyindicatorprops.html#modalprops)** props:

```typescript
       <CrossBusyIndicator
          modalProps={{
            swipeDirection: 'up',
            backdropColor: 'blue'
          }}
          isBusy={this.state.isBusy2}
          isCancelButtonVisible={false}
          message="Busy busy busy.."
        />
```


### CrossSpinner
[![](https://user-images.githubusercontent.com/2055622/28246049-e82c70e8-6a1b-11e7-93cc-8aa6d0d19867.gif)](https://github.com/n4kz/react-native-indicators)

Basically just wraps [react-native-indicators](https://github.com/n4kz/react-native-indicators) so you can provide the type you want via property.

For properties and documentation, see **[API reference - Class CrossSpinner](https://crossplatformsweden.github.io/react-native-components/modules/_components_animations_crossspinner_.html)**. 


**Examples**

```typescript
    <CrossSpinner
        type={CrossSpinnerType.MaterialIndicator}
        style={styles.spinner}
      />
```

### CrossLabel
![](https://media.giphy.com/media/9uI8mhykeGr65G97Iq/giphy.gif)

Wraps [react-native-paper](https://callstack.github.io/react-native-paper/index.html) typhography components and can also act as a clickable text link.

For properties and documentation, see **[API reference - Class CrossLabel](https://crossplatformsweden.github.io/react-native-components/modules/_components_labels_crosslabel_.html)**.

**Examples**

**Headline** component:

```typescript
    <CrossLabel isHeadline={true}>Crossplatform (isHeadline=true)</CrossLabel>
```

**Title** component:

```typescript
    <CrossLabel isTitle={true}>&lt;CrossLabel isTitle=true&gt;</CrossLabel>
```

**Subheading** (with custom style):

```typescript
    <CrossLabel
      isSubheading={true}
      style={{ marginTop: 5 }}
    >
      isSubHeading = true
    </CrossLabel>
```
**Caption** component (with custom style):

```typescript
    <CrossLabel
      isCaption={true}
      style={{ color: Colors.CrossLightBlue, marginTop: 10 }}
    >
      isCaption=true, custom color
    </CrossLabel>
```

**Paragraph** component (with custom style):

```typescript
    <CrossLabel
      isParagraph={true}
      style={{ marginTop: 5 }}
    >
      isParagraph = true
    </CrossLabel>
```

URL link using **[onPressUrlTarget](https://crossplatformsweden.github.io/react-native-components/interfaces/_components_labels_crosslabel_.icrosslabelprops.html#onpressurltarget)** property. You can also set color using **[linkColor](https://crossplatformsweden.github.io/react-native-components/interfaces/_components_labels_crosslabel_.icrosslabelprops.html#linkcolor)**.

```typescript
    <CrossLabel
      onPressUrlTarget="https://www.typescriptlang.org/"
      isSubheading={true}
      style={{ marginTop: 20, marginBottom: 10 }}
    >
      Clickable link (onPressUrlTarget):
    </CrossLabel>
```

Regular **onPress** event:

```typescript
    <CrossLabel
      onPress={() => Message('CrossLabel onPress')}
      style={{ marginTop: 20, marginBottom: 10 }}
    >
      onPress message
    </CrossLabel>
```

### CrossEditor
![](https://media.giphy.com/media/TH694OoLKfFGvm65TD/giphy.gif)

A [Paper TextInput](https://callstack.github.io/react-native-paper/text-input.html) that also supports masking using [react-native-masked-input](https://github.com/benhurott/react-native-masked-text).

For properties and documentation, see **[API reference - Class CrossEditor](https://crossplatformsweden.github.io/react-native-components/modules/_components_input_crosseditor_.html)**. 

**Examples**

Basic usage

```typescript
	<CrossEditor
        label={'Test'}
        onChangeText={(val) => console.log('Got value', val)}
        value={'Textvalue'}
        />
```

Masked input usage. For `maskProps` documentation see [react-native-masked-input](https://github.com/benhurott/react-native-masked-text).

```typescript
	<CrossEditor label="Phone" maskProps={{ type: 'cel-phone' }} />
```