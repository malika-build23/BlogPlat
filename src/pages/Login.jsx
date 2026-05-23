import React, { useState } from "react";
import {
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile
}
    from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase";
const provider = new GoogleAuthProvider();

const Login = () => {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {

        e.preventDefault();

        try {

            const userCredential =
                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

            // Set user profile with display name and photo URL
            await updateProfile(userCredential.user, {
                displayName: email.split("@")[0],
                photoURL: `https://i.pravatar.cc/100?u=${email}`
            });

            console.log(userCredential.user);

            alert("Signup Successful!");

        }

        catch (error) {

            console.log(error.message);

            alert(error.message);

        }

    };
    const handleGoogleLogin = async () => {

        try {

            const result =
                await signInWithPopup(
                    auth,
                    provider
                );

            console.log(result.user);

            alert("Google Login Successful!");

        }

        catch (error) {

            console.log(error.message);

            alert(error.message);

        }

    }

    return (

        <div className="min-h-screen flex justify-center items-center bg-gray-900">

            <form
                onSubmit={handleSignup}
                className="bg-gray-800 p-8 rounded-lg w-96"
            >

                <h1 className="text-3xl text-white mb-6 font-bold">
                    Signup
                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="btn btn-primary w-full">
                    Signup
                </button>

                <button 
                    onClick={handleGoogleLogin}
                    className="btn bg-white text-black border-[#e5e5e5] center w-full mt-4">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>

            </form>

        </div>

    );
};

export default Login;