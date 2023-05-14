import * as ScrollTelling from '@bsmnt/scrollytelling';
import Confetti from 'react-confetti';
import { useWindowSize } from "react-use";

export function ScrollSection(props) {
    const { width, height } = useWindowSize();
    return (
    <div className='overflow-x-hidden'>
      <Confetti
        width={width}
        height={height}
      />
      <ScrollTelling.Root>
        <section className='grid h-screen place-items-center'>
          <ScrollTelling.Animation 
            tween={{
              fromTo: {  }
            }}
          >
            <h1 className="text-5xl font-bold ">
              Olá Íris <span className="inline-block animate-[waving-hand_3s_ease-in-out_infinite]">👋</span>, é o teu dia 👧!
            </h1>
          </ScrollTelling.Animation>
        </section>
      </ScrollTelling.Root>
      <ScrollTelling.Root>
        <section className='grid h-screen place-items-center'>
          <ScrollTelling.Animation>
            <p className="text-5xl">
              A carregar a supresa para ti, aguarda alguns segundos!
            </p>
          </ScrollTelling.Animation>
        </section>
      </ScrollTelling.Root>
      <ScrollTelling.Root>
        <section className='grid h-screen place-items-center'>
          <ScrollTelling.Animation>
            <p className="text-5xl">
              Vamos criar o teu bolo! <span>🍰</span>
            </p>
          </ScrollTelling.Animation>
        </section>
      </ScrollTelling.Root>
      <ScrollTelling.Root>
        <section className='grid h-screen place-items-center'>
          <ScrollTelling.Animation>
            <img 
              src='' 
              alt='Cirança na cadeira'
            />
          </ScrollTelling.Animation>
        </section>
      </ScrollTelling.Root>
    </div>
    )
}