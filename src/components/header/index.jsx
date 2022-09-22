import React from 'react'
import Button from '../button'
import Logo from '../logo'
import styles from './header.module.scss'

export default function Header() {
  return (
    <div className={styles.header}>
        <Logo />
        <Button btnText='Header Button'/>
    </div>
  )
}
