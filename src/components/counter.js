import React, { Component } from 'react'

class Counter extends Component {

    constructor(){
        super()
        this.state = {
            counter:0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(){
        this.setState( prevState => {
            return{
                counter: prevState.counter + 1
            }
        })
    }


    render(){
        return(
            <div>
                <h1>{this.state.counter} </h1>
                <p onClick={this.handleChange}>Add</p>
            </div>
        )
    }
}


export default Counter;