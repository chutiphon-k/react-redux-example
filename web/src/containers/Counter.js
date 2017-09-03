import React, { Component } from 'react'
import styled from 'styled-components'

class Counter extends Component {
	state = {
		value: 0
	}

	handleUp() {
		this.setState({ value: this.state.value + 1})
	}

	handleDown() {
		this.setState({ value: this.state.value - 1})
	}

	render(){
		return (
			<div className="container">
				<Block>
					<h1>Counter: <span className="counterValue">{this.state.value}</span></h1>
					<hr />
					<Button onClick={() => this.handleUp()} >+</Button>
					<Button onClick={() => this.handleDown()}>-</Button>
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

export default Counter