import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  static propTypes = {
    getClients: PropTypes.func.isRequired,
    updateClients: PropTypes.func.isRequired
  };

  componentDidMount() {
    console.log(this.props.getClients());
    console.log(this.props.updateClients());
    console.log('test');
  };

  render() {
    return (
      <div>
        <form action='/api/auth' method='POST'>
          <input type='text' name='token' />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default Counter;
