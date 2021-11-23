import { styled } from '@mui/material/styles'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import "../sass/Progress.scss"
import { IconButton } from '@mui/material'
import { MdAdd } from 'react-icons/all'

const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 20,
    borderRadius: '.375em',
    [`&.${ linearProgressClasses.colorPrimary }`]: {
        backgroundColor: 'transparent', //theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800]
    },
    [`& .${ linearProgressClasses.bar }`]: {
        borderRadius: '.375em',
        backgroundColor: theme.palette.primary, // theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'
    },
}))

const Progress = ({ progress }) =>
{
    return (
        <div className="Progress">
            <h3 className="title">{ progress.title }</h3>
            <IconButton>
                <MdAdd/>
            </IconButton>
            <div className="progress-container">
                <CustomLinearProgress variant="determinate" value={ progress.advance }/>
            </div>
        </div>
    )
}

export default Progress
