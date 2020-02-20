import React from 'react';
import PropTypes from 'prop-types';
import {Button, Form, FormControl} from 'react-bootstrap';
import {v4} from 'uuid';
import {Link, withRouter} from "react-router-dom";
import Moment from 'moment';

function NewTama(props) {
  let _name = null;

  function handleTamaCreation(event) {
    event.preventDefault();
    props.onTamaCreation({
      name: _name.value,
      overallHealth: 100,
      physPain: 0,
      emoPain: 0,
      mess: 0,
      id: v4(),
      sinceBirth: new Moment()
    });
    _name.value = '';
    props.history.push("/gamecontroller");

  }

  const cleanStyle = {
    border: "2px solid orange",
    margin: "5px"
  }

  return (<div>
    <style jsx="jsx">{`
        .newGameForm {
          width: 60%;
          margin: 0 auto;
        }
        `}</style>
      <Form className="newGameForm" onSubmit={handleTamaCreation}>
        <Form.Label column="column" sm="2">
          <h2>Tam's name:</h2>
        </Form.Label>
        <Form.Control type="text" id='name' placeholder="Enter Name" ref={(input) => {
            _name = input;
          }}/>
          <Button type="submit">Start Game</Button>
        </Form>
      </div>);
    }

    NewTama.propTypes = {
      onTamaCreation: PropTypes.func
    };

    export default withRouter(NewTama);
