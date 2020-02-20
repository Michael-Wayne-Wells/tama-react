import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';


class Pain extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (<div>
      <Button onClick={() => this.props.onTamaEat(1, -5, 2, 0)} variant="success">Eat</Button>
      <Button onClick={() => this.props.onTamaEat(1, 0, 0, -10)} variant="success">Love</Button>
      <Button onClick={() => this.props.onTamaEat(1, -3, 0, -5)} variant="success">Sleep</Button>
      <Button onClick={() => this.props.onTamaEat(0, +5, -10, -5)} variant="success">Clean</Button>
      <h4>name: {this.props.name}
      </h4>
      <p>overall health status: {this.props.overallHealth}</p>
      <p>emotional pain status: {this.props.emoPain}</p>
      <p>physical pain status: {this.props.physPain}</p>
      <p>mess status: {this.props.mess}</p>
      <p>age: {this.props.formattedSinceBirth}</p>
    </div>)
  }
}

Pain.propTypes = {
  name: PropTypes.string.isRequired,
  emoPain: PropTypes.number.isRequired,
  physPain: PropTypes.number.isRequired,
  overallHealth: PropTypes.number.isRequired,
  mess: PropTypes.number.isRequired,
  formattedSinceBirth: PropTypes.string.isRequired
};
export default Pain;
