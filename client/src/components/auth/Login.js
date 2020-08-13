import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:'',
        password2:'',
    })

    const {email,password} = formData
    const onChange = e => setFormData({...formData,[e.target.name]:e.target.value})
    const onSubmit = async(e) => {
        e.preventDefault()
            console.log('SUCCESS')
        }
    
    return (
        <>
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
            <form className="form" onSubmit={(e)=>onSubmit(e)}>
                <div className="form-group">
                    <input type="email" 
                    onChange={(e)=>onChange(e)} required
                        value={email}
                    placeholder="Email Address" name="email" />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                        onChange={(e)=>onChange(e)}
                        value={password}
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
                Don't have an account? <Link to="/register">Sign Up</Link>

            </p>
        </>
    )
}

export default Login
