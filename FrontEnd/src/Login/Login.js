import './Login.css'
import { useSelector } from "react-redux"
import MuiAlert from '@mui/material/Alert';
import { useHistory } from 'react-router-dom'
import LoginLogo from './LoginLogo/LoginLogo.png';
import React, { useEffect, useState } from 'react';
import { Input, InputAdornment, FormControl, Snackbar } from "@mui/material/";

function Login(props) {

    const history = useHistory()
    const [open, setOpen] = React.useState(false);
    const [ErrorOpen, setErrorOpen] = React.useState(false);
    const [errorMessage, seterrorMessage] = React.useState("");
    const [LoginMobileNumber, setLoginMobileNumber] = useState("")
    const gettingUserDetails = useSelector((state) => state.ReduxCommands.LoginDetails);

    {
        useEffect(() => {
            if (gettingUserDetails.length !== 0) {
                history.push("/")
            }
        })
    }

    function handleClick() {
        setOpen(true);
    };

    function handleErrorClick() {
        setErrorOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        history.push("./confirm_otp")
    };

    const handleErrorClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setErrorOpen(false);
    };

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    async function LoginSubmitForm(e) {
        e.preventDefault()
        let data = { LoginMobileNumber }
        let result = await fetch(`${props.BaseUrl}/login_process`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        result = await result.json()
        if (result.info === "success") {
            handleClick()
        } else {
            seterrorMessage(result.info)
            handleErrorClick()
        }
    }

    return (
        <>
            <div className='container-md text-center text-light pt-5'>
                <div className="mb-2">
                    <img src={LoginLogo} className="img-fluid LoginLogo" alt="#" />
                </div>
                <form className='p-3 p-md-5' onSubmit={LoginSubmitForm}>
                    <FormControl variant="standard">
                        <h5 className='mobile_number_label'>Mobile Number</h5>
                        <Input style={{ color: "white", fontSize: "20px" }} value={LoginMobileNumber} onChange={(e) => setLoginMobileNumber(e.target.value)} required inputProps={{ maxLength: 10, minLength: 10 }} autoFocus="true" startAdornment={<InputAdornment position="start"><span style={{ color: "white", fontSize: "20px" }}>+91</span></InputAdornment>} />
                        <button className="btn btn-primary w-100 mt-3" type="submit">Login</button>
                    </FormControl>
                </form>
            </div>
            <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    OTP Send to your Mobile number
                </Alert>
            </Snackbar>
            <Snackbar open={ErrorOpen} autoHideDuration={1500} onClose={handleErrorClose}>
                <Alert onClose={handleErrorClose} severity="error" sx={{ width: '100%' }}>
                    {errorMessage}
                </Alert>
            </Snackbar>
        </>
    );
}
export default Login;




