import cn from "classnames"
import React from 'react'
import styles from './button.module.scss'

export default function Button( { btnText,variant='',size='medium' } ) {

const mainCn = cn(
    styles.button,
    styles[size],
    styles[variant]
);

  return (
    <button className={mainCn}>
        {btnText}
    </button>
  )
}
