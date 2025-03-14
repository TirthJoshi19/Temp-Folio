import Link from 'next/link'
import styles from './projects.module.css'
import { Box } from '@mui/material'
import Image from 'next/image'
import { SecondaryCTA } from '@/app/utils/cta'



const Projects = () => {

  const projectArr = [
  {
  title: 'Awesome Folio (Personal Website)',
  description: 'Coming Soon',
  link: 'sivle.great-site.net',
  img: '/assets/web.png',
  alt: 'projectimage'
},
  {
  title: 'Design Portfolio for Sivle Design Agency',
  description: 'Portfolio Project',
  link: 'sivle.great-site.net',
  img: '/assets/sivle-web.png',
  alt: 'projectimage'
},
  {
  title: 'Adson Barros Design Portfolio',
  description: 'Portfolio (Under Development)',
  link: '',
  img: '/assets/Adson logo.jpg',
  alt: 'projectimage'
},

{
  title: 'Alex AI',
  description: 'Coming Soon',
  link: '',
  img: '/assets/make it happen (1).png',
  alt: 'projectimage'
}
]

  return (
    <div className={`${styles.projects} p-4`} id='projects'>
      <h3 className='pagehead p-4'>Projects
        <span className='purplespan'>.</span>
      </h3>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <div className={styles.projectgrid}>
           {projectArr.map((project, index)=> {
            return <SingleProject key={index} name={project.title} desc={project.description} pageLink={project.link} img={project.img} alt={project.alt}/>
           })}
        </div>
      </Box>
    </div>
  )
}

const SingleProject = ({name = 1, desc = 'lorem', pageLink, img, alt})=> {
  return (
    <div className={styles.projectsingle}>
      <div className='h-65 relative'>
        <Image src={img} width={450} height={400} sizes='33vw, 100vw' className={styles.projectsingleimg} alt={alt}/>
      </div>
      <h1 className={styles.projecttitle}>{name}</h1>
      <p>{desc}</p>
      <Link href={pageLink} >
      <SecondaryCTA text={'View Project'} />
      </Link>
    </div>
  )
}

export default Projects
