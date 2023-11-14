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