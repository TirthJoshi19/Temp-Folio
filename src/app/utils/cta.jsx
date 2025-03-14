import { Button } from "@mui/material"
import Link from "next/link"

const PrimaryCTA = ({text, tailwindClasses, link})=> {
    return (
        <a href={link}> 
        <button className="p-3 bg-gray-900 rounded-3xl cursor-pointer font-bold primary-cta">
            {text}
        </button>
        </a>
    )
}

const AppBarCTA = ()=> {
    return (
        ''
    )
}

const MuiCTA = ({text, disabled = false})=> {
    return (
        <Button sx={{textTransform: 'none', fontWeight: 600, padding: 0, paddingTop: '4px', color: '#51e'}} variant={disabled && 'disabled'}>{text}</Button>
    )
}

const SecondaryCTA = ({text})=> {
  return <button className="p-2 pl-0 pb-0 cursor-pointer sec-btn">{text}</button>
}

export {PrimaryCTA, SecondaryCTA, AppBarCTA, MuiCTA}