import Link from 'next/link'
import styles from './projects.module.css'
import { Box } from '@mui/material'
import Image from 'next/image'
import { MuiCTA, SecondaryCTA } from '@/app/utils/cta'



const Projects = () => {

  const projectArr = [
  {
  title: 'Awesome Folio (Personal Website)',
  description: 'Coming Soon',
  link: '',
  img: '/assets/web.png',
  alt: 'projectimage',
  disabled: true
},
  {
  title: 'Design Portfolio for Sivle Design Agency',
  description: 'Portfolio Project',
  link: 'https://www.sivle.great-site.net',
  img: '/assets/sivle-web.png',
  alt: 'projectimage',
  disabled: false
},
  {
  title: 'Adson Barros Design Portfolio',
  description: 'Portfolio (Under Development)',
  link: 'https://www.adsonbarros.great-site.net/',
  img: '/assets/image.png',
  alt: 'projectimage',
  disabled: false
},

{
  title: 'Alex AI',
  description: 'Coming Soon',
  link: '',
  img: '/assets/make it happen (1).png',
  alt: 'projectimage',
  disabled: true
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
            return <SingleProject key={index} name={project.title} desc={project.description} pageLink={project.link} img={project.img} alt={project.alt} disabled={project.disabled}/>
           })}
        </div>
      </Box>
    </div>
  )
}

const SingleProject = ({name = 1, desc = 'lorem', pageLink, img, alt ,disabled})=> {
  
  return (
    <div className={styles.projectsingle}>
      <div className=''>
        <Image src={img} width={450} height={400} sizes='33vw, 100vw' className={styles.projectsingleimg} alt={alt}/>
      </div>
      <h1 className={styles.projecttitle}>{name}</h1>
      <p>{desc}</p>
      <Link href={pageLink} >
      <MuiCTA text={'View Project'} disabled = {disabled}/>
      </Link>
    </div>
  )
}

export default Projects
