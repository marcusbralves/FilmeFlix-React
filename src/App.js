import React from 'react';
import Menu from './Componets/Menu';
import dadosInicias from './Componets/data/dados_iniciais.json';
import BannerMain from './Componets/BannerMain';
import Carousel from './Componets/Carousel';
import Footer from './Componets/Footer';

function App() {
  return (
    <nav>
      <div style={{ background: "#141414"}}>
      <Menu />

      <BannerMain
      videoTitle={dadosInicias.categorias[0].videos[0].titulo}
      url={dadosInicias.categorias[0].videos[0].url}
      videoDescription={"O que é front-end?"} />

      <Carousel
      ignoreFirstVideo
      category={dadosInicias.categorias[0]}/>

      <Carousel
       category={dadosInicias.categorias[1]}/>
      
      <Carousel
       category={dadosInicias.categorias[2]}/>

      <Carousel
       category={dadosInicias.categorias[3]}/>
      </div>
    </nav>
  );
}

export default App;
