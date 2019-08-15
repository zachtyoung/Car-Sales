import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addItem, removeItem } from './actions';

const App = props => {


  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.first} />
        <AddedFeatures car={props.first} removeItem={(feature) => props.removeItem(feature)}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={props.second} addItem={(feature) => props.addItem(feature)}/>
        <Total car={props.first} additionalPrice={props.third} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('state', state);
  return {
    first: state.car,
    second: state.store,
    third: state.additionalPrice
  };
};

export default connect(
  mapStateToProps,
  {addItem, removeItem}
)(App);
