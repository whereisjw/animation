# npm install framer-motion
~~~
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
     <Box transition={{duration:3}} animate={{borderRadius:"100%"}} />
~~~
# variants
~~~
const myVars = {
  start:{ scale:0},
  end:{scale:1,rotateZ:360,transition:{type:"spring",damping:5}}
}


function App() {
  return (
    
<>
      <GlobalStyle/>
        <Wrapper>
        <Box variants={myVars} initial="start" animate="end"/>
~~~
# DRAG이벤트
~~~
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255,255,255,0.2);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2,1fr);
`;
const Circle = styled(motion.div)`
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    background: white;
    height: 70px;
    width:70px;
    border-radius: 40px;
place-self: center;
`

const myVars = {
  start:{ scale:0},
  end:{scale:1,rotateZ:360,transition:{type:"spring",damping:5,delay:0.5}}
}

const BiggerBox= styled.div`
  width: 600px;
  height: 600px;
  box-flex-group: rgba(255,255,255,0.25);
  border-radius: 40px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const boxVars = {
hover:{scale:2, rotate:90},
click:{scale:1,borderRadius:"100%"},
drag:{background:"green",transition:{duration:2}}
}

const circleVars = {

}

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null)
  return (
<>
      <GlobalStyle/>
        <Wrapper>
    <BiggerBox ref={biggerBoxRef}>
          <Box drag dragSnapToOrigin dragElastic={0.5} dragConstraints={biggerBoxRef} variants={boxVars} whileHover="hover" whileTap="click" whileDrag="drag" initial="start" animate="end">
          </Box>
    </BiggerBox>
      </Wrapper>
</>
~~~