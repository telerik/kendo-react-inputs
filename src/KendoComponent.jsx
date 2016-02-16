import * as React from 'react';

import util from './util';

import styles from '@telerik/kendo-theme-default/styles/example/main';

export default function KendoComponent(props) {
    return (
        <div {...props} className={styles.example}>Kendo UI react component{util()} </div>
    );
}
