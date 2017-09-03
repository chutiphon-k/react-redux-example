import React from 'react'
import styled from 'styled-components'

const Header = () => (
	<header>
		<Nav>Header</Nav>
	</header>
)

const Nav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background-color: pink;
	height: 50px;
`

export default Header;