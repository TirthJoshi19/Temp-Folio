import { PrimaryCTA } from '@/app/utils/cta';
import styles from './hero.module.css';
import Text from '@/app/utils/subtext';
import ImageComp from '@/app/utils/ImageGen';



const Hero = () => {
  return (
    <>
    <div className={`${styles.herocomp}`}>
      <HeroImage />
      <h2 className={styles.Hero}>Helping Brands Grow 📈 <br></br>by Maxing their online potential</h2>
      <Text text={'Web Developer, Programmer, Designer'}/>
      <div className='flex-center mt-4'>
        <PrimaryCTA text={'View Projects'} tailwindclasses={''} link={'#projects'}/>
      </div>
      
    </div>
    
    </>
  );
};

const HeroImage = ()=> {
  return (
    <div className='flex-center'>
        <ImageComp border={true} height={60} width={65}/>
      </div>
  )
}


export default Hero;
