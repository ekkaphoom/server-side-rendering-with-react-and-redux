import React from 'react'
import PropTypes from 'prop-types'

const Home = props => {
  return (
    <div>
      Home component
      <button onClick={() => console.log('Click!!')} >Click!</button>
    </div>
  )
}

Home.propTypes = {

};

export default Home;
