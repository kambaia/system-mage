import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: 0;
  font-family: 'ubuntu', sans-serif;
}
:root {
  --blue: #287bff;
  --dark: #141414;
  --white: #fff;
  --grey: #f5f5f5;
  --black1: #111;
  --black2: #222;
  --black3: #999;
}
  html{
	scroll-behavior: smooth;
  }
  body {
  max-height: 100vh;
  overflow: hidden;
  width: 100vw;
}

  body,
  input,
  textarea,
  button {
	font-family: 'ubuntu', sans-serif;
   font-size:1rem;
    color: var(--letters)};
  h1 {
    font-size: 2rem;
	font-family: 'ubuntu', sans-serif;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
	font-family: 'ubuntu', sans-serif;
    color: var(--letters)
  }

  input {
    outline: none;
  }

  ul li{
    list-style: none;
  }
  a{
    text-decoration:none;
    color:#fff;
  }
  `
  