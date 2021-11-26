import { /* styled, */ useTheme } from '@mui/material/styles'
// import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'


// const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
//     height: 20,
//     borderRadius: '.375em',
//     [`&.${ linearProgressClasses.colorPrimary }`]: {
//         backgroundColor: 'transparent', //theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800]
//     },
//     [`& .${ linearProgressClasses.bar }`]: {
//         borderRadius: '.375em',
//         backgroundColor: theme.palette.primary, // theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'
//     },
// }))

const ProgressBar = ({ value, max, color = 'primary' }) =>
{
    const theme = useTheme()

    const barStyles = {
        background: theme.palette[color].main,
        color: 'white',
        textShadow: '0 0 .2em rgba(0,0,0,.2)',
        width: `${value / max * 100}%`
    }

    const progressStyles = {
        //
    }

    return (
        <>
            {/*<CustomLinearProgress variant="determinate" value={ (value / max) * 100 }/>*/ }
            <div className="progress" style={ progressStyles }>
                <div className="bar" style={ barStyles }>
                    { Math.round(value / max * 100) + '%' }
                </div>
            </div>
        </>
    )
}

export default ProgressBar