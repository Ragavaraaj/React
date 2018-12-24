import SliderBar from './SildeBar';
import ButtonAppBar from './CusAppBar';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  state = {
    left: false,
  };

  toggleDrawer = (open) => () => {
    this.setState({
      left : open,
    });
  };


  render() {
    return (
    <ButtonAppBar onClick={this.toggleDrawer(true)}>
      < SliderBar open={this.state.left} onClick={this.toggleDrawer(false)}/>
    </ButtonAppBar>
    );
  }
}


