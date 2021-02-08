import { getLaunches, getRockets } from './components/service';
import { useEffect, useState } from 'react';
import Launches from './components/Launches';
import Select from './components/Select';

const App = () => {

    const [ launches, setLaunches] = useState([]);
    const [ rockets, setRockets] = useState([]);
    const [ select, setSelect ] = useState(0)

    useEffect(() => {
        getLaunches().then(res => {
            setLaunches(res.data)
            console.log(res.data[0])
            setSelect(res.data.length)
        })
        getRockets().then(res => {
            setRockets(res.data);
        })
    }, [])

    return (
        <div>
            <Select launches={launches} setSelect={setSelect} ></Select>
            <Launches launches={launches.slice(0, select)} rockets={rockets} ></Launches>
        </div>
    )
}

export default App
