import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Credits</h2>
      Icons made by{' '}
      <a
        href="https://www.flaticon.com/authors/vitaly-gorbachev"
        title="Vitaly Gorbachev"
      >
        Vitaly Gorbachev
      </a>{' '}
      from{' '}
      <a href="https://www.flaticon.com/" title="Flaticon">
        {' '}
        www.flaticon.com
      </a>
      <div>
        Icons made by{' '}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </section>
    <section>
      <h2>Contact</h2>
      <dl className="alt">
        <dt>Email</dt>
        <dd>
          <a href="mailto:amc@partij-inter.nl">amc@partij-inter.nl</a>
        </dd>
      </dl>
      Volg ons ook op: <br /> <br />{' '}
      <ul className="icons">
        <li></li>
        <li>
          <a href="https://facebook.com" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://instagram.com" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </footer>
)

export default Footer
