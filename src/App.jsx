import Header from './components/header/header'
import Hero from './components/hero/hero'
import Main from './components/main/main'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import React, { useEffect, useState } from 'react'

function App() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 550) {
        setScroll(true)
      } else {
        setScroll(false);
      }
    })
  }, [])
  console.log(window.location.pathname)
  return (
    <div id='up' className='container' >
      <Header></Header>
      <Hero></Hero>
      <div className="divider" />
      <Main></Main>
      <div className="divider" />
      <Contact></Contact>
      <div className="divider" />
      <Footer></Footer>
      <a href="#up" style={{ opacity: scroll ? 1 : 0, transition: "1s" }} >
        <button className="scroll">
          <span className='icon-arrow-circle-up'></span>
        </button>
      </a>
    </div>
  )
}

export default App
