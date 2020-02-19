import React from 'react';
import PropTypes from 'prop-types';
import Eat from './Eat';
import Love from './Love';
import Sleep from './Sleep';
import Clean from './Clean';

class Pain extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div>
        <Eat />
        <Sleep />
        <Clean />
        <Love />
        <h4>name: {this.props.name} </h4>
        <p>overall health status: {this.props.overallHealth}</p>
        <p>emotional pain status: {this.props.emoPain}</p>
        <p>physical pain status: {this.props.physPain}</p>
        <p>mess status: {this.props.mess}</p>
      </div>
    )
  }
}

Pain.propTypes = {
  name: PropTypes.string.isRequired,
  emoPain: PropTypes.number.isRequired,
  physPain: PropTypes.number.isRequired,
  overallHealth: PropTypes.number.isRequired,
  mess: PropTypes.number.isRequired

};
export default Pain;
