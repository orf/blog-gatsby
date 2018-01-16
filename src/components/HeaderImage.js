import React from 'react'
import {Container} from 'react-responsive-grid'
import Img from "gatsby-image"

import styles from "./HeaderImage.module.css"

const HeaderImage = ({sizes}) => {
    return (
        <Img className={styles.headerImage} sizes={sizes} style={{ position: `absolute` }}/>
    )
}

export default HeaderImage
