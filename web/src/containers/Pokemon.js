import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { fetchPokemonsAction } from '../actions'

class Pokemon extends Component {

	componentDidMount() {
		this.props.fetchPokemons()
	}

	render(){
		console.log(this.props.pokemons.data)
		return (
			<div className="container">
				<Block>
					{
						this.props.pokemons.data.map(pokemon => (
							<Card key={pokemon.id}>
								<Img src={pokemon.photo} alt="" />
								<div className="name">{pokemon.name}</div>
							</Card>
						))
					}
				</Block>
			</div>
		)
	}
}

const Block = styled.div`
	text-align: center;
`

const Card = styled.div`
	display: inline-flex;
	flex-direction: column;
	border: 1px solid black;
	border-radius: 5px;
	margin: 10px;
	padding: 10px;
	.name {
		border-top: 1px solid black;
		color: rgb(80,190, 80);
		padding-top: 10px;
	}
`

const Img = styled.img`
	width: 100px;
	height: 100px;
`

export default connect(
	state => ({
		pokemons: state.pokemons
	}), {
		fetchPokemons: fetchPokemonsAction
	}
)(Pokemon)