import './App.css';

function WebTitle(){
  return (
    <h1>Netflix Clone</h1>
  )
}

function Articles ({index, title, desc}){
  return ( 
    <article key={index}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </article>
  )
}
function App(){
  const article = [
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
  return(
     <main>
      <WebTitle/>
      {article?.map ((item, index)=>(
        <Articles index={index} title={item.title} desc={item.desc}/>

      ))

      }
     </main>
  )

}

export default App;