import React, { Component } from 'react';
import { connect } from 'react-redux';
import {showState,addCount,decCount}  from "../actions/index.js";


class CountApp extends Component {
    render() {
        console.log("props " ,this.props)
        return (
            <div>
                <button onClick={() => this.props.showState()} className="primary">Show Count</button>
                <button onClick={() => this.props.addCount()} className="primary">+</button>
                <button onClick={() => this.props.decCount()}   className="primary">-</button>
               
                <p>Count:{this.props.show_State_Reducer.count}</p>
              
            </div>
        )
    }
}
function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps,{ showState,addCount,decCount})(CountApp);