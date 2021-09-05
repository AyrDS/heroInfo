import { useLocation } from "react-router";
import queryString from 'query-string';

import useForm from "../../hooks/useForm";
import HeroCard from "../heroes/HeroCard";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { useMemo } from "react";

const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = "" } = queryString.parse(location.search);

    const [{ searchText }, handleInputChange] = useForm({
        searchText: q,
    });

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

    const handleSearch = (e) => {
        e.preventDefault();

        history.push(`?q=${searchText}`)
    };

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row" >
                <div className="col-5" >
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <div className="d-grid gap-2">
                            <button
                                type="submit"
                                className="btn m-1 btn-outline-primary"
                            >
                                Search...
                            </button>
                        </div>
                    </form>
                </div>

                <div className="col-7" >
                    <h4>Result</h4>
                    <hr />

                    {
                        (q === "")
                        &&
                        <div className="alert alert-info">
                            Search a Hero
                        </div>
                    }

                    {
                        (q !== "" && heroesFiltered.length === 0)
                        &&
                        <div className="alert alert-danger">
                            There is no a hero with {q}
                        </div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default SearchScreen;