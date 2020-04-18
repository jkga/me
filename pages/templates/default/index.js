const Template = (props) => { 
  return (<div>Hi {props.profile.basics.name}!</div>) 
}

Template.getInitialProps = async ctx => {
  return {...ctx.query}
}

export default Template