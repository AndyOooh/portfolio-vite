import RootLayout from './components/Layout'
import Landing from 'sections/landing/Landing'
import About from 'sections/about/About'
import Work from 'sections/work/Work'
import Skills from 'sections/skills/Skills'
import Contact from 'sections/contact/Contact'

function App() {
  return (
    <RootLayout>
      <Landing />
      <About />
      <Work />
      <Skills />
      <Contact />
    </RootLayout>
  )
}

export default App
