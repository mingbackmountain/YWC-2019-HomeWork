import React, {useState} from 'react'
import styled from '@emotion/styled'
import Logo from '../assets/footer/footer.png'
import Hamburger from './Hamburger'
import {browserSizeRule} from '../utils/style'

const NavbarContainer = styled.div `
box-sizing: border-box;
background: #fff;
${({ isOpen }) => !isOpen && `box-shadow: 0 1px 1px hsla(0, 0%, 0%, 3%);`}
padding: 10px 20px;
display: flex;
flex-flow: wrap;
justify-content: space-between;
align-items: center;
position: fixed;
width: 100%;
top: 0;
z-index: 200;

${browserSizeRule.largePhone} {
  padding: 0 15px;
}

> img {
  width: 35px;
  height: 48px;
  ${browserSizeRule.largePhone} {
    display: none;
  }
}

.hamburger {
  ${browserSizeRule.largePhone} {
    display: none;
  }
}

.navbar-link {
  flex: 1 0 100%;
  overflow: hidden;
  ${({ isOpen }) => (isOpen ? `height: 150px;` : `height: 0px;`)}
  transition: height ease-in-out 350ms;

  ${browserSizeRule.largePhone} {
    height: auto;
  }

  ul {
    margin: 0;
    padding: 0;
    ${browserSizeRule.largePhone} {
      text-align: center;
      padding-top: 5px;
    }
  }

  li {
      list-style: none;
      padding: 10px 0;
      text-align: right;

      ${browserSizeRule.largePhone} {
        padding: 14px 15px;
        display: inline-block;
      }

      a {
        color: rgba(0, 0, 0, 0.5);
        text-decoration: none;
        ${browserSizeRule.largePhone} {
          color: #000;
          font-size: 0.875rem;
          font-family: 'TATSanaChon';
        }

        :focus {
          color: #000;
        }
      }
    }
  }
}
`

export default ({navbarItems}) => {
    const [isOpen,setOpen] = useState(false)

    return(
        <NavbarContainer isOpen={isOpen}>
            <img src={Logo} alt='logo'/>
            <div className='hamburger'>
                <Hamburger state={{isOpen,setOpen}}/>
            </div>
            <div className='navbar-link'>
                 <ul>
                    {navbarItems.map(item => (
                    <li key={item.label}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                    ))}
                </ul>
            </div>
        </NavbarContainer>
    )
}