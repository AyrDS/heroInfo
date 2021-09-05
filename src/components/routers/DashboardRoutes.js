import { Redirect, Route, Switch } from 'react-router';
import { Navbar } from '../ui/Navbar';

import DcScreen from '../dc/DcScreen';
import HeroeScreen from '../heroes/HeroeScreen';
import MarvelScreen from '../marvel/MarvelScreen';
import SearchScreen from '../search/SearchScreen';

const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container-fluid mt-2" >
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/hero/:heroId" component={HeroeScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/search" component={SearchScreen} />

                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    );
}

export default DashboardRoutes;