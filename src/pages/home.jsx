import ContactHom from './Contact'
import Tecnologias from './Tecnologias'
import Presentacion_2 from './Presentacion_2'
import Proyectos from './Proyectos'
import Mobile from './Mobile'
import Principio from './Principio'
import '../App.css'
import 'animate.css';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiWordpress, SiFigma, SiGit } from 'react-icons/si';
import LogoLoop from '../components/LogoLoop'

const techLogos = [
  { node: <SiReact className='h-20 md:h-30 text-[#0600ff]' />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className='h-20 md:h-30 text-[#0600ff]' />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className='h-20 md:h-30 text-[#0600ff]' />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className='h-20 md:h-30 text-[#0600ff]' />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiHtml5 className='h-20 md:h-30 text-[#0600ff]' />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 className='h-20 md:h-30 text-[#0600ff]' />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiJavascript className='h-20 md:h-30 text-[#0600ff]' />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiWordpress className='h-20 md:h-30 text-[#0600ff]' />, title: "WordPress", href: "https://wordpress.org" },
  { node: <SiFigma className='h-20 md:h-30 text-[#0600ff]' />, title: "Figma", href: "https://figma.com" },
  { node: <SiGit className='h-20 md:h-30 text-[#0600ff]' />, title: "Git", href: "https://git-scm.com" },
];

function Index() {

  return (
    <div className='relative overflow-hidden'>
      <Principio />
      <div className='flex text-mono flex-col h-fit scroll-smooth px-10 md:mx-[10vh] overflow-x-hidden'>
        <Presentacion_2 />
        <Proyectos />
        <Mobile />
        <Tecnologias />
      </div>
      <div className='md:my-10 my-5'>
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={60}
          gap={100}
          hoverSpeed={0}
          scaleOnHover
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
      <ContactHom />
    </div>
  )
}

export default Index