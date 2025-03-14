import { IconButton } from '@mui/material';
import styles from './about.module.css';
import Image from 'next/image';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import Tech from './Tech';
import Info from './Info';

const About = () => {
  return (
    <div className={styles.me}>
      <h2 className="pagehead p-8">
        {' '}
        About Me<span className="purplespan">.</span>
      </h2>
      <Profile />
    </div>
  );
};

const Profile = ()=> {
  return (
    <div className={styles.profile}>
        <div className={styles.profilepicsect}>
          <div className={styles.profilelastchild}>
            <Image
              src={'/assets/tirth.4.jpg'}
              width={200}
              height={200}
              alt="tirth"
            />
            <h1 className={styles.name}>
              Tirth Joshi<span className="purplespan">.</span>
            </h1>
            <p className="subtext">
              Hi! I am Tirth, I am a dev, designer and a programmer
            </p>
            <div className={`mb-10`}>
              <div className="">
                <SocialIcons /> 
              </div>
        
            </div>
          </div>
            
        </div>
            
            <Tech />
      </div>
  )
}

const SocialIcons = () => {
  return (
    <>
    <Link href={'https://www.instagram.com/tirth._web'}>
      <IconButton className={styles.socialicon} target='blank'>
        <InstagramIcon />
      </IconButton>
      </Link>
      <Link href={'https://www.linkedin.com/in/tirth-joshi-11a656317/'}>
      <IconButton className={styles.socialicon}>
        <LinkedInIcon />
      </IconButton>
      </Link>
    </>
  );
};





export default About;
