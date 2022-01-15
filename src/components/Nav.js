import * as React from 'react'
import { ThemeConsumer } from '../contexts/theme'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  color: 'rgb(187, 46, 31)'
}

export default function Nav () {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className='row space-between' id="main-nav">
          <ul className='row nav'>
            <li>
              <NavLink
                to='/'
                exact
                className='nav-link'
                activeClassName="selected"
                >
                  Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/battle'
                className='nav-link'
                activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }}
                >
                  Battle
              </NavLink>
            </li>
          </ul>
          <button
            style={{fontSize: 30}}
            className='btn-clear'
            onClick={toggleTheme}
          >
            {theme === 'light' ? '🔦' : '💡'}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  )
}