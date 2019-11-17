import React from 'react';
import './App.style';

class App extends React.Component{
constructor(props){
    super(props);
    this.state = {
        value: ''
    }

    this.handleChange = this.handleChange.bind(this);
}

handleChange(event) {
    this.setState({value: event.target.value});
    }

getStationName = () => {
    this.props.callGetStationName(this.state.value);
}

render(){
    {console.log('app', this.props)}

    return(
        <React.Fragment>
            <section className="body">                    
                <h1 className="title">Here you go!</h1>
                <div className="example">
                <input className="example__input-box" type="text" value={this.state.value} onChange={this.handleChange} />
                <input className="example__submit-box" type="submit" value="GET STATION NAME" onClick={this.getStationName} /> 
                <div className = "example__result">{this.props.result}</div>    
                </div>               
            </section>
        </React.Fragment>
    )
}
}

export default App;