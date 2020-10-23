import React from 'react';
import ReactDOM from 'react-dom';

class FetchGithub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: ''
    }
  };  
​
  componentDidMount() {
    fetch('https://api.github.com/users/workshopsjsmvd')
      .then(res => {
        this.setState({
          name: res.name,
          location: res.location
        })
      }).catch( err => { console.log('Error => ', err) });
  }
​
  render() {
    return (
      <div>
        <h1 key="name">{`Nombre: ${this.state.name}`}</h1>
              <h2 key="location">{`País: ${this.state.location}`}</h2> 
      </div>
    )
  }
}
​
ReactDOM.render(
  <FetchGithub />,
  document.getElementById('root')
);