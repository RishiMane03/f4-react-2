import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [user,setUser] = useState({email:'',password:''})

    function update(e){
        // console.log(e.target.name);
        // console.log(e.target.value);

        setUser({...user, [e.target.name]:e.target.value.trim()})
    }
    

  const handleButtonClick = async (e) => {
    e.preventDefault()
    // console.log(user);
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: `${user.email}`,
          password: `${user.password}`,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('userData', JSON.stringify(data));
        localStorage.setItem('id', JSON.stringify(data.id));
        // console.log('Data saved to local storage:', data);

        if (data.id && data.token) {
          navigate('/second');
        } else {
          console.error('Invalid response data:', data);
        }
      } else {
        console.error('Error during fetch:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
        <div className="login">
            <p>Welcome back! 👋</p>
            <h2>Sign in to your account</h2>

            <form onSubmit={handleButtonClick}>
                <label>Your email</label>
                <input type="text" placeholder="Enter your email" name="email"
                    onChange={update}
                />

                <label>Password</label>
                <input type="password" placeholder="Enter your password" name="password"
                    onChange={update}
                />

                <button type="submit" >CONTINUE</button>

                <a>Forget your password?</a>
            </form>
        </div>
    
  );
};

export default Login;

