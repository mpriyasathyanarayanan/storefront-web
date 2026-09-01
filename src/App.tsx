import { About } from './components/About'
import { Collections } from './components/Collections'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Collections />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
