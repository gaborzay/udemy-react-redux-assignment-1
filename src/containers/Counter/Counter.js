import React, {Component} from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {
  INCREMENT,
  DECREMENT,
  ADD,
  SUBTRACT,
  STORE_RESULT,
  DELETE_RESULT
} from '../../store/actions';

class Counter extends Component {
  render() {
    const results = this.props.res.map((item) => (
      <li key={item.id} onClick={() => this.props.onDeleteResult(item.id)}>{item.value}</li>
    ));

    return (
      <div>
        <CounterOutput value={this.props.ctr}/>
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
        <CounterControl label="Add 5" clicked={() => this.props.add(5)}/>
        <CounterControl label="Subtract 5" clicked={() => this.props.subtract(5)}/>
        <hr/>
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
        <ul>
          {results}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    res: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({
      type: INCREMENT
    }),
    onDecrementCounter: () => dispatch({
      type: DECREMENT
    }),
    add: (value) => dispatch({
      type: ADD,
      payload: {
        value: value
      }
    }),
    subtract: (value) => dispatch({
      type: SUBTRACT,
      payload: {
        value: value
      }
    }),
    onStoreResult: (result) => dispatch({
      type: STORE_RESULT,
      payload: {
        result: result
      }
    }),
    onDeleteResult: (id) => dispatch({
      type: DELETE_RESULT,
      payload: {
        resultEliD: id
      }
    }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);