import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import PreviewSection from './components/PreviewSection/PreviewSection';
// import { useFetchDataQuery } from './store/serverResponse/googleWebAppApi';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';



function App() {


  // const { data: carsData } = useFetchDataQuery();

  // console.log('GOOGLE_SHEET_RESPONSE: ', carsData);
  return (
    <>
      <Header />
      <main>
        <PreviewSection />
      </main>
    </>
  )
}

export default App
