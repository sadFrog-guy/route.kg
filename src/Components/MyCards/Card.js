import React, { useEffect, useState } from 'react'
import styles from "./Card.module.css"

export default function Card({children, clicked, setCurrent, current, ...props}) {
  const clickHandler = () => {
    setCurrent(children)
  }

  return (
    <div className={clicked ? [styles.card, styles.clicked].join(' ') : styles.card} onClick={clickHandler} {...props}>{children}</div>
  )
}
