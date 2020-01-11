import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component{
  id = 1;
  state = {
    information: [
      {
        id: 0,
        name: 'Ekalii',
        phone: '010-0000-0001'
      }
    ]
  };

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...data})
    });
  }
  
  render(){
    const { information } = this.state;
    return(
      <div>
        <PhoneForm
          onCreate = {this.handleCreate}
        />
        <PhoneInfoList data={this.state.information}/>
      </div>
    );
  }
}

export default App;