// components/ResponsiveCard.tsx
import Image from 'next/image'
import Button from './components/Button'

export default function Card() {
  return (
    <div className="flex items-center justify-center py-12 px-4">
      <div className="flex flex-col items-center bg-gray-800 text-white 
                      p-8 rounded-md 
                      w-full max-w-xs sm:max-w-sm md:w-64 lg:max-w-lg 
                      h-auto md:h-[500px]">

        {/* Foto circular */}
        <div className="bg-amber-50 w-24 h-24 rounded-full overflow-hidden mx-auto">
          <Image
            src="/perfil.png"
            alt="Foto de perfil"
            width={96}
            height={96}
            className="object-cover"
          />
        </div>

        {/* Título */}
        <h2 className="text-center pt-8 text-[1rem] font-bold">
          Luiz Henrique
        </h2>
        <p className='text-center pt-2 pb-4 text-lime-300 text-[0.7rem]'>
          Acesse minhas redes sociais
        </p>

        <Button label={'Instagram'} href={'https://www.instagram.com/lluizh_so'}/>
        <Button label={'Linkedin'} href={'https://www.linkedin.com/in/luiz-oliveira-2a3879255//'}/>
        <Button label={'GitHub'} href={'https://github.com/LuizzOliveira/'}/>

      </div>
    </div>
  )
}
