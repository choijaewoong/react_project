import React from 'react'

class ContactInfo extends React.Component {
  render() {
    return (
      <li>
        {this.props.contact.name} {this.props.contact.phone}
      </li>
    );
  }
}

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contactData: [
        { name: 'Amy', phone: '010-1234-5678' },
        { name: 'Bob', phone: '010-1234-5678' },
        { name: 'Celina', phone: '010-1234-5678' },
        { name: 'David', phone: '010-1234-5678' },
        { name: 'Eric', phone: '010-1234-5678' }
      ]
    }
  }

  render() {
    const mapToComponent = (data) => {
      return data.map((contact, i) => {
        return (<ContactInfo contact={contact} key={i}/>);
      });
    };
    return (
      <div>
        <ul>
          {mapToComponent(this.state.contactData)}
          {/*<li>Amy 010-1234-5678</li>
          <li>Bob 010-1234-5678</li>
          <li>Celina 010-1234-5678</li>
          <li>David 010-1234-5678</li>
          <li>Eric 010-1234-5678</li>*/}
        </ul>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Contact/>
    );
  }
}
/*
1. Contact의 state 정의
2. mapToComponent 함수 정의
*/

export default App
