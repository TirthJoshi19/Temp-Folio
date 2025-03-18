import { IconButton } from "@mui/material"
import { Instagram } from "@mui/icons-material"
import { LinkedIn } from "@mui/icons-material"
import Link from "next/link"


const Footer = () => {
  return (
    <footer>
    <div className='flex-center footerdiv flex-dir-col p-4'>
      <h2 className='pagehead'>Made with love by Tirth Joshi<span className='purplespan'>.</span></h2>
      <div className="socials">
        <Link href={'https://instagram.com/tirth._web'}>
      <IconButton sx={{color: 'white'}}>
        <Instagram />
      </IconButton>
        </Link>
        <Link href={'https://www.linkedin.com/in/tirth-joshi-11a656317/'}>
      <IconButton sx={{color: 'white'}}>
        <LinkedIn />
      </IconButton>
        </Link>
      </div>
    </div>
    </footer>
  )
}

export default Footer
