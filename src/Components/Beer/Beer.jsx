import { Link, useLoaderData } from 'react-router-dom';

const Beer = () => {
    const beer = useLoaderData()
    
    if(!beer) return (<>
        <Link to="/">Ver listado</Link>
        <h1>Esta cerveza no existe.</h1>
    </>)

    return (
    <>
        <Link to="/">Volver</Link>
        <div>
            <h1>{beer?.Name}</h1>
            <p>Alcohol: {beer?.alcoholByVolume}</p>
            <p>Marca: {beer?.Brand}</p>
            <img src={beer?.Photo} alt="" />
            <p>{beer?.Description}</p>
        </div>
    </>)
}

export default Beer