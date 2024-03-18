import { useState} from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
    } else if (!/\d/.test(password)) {
      setError('Password must contain at least one number');
    } else if (!/[A-Z]/.test(password)) {
      setError('Password must contain at least one capital letter');
    } else if (!email.endsWith('@gmail.com')) {
      setError('Email must end with @gmail.com');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // Register logic here
      alert('Registration successful');
      navigate('/HomePage')
    }
  };
    return (

        <div className=" flex items-center justify-center h-screen">
            
            <div className="h-[60vh] w-[350px] flex  items-center flex-col bg-white p-4 m-0 border border-gray-500">
                <div className="w-[100%]  h-[23%] mb-5 flex justify-center items-center">
                    <img className="w-[57%] h-[80%]" src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt="placeholder" />
                </div>
       
          {error && <div className="mb-4 h-[10%] flex justify-center items-center text-left w-[85%] text-red-500">{error}</div>}
          <form className="w-[100%] flex items-center flex-col" onSubmit={handleRegister}>
            
            <div className="mb-5 flex w-[85%] h-[15%]  flex-col justify-center">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 w-full border mb-5"
                required
              />
            </div>

            <div className="mb-5 flex w-[85%] h-[15%]  flex-col justify-center">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 w-full border mb-5"
                required
              />
            </div>

            <div className="mb-5 flex w-[85%] h-[15%]  flex-col justify-center">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="p-2 w-full border mb-3"
                required
              />
            </div>
            <div className="m-0 mb-3 w-[78%] h-[10%] flex items-center justify-center text-center">
                <h1 className="m-0 text-xs text-gray-600">By signing up, you agree to our <span className="text-blue-950">Terms, Privacy Policy and Cookies Policy.</span></h1>
            </div>
            <button type="submit" className=" h-[10%] w-[85%] bg-sky-600 text-white font-semibold rounded-xl mt-3" onClick={handleRegister}>Register</button>
          </form>
        </div>
      </div>
      
    );
  }
  
  export default Register;





 