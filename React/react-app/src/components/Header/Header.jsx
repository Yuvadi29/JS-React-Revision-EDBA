import React, { useContext } from 'react'
import styles from "./header.module.css"
import InsideHeader from '../InsideHeader/InsideHeader'
import { sampleContext } from '../../context/sampleConetext'

const Header = (props) => {
  const contextData = useContext(sampleContext);
  console.log(contextData);
  return (
    <>
      <div className={styles.header} style={{ backgroundColor: "red" }}>{props.name}</div>
      <InsideHeader name={props.name} />
    </>
  )
}

export default Header