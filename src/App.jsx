import { Animator, Fade, FadeIn, Move, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, ZoomIn, ZoomOut, batch } from "react-scroll-motion";

function App() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  
  return (
    <>
      <a href="#top" className="z-40 fixed bottom-10 right-10 bg-blue-950 p-4 rounded-lg cursor-pointer">Top</a>
      <ScrollContainer>
        <ScrollPage id="top">
          {/* <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}> */}
          <Animator animation={batch(FadeIn(), Sticky(), MoveOut(0, -500))}>
            <h1 className="text-5xl font-bold ">
              Olá Íris 👧, <span className="inline-block animate-[waving-hand_3s_ease-in-out_infinite]">👋</span>
            </h1>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(StickyIn(), FadeIn(), ZoomOut(), MoveOut(-500, -500))}>
            <p className="text-5xl">Um ano se passou! Vamos recordar?</p>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(StickyIn(), FadeIn(), ZoomOut(), MoveIn(1000, 0), MoveOut(-1000, 0))}>
            <div className='flex items-center'>
              <h2 className='text-5xl font-bold'>Brincar!</h2>
              <img 
                className='border-white border-8  m-10 rounded-[5rem] w-[60%] animate-[wave-photo_3s_ease-in-out_infinite]' 
                src='./assets/20220915_230253.jpg' 
                alt='' 
              />
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(StickyIn(), FadeIn(), ZoomOut(), MoveOut(-500, -300))}>
            <div className='flex items-center'>
              <img className='border-white border-8  m-10 rounded-[5rem] w-[60%] animate-[wave-photo_3s_ease-in-out_infinite]' 
                src='./assets/20221016_151648.jpg' alt='' />


              <h2 className="text-5xl font-bold">🌲 Natureza</h2>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(StickyIn(), FadeIn(), ZoomOut(), MoveIn(1000, 0), MoveOut(-1000, 0))}>
            <div className='flex items-center'>
              <img className='border-white border-8  m-10 rounded-[5rem] w-[60%] animate-[wave-photo_3s_ease-in-out_infinite]' 
                src='./assets/20221022_142638.jpg' 
                alt='' 
              />
              <h2 className='text-5xl font-bold'>🧍‍♀️ Style</h2>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(StickyIn(), FadeIn(), ZoomOut(), MoveIn(1000, 0), MoveOut(-1000, 0))}>
            <div className='flex items-center'>
              <img className='border-white border-8 m-10 rounded-[5rem] w-[60%] animate-[wave-photo_3s_ease-in-out_infinite]' 
                src='./assets/20221029_091944.jpg' alt='' 
              
              />
              <h2 className="text-5xl font-bold">🏇 Aventuras</h2>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
        <Animator animation={batch(StickyIn(), FadeIn(), ZoomOut(), MoveIn(1000, 0), MoveOut(-1000, 0))}>
          <div className='flex items-center'>
            <img className='border-white border-8  m-10 rounded-[5rem] w-[60%] animate-[wave-photo_3s_ease-in-out_infinite]' 
              src='./assets/20221031_192231.jpg' alt='' 
            
            />
            <h2 className="text-5xl font-bold">🥻 Cosplay</h2>
          </div>
        </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(StickyIn(), FadeIn(), ZoomOut(), MoveIn(1000, 0), MoveOut(-1000, 0))}>
            <div className='flex items-center'>
              <img className='border-white border-8  m-10 rounded-[5rem] w-[60%] animate-[wave-photo_3s_ease-in-out_infinite]' 
                src='./assets/20221218_101343.jpg' alt='' 
              
              />
              <h2 className="text-5xl font-bold">🛫 Viagem</h2>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(StickyIn(), FadeIn(), ZoomOut(), MoveIn(1000, 0), MoveOut(-1000, 0))}>
            <div className='flex items-center'>
              <img className='border-white border-8  m-10 rounded-[5rem] w-[60%] animate-[wave-photo_3s_ease-in-out_infinite]' 
                src='./assets/20221218_110551.jpg' alt='' 
              
              />
              <h2 className="text-5xl font-bold">🎄</h2>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(StickyIn(), FadeIn(), ZoomOut(), MoveIn(1000, 0), MoveOut(-1000, 0))}>
            <div className='flex items-center'>
              <img className='border-white border-8  m-10 rounded-[5rem] w-[60%] animate-[wave-photo_3s_ease-in-out_infinite]' 
                src='./assets/P_20220625_164518_vHDR_Auto.jpg' alt='' 
              
              />
              <h2 className="text-5xl font-bold">🔫 Adrenalina</h2>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(StickyIn(), FadeIn(), ZoomOut(), MoveIn(1000, 0), MoveOut(-1000, 0))}>
            <div className='flex items-center'>
              <img className='border-white border-8  m-10 rounded-[5rem] w-[60%] animate-[wave-photo_3s_ease-in-out_infinite]' 
                src='./assets/P_20220805_223017_vHDR_Auto.jpg' alt='' 
              
              />
              <h2 className="text-5xl font-bold">🍽️ Comida é felicidade</h2>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(StickyIn(), FadeIn(), ZoomOut(), MoveIn(1000, 0), MoveOut(-1000, 0))}>
            <div className='flex items-center'>
              <img className='border-white border-8  m-10 rounded-[5rem] w-[60%] animate-[wave-photo_3s_ease-in-out_infinite]' 
                src='./assets/P_20220816_114756_vHDR_Auto.jpg' alt='' 
              
              />
              <h2 className="text-5xl font-bold">🦜 Paixão por aves</h2>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(StickyIn(), FadeIn(), ZoomOut(), MoveIn(1000, 0), MoveOut(-1000, 0))}>
            <div className='flex items-center'>
              <img className='border-white border-8  m-10 rounded-[5rem] w-[60%] animate-[wave-photo_3s_ease-in-out_infinite]' 
                src='./assets/P_20220816_145136_vHDR_Auto.jpg' alt='' 
              
              />
              <h2 className="text-5xl font-bold">❤️ Felicidade</h2>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <a 
              href={`/happy-birthday`}
            >
              <div className="giftbox">
                <div className="cover">
                  <div></div>
                </div>
                <div className="box"></div>
              </div>
              <h2 className="text-5xl font-bold">Feliz Aniversário 🥳🎉</h2>
            </a>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  )
}

export default App
