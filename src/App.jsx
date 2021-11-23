import { Button } from '@mui/material'
import Progress from './components/Progress'

const p = {
    title: "Foo Progress Title",
    advance: 57,
}

const App = () =>
{
    return (
        <div className="App">
            <h1>Progressify</h1>

            {/*Nav*/}
            {/*SideBar*/}

            <main>
                <Progress progress={p} />
                <Progress progress={p} />
                <Progress progress={p} />
            </main>

            {/*Footer*/}
        </div>
    )
}

export default App
