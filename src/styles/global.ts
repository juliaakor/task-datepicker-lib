import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: inherit;
    transition: all .4s ease-out;
  }

  body {
		font-family: 'Open Sans';
		position: relative;
	}

  a {
    color: inherit;
    text-decoration: none;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  button {
		background-color: transparent;
		border: none;

		&:hover {
			cursor: pointer;
		}
	}

  ::-webkit-scrollbar {
    width: 0.3rem;
    height: 0.75rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(136, 136, 136);
    border: 2px solid lighten(rgb(136, 136, 136), 3%);
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: lighten(rgb(136, 136, 136), 3%);
  }

  ::-webkit-scrollbar-track {
    background: rgb(241, 241, 241);
  }
`;
