import './App.css'
import Entry from './components/Entry'
import Footer from './components/Footer'
import Header from './components/Header'
import { content } from './content'


function App() {

  return (
    <div className="App">
      <Header />
      <ul className='page-content'>
        {content.map((prop) => (
          <li key={prop.title}>
            <Entry {...prop}/>
          </li>
        ))}
      </ul>
      <Footer/>
    </div>
  )
}

export default App
