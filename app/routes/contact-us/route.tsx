import React from 'react';
import styles from './route.module.scss';
import indexStyles from '../_index/_index.module.scss';
export default function Contactus() {
    return (
        <div className={styles.div2}>
            <div className={styles.div1}>
                <form className={styles.form1}>
                    <label>First name:</label>
                    <br />
                    <input type="text" />
                    <br />
                    <label>Contact number:</label>
                    <br />
                    <input type="text" />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <img
                    src="https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_600,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg"
                    alt=""
                />
            </div>
        </div>
    );
}
