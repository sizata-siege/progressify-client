import Progress from './components/Progress'
import { useState } from 'react'
import { Button } from '@mui/material'
import { MdAdd } from 'react-icons/all'

const def = [
    {
        id: 'foo1',
        title: "Foo Progress Title",
        advance: 5,
        goal: 7,
    },
]

const App = () =>
{
    console.log('Updated')
    const [progresses, setProgresses] = useState(def)

    const increment = (id, n) =>
    {
        setProgresses(old => old.map(p => p.id !== id ? p : { ...p, advance: p.advance + n }))
    }

    const addProgress = e =>
    {
        //
    }

    return (
        <div className="App">
            {/*<h1>Progressify</h1>*/ }

            {/*Nav*/ }
            {/*SideBar*/ }

            <main>
                { progresses.length > 0 ?
                    progresses.map(p => <Progress key={ p.id } data={ p } increment={ increment }/>)
                    :
                    <h5 style={ { textAlign: 'center' } }>No progress added yet</h5>
                }

                {/* Add Progress Button */ }
                <Button variant="contained" onClick={ addProgress }
                        sx={ addProgressStyles }>
                    <MdAdd size={ 48 }/>
                    <span style={ { fontSize: 22 } }>Add Progress</span>
                </Button>
            </main>

            {/*Footer*/ }
        </div>
    )
}

const addProgressStyles = {
    // backgroundColor: '#fff',
    padding: '1em',
    borderRadius: '1em',
    // boxShadow: '0 .1em .5em 0 rgba(0,0,0,.1)',
    width: '100%',
    marginTop: '1em',
}

export default App
