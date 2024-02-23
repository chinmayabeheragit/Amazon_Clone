import React, { useState } from 'react'
import "./Signin_SIgnup.css"
import { NavLink } from "react-router-dom"



const Sign_in = () => {

    const [logdata, setData] = useState(
        {
            email: "",
            password: ""

        }
    );
    console.log(logdata);
    const addData = (e) => {
        const { name, value } = e.target;

        setData(() => {
            return {
                ...logdata,
                [name]: value
            }
        })

    }
    // console.log(logdata);
    return (
        <>
            <section>
                <div className="sign_container">
                    <div className="sign_header">
                        <img src="\blacklogoamazon.png" alt="amazon logo" />
                    </div>
                    <div className="sign_form">
                        <form>
                            <h1>Sign-In</h1>

                            <div className="form_data">
                                <label
                                    htmlFor='email'>Email</label>
                                <input type="text"
                                    onChange={addData}
                                    value={logdata.email}
                                    name="email" id="email" />
                            </div>
                            <div className="form_data">
                                <label
                                    htmlFor='password'>Password</label>
                                <input type="text"
                                    onChange={addData}
                                    value={logdata.password}
                                    name="password"
                                    id="password" />
                            </div>
                            <button className="signin_btn">Continue</button>
                        </form>
                    </div>
                    <div className="create_accountinfo">
                        <p>New To Amazon</p>
                        <NavLink to="/register"><button>Create Your amazon account</button></NavLink>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Sign_in
