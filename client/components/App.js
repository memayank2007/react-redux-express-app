import React from 'react';
import NavigationBar from './NavigationBar'
import flashMessagesList from './flash/flashMessagesList'

class App extends React.Component {

  render(){
    return(
      <div className="container">
      <NavigationBar />
      <flashMessagesList />
      {this.props.children}
      </div>
    );
  }
}

export default App;
