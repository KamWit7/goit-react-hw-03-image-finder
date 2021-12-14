import React from "react"
import styles from "./Button.module.css"

const Button = (props) => {
  const { style, onClick } = props


  return (
    <button
      type="submit"
      className={styles.Button}
      style={style}
      onClick={onClick}
    >
      <span>{props.children}</span>
    </button>
  )
}

export default Button
