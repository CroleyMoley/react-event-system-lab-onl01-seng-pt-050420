import React, { Component } from 'react';

export default class Keypad extends Component {

    render() {
        return(
            <button onFocus={(e => {
                console.log('Good!')
            })}
            onBlur={(e => {
                console.log('Hey! Eyes on me!')
            })}></button>
        )
    }
}
