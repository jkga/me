import {useState, useEffect} from 'react'
const Template = (props) => {
  return (<div><p>Hi {props.profile.basics.name}!</p></div>) 
}

Template.getInitialProps = async ctx => {
  return {...ctx}
}

export default Template