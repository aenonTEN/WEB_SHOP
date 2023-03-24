import styled from "styled-components";
// import { mobile } from "../responsive";
import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useStripe } from '@stripe/react-stripe-js';



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/5706273/pexels-photo-5706273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 28%;
  height: 39%;
  padding: 50px;
  border-radius: 20%;
  background-color: white;
  box-shadow: 5px 5px orange;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  max-width: 60%;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: purple;
  color: white;
  cursor: pointer;
  border-radius: 20%;

  &:hover{
    background-color: violet;
  }
`;
const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

// const initialUser = { email: "", password: "", username: "" };


  




const SellerSignup = ()=> {



//   const [user, setUser] = useState(initialUser);
//   const navigate = useNavigate();

//   const signUp = async () => {

 

//   try {
//     const url = `http://localhost:1337/api/auth/local/register`;
//     if (user.username && user.email && user.password) {
//       const res = await axios.post(url, user);
//       if (!!res) {
//         toast.success("Registered successfully!", {
//           hideProgressBar: true,
//         });
//         setUser(initialUser);
//         navigate("/login");
//       }
//     }
//   } catch (error) {
//     toast.error(error.message, {
//       hideProgressBar: true,
//     });
//   }
// };

// const handleUserChange = ({ target }) => {
//   const { name, value } = target;
//   setUser((currentUser) => ({
//     ...currentUser,
//     [name]: value,
//   }));
// };

  // handleInputChange = event => {
  //   const { name, value } = event.target;

  //   this.setState({
  //     [name]: value,
  //   });
  // };

  


  //   const { username, email, password } = this.state;

  //   const errors = this.validate();
  //   this.setState({ errors });

  //   if (Object.keys(errors).length === 0) {
  //     try {
  //       await axios.post('http://localhost:1337/api/auth/local/register', {
  //         username,
  //         email,
  //         password,
  //       });
  //       toast.success('User created!');
  //       this.setState({ redirectToLogin: true });
  //     } catch (error) {
  //       toast.error(error.message);
  //     }
  //   }
  // };

  // validate = () => {
  //   const { username, email, password } = this.state;
  //   const errors = {};

  //   if (!username.trim()) {
  //     errors.username = 'Username is required';
  //   }

  //   if (!email.trim()) {
  //     errors.email = 'Email is required';
  //   } else if (!/\S+@\S+\.\S+/.test(email)) {
  //     errors.email = 'Email is invalid';
  //   }

  //   if (!password.trim()) {
  //     errors.password = 'Password is required';
  //   } else if (password.length < 6) {
  //     errors.password = 'Password must be at least 6 characters';
  //   }

  //   return errors;
  // };

  // render(){
  
  
  // const { username, email, password, errors} = this.state;


// if (this.state.redirectToLogin) {
//   return <Navigate replace to="/login" />;
// }





  

// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [firstName, setFirstName] = useState('');
// const [lastName, setLastName] = useState('');

// const handleSubmit = async (e) => {
//   e.preventDefault();
// // Create user account in Strapi
// let strapiResponse;
// try {
//   strapiResponse = await axios.post('http://localhost:1337/api/auth/local/register', {
//     username: email,
//     email,
//     password,
//     firstname: firstName,
//     lastname: lastName,
//     seller: true,
//   });
// } catch (err) {
//   console.error(err);
//   return;
// }


  
//     // Create Stripe account (if needed)
//     let stripeAccountId = null;
//     if (!stripeAccountId) {
//       try {
//         const stripeResponse = await axios.post('https://api.stripe.com/v1/accounts', {
//           type: 'standard',
//           email,
//         }, {
//           headers: {
//             Authorization: `Bearer ${process.env.STRIPE_KEY}`,
//           },
//         });
//         stripeAccountId = stripeResponse.data.id;
//       } catch (err) {
//         console.error(err);
//         return;
//       }
//     }

//   // Create seller in Strapi
//   try {
//     const sellerResponse = await axios.post('http://localhost:1337/api/sellers', {
//       user: strapiResponse.data.user.id,
//       stripeAccountId,
//     }, {
//       headers: {
//         Authorization: `Bearer ${strapiResponse.data.jwt}`,
//       },
//     });
//     console.log('Seller created:', sellerResponse.data);
//   } catch (err) {
//     console.error(err);
//     return;
//   }

  
//     // Redirect seller to Strapi admin page
//     window.location.href = 'http://localhost:1337/admin';
//   };


//   return (
//     <form onSubmit={handleSubmit}>
//       email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       first<input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//       last<input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };





  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [stripeId, setStripeId] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Create user in Strapi
    const strapiResponse = await axios.post('http://localhost:1337/api/auth/local/register', {
      username: email,
      email,
      password,
      firstName: firstName,
      lastName: lastName,
      seller: true,
      stripeId,
    });


    // Create Stripe account (if needed)

let stripeAccountId = stripeId;

// if (!stripeAccountId) {
//   const stripeResponse = await axios.post('https://api.stripe.com/v1/accounts', {
//     type: 'standard',
//     email,
//   }, {
//     headers: {
//       Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
//     },
//   });
//   stripeAccountId = stripeResponse.data.id;
// }
//     // Store Stripe account ID in Strapi user record
// await axios.put(`http://localhost:1337/users/${strapiResponse.data.user.id}`, {
//   stripeAccountId,
// }, {
//   headers: {
//     Authorization: `Bearer ${strapiResponse.data.jwt}`,
//   },
// });

// Redirect user to Strapi admin page
window.location.href = 'http://localhost:1337/admin';
};


  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name:
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <label>
        Last name:
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      {/* <label>
        Confirm password:
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </label> */}
      <label>
        Stripe ID:
        <input type="text" value={stripeId} onChange={(e) => setStripeId(e.target.value)} />
      </label>
      <button type="submit">Sign up</button>
    </form>
  );



};








export default SellerSignup;