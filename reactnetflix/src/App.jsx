import './App.css';
import Articles from './components/Articles';
import Layout from './components/Layout';
import useArticle from './hooks/useArticle';

function App(){
  const {article} = useArticle()
  
  return(
    <Layout>
      <Articles  title={article.title} desc={article.body}/>
    </Layout>
  )

}

export default App;