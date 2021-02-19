import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import './App.css'
import { fetchData } from './api'
import logo from './img/logo.png'
import Footer from './components/Footer';
import creator from './img/logoo.png'


class App extends React.Component {
constructor(props) {
  super(props)

  this.state = {
     data: {},
     country: '',
  }
}


async componentDidMount() {
  const fetchedData = await fetchData();

  this.setState({data:fetchedData})
}


handleCountryChange = async (country) =>{
  const fetchedData = await fetchData(country);
  
  this.setState ({data:fetchedData, country:country})
}
  render () {
    const {data, country} = this.state
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 creator">
            <a href="http://www.thecreatorhome.com/"><img src={creator} className='img-fluid' alt='logo'/></a>
          </div>
          <div className="col-md-9 text-center con">
          <h1>C<span><img src={logo} alt="covid19" /></span>vid19 Tracker</h1>
          </div>
          <div className="col-md-1"></div>
        </div>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Cards data={data}/>
        <Chart data={data} country={country} />
        <Footer/>
      </div>
    );
  }
  
}

export default App;
