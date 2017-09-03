import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

class Home extends Component {
	render(){
		return (
			<div className="container">
				<Block>
					<Link to='counter'><Button>Counter</Button></Link>
					<Link to='counter-redux'><Button>Counter With Redux</Button></Link>
					<Link to='pokemon'><Button>Pokemon</Button></Link>
				</Block>
			</div>
		)
	}
}

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

const Block = styled.div`
	display: flex;
	justify-content: center;
	margin: 50px;
`;

export default Home
