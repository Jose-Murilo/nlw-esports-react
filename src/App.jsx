import './style.css'

import { gameListData } from './dataVariables/variables'
import { channelListData } from './dataVariables/variables'
import { imgSocialNetworks } from './dataVariables/variables'

import { Header } from './components/Header'
import { Section } from './components/Section'
import { ListItem } from './components/ListItem'

export function App() {

  return (
    <div className="App">
      <Header />

      <main>
        <Section title="Meus jogos" subTitle="Os games que eu mais curto jogar!" className="games-list">
          {
            gameListData.map((item, index) => {
              return (
                <ListItem key={index}
                  url={item.url} 
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
        </Section>
        
        <Section title="Canais e streamers" subTitle="Lista de canais e transmissões que não perco!" className="channel-list">
          {
            channelListData.map((item, index) => {
              return (
                <ListItem key={index}
                  url={item.url} 
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
        </Section>

        <Section title="Minhas redes" subTitle="Se conecte comigo agora mesmo!" className="social-list">
          {
           imgSocialNetworks.map((item, index) => {
              return (
                <ListItem key={index}
                  url={item.url} 
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
        </Section>
      </main>
      
    </div>
  )
}


