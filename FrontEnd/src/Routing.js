import './Routing.css'
import React from 'react'
import Login from './Login/Login';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import JWPlayer from './Player/JWPlayer';
import Homepage from './Homepage/Homepage';
import ConfirmOTP from './Login/ConfirmOTP';
import SeriesPlayer from './Player/SeriesPlayer';
import SearchResult from './SearchResult/SearchResult';
import TrailersPlayer from './TrailersPlayer/TrailersPlayer';
import MovieCategoryVideo from './MovieCategory/MovieCategory';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SingleCategoryVideo from './SingleCategoryVideo/SingleCategoryVideo';

function Routing() {
    const BASEURL = "http://127.0.0.1:5000"
    return (
        <>
            <Router>
                <Route exact path="/login">
                    <Login BaseUrl={BASEURL} />
                </Route>
                <Route exact path="/confirm_otp">
                    <ConfirmOTP BaseUrl={BASEURL} />
                </Route>
                <Route exact path="/">
                    <Header BaseUrl={BASEURL} />
                    <div className="margin_top_for_body_after_header">
                        <Homepage BaseUrl={BASEURL} />
                        <Footer />
                    </div>
                </Route>
                <Route exact path="/single_category/:category_id">
                    <Header BaseUrl={BASEURL} />
                    <div className="margin_top_for_body_after_header">
                        <SingleCategoryVideo BaseUrl={BASEURL} />
                        <Footer />
                    </div>
                </Route>
                <Route exact path="/movie_category/Hindi">
                    <Header BaseUrl={BASEURL} />
                    <div className="margin_top_for_body_after_header">
                        <MovieCategoryVideo page="Hindi" BaseUrl={BASEURL} />
                        <Footer />
                    </div>
                </Route>
                <Route exact path="/movie_category/Dubbed">
                    <Header BaseUrl={BASEURL} />
                    <div className="margin_top_for_body_after_header">
                        <MovieCategoryVideo page="Dubbed" BaseUrl={BASEURL} />
                        <Footer />
                    </div>
                </Route>
                <Route exact path="/movie_category/WebSeries">
                    <Header BaseUrl={BASEURL} />
                    <div className="margin_top_for_body_after_header">
                        <MovieCategoryVideo page="Web Series" BaseUrl={BASEURL} />
                        <Footer />
                    </div>
                </Route>
                <Route exact path="/search_result">
                    <Header BaseUrl={BASEURL} />
                    <div className="margin_top_for_body_after_header">
                        <SearchResult BaseUrl={BASEURL} />
                        <Footer />
                    </div>
                </Route>
                <Route exact path="/player/:single_video_id">
                    <Header BaseUrl={BASEURL} />
                    <div className="margin_top_for_body_after_header">
                        <JWPlayer BaseUrl={BASEURL} />
                    </div>
                </Route>
                <Route exact path="/trailer_player/:single_video_id">
                    <Header BaseUrl={BASEURL} />
                    <div className="margin_top_for_body_after_header">
                        <TrailersPlayer BaseUrl={BASEURL} />
                    </div>
                </Route>
                <Route exact path="/web_series/player/:single_video_id/:series_no">
                    <Header BaseUrl={BASEURL} />
                    <div className="margin_top_for_body_after_header">
                        <SeriesPlayer BaseUrl={BASEURL} />
                    </div>
                </Route>
            </Router>
        </>
    );
}

export default Routing;



