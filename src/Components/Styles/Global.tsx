import { createGlobalStyle } from 'styled-components';
import { device } from './BreakPoints';

const GlobalStyles = createGlobalStyle`
  .privacy-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #FFFF00;
  z-index: 9999;
}

//Reset 
* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  margin: 0px;
  padding:0px;
  font-family: 'Inter', sans-serif;
  background-color: #B8B8AB;
}
a {
  text-decoration: none;
  color:inherit;
}
h1,
h2,
h3,
p {
  margin: 0px;
}
ul,
li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
img {
  display: block;
  max-width: 100%;
}

//Scroll
::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background-color: black;
}

::-webkit-scrollbar-thumb {
  background-color: #FFFF00;
  border-radius: 5px;
}

.t1 {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 5rem;
  line-height: 1.1;
}

.t2 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 3.75rem;
  line-height: 1.4;
}
.t3 {
  font-family: 'Inter';
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.5;
}

.t4 {
  font-family: 'Inter';
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.5;
}

.p1 {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.6;
}

.p2 {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
}


@media ${device.md} {
  .t1 {
    font-size: 4.5rem;
    line-height: 1.2;
  }
  .t2 {
    font-size: 3.5rem;
    line-height: 1.3;
  }
  .p1 {
    font-size: 1.1rem;
    line-height: 1.4;
  }
  .p2 {
    font-size: 1rem;
    line-height: 1.3;
  }
}

@media ${device.sm} {
  .t1 {
    font-size: 4rem;
    line-height: 1.2;
  }
  .t2 {
    font-size: 3rem;
    line-height: 1.3;
  }
  .p1 {
    font-size: 1rem;
    line-height: 1.4;
  }
  .p2 {
    font-size: 0.9rem;
    line-height: 1.3;
  }
}
`;

export default GlobalStyles;
