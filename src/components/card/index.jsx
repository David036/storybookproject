import React from 'react'
import cn from "classnames"
import styles from './card.module.scss'
import cardImg from '../../images/logo.svg'
import Button from '../button'

export default function Card( {size='medium',corners='',color=''} ) {

    const mainCn = cn(
        styles.card,
        styles[size],
        styles[corners],
        styles[color]
    )
  return (
    <div className={mainCn}>
        <img alt='' src={cardImg} />
        <p>Title</p>
        <Button btnText='Buy' />
    </div>
  )
}
