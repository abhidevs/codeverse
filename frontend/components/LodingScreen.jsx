import React from 'react'
import lodingStyle from "../styles/lodingStyle.module.css";

const LodingScreen = () => {
  return (
    <div className={lodingStyle.outer}>
      <div className={lodingStyle.circle}></div>
    </div>
  )
}

export default LodingScreen
