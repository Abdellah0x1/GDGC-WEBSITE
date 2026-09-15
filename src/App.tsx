
import { ShaderBackground } from './Components/ShaderBackground'
import { FaGoogle, FaLinkedinIn, FaWhatsapp, FaInstagram, FaGithub, FaDiscord } from 'react-icons/fa'
import type { IconType } from 'react-icons'

function App() {
  const links: { label: string; to: string; icon: IconType }[] = [
    { label: 'Join our Chapter', to: '', icon: FaGoogle },
    { label: 'LinkedIn', to: 'https://www.linkedin.com/in/marwane-gdg-on-campus-ensa-fez-77056b437/', icon: FaLinkedinIn },
    { label: 'Whatsapp Group', to: 'https://chat.whatsapp.com/InjXKWptVBr0FKgtomo5Nb', icon: FaWhatsapp },
    { label: 'Instagram', to: 'https://www.instagram.com/gdg.ensaf/', icon: FaInstagram },
    { label: "Github", to: 'https://github.com/gdgoc-ensaf', icon: FaGithub },
    { label: "Discord", to: 'https://discord.gg/AhzcJ337Q', icon: FaDiscord }
  ];


  return (
    <>
      <section className='flex flex-col items-center justify-center w-full min-h-screen py-12 relative'>

        <div className='z-20 max-w-sm sm:max-w-md w-full text-center flex flex-col gap-2 sm:gap-3 px-5 sm:px-6'>
          <img className='w-20 h-20 sm:w-28 sm:h-28 mx-auto object-contain' src="https://gdgcairo.org/assets/logo-xct4cwc2.png" />
          <h1 className='font-bold text-xl sm:text-2xl md:text-3xl'>Google Developer Groups</h1>
          <p className='text-base sm:text-lg font-medium'><span className='text-blue-500'>
            On Campus
          </span> Fez</p>
          <p className='text-xs sm:text-sm text-gray-600'>
            Passionate Community of Students and Tech Enthusiasts at ENSA FEZ
          </p>

          {/* social links */}
          <div className='flex flex-col gap-2.5 sm:gap-3 mt-3 sm:mt-4'>
            {links.map((link, index) => (
              <a key={index} href={link.to} target='_blank' rel='noopener noreferrer' className='flex items-center justify-center gap-2 bg-gray-100/80 hover:bg-gray-200/90 text-blue-400 py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg shadow-sm text-xs sm:text-sm font-medium transition-all'>
                <link.icon className='text-base' />
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <ShaderBackground className='absolute inset-0' />

      </section>
    </>
  )
}

export default App
