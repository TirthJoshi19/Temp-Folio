'use client'
import styles from './appbar.module.css';
import { IconButton, styled } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import InfoIcon from '@mui/icons-material/Info';
import { useEffect, useState } from 'react';
import { WhiteTooltip } from '@/app/utils/Tooltipcomp';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { userAgent } from 'next/server';



const Appbar = () => {
  
    const [active, setActive] = useState(0);
    const path = usePathname()
    console.log(path);
    useEffect(()=> {
      if(path === '/'){
        setActive(0);

      } else if(path === '/work'){
        setActive(1)
      } else {
        setActive(2)
      }
    }, [])

   
    const onclickHandler = (index)=> {
        setActive(index);
        
    }
    
  return (
    <>
      <div className={`${styles.appbarparent} flex-center menusection`}>
        <div className={styles.appbarbtnparent}>
         <Link href={'/'}
         onClick={(e)=> {
            onclickHandler(0)
          }}>
          <WhiteTooltip title="Home">
            <IconButton  className={active === 0 && 'active'}>
            <WavingHandIcon />
          </IconButton>
          </WhiteTooltip></Link>
          <Link href={'/work'} onClick={(e)=> {
            onclickHandler(1)
          }}>
          <WhiteTooltip title="Work">
            <IconButton  className={active === 1 && 'active'}>
            <WorkIcon />
          </IconButton>
          </WhiteTooltip>
          </Link>
            <Link href={'/about'} onClick={()=> {
                  onclickHandler(2)
                }}>
            <WhiteTooltip title="About: under construction 🛠️" >
                <IconButton  className={active === 2 && 'active'} >
            <InfoIcon />
          </IconButton>
            </WhiteTooltip>
            </Link>
          
        </div>
      </div>
    </>
  );
};

export default Appbar;
