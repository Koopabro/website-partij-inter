import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import evrim from '../assets/images/evrim.jpeg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import globe from '../assets/images/globe.svg'
import handshake from '../assets/images/handshake.svg'
import university from '../assets/images/university.svg'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Partij INTER. " />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main special">
            <header className="major">
              <h2>Partij INTER.</h2>
              <p>
                Als toekomstige medische professional is{' '}
                <strong>global health</strong> een onmisbaar begrip geworden.
                Lokale gezondheidsproblematiek is nationale
                gezondheidsproblematiek en nationale gezondheidsproblematiek is
                internationale gezondheidsproblematiek. Toch is het
                geneeskundeonderwijs nog steeds eenzijdig gericht op het
                opleiden van toekomstige Nederlandse dokters. Alleen kunnen we
                de problematiek niet aan. Dat moeten we samen doen.
              </p>
              <p>
                <ul style={{ 'list-style': 'none' }}>
                  <li>
                    Wij zijn voor toekomstige <strong>internationale</strong>{' '}
                    medische leiders.
                  </li>
                  <li>
                    Wij zijn voor <strong>interfacultair</strong> voor de
                    student opkomen.
                  </li>
                  <li>
                    Wij zijn voor <strong>interdisciplinair</strong> het vak
                    leren.
                  </li>
                </ul>
              </p>
              <p>
                <strong>Wij zijn INTER.</strong>
              </p>
            </header>
          </section>
          <section id="mensen" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Onze mensen</h2>
                </header>
                <p>
                  Ik ben Evrim Hotamis, eerstejaars co-assistent en lijsttrekker
                  voor Partij INTER. Ik vind dat een medisch-academische
                  opleiding veel meer is dan enkel de beroepsopleiding tot
                  dokter. Als lid van de studentenraad wil ik opkomen voor het
                  integreren van persoonlijke ontwikkeling binnen het
                  curriculum, voor meer global health binnen het masteronderwijs
                  en voor interfacultaire samenwerking met andere
                  geneeskundefaculteiten en met de paramedische faculteiten van
                  de HvA. <br /> <br />
                  Ik wil een UvA dat toekomstige medische leiders vormt. Dat kan
                  enkel met jouw stem. Stem daarom 8-12 juni Partij INTER.
                </p>
                <ul className="actions">
                  <li>
                    <Link
                      to="mailto:m.e.hotamis@amsterdamumc.nl"
                      className="button"
                    >
                      Stuur me een mailtje
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={evrim} alt="" />
              </span>
            </div>
          </section>

          <section id="standpunten" className="main special">
            <header className="major">
              <h2>Onze standpunten</h2>
            </header>
            <ul className="features">
              <li>
                <img
                  className="icon major style1"
                  src={globe}
                  alt="wereldbol"
                />
                <h3>Internationaal</h3>
                <p>
                  Global Health is een van de fundamenten van de medische
                  opleiding. We willen dat toekomstige artsen de handvatten
                  hebben om zich in te kunnen zetten voor globale
                  gezondheidsproblematiek. Dat betekent niet alleen onderwijs
                  over en in buitenlandse situaties, maar ook voldoende
                  academische vaardigheden om een rol te kunnen spelen op het
                  wereldtoneel.
                </p>
              </li>
              <li>
                <img
                  className="icon major style3"
                  src={university}
                  alt="universiteit"
                />
                <h3>Interfacultair</h3>
                <p>
                  Een medische professional van het AMC moet dezelfde
                  kwaliteiten en waarden beschikken als een medische
                  professional van de RUG. Het is daarom van belang dat er
                  eenduidig beleid wordt gevoerd omtrent het opleiden van
                  studenten. Ook de grote thema's onder de studenten, zoals
                  co-assistentvergoeding en eerlijke werktijden, moeten
                  interfacultair aangepakt worden.
                </p>
              </li>
              <li>
                <img
                  className="icon major style5"
                  src={handshake}
                  alt="handdruk"
                />
                <h3>Interdisciplinair</h3>
                <p>
                  Een medische professional staat nooit alleen. Het is
                  belangrijk dat de studenten dan ook al vroeg op de opleiding
                  leren samen te werken met toekomstige paramedici. Dit vraagt
                  om breed geïntegreerd interdisciplinair onderwijs. Sinds de
                  fusie lopen co-schappen van de VU en UvA steeds meer door
                  elkaar heen. Om de kwaliteit van de opleidingen te waarborgen
                  is een warme band nodig.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="google.nl" className="button">
                    Lees ons volledige program
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
