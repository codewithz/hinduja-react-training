import React, { Component } from 'react'

export default class CounterComponent extends Component {

    state={
        counter:0,
        college:'Hinduja'
    }

    handleDecrement=()=>{
        this.setState({
            counter:this.state.counter-1,
        })
    }

    handleIncrement=()=>{
        this.setState({
            counter:this.state.counter+1,
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.college}</h1>
               <button onClick={this.handleDecrement}> - </button>
               <span> {this.state.counter} </span>
               <button onClick={this.handleIncrement}> + </button>   
            </div>
        )
    }
}
