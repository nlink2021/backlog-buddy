import { useEffect, useState } from 'react'
import axios from 'axios'
import FilterSearch from '../components/FilterSearch'

const Dashboard = () => {
    const [allGames, setAllGames] = useState([])
    const [filteredSearch, setFilteredSearch] = useState('')
    const [filteredResults, setFilteredResults] = useState([])

    const fetchAllGames = () => {
        axios.get('https://api.rawg.io/api/games?key=b25a7f0afaa94ec8b320dce19f1c2dfb')
        .then((response) => {
            console.log(response);
            setAllGames(response.data.results)
        })
    }

    useEffect(fetchAllGames, [])

    const filter = (term) => {
        let filtered = allGames.filter((game) => {
            return game.name.includes(term)
        })
        setFilteredResults(filtered)
    }

    useEffect(() => {
        filter(filteredSearch)
    }, [filteredSearch])
    

    return (
        <div>
            <h3>Hello from Dashboard</h3>

            <form className="searchBar">
            <input type="text" id="gameEntry" placeholder="Enter a game!" size="90" />
            <button type="submit" className="searchButton">Go!</button>
            </form>

            <div className="gameRow">
                {allGames.map((game, i) => 
                    <div className="gameFrame" key={i}>
                        <h2>{game.name}</h2>
                        <div>
                            <img className="gameImg" src={game.background_image} />
                        </div>
                        <button>fav</button>
                    </div>
                )}
            </div>
        </div>

    )
}

export default Dashboard