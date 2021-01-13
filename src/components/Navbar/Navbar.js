// React
import React, { useState } from 'react';

// Styles
import styles from './navbar.module.scss';

const Navbar = (props) => {
    const [animations] = useState([
        {title: "Animation 1", id: 0},
        {title: "Animation 2", id: 1},
        {title: "Animation 3", id: 2},
        {title: "Animation 4", id: 3},
        {title: "Animation 5", id: 4},
        {title: "Animation 6", id: 5},
        {title: "Animation 7", id: 6},
        {title: "Animation 8", id: 7},
        {title: "Animation 9", id: 8},
        {title: "Animation 10", id: 9},
        {title: "Animation 11", id: 10},
        {title: "Animation 12", id: 11},
        {title: "Animation 13", id: 12},
        {title: "Animation 14", id: 13},
        {title: "Animation 15", id: 14},
    ]);
    // const [selected] = useState([1]);
    const { selected, changeSelected } = props;

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Navbar: {selected}</h1>
            </div>
            <div className={styles.animationContainer}>
                {animations.map((animation, index) => (
                    <div onClick={() => changeSelected(animation.id)} className={selected === 1 ? styles.selected : ""} className={styles.animation} key={index}>
                        <p className={styles.animationTitle}>{ animation.title }</p>
                    </div>  
                ))}
            </div>
        </div>
    )
}

export default Navbar;