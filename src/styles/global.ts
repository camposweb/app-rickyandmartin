import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background-color: ${({ theme }) => theme.white};
		-webkit-font-smoothing: antialiased;
	}

	body, input, textarea, button, a {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		font-size: 1rem;
		color: ${({ theme }) => theme.gray800};;
	}

	@media (max-width: 768px) {
	html {
		font-size: 87.5%;
	}
}
`
