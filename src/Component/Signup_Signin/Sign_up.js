import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import "./Signin_SIgnup.css"

const Sign_up = () => {

    const [udata, setData] = useState({
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""

    })
    console.log(udata)
    const adddata = (e) => {
        const { name, value } = e.target;
        setData((pre) => ({
            ...pre,
            [name]: value,
        }))
    }
    return (
        <div>
            <section>
                <div className="sign_container">
                    <div className="sign_header">
                        <img src="\blacklogoamazon.png" alt="amazon logo" />
                    </div>
                    <div className="sign_form">
                        <form>
                            <h1>Create account</h1>
                            <div className="form_data">
                                <label htmlFor='name'>Your name</label>
                                <input type="text"
                                    onChange={adddata}
                                    name="fname"
                                    value={udata.fname}
                                    id="name" />
                            </div>

                            <div className="form_data">
                                <label
                                    htmlFor='email'>Email</label>
                                <input type="text"
                                    name="email"
                                    onChange={adddata}
                                    value={udata.email}
                                    id="email" />
                            </div>
                            <div className="form_data">
                                <label
                                    htmlFor='mobile'>Mobile</label>
                                <input type="text"
                                    name="mobile"
                                    onChange={adddata}
                                    value={udata.mobile}
                                    id="mobile" />
                            </div>
                            <div className="form_data">
                                <label
                                    htmlFor='password'>Password</label>
                                <input type="text"
                                    name="password"
                                    placeholder=''
                                    onChange={adddata}
                                    value={udata.password}
                                    id="password" />
                            </div>
                            <div className="form_data">
                                <label
                                    htmlFor='cpassword'>Confirm
                                    Password</label>
                                <input type="text"
                                    name="cpassword"
                                    placeholder=''
                                    onChange={adddata}
                                    value={udata.cpassword}
                                    id="cpassword" />
                            </div>
                            <button className="signin_btn">Continue</button>
                            <div className="signin_info">
                                <p>Already have an account</p>
                                <NavLink to="/login">Signin</NavLink>
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Sign_up
