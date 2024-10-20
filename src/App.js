import React from 'react';

import 'bootswatch/dist/flatly/bootstrap.css'

import './custom.css'

import Login from './view/login'

class App extends React.Component{

  render(){
    return(
      <div>
        <Login></Login>
      </div>
    )
  }
 
}

export default App;
