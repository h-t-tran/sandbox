import React from 'react'

const StatusMessage = ({ msg, label }) => {
  console.log("*** StatusMessage msg ", msg, ", label ", label);
  let divStyle = { backgroundColor:'red' };

  if(label)
    return <div style={divStyle}>
      The result is -- {label}: {msg}
    </div>
  else
    return <div></div>
}

StatusMessage.propTypes = {
  msg: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired
};

export default StatusMessage