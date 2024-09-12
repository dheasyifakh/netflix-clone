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
      <h1 className='text-center p-12'>{language == 'en' ? "Watch Netflix Free!": "Tonton Netflix Gratis!"}</h1>
      <p className='bg-black text-white p-4 text-center'>Message from API: {movies?.message}</p>
      <div className="card bg-base-100 w-96 shadow-xl">
  <figure className='mt-5'>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </Layout>
  )

}

export default Home;