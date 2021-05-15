import React from 'react';

import { BsFillCaretLeftFill, BsFillCaretRightFill, BsPeopleFill } from "react-icons/bs";
import { FaBabyCarriage, FaGuitar, FaPray, FaHandshake } from "react-icons/fa";

import './App.css';
import logo from './assets/images/logo.png'
import ourHistoryImage from './assets/images/photos/Culto de organização da Igreja/03.jpg'

import Carousel, { consts } from 'react-elastic-carousel'

import CardsOurFiles from './Components/CardsOurFiles'
import MinistriesCards from './Components/MinistriesCards'

import { items } from './utils/imageList'

function App() {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 800, itemsToShow: 3 },
    { width: 1000, itemsToShow: 4 }
  ]



  return (
    <div className="App">
      <header className="App-header">
        <div className="App-menu">
          <a href="/#">
            <img src={logo} width="72" height="89,1" className="App-logo-menu" alt="Logo" />
          </a>
          <ul className="App-menu-list" >
            <li><a href="#our-files">Arquivos</a></li>
            <li><a href="#bulletins">Boletins</a></li>
            <li><a href="/#">Mensagens</a></li>
            <li><a href="#ministries">Ministérios</a></li>
            <li><a href="#our-history">Nossa história</a></li>
          </ul>
        </div>
        <div className="App-menu-center-container">
          <img src={logo} width="291" height="360" className="App-logo-header" alt="Logo" />
          <div class="App-menu-line"></div>
          <p className="App-menu-text-title"> Uma igreja <br />viva em <br />família</p>
        </div>
        <div className="App-footer-for-header-container">
          <div className="App-left-text-footer-for-header-container">
            <p className="App-text-footer-for-header">Celebrações</p>
            <div class="App-footer-line"></div>
            <p className="App-text-footer-for-header">Qua - 19:30<br />Sex - 19:30<br />Dom - 09:30 e 19:30</p>
          </div>
          <div className="App-connection-rectangle-container">
            <div className="App-outside-connection-rectangle"></div>
            <div className="App-inside-connection-rectangle"></div>
            <img src={logo} width="53" height="66" className="App-connection-logo" alt="Logo" />
          </div>
          <div className="App-right-text-footer-for-header-container">
            <p className="App-text-footer-for-header">Av. Santos Dumont, nº 330<br />Bairro Matadouro<br />Itaperuna - RJ</p>
          </div>
        </div>
      </header>
      <main>
        <section className="section-our-files" id="our-files">
          <p> Nossos Arquivos </p>
          <div className="cards-slider-container">
            <Carousel
              breakPoints={breakPoints}
              renderArrow={({ type, onClick }) => {
                const pointer = type === consts.PREV ?
                  <BsFillCaretLeftFill
                    size={40}
                    color="#383838"
                    className="arrows"
                    onMouseOut={({ target }) => target.style.color = '#383838'}
                    onMouseOver={({ target }) => target.style.color = '#c4c4c4'}
                  /> :
                  <BsFillCaretRightFill
                    size={40}
                    color="#383838"
                    className="arrows"
                    onMouseOut={({ target }) => target.style.color = '#383838'}
                    onMouseOver={({ target }) => target.style.color = '#c4c4c4'}
                  />
                return (
                  <div className="arrowsContainer">
                    <button onClick={onClick} className="arrowsCarousel">{pointer}</button>
                  </div>
                )
              }}>
              {items.map(item =>
                <CardsOurFiles
                  id={item.id}
                  title={item.title}
                  text={item.text}
                  image={item.image}
                  photo={item.photo}
                />)}
            </Carousel>
          </div>
        </section>

        <section className="section-bulletins" id="bulletins">
          <p> Boletins </p>
          <span>Acesse aqui nossos boletins semanais e <br />
fique por dentro das atividades de nossa igreja.</span>
          <button>Acesse os boletins aqui</button>
        </section>

        <section className="section-ministries" id="ministries">

          <div className="ministries-title">
            <p> Ministérios </p>
            <hr />
          </div>

          <div className="ministries-content-container">
            <MinistriesCards
              title="INFANTIL"
              description="02-09 anos"
              icon={FaBabyCarriage}
            />
            <div className="ministries-card-left-line"></div>

            <MinistriesCards
              title="LOUVOR"
              description="Louvor e Adoração"
              icon={FaGuitar}
            />
            <div className="ministries-card-left-line"></div>

            <MinistriesCards
              title="ORAÇÃO"
              description="&quot;Orai sem cessar&quot;"
              icon={FaPray}
            />
            <div className="ministries-card-left-line"></div>

            <MinistriesCards
              title="MISSÕES"
              description="&quot;Ide pregai o evangelho&quot;"
              icon={FaHandshake}
            />
            <div className="ministries-card-left-line"></div>

            <MinistriesCards
              title="FAMÍLIAS"
              description="&quot;...e serão ambos uma só carne&quot;"
              icon={BsPeopleFill}
            />

          </div>

          <hr className="ministries-footer-line" />

        </section>

        <section className="section-our-history" id="our-history">
          <p>Igreja Batista no Bairro Matadouro</p>
          <div className="our-history-content-container">
            <img
              src={ourHistoryImage}
              alt="our-history-image"
              className="our-history-image"
            />
            <p>
              O Trabalho Batista aqui começou em 15 de outubro de 1990, na Av.
              Santos Dumont, n° 170, na casa da irmã Maria Portela. O que motivou
              o início deste trabalho foi a dificuldade da irmã Maria Portela em ir
              aos cultos devido a problemas de saúde. Os anos se passaram e os cultos
              permaneceram levando aquela iniciativa a se transformar em um ponto
              de pregação algum tempo depois da Primeira igreja Batista de Itaperuna.
              Da generosidade e unidade de alguns irmãos nasceu a um projeto que
              em 2019 se tornaria a Igreja Batista bairro Matadouro.
          </p>

            <p>
              Em 14 de novembro de 1993, a Primeira Igreja Batista de Itaperuna
              decidiu em sua assembleia regular de membros a aquisição de um terreno
              para a construção de uma sede para o ponto de pregação.
          </p>

            <p>
              Na sessão do mês seguinte ficou registrada a compra de um terreno medindo 12x30 metros, no valor de
              CR$300.000,00 (trezentos mil cruzeiros reais), na Av. Santos Dumont,
              lote 173, quadra 9. Onde estamos hoje.
          </p>

            <p>
              Em 09 de abril de 1995, em sua assembleia administrativa, a Igreja deixou marcado o dia 03 de junho, do mesmo
              ano, para a inauguração da sede própria do ponto de pregação. Na mesma sessão a igreja discute elevar o
              trabalho à Congregação, com o objetivo de oferecer Escola Bíblica e cultos aos domingos para atender aos
              irmãos e moradores do bairro.
          </p>

            <p>
              Em 08 de outubro de 1995, a Primeira Igreja Batista de Itaperuna votou elevar o Ponto de Pregação à categoria
              de Congregação, passando a funcionar assim no dia 01 de janeiro de 1996
          </p>

          <p>
              Desde 2006 a Igreja conta com um terreno que foi adquirido para ser anexada a sede da Congregação,
              possibilitando assim a ampliação do espaço físico no futuro.
          </p>

          <p>
          No dia 10 de dezembro de 1995 foi eleita a primeira diretoria da Congregação, sendo o Pastor Jessé Cláudio 
          Pinto o seu primeiro diretor. Depois do Pr. Jessé, outros irmãos e pastores estiveram na liderança do trabalho
           aqui nesta localidade: O Diácono José Álem Corcino, Pr. Ezequiel Pimentel de Mattos, Pr. Braz Januário da Silva,
            o irmão Romi Rezende Rabello, Varlei Caetano, o Pr. Cleber Montes Moreira que passou aproximadamente 13 anos 
            por aqui e atualmente o Pr. Fagner Dias Boiça que está aqui desde abril de 2018.
          </p>

          <p>
          Hoje estamos organizando a Igreja Batista bairro Matadouro com 38 membros. Louvamos a Deus por tudo o que ele 
          tem feito nesta Igreja, louvamos a Deus pela vida daqueles que por aqui passaram e que aqui estão. Suplicamos 
          ao Deus todo poderoso que nos abençoe e use na propagação o evangelho do Senhor Jesus Cristo aqui nesta comunidade.
          </p>


          </div>

        </section>
      </main>

    </div >
  );
}

export default App;
