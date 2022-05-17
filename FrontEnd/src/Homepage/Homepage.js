import './Homepage.css'
import axios from 'axios'
import { Image } from 'react-img-placeholder';
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { HomepageDataSave } from "../actions/index"
import LoadingData from '../LoadingData/LoadingData';
import { useSelector, useDispatch } from "react-redux"



function Homepage(props) {

    const history = useHistory()
    const dispatch = useDispatch()
    const [loading, setloading] = useState(false)
    const [all_items, setAllItem] = useState([])
    const gettingUserDetails = useSelector((state) => state.ReduxCommands.LoginDetails);
    // const all_items = useSelector((state) => state.ReduxCommands.HomepageData);

    {
        useEffect(() => {
            if (gettingUserDetails.length === 0) {
                history.push("/login")
            } else {
                fetch(`${props.BaseUrl}/homepage_categories/${gettingUserDetails[0]['MobileNumber']}/${gettingUserDetails[0]['login_token']}`).then((result) => {
                    result.json().then((resp) => {
                        setAllItem(resp)
                        setloading(true)
                        // dispatch(HomepageDataSave(resp))
                    })
                })
            }
        }, [])
    }

    return (
        <>
            {loading ?
                <>
                    <div className="container-fluid mb-5">
                        <div className='AllCategoryVideo'>
                            <>
                                {
                                    all_items.map((all_item_details, i) =>
                                        <div id={`${all_item_details.id}`.replace(/\s+/g, '')} className="carousel slide" data-bs-interval="false">
                                            <div className="carousel-inner">
                                                <h3 className='pt-3 px-4'><b><Link to={`/single_category/${all_item_details.genres}`} style={{ textDecoration: "none", color: "white" }}>{all_item_details.id}</Link></b></h3>
                                                <div className="carousel-item zoom_on_hover active">
                                                    <div className="row px-4">
                                                        {
                                                            (all_item_details.data).slice(0, 8).map((Category_all_item_details, i) =>
                                                                <div className={`col carousel_item_${i + 1} pb-4`}>
                                                                    <Link to={`/player/${Category_all_item_details.id}`}>
                                                                        <div className="video_thumbnail w-100">
                                                                            <Image className="d-block carousel_item img-fluid" src={Category_all_item_details.movie_cover_image} alt="#" width="100%" height="275px" style={{ minHeight: "100%", maxHeight: "275px", width: "100%" }} placeholderColor="#0C111B" />
                                                                            <div className='w-100 px-2 video_description'>
                                                                                <h6>{Category_all_item_details.title}</h6>
                                                                                <p style={{ fontSize: "10px", marginTop: "-5px" }}>{Category_all_item_details.released} * {Category_all_item_details.description}</p>
                                                                                <h6 style={{ color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</h6>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                                <div className="carousel-item zoom_on_hover">
                                                    <div className="row px-4">
                                                        {
                                                            (all_item_details.data).slice(9, 17).map((Category_all_item_details, i) =>
                                                                <div className={`col carousel_item_${i + 1} pb-4`}>
                                                                    <Link to={`/single_video/${Category_all_item_details.id}`}>
                                                                        <div className="video_thumbnail w-100">
                                                                            <Image className="d-block carousel_item img-fluid" src={Category_all_item_details.movie_cover_image} alt="#" width="100%" height="275px" style={{ minHeight: "100%", maxHeight: "275px", width: "100%" }} placeholderColor="#0C111B" />
                                                                            <div className='w-100 px-2 video_description'>
                                                                                <h6>{Category_all_item_details.title}</h6>
                                                                                <p style={{ fontSize: "10px", marginTop: "-5px" }}>{Category_all_item_details.released} * {Category_all_item_details.description}</p>
                                                                                <h6 style={{ color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</h6>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                                <div className="carousel-item zoom_on_hover">
                                                    <div className="row px-4">
                                                        {
                                                            (all_item_details.data).slice(18, 26).map((Category_all_item_details, i) =>
                                                                <div className={`col carousel_item_${i + 1} pb-4`}>
                                                                    <Link to={`/single_video/${Category_all_item_details.id}`}>
                                                                        <div className="video_thumbnail w-100">
                                                                            <Image className="d-block carousel_item img-fluid" src={Category_all_item_details.movie_cover_image} alt="#" width="100%" height="275px" style={{ minHeight: "100%", maxHeight: "275px", width: "100%" }} placeholderColor="#0C111B" />
                                                                            <div className='w-100 px-2 video_description'>
                                                                                <h6>{Category_all_item_details.title}</h6>
                                                                                <p style={{ fontSize: "10px", marginTop: "-5px" }}>{Category_all_item_details.released} * {Category_all_item_details.description}</p>
                                                                                <h6 style={{ color: "white", fontSize: "10px" }}><i className="fa fa-play"></i> WATCH MOVIE</h6>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target={`#${all_item_details.id}`.replace(/\s+/g, '')} data-bs-slide="prev" style={{ width: "50px", height: "100%" }}>
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target={`#${all_item_details.id}`.replace(/\s+/g, '')} data-bs-slide="next" style={{ width: "50px", height: "100%" }}>
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    )
                                }
                            </>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="AllCategoryVideo px-5 pt-5">
                        <LoadingData />
                        <LoadingData />
                        <LoadingData />
                    </div>
                </>
            }
        </>
    );
}
export default Homepage;


