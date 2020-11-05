import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
}

body {
    color: #0F1C2E;
    margin: 20px 0;
    font-size: 112.5%;

}

#root {
  display: flex;
  justify-content: center;
}

:root {
    --orange: #ff9700;
    }
`
