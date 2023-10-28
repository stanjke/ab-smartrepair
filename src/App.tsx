import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Search from './components/Search/Search';
import Sort from './components/Sort/Sort';

function App() {

  return (
    <>
      <Header />
      <main>
        <Filter />
        <Search />
        <Sort />
      </main>
    </>
  )
}

export default App
