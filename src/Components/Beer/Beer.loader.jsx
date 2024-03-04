import beers from '../../Services/beers.json'

const beerLoader = ( {params} ) => {
    const beer = beers.find((beer, index) => {
        return index === +params.id
    })

    return beer || null
}

export default beerLoader