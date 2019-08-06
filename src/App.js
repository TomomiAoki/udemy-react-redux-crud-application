import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {name: "taro", age:10},
    {name: "taro", age:20},
    {name: "noname"}
  ]
  return (
    <div>
      {
        profiles.map((profiles, index) => {
          return <User name={profiles.name} age={profiles.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi Iam {props.name}, and {props.age} years old!</div>
}

// User.defaultProps = {
//   age: 1
// }

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default App;
