import { useState, useEffect} from "react"

const useArticle = () =>{
  const [article, setArticle] = useState("")
  function getArticle(counterClick){
    return fetch("https://dummyjson.com/posts/" + counterClick).then(data=> data.json())
 }
  useEffect(()=>{
    getArticle(1)
    .then(res => setArticle(res))
  },[])

  return {article}
}

export default useArticle