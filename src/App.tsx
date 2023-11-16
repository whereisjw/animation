import React, { useEffect, useRef } from 'react';
import './App.css';
import styled,{createGlobalStyle} from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400&family=Source+Sans+3:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*{
  box-sizing: border-box;
}
body{
  font-family: 'Noto Sans', sans-serif;
  background: linear-gradient(135deg,#e09,#d0e);
  color:black;
}
a{
  text-decoration: none;
  color: inherit;
}
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255,255,255,0.2);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2,1fr);
`;




/* const BiggerBox= styled.div`
  width: 600px;
  height: 600px;
  box-flex-group: rgba(255,255,255,0.25);
  border-radius: 40px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
` */

/* const boxVars = {
hover:{scale:2, rotate:90},
click:{scale:1,borderRadius:"100%"},
drag:{background:"green",transition:{duration:2}}
} */



function App() {
const x = useMotionValue(0)
const potato = useTransform(x,[-800,0,800], [2,1,0.1])
useEffect(()=>{
  potato.onChange(()=>{console.log(potato.get());
})
},[x])


  return (
<>
      <GlobalStyle/>
        <Wrapper>
          <button onClick={()=>x.set(200)}>클릭미</button>
        <Box style={{x,scale:potato}} drag='x' dragSnapToOrigin/>
      </Wrapper>
</>
  );
}

export default App;