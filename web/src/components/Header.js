import React from 'react'
import styled from 'styled-components'

const Header = () => (
	<Block>
		<Nav>
			Header
		</Nav>
	</Block>
)

const Block = styled.header`
	background-color: pink;
`;

const Nav = styled.nav`
	text-align: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
`

export default Header;