// # IMAGENS APRESENTAÇÃO DE BEBES
import card1 from '../assets/images/cards/card1.jpg'
import apresentacaoDeBebe01 from '../assets/images/photos/Apresentação de bebê -  Beatriz/01.jpg'

// # IMAGENS AULA DE VIOLÃO
import card2 from '../assets/images/cards/card2.jpg'
import aulaDeViolao01 from '../assets/images/photos/Aula de Violão/01.jpg'
import aulaDeViolao02 from '../assets/images/photos/Aula de Violão/02.jpg'

// # IMAGENS BATISMOS
import card3 from '../assets/images/cards/card3.jpg'
import batismo01 from '../assets/images/photos/Batismo/01.jpg'
import batismo02 from '../assets/images/photos/Batismo/02.jpg'
import batismo03 from '../assets/images/photos/Batismo/03.jpg'

// # CAFÉ DA MANHA
import card4 from '../assets/images/cards/card4.jpg'
import cafeDaManha01 from '../assets/images/photos/Cafés da manhã/01.jpg'

// # CULTO DE ORGANIZAÇÃO DA IGREJA
import card5 from '../assets/images/cards/card5.jpg'
import cultoDeOrganizacaoDaIgreja01 from '../assets/images/photos/Culto de organização da Igreja/01.jpg'
import cultoDeOrganizacaoDaIgreja02 from '../assets/images/photos/Culto de organização da Igreja/02.jpg'
import cultoDeOrganizacaoDaIgreja03 from '../assets/images/photos/Culto de organização da Igreja/03.jpg'
import cultoDeOrganizacaoDaIgreja04 from '../assets/images/photos/Culto de organização da Igreja/04.jpg'

//# FAMILIA PASTORAL
import card6 from '../assets/images/cards/card6.jpg'
import familiaPastoral01 from '../assets/images/photos/Familia Pastoral/01.jpg'

// # KIDS
import card7 from '../assets/images/cards/card7.jpg'
import kids01 from '../assets/images/photos/Kids/01.jpg'
import kids02 from '../assets/images/photos/Kids/02.jpg'

// # MUSICAL DE PASCOA
import card8 from '../assets/images/cards/card8.jpg'
import musicalDePascoa01 from '../assets/images/photos/Musical de pascoa/01.jpg'
import musicalDePascoa02 from '../assets/images/photos/Musical de pascoa/02.jpg'
import musicalDePascoa03 from '../assets/images/photos/Musical de pascoa/03.jpg'
import musicalDePascoa04 from '../assets/images/photos/Musical de pascoa/04.jpg'

// # PROJETO SONHO DE MÃE DA JMN
import card9 from '../assets/images/cards/card9.jpg'
import projetoSonhoDeMae01 from '../assets/images/photos/Projeto Sonho de Mãe da JMN/01.jpg'
import projetoSonhoDeMae02 from '../assets/images/photos/Projeto Sonho de Mãe da JMN/02.jpg'



const items = [
  {
    id: 1,
    title: "Apresentação de bebês",
    text: '"Em seguida, tomou as crianças nos braços, impôs-lhes as mãos e as abençoou." (Mc 10:16)',
    image: card1,
    photo: [
      apresentacaoDeBebe01
    ]
  },
  {
    id: 2,
    title: "Aulas de violão",
    text: '"Louvai ao Senhor com harpa, cantai a ele com o saltério e um instrumento de dez cordas." (Sl 33:2)',
    image: card2,
    photo: [
      aulaDeViolao01,
      aulaDeViolao02
    ]
  },
  {
    id: 3,
    title: "Batismos",
    text: '"Portanto ide, fazei discípulos de todas as nações, batizando-os em nome do Pai, e do Filho, e do Espírito Santo" (Mt 28:19)',
    image: card3,
    photo: [
      batismo01,
      batismo02,
      batismo03
    ]
  },
  {
    id: 4,
    title: "Cafés da manhã",
    text: '"Este é o dia que fez o Senhor; regozijemo-nos, e alegremo-nos nele." (Sl 118:24)',
    image: card4,
    photo: [
      cafeDaManha01
    ]
  },
  {
    id: 5,
    title: "Organização da igreja",
    text: '"Pois também eu te digo que tu és Pedro, e sobre esta pedra edificarei a minha igreja, e as portas do inferno não prevalecerão contra ela" (Mt 16:18)',
    image: card5,
    photo: [
      cultoDeOrganizacaoDaIgreja01,
      cultoDeOrganizacaoDaIgreja02,
      cultoDeOrganizacaoDaIgreja03,
      cultoDeOrganizacaoDaIgreja04
    ]
  },
  {
    id: 6,
    title: "Família pastoral",
    text: '"Pregue a palavra, esteja preparado a tempo e fora de tempo, repreenda, corrija, exorte com toda a paciência e doutrina." (2Tm 4:2)',
    image: card6,
    photo: [
      familiaPastoral01
    ]
  },
  {
    id: 7,
    title: "Kids",
    text: '"Educa a criança no caminho em que deve andar; e até quando envelhecer não se desviará dele." (Pv 22:6)',
    image: card7,
    photo: [
      kids01,
      kids02
    ]
  },
  {
    id: 8,
    title: "Musicais de páscoa",
    text: 'Ele, porém, disse-lhes: Não vos assusteis; buscais a Jesus Nazareno, que foi crucificado; já ressuscitou, não está aqui; eis aqui o lugar onde o puseram." (Mc 16:6)',
    image: card8,
    photo: [
      musicalDePascoa01,
      musicalDePascoa02,
      musicalDePascoa03,
      musicalDePascoa04
    ]
  },
  {
    id: 9,
    title: "Sonho de mãe",
    text: '"Seus descendentes serão poderosos na terra, serão uma geração abençoada, de homens íntegros." (Sl 112:2)"',
    image: card9,
    photo: [
      projetoSonhoDeMae01,
      projetoSonhoDeMae02
    ]
  },
]

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2 },
  { width: 800, itemsToShow: 3 },
  { width: 1000, itemsToShow: 4 }
]

// INSERIR A TAGS DO VIDEOS MAI ATUAL NA POSIÇÃO
// DE CIMA E APAGAR O ULTIMO
const imagesOfVideosList = [
  {    
    tag: "gxYpOUuZnOk"
  },
  {    
    tag: "B25vEvtPtis" 
  },
  {    
    tag: "LtndcSsuP7U"
  },
  {    
    tag: "VXOnBMLm6Vg"
  },
  {    
    tag: "BCin_zgVMOs"
  },
  {    
    tag: "TErF33vzYw4"
  },
  {   
    tag: "bBBtjAtCpXQ"
  },
  { 
    tag: "-kGwh542xb0"
  },
  {    
    tag: "vE-JXP9zPGU"
  },
  {    
    tag: "JQAq3LTJxa8"
  }
]

export {
  items,
  breakPoints,
  imagesOfVideosList
}