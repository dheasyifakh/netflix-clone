import { useState } from "react"

const WebTitle = (props) => {
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

export default WebTitle