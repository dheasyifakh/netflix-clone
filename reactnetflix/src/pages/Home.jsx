import { useAtom } from 'jotai';
import '../App.css';
import Layout from '../components/Layout';
import { languageAtom } from '../jotai/atoms';
import { useEffect, useState } from 'react';
import { apiInstance } from '../utils/apiInstance';
import {motion} from 'framer-motion';
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
      <motion.h1 
        initial={{ x: "100%", opacity: 0}}
        animate={{ x: "0%", opacity: 1}}
        transition={{ duration: 1, ease: "backOut"}}
        className='text-center p-6 text-3xl'>{language == 'en' ? "Watch Netflix Free!": "Tonton Netflix Gratis!"}</motion.h1>
      <p className='text-center text-indigo-500 font-bold text-sm p-4'>Message from API: {movies?.message}</p>
      <motion.div 
        initial={{ y: "100%", opacity: 0}}
        animate={{ y: "0%", opacity: 1}}
        transition={{ duration: 1, ease: "backOut"}}
        className="grid grid-cols-2 gap-4">
        <div className="bg-indigo-500 p-4">
          <h1>Hello World</h1>
        </div>
        <div className="bg-indigo-500 p-4">
          <h1>Hello World 2</h1>
        </div>
        <div className="bg-indigo-500 p-4">
          <h1>Hello World 3</h1>
        </div>
        <div className="bg-indigo-500 p-4">
          <h1>Hello World 4</h1>
        </div>
      </motion.div>
    </Layout>
  )

}

export default Home;