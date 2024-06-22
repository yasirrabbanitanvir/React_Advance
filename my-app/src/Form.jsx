import React, { useState } from 'react';

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePassChange = (event) => {
        setPass(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Name is:", name, "Email is:", email, "Password is:", pass);
    };

    return (
        <div>
            <h2 className="text-center">Registration Form</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        required
                        onChange={handleNameChange}
                        value={name}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        required
                        onChange={handleEmailChange}
                        value={email}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        required
                        onChange={handlePassChange}
                        value={pass}
                    />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    );
}
