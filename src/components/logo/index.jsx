import React from 'react'
import styles from './logo.module.scss'
import cn from "classnames"
import logoImg from '../../images/logo.svg'

export default function Logo({ size='medium',corners='' }) {

const mainCn = cn(
    styles.logoSection,
    styles[size],
    styles[corners]
)
  return (
    <div className={mainCn}>
        <img alt='' src={logoImg}/>
    </div>
  )
}
