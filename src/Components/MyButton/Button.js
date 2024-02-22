import React from 'react'
import style from "./Button.module.css" 

export default function ({children, disabled=false}) {
  return (
    <button className={disabled ? [style.button, style.disabled].join(' ') : style.button}>{children}</button>
  )
}
