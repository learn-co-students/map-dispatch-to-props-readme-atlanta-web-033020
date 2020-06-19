import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    this.props.dispatch(addItem());
  }

  render() {
    debugger
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

// Method 1:
// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

// Method 2:
// export default connect(mapStateToProps, { addItem })(App);

// Method 3:
// export default connect(state => ({ items: state.items }), { addItem })(App);

// Method 4:
const mapDispatchToProps = dispatch => {
  return {
    addItem: () => { dispatch(addItem()) }
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App);