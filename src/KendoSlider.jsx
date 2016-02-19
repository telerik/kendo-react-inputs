import * as React from 'react';

import util from './util';

import styles from '@telerik/kendo-theme-default/styles/main';

export default function KendoSlider(props) {
    return (
        <div {...props} className={styles.componentClass}>A Kendo UI react component{util()} </div>
    );
}
