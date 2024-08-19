import { useEffect, useState } from 'react';
import './App.css';

function WebTitle(props){
  const [title, setTitle] = useState(props.title)

  const changeTitle = () =>{
    setTitle("Netflix")
  }
  return (
    <>
    <h1>{title}</h1>
    <button onClick={changeTitle}>Ganti Judul</button>
    </>
    
  )
}

function Articles ({ title, desc}){
  return ( 
    <article >
        <h3>{title}</h3>
        <p>{desc}</p>
      </article>
  )
}
function App(){
  const [data, setData] = useState("Dhea Syifa")
  const [article, setArticle] = useState("")
  const [counterClick, setCounterClick] = useState(1)

  useEffect(()=>{
    fetch("https://dummyjson.com/posts/" + counterClick).then(data=> data.json())
    .then(res => setArticle(res))
  },[counterClick])
  const articles = [
    {
      title :"Artikel Pertama",
      desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum ad aspernatur, nisi inventore consequuntur id in officiis nostrum obcaecati quod omnis sequi blanditiis. Expedita nobis maiores molestias incidunt alias!"
    },
    {
      title :"Artikel Kedua",
      desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum ad aspernatur, nisi inventore consequuntur id in officiis nostrum obcaecati quod omnis sequi blanditiis. Expedita nobis maiores molestias incidunt alias!"
    },
    {
      title :"Artikel Ketiga",
      desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum ad aspernatur, nisi inventore consequuntur id in officiis nostrum obcaecati quod omnis sequi blanditiis. Expedita nobis maiores molestias incidunt alias!"
    },
    {
      title :"Artikel Keempat",
      desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum ad aspernatur, nisi inventore consequuntur id in officiis nostrum obcaecati quod omnis sequi blanditiis. Expedita nobis maiores molestias incidunt alias!"
    },
    {
      title :"Artikel Kelima",
      desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum ad aspernatur, nisi inventore consequuntur id in officiis nostrum obcaecati quod omnis sequi blanditiis. Expedita nobis maiores molestias incidunt alias!"
    },
    {
      title :"Artikel Keenam",
      desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum ad aspernatur, nisi inventore consequuntur id in officiis nostrum obcaecati quod omnis sequi blanditiis. Expedita nobis maiores molestias incidunt alias!"
    },
    {
      title :"Artikel Ketujuh",
      desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum ad aspernatur, nisi inventore consequuntur id in officiis nostrum obcaecati quod omnis sequi blanditiis. Expedita nobis maiores molestias incidunt alias!"
    },
    {
      title :"Artikel Kedelapan",
      desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum ad aspernatur, nisi inventore consequuntur id in officiis nostrum obcaecati quod omnis sequi blanditiis. Expedita nobis maiores molestias incidunt alias!"
    },
    {
      title :"Artikel Kesembilan",
      desc : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eum ad aspernatur, nisi inventore consequuntur id in officiis nostrum obcaecati quod omnis sequi blanditiis. Expedita nobis maiores molestias incidunt alias!"
    },
  ]

  const changeState = () =>{
    setData("sudah diubah")
  }
  const nextArticle = () =>{
    setCounterClick(counterClick + 1)
  }
  const prevArticle = () =>{
    setCounterClick(counterClick - 1)
  }
  return(
     <main>
      <WebTitle title="Netflix Clone"/>
      {/* {article  ? article.posts?.map ((item, index)=>( */}
        <Articles  title={article.title} desc={article.body}/>

      {/* )) : <p>Loading...</p>
      } */}
      <button onClick={prevArticle}>Previous Article</button>
      {counterClick}
      <button onClick={nextArticle}>Next Article</button>
     </main>
  )

}

export default App;