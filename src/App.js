import React, { useState } from 'react';

import { BsFillCaretLeftFill, BsFillCaretRightFill, BsPeopleFill } from "react-icons/bs";
import {
  FaBabyCarriage,
  FaGuitar,
  FaPray,
  FaHandshake,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneSquare
} from "react-icons/fa";

import './App.css';
import logo from './assets/images/logo.png'
import logoIcon from './assets/images/icons/logo.png'
import ourHistoryImage from './assets/images/photos/Culto de organização da Igreja/03.jpg'

import ImageCBF from './assets/images/logo-links/cbf.png'
import ImageCBB from './assets/images/logo-links/cbb.png'
import ImageJMM from './assets/images/logo-links/jmm.png'
import ImageJMN from './assets/images/logo-links/jmn.png'

import Carousel, { consts } from 'react-elastic-carousel'

import CardsOurFiles from './Components/CardsOurFiles'
import MinistriesCards from './Components/MinistriesCards'
import MessageCarousel from './Components/MessageCarousel'
import ArrowButton from './Components/ArrowButton'
import CardsLinks from './Components/CardsLinks'

import { items, breakPoints } from './utils/imageList'

function App() {

  const [toggleMenuShow, setToggleMenuShow] = useState(true)

  const openLink = (url) => {

    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) {
      newWindow.opener = null
    }
  }

  const toggleMenu = () => {

    const menuSection = document.querySelector(".App-menu")

    document.body.style.overflow = toggleMenuShow ? "hidden" : "initial"

    menuSection.classList.toggle("on", toggleMenuShow)
    setToggleMenuShow(!toggleMenuShow)

  }

  const bodyOverflow = () => {    

    const menuSection = document.querySelector(".App-menu")

    menuSection.classList.toggle("on", false)

    document.body.style.overflow = "initial"

    setToggleMenuShow(true)
  }

  return (
    <div className="App">
      <header className="App-header" id="header">
        <div className="App-menu">
          <a href="#header">
            <img src={logo} width="72" height="89,1" className="App-logo-menu" alt="Logo" />
          </a>
          <div className="menu-toggle" onClick={() => toggleMenu()}>
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
          <ul className="App-menu-list" >
            <li><a href="#our-files" onClick={bodyOverflow}>Arquivos</a></li>
            <li><a href="#bulletins" onClick={bodyOverflow}>Boletins</a></li>
            <li><a href="#messages" onClick={bodyOverflow}>Mensagens</a></li>
            <li><a href="#ministries" onClick={bodyOverflow}>Ministérios</a></li>
            <li><a href="#our-history" onClick={bodyOverflow}>Nossa história</a></li>
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
                  <ArrowButton
                    icon={BsFillCaretLeftFill}
                    color="#383838"
                    colorMouserOver="#c4c4c4"
                  /> :
                  <ArrowButton
                    icon={BsFillCaretRightFill}
                    color="#383838"
                    colorMouserOver="#c4c4c4"
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

          <hr className="footer-line" />

        </section>

        <section className="section-our-history" id="our-history">
          <p>Igreja Batista no Bairro Matadouro</p>
          <div className="our-history-content-container">
            <img
              src={ourHistoryImage}
              alt="our-history-images"
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

          <hr className="footer-line" />

        </section>

        <section className="section-messages" id="messages" >
          <p>Mensagens</p>
          <div className="messages-content-container">
            <MessageCarousel />
          </div>
        </section>

        <section className="section-links" id="links">
          <CardsLinks
            logo={ImageCBF}
            text="Convenção Batista Fluminense"
            url="https://batistafluminense.org.br/"
          />

          <CardsLinks
            logo={ImageCBB}
            text="Convenção Batista Brasileira"
            url="http://www.convencaobatista.com.br/siteNovo/index.php"
          />

          <CardsLinks
            logo={ImageJMM}
            text="Junta de Missões Mundiais"
            url="https://missoesmundiais.com.br/"
          />

          <CardsLinks
            logo={ImageJMN}
            text="Junta de Missões Nacionais"
            url="https://missoesnacionais.org.br/"
          />

        </section>

        <footer className="footer">
          <div className="footer-header-container">
            <div className="footer-header-logo">
              <img src={logoIcon} alt="logo-footer" />
              <span>Igreja Batista Bairro Matadouro</span>
            </div>
            <div className="footer-header-links">
              <FaYoutube
                size={37}
                color="#DCDCDC"
                className="footer-header-links-icon"
                onClick={() => { openLink("https://www.youtube.com/channel/UC3ry81G5ukbur_hzc4R8C3Q") }}
              />
              <FaEnvelope
                size={31}
                color="#DCDCDC"
                className="footer-header-links-icon"
                onClick={() => {
                  openLink(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=batistanobairromatadouro@hotmail.com&su=CONTATO_SITE&body="
                  )
                }}
              />
            </div>
          </div>
          <hr />
          <div className="footer-body-container">
            <div className="footer-body-home">
              <h1>HOME</h1>
              <a href="#our-files">Arquivos</a>
              <a href="#bulletins">Boletins</a>
              <a href="#messages">Mensagens</a>
              <a href="#ministries">Ministérios</a>
              <a href="#our-history">Nossa história</a>
            </div>
            <div className="footer-body-links">
              <h1>LINKS ÚTEIS</h1>
              <button onClick={() => openLink("https://batistafluminense.org.br/")}>
                Convenção Batista Fluminense
              </button>
              <button onClick={() => openLink("http://www.convencaobatista.com.br/siteNovo/index.php")}>
                Convenção Batista Brasileira
              </button>
              <button onClick={() => openLink("https://missoesmundiais.com.br/")}>
                Junta de Missões Mundiais
              </button>
              <button onClick={() => openLink("https://missoesnacionais.org.br/")}>
                Junta de Missões Nacionais
              </button>
            </div>
            <div className="footer-body-contact">
              <h1>CONTATO</h1>

              <div className="footer-body-contact-content-container">
                <FaMapMarkerAlt size={30} />
                <span>Av. Santos Dumont, nº 330<br />
                  Bairro Matadouro - Itaperuna-RJ</span>
              </div>
              <div className="footer-body-contact-content-container">
                <FaEnvelope size={30} />
                <span>batistanobairromatadouro@hotmail.com</span>
              </div>
              <div className="footer-body-contact-content-container">
                <FaPhoneSquare size={30} />
                <span>(22) 99999-9999</span>
              </div>

            </div>
          </div>
          <hr />
          <div className="footer-copyright-container">
            <span>Copyrights 	&#169; 2021</span>
            <span>Desenvolvido por Wladimir Navega</span>
          </div>
        </footer>

      </main>

    </div >
  );
}

export default App;
