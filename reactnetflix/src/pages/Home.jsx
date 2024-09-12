import { useAtom } from 'jotai';
import '../App.css';
import Layout from '../components/Layout';
import { languageAtom } from '../jotai/atoms';
import { useEffect, useState } from 'react';
import { apiInstance } from '../utils/apiInstance';

function Home(){
  const[language, ] = useAtom(languageAtom)
  const [movies, setMovies] = useState(null)

  const fetchMyMovies = async() =>{
    const response = await apiInstance.get("my-movies")
    setMovies(response.data)
  }

  useEffect(()=>{
    fetchMyMovies()
  },[])
  
  return(
    <Layout>
      <h1>{language == 'en' ? "Watch Netflix Free!": "Tonton Netflix Gratis!"}</h1>
      <p>Message from API: {movies?.message}</p>
    </Layout>
  )

}

export default Home;