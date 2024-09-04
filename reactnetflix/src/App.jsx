import { useEffect, useState } from 'react';
import './App.css';
import { getArticle } from './utils/getArticle';
import WebTitle from './components/WebTitle';
import Articles from './components/Articles';
import LimitArticle from './components/LimitArticle';
import Layout from './components/Layout';
import CustomInput from './components/CustomInput';

function App(){
  const [data, setData] = useState("Dhea Syifa")
  const [article, setArticle] = useState("")
  const [counterClick, setCounterClick] = useState(1)
  const [text, setText] = useState('')

  const handleChange = (e) =>{
    setText(e.target.value)
  }
  useEffect(()=>{
    getArticle(counterClick)
    .then(res => setArticle(res))
  },[counterClick])
  
  
  const changeState = () =>{
    setData("sudah diubah")
  }
  const nextArticle = () =>{
    setCounterClick(counterClick + 1)
  }
  const prevArticle = () =>{
    setCounterClick(counterClick - 1)
  }
  // if(counterClick > 4)
  //   return <LimitArticle/>
  
  return(
     <Layout>
      {/* <WebTitle title="Netflix Clone"/> */}
      <Articles  title={article.title} desc={article.body}/>
      {/* <CustomInput label="First Input" handleChange={handleChange} text={text}/>
      <CustomInput label="Second Input" handleChange={handleChange} text={text}/> */}
      {/* {counterClick == 2 && <p>Click 2x</p>}
      {counterClick > 4 ? <LimitArticle/> :
        <>
        <button onClick={prevArticle}>Previous Article</button>
      {counterClick}
      <button onClick={nextArticle}>Next Article</button>
        </>
      } */}
      
      </Layout>
  )

}

export default App;