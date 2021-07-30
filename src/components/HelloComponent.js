import React from 'react';


class HelloComponent extends React.Component{
    render(){
        console.log(this.props);
        return(
            <h1>Hello {this.props.name}</h1>
        )
    }
}

export default HelloComponent;