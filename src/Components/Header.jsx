import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100wh;
  height: 100px;
  background-color: teal;
  text-align: center;
  color: whitesmoke;
  cursor: pointer;
`

const Header = ()=>{
  const nav = useNavigate()
  const onClick = ()=>{
    nav('/')
  }
  
  return(
    <HeaderWrap onClick={onClick}>
        <h1>This is Header</h1>
    </HeaderWrap>
  )
}

export default Header