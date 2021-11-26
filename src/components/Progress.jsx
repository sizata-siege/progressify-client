import "../sass/Progress.scss"
import { IconButton } from '@mui/material'
import { MdAdd, MdRemove } from 'react-icons/all'
import ProgressBar from './ProgressBar'


const Progress = ({ data, increment }) =>
{
    const inc = e => increment(data.id, +1)
    const dec = e => increment(data.id, -1)

    return (
        <div className="Progress">
            <div className="head">
                <h3 className="title">
                    { data.title }
                    <span className="advance">
                        {data.advance}/{data.goal}
                    </span>
                </h3>
                <div className="options">
                    <IconButton color="secondary" onClick={ dec }>
                        <MdRemove/>
                    </IconButton>
                    <IconButton color="primary" onClick={ inc }>
                        <MdAdd/>
                    </IconButton>
                </div>
            </div>
            <div className="progress-container">
                <ProgressBar value={ data.advance } max={ data.goal }/>
            </div>
        </div>
    )
}

export default Progress
