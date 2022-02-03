import { Paragraph, SideSheet, Position, Pane, Card, Tablist, Tab, Heading } from 'evergreen-ui';
import React from 'react';
import "../style/Slider.scss"
import {BsFillInfoCircleFill} from "react-icons/bs"
import "animate.css"

function SideSheetComponent() {
const [selectedIndex, setSelectedIndex] = React.useState(0)
const [isShown, setIsShown] = React.useState(false)
  
console.log(selectedIndex)

const loremIpsum = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sint consequuntur praesentium at nulla perferendis hic eligendi harum aut quae aspernatur velit repellat molestiae consequatur, atque odio, doloribus nesciunt excepturi non adipisci molestias vero! Impedit incidunt facilis sint totam blanditiis magnam quia, libero repellat non laboriosam quidem aperiam, distinctio pariatur a. Blanditiis facere rerum, ad consectetur expedita ratione harum eaque culpa fuga et dolorum natus, officia perspiciatis, a sequi corporis eos error possimus autem dolore mollitia maiores? Eaque fugit at temporibus similique quaerat ipsum et vel, veritatis fugiat dolorum porro facere cum culpa, libero voluptas aut sed suscipit id, facilis quae odio nostrum. Quae esse accusantium dolores nulla cumque, recusandae explicabo obcaecati accusamus dolorem magni, iusto earum optio. Optio officia eius voluptatum quae excepturi, deserunt hic similique dignissimos unde commodi, tempore, ea accusamus deleniti cum fuga id fugit perferendis soluta at. Odit explicabo porro facere. Nulla amet illo nostrum illum sit voluptas obcaecati similique omnis beatae. Ipsam placeat maxime nisi autem ea delectus, nemo consequuntur tenetur voluptatibus magni aliquam corporis excepturi repudiandae error, vel porro pariatur suscipit, commodi labore debitis vitae cupiditate est! Error ad culpa ducimus, amet quis totam fugiat at, quo ex autem animi voluptatem, aut excepturi facilis beatae nostrum eius vel voluptates deleniti aspernatur velit voluptate molestiae sapiente. Atque facilis nesciunt quas, at cumque quod ut voluptate porro? Officiis illo sint hic suscipit amet eveniet blanditiis, fugiat quam quia soluta nam non libero esse asperiores quis perferendis ex sunt accusamus dignissimos cumque. Sint illo voluptatem temporibus neque asperiores tempore suscipit laudantium itaque laborum pariatur. Aliquid saepe dolor, vel incidunt quam cupiditate, reprehenderit illo tenetur deserunt iure, numquam unde repellendus. Temporibus aspernatur possimus exercitationem rem, maxime amet distinctio officia tempora consectetur eaque iusto, quam quas explicabo. Deleniti aut unde totam sunt est quaerat optio porro fuga eos, quam, adipisci atque! Enim obcaecati a, quo sunt earum cupiditate, quae perferendis delectus illo voluptatibus sed placeat. Dolorem facere est, quam necessitatibus quas nemo voluptatem et. Consequatur consectetur iusto dolores aliquid voluptas inventore facere qui, rerum aliquam ipsum reprehenderit incidunt ut aperiam voluptates sapiente saepe magnam laudantium maiores fugiat, deserunt tenetur veniam fuga veritatis possimus. Velit officia maiores ullam, amet beatae facilis magni non, obcaecati odio commodi repellat voluptates officiis impedit aperiam fugit labore neque voluptatum excepturi! Vero sapiente facere eaque pariatur blanditiis tenetur. Ducimus rerum, at impedit blanditiis quia neque soluta ipsa velit aliquid, amet eos provident sapiente possimus laborum quibusdam eum labore doloribus est culpa quas sit ea voluptatum delectus ab. Architecto, provident. Nesciunt expedita maiores illo. Ducimus quaerat eum doloribus perferendis, culpa libero tenetur quibusdam repellendus inventore aliquam sequi itaque eos aut maxime est in minus vitae voluptatem recusandae fugiat nobis ut. Fugit a sit rerum quibusdam eveniet non obcaecati ab laudantium architecto dolores? Ipsam odio adipisci reiciendis modi dolore, nesciunt itaque, doloribus sint cum quisquam reprehenderit. Eius facilis maiores autem provident dicta iusto exercitationem minus delectus velit optio illo nemo molestias soluta quasi dignissimos dolore animi cupiditate debitis tempore earum rerum, deserunt quos laborum. Laborum corrupti sed at distinctio eos, inventore accusantium quod quidem quibusdam quisquam, odit culpa eius voluptas harum ipsa delectus in magni omnis, doloremque quo. Dicta magni eum quod inventore iste totam, provident fugit, quos consectetur ipsa voluptates, beatae facilis ea dolores quaerat sint! Eveniet voluptate totam accusantium quae deserunt explicabo et? Accusamus, nobis saepe voluptas porro labore fugiat culpa eos. Voluptas eligendi in ex perferendis illum amet ullam aliquam! Error, natus numquam ea obcaecati eaque odio ducimus nesciunt illo soluta modi ad. Vero, tenetur! Exercitationem laboriosam magnam beatae accusamus deserunt obcaecati laudantium aperiam quis rem quisquam dolore recusandae cumque magni temporibus aliquid sapiente vitae, harum autem molestias maiores quasi at molestiae. Cupiditate hic enim at, eligendi molestiae atque nulla dolorem! Explicabo odit eos facere officiis corrupti, voluptate debitis sunt qui, vel ad, quia voluptates quibusdam? Et laboriosam ipsam aperiam numquam vitae quae est, accusantium iure quos temporibus in quas ex deserunt nobis. Mollitia officiis dolorum assumenda voluptas praesentium ratione molestiae inventore qui possimus numquam laudantium sint minus deleniti saepe cupiditate quos nostrum dolorem enim, maiores nulla maxime totam iure? Temporibus modi quis laboriosam perspiciatis mollitia eum non, dicta, natus quia dolorum iure labore veritatis harum saepe quae velit accusantium at qui? Suscipit a magni debitis nulla, facilis modi dolorum laborum commodi! Nesciunt voluptatum id nobis! Quae ut molestiae consequuntur totam exercitationem quos minima enim quisquam id iste culpa nam sapiente rem, unde, asperiores praesentium? Voluptas nulla suscipit ea inventore quaerat deleniti voluptatibus quas maxime est dicta vero quasi eveniet magni repudiandae totam officiis mollitia nobis, consequuntur illum hic commodi reiciendis deserunt. Placeat tempora quas qui perspiciatis cum rem, accusamus ipsa nemo tenetur labore excepturi debitis odit magni obcaecati quis vero, ea pariatur eos quidem aperiam? Vel, nihil tempore. Quos nisi voluptate sunt fuga doloremque quibusdam ex aspernatur nemo placeat consectetur vel est, dolore explicabo delectus a enim, blanditiis ipsa nostrum saepe, mollitia facilis deleniti. Tempore architecto rem voluptatibus obcaecati sed ea suscipit ullam ab nobis eius hic dignissimos dolorem laboriosam provident repellat reiciendis, consectetur explicabo magnam recusandae modi exercitationem expedita repellendus nesciunt. Ipsam dignissimos adipisci tenetur, nobis aperiam unde dolore cupiditate sit vitae placeat sint autem aspernatur quia facilis nihil iste quos. Recusandae ducimus quibusdam placeat vero optio, ut et odit deleniti sed, impedit voluptates nulla veniam, voluptatem consectetur molestiae quis. Suscipit nihil error exercitationem ducimus expedita deserunt excepturi, incidunt facilis aspernatur impedit assumenda necessitatibus dicta neque! Doloremque dolorum ducimus iure accusantium aperiam temporibus consectetur labore deleniti nemo alias. Rerum neque amet porro vel earum atque dicta quam voluptate aut voluptas magnam commodi, ut et fugiat quod. Deleniti nostrum quam tempora laudantium obcaecati autem est vel, ipsam, reiciendis doloribus expedita at fuga inventore dolor. Odit recusandae, vel officia obcaecati repellat cum? Minima quos, animi similique porro rem itaque quas magni, voluptas eaque aut ducimus velit eos harum architecto fuga, doloremque numquam quis quasi pariatur. Reiciendis, facilis maiores, facere odio consequatur non nisi delectus quia quasi quis, et modi perspiciatis officiis neque dignissimos. Nihil, nam. Nulla vitae quibusdam, explicabo vero sed quis corrupti quidem."

  return (
    <>
      <SideSheet 
          position={Position.LEFT}
          isShown={isShown} 
          onCloseComplete={() => setIsShown(false)} 
          preventBodyScrolling 
          containerProps={{
            display: 'flex',
            flex: '1',
            flexDirection: 'column'
          }}>
          <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="black">
          <Pane padding={16} borderBottom="muted">
            <Heading size={600} color="white">Strange Assassins</Heading>
            <Paragraph size={400} color="white">Story: Keenan Reed / Art: Eugenio Belgrado</Paragraph>
          </Pane>
          <Pane display="flex" padding={8} background="black">
            <Tablist>
              {['Summary', 'Extra Content', 'Support'].map((tab, index) => (
                <Tab
                  appearance="secondary"
                  color="white"
                  key={tab}
                  isSelected={selectedIndex === index}
                  onSelect={() => setSelectedIndex(index)}
                >
                  {tab}
                </Tab>
              ))}
            </Tablist>
          </Pane>
        </Pane>
        <Pane flex="1" overflowY="scroll" background="black" padding={16}>
          <Card
            // elevation={0}
            // height={240}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Heading color="white">Summary</Heading>
          </Card>
            {
              selectedIndex === 0 ? <Paragraph color="white">{loremIpsum}</Paragraph>
            : selectedIndex === 1 ? <Paragraph color="white">Index 1</Paragraph>
            : <Paragraph color="white">Index 2</Paragraph>
            }            
        </Pane>
      </SideSheet>
      <BsFillInfoCircleFill className="SideSheetButton animate__animated animate__heartBeat animate__delay-2s animate__slower" onClick={() => setIsShown(true)}/>
    </>
  )
}

export default SideSheetComponent;