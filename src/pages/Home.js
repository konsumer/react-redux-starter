import React from 'react'


export default class Home extends React.Component {
  onNext (values) {
    this.props.history.push('/address')
  }

  render () {
    return (
      <div id='Home' className='container'>
        <h2>o hey!</h2>
        <p>This isn't super-exciting yet. You can make it more exciting by adding some new page-routes to index.js and/or editing pages/Home.js where this text you see is located.</p>
        <h3>Have fun!</h3>
      </div>
    )
  }
}
