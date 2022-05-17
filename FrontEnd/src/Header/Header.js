import "./Header.css"
import { LogoutUser } from "../actions";
import { Dropdown } from "react-bootstrap";
import { TextField, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


function Header(props) {

    const dispatch = useDispatch();
    const history = useHistory()
    const [SearchWord, setSearchWord] = useState("")
    const gettingUserDetails = useSelector((state) => state.ReduxCommands.LoginDetails);

    async function check_user_login_in_one_device_or_not() {
        let UserMobileNumber = gettingUserDetails[0]['MobileNumber']
        let UserLoginToken = gettingUserDetails[0]['login_token']
        let data = { UserMobileNumber, UserLoginToken }
        let result = await fetch(`${props.BaseUrl}/check_user_login_in_one_device_or_not`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        result = await result.json()
        if (result.output === "yes") {
            dispatch(LogoutUser())
            history.push("./login")
        }
    }

    async function onSearchFormSubmit(e) {
        e.preventDefault()
        fetch(`${props.BaseUrl}/search_word/${SearchWord}/${gettingUserDetails[0]['MobileNumber']}/${gettingUserDetails[0]['login_token']}`).then((result) => {
            result.json().then((resp) => {
                history.push({ pathname: '/search_result', SearchWord: SearchWord, SearchData: resp })
            })
        })
    }

    {
        useEffect(() => {
            check_user_login_in_one_device_or_not()
        })
    }

    return (
        <>
            <div className='fixed-top Header'>
                <nav class="navbar">
                    <div class="container-fluid px-3 px-sm-5">
                        <ul className='header_left_sidebar_before_md_srcn mt-3' style={{ paddingLeft: "0" }}>
                            <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "22px" }}><b>Home</b></Link>
                            <li className="header_left_options">
                                <Link to="/movie_category/Hindi" style={{ textDecoration: "none", color: "white", fontSize: "18px", paddingLeft: "15px" }}>Hindi</Link>
                            </li>
                            <li className="header_left_options">
                                <Link to="/movie_category/Dubbed" style={{ textDecoration: "none", color: "white", fontSize: "18px", paddingLeft: "15px" }}>Dubbed</Link>
                            </li>
                            <li className="header_left_options">
                                <Link to="/movie_category/WebSeries" style={{ textDecoration: "none", color: "white", fontSize: "18px", paddingLeft: "15px" }}>Web Series</Link>
                            </li>
                        </ul>
                        <ul className='header_left_sidebar_after_md_srcn mt-3' style={{ paddingLeft: "0" }}>
                            <li className='dropdown_bar_btn header_left_options'>
                                <Dropdown className='dropdown'>
                                    <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ background: "transparent", border: "none", padding: "0" }}>
                                        <i className="fa fa-bars dropdown_header_btn"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='dropdown_menu'>
                                        <Link to="/movie_category/Hindi" className='dropdown_item'>Hindi</Link>
                                        <Link to="/movie_category/Dubbed" className='dropdown_item'>Dubbed</Link>
                                        <Link to="/movie_category/WebSeries" className='dropdown_item'>Web Series</Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>
                        <div class="d-flex">
                            {gettingUserDetails.length !== 0 ?
                                <div className="header_right_side" style={{ textAlign: "right" }}>
                                    <div className="form__group field">
                                        <form onSubmit={onSearchFormSubmit} style={{ display: "inline" }}>
                                            <Input id="filled-search" type="search" placeholder="Search" style={{ color: "white" }} required autoComplete='off' value={SearchWord} onChange={(e) => setSearchWord(e.target.value)} />
                                        </form>
                                        <Link to="/login" style={{ textDecoration: 'none', color: "white", paddingLeft: "10px" }} onClick={() => (dispatch(LogoutUser()))}><b>Logout</b></Link>
                                    </div>
                                </div>
                                :
                                <Link to="/login" style={{ textDecoration: 'none', color: "white", paddingLeft: "10px" }} className="login_btn"><b>LOGIN</b></Link>
                            }
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
export default Header;
