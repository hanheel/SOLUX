
import styled from 'styled-components'
import Header from './Components/Header'
import { Link, Outlet} from 'react-router-dom'



const Btn = styled.button`
  width: 120px;
  height: 50px;
  background-color: #f1f1f5;
  border :none;
  margin: 10px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props=>props.bgc};
  box-shadow: 1px 1px 4px #797979;;
  &:hover{
    background-color: #999999;
  }
`

const App = ()=>{

  return (
    <>
    <Header />
    <Link to={'/button1'}><Btn>button1</Btn></Link>
    <Link to={'/button2'}><Btn>button2</Btn></Link>
    <Link to={'page'}><Btn bgc='tomato'>button3</Btn></Link>
    <Outlet />
    </>
)
}


export default App