// React
import React, { Component } from 'react'

// Styles
import styles from './App.module.scss';

// Components
import Navbar from './components/Navbar/Navbar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    }
  }

  changeSelected(id) {
    console.log("Changing Name");
    console.log(id);
    this.setState({
      selected: id
    })
  }

  render() {
    return (
      <div className={styles.app}>
      <Navbar selected={this.state.selected} changeSelected={(id) => this.setState({ selected: id })}  />
    </div>
  );
}
}

export default App;
