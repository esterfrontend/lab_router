import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import beers from '../../Services/beers.json'

const BeersList = () => {
    const [beersList, setBeersList] = useState(beers)

    return (
        <div>
            {
                beersList.map((beer, index) => {
                    return <Link to={`/beer/${index}`} key={beer.Name}>{beer.Name}</Link>
                })
            }
        </div>
        
    )
}

export default BeersList