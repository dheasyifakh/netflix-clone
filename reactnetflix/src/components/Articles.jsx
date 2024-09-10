import React from 'react'

const Articles = ({ title, desc}) => {
    const showArticleDetail = () =>{
        alert('artikel diklik')
    }
    const saveArticle = (event) =>{
        //untuk tidak kereload saat onclick
        event.preventDefault();
        //agar tidak show alert ahowarticle
        event.stopPropagation();
        alert('artikel disimpan')
    }
    return ( 
        <article onClick={showArticleDetail}>
            <h3>{title}</h3>
            <p>{desc}</p>
            <form action="">
                <button onClick={saveArticle}>Simpan Artikel</button>
            </form>
        </article>
      )
}

export default Articles