'use client'
import React from 'react'
import styles from './about.module.css'
import { Icon, IconButton } from '@mui/material'
import JavascriptIcon from '@mui/icons-material/Javascript';
import {Button} from '@mui/material';
import { CgPiano } from "react-icons/cg";
import { WhiteTooltip } from '@/app/utils/Tooltipcomp';
import { LiaRobotSolid } from "react-icons/lia";

const Tech = () => {
  return (
    <div className={styles.tech}>
      <div className={styles.techsection}>
      
        <h2 className={styles.secthead}>Stuff I am Familiar With:</h2>
      <div className={styles.iconsect}>
        <TechIcons />
      </div>
<>
      <h2 className={`${styles.secthead} mt-4`}>Hobbies:</h2>
      <Hobbies />
      <InfoText headText={`I 💖 working with designers. Here's Why:`} text={'When I was learning how to design, I wondered how they created such beautiful portfolios, and then I learned how to program. Generally speaking, I love developing unique portfolios.'}/>
      </>
      </div>
    </div>
  )
}

const TechIcons = ()=> {

    const iconArr = [
        {name: 'Javascript', descrtiption: 'The goto language for the web, hated by many defeated by none', icon: <JavascriptIcon />},
        {name: 'React', descrtiption: 'A javascript based framework, very convinient', icon: ''},
        {name: 'Next Js', descrtiption: 'Framework for frameworks', icon: ''},
        {name: 'Node JS', descrtiption: 'Nothing, just Javascript rocking on the backend', icon: ''},
        {name: 'Firebase', descrtiption: `Google's own platform for developers to build apps`, icon: ''},
        {name: 'WordPress', descrtiption: 'Old, but still needed', icon: ''},
        {name: 'Design', descrtiption: 'The magic potion that makes the web beautiful', icon: ''},
    ]

    return (
       iconArr.map((icon, index)=> {
        return <WhiteTooltip title={icon.descrtiption} key={index}>
            <Button sx={{color: 'white', bgcolor: '#51e', textTransform: 'none', fontWeight: 700}} variant='outlined' >
            {icon.icon} {icon.name}
        </Button> 
        </WhiteTooltip>
       })
    )
}

const Hobbies = ()=> {
    const arr = [{
        icon: <CgPiano />,
        name: 'Piano',
        descrtiption: `I love smashing keys whether it's a mechanical keyboard or a musical`
    },
    {
        icon: <LiaRobotSolid />,
        name: 'Robotics',
        descrtiption: `Build anything, anyone, however you like`
    },
]

return (
    arr.map((icon, index)=> {
       return  <WhiteTooltip title={icon.descrtiption} key={index}>
            <Icon  className={styles.hobbyicon}>
                {icon.icon}
            </Icon>
        </WhiteTooltip>
    })
)
}

const InfoText = ({headText, text})=> {
  return (
    <>
    <h2 className={`${styles.secthead} mt-4`}>{headText}</h2>
    <p>{text}</p>
    </>
  )
}

const AwesomeStuff = ()=> {
  return (
    <div className={styles.secthead}>
<h2 style={{color: 'wheat'}}>gu</h2>
    </div>
  )
}

export default Tech
