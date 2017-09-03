import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { incrementAction, decrementAction } from '../actions'

class CounterRedux extends Component {
	render(){
		return (
			<div className="container">
				<Block>
					<h1>Counter: <span className="counterValue">{this.props.counters.value}</span></h1>
					<hr />
					<Button onClick={() => this.props.increment()} >+</Button>
					<Button onClick={() => this.props.decrement()}>-</Button>
				</Block>
			</div>
		)
	}
}

const Block = styled.div`
	text-align: center;
	.counterValue {
		color: #1BF2CC;
	}
`

const Button = styled.button`
	background: transparent;
	width: 200px;
	height: 50px;
	border-radius: 5px;
	margin: 10px;
	border-style: solid;
	border-color: black;
	font-size: 20px;
	cursor: pointer;

	&:active {
		background-color: #ccc;
	}
`;

export default connect(
	state => ({
		counters: state.counters
	}), {
		increment: incrementAction,
		decrement: decrementAction
	}
)(CounterRedux)