import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errorEmail, setErrorEmail] = useState("");
const [errorPassword, setErrorPassword] = useState("");
const navigate = useNavigate();

// useEffect to validate email
useEffect(() => {
if (!email.endsWith("@gmail.com")) {
setErrorEmail("email is not a valid email");
} else {
setErrorEmail("");
}
}, [email]);
// useEffect to validate password

useEffect(() => {
if (password.length <= 8 || password.length >= 20) {
setErrorPassword("Password must be between 8 and 20 characters");
} else {
setErrorPassword("");
}
}, [password]);
// Function to handle login
const handleLogin = () => {
if (email.endsWith("@gmail.com") && password === "neyatp123") {
navigate("/Homepage"); // Navigate to profile page
} else {
console.log("Invalid email or password");
}
};
const registerLogin = () => 
{
   navigate('/RegisterPage')
};
return (
<div className="h-screen  flex justify-center items-center ">
    <div className="h-[50vh] w-[350px] flex  items-center flex-col bg-white p-4 m-0 border border-gray-500">
     
     <div className="w-[100%]  h-[23%] mb-5 flex justify-center items-center">
        <img className="w-[57%] h-[87%]" src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt="placeholder" />
     </div>
       
        <div className="mb-3 flex w-[85%] h-[15%]  flex-col justify-center">
            <input
            className="p-2 w-full border outline-none"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            />
        <p className="text-red-400 text-sm">{errorEmail}</p>
        </div>
        <div className="mt-3 flex w-[85%] h-[15%]  flex-col justify-center">
            <input
            className="p-2 w-full border outline-none"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}

            />
        <p className="text-red-400 text-sm">{errorPassword}</p>
        </div>

<button
className=" h-[7.5%] w-[85%] bg-sky-600 text-white font-semibold rounded-xl mt-3"
onClick={handleLogin}>
Login
</button>

<div className=" h-[10%] w-[100%] flex justify-center items-center flex-row">
    <div className="w-[35%] h-[1%] bg-gray-300 m-5"></div>
    <h1 className="text-black">OR</h1>
    <div className="w-[35%] h-[1%] bg-white m-5"></div>
</div>

<div className="h-[10%] w-[100%] flex justify-center items-center flex-row">
    <h1>Don't have an account?</h1>
    <h1 className="ml-1 font-bold text-sky-600 cursor-pointer" onClick={registerLogin}>Register</h1>
</div>

</div>
</div>
);
};


export default Login;