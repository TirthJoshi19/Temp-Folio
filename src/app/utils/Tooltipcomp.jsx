import { styled } from "@mui/material";
import {Tooltip, tooltipClasses} from "@mui/material";
const WhiteTooltip = styled(({className, ...props})=> (
    <Tooltip {...props} classes={{popper: className}} />
))(({theme})=> ({
    [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
    fonWeight: 700,
  },

}))

export {WhiteTooltip}