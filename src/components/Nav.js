import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = props => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy
      items={['intro', 'first', 'second', 'cta']}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="intro">
          <a href="#">over ons</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="mensen">
          <a href="#">onze mensen</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="standpunten">
          <a href="#">onze standpunten</a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
)

export default Nav
