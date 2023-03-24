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


  




class Register extends React.Component {



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

  

  state = {
    username: '',
    email: '',
    password: '',
    errors:{},
    redirectToLogin: false,
  };


  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async event => {
    event.preventDefault();


    const { username, email, password } = this.state;

    const errors = this.validate();
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      try {
        await axios.post('http://localhost:1337/api/auth/local/register', {
          username,
          email,
          password,
        });
        toast.success('User created!');
        this.setState({ redirectToLogin: true });
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  validate = () => {
    const { username, email, password } = this.state;
    const errors = {};

    if (!username.trim()) {
      errors.username = 'Username is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    return errors;
  };

  

  


render(){
  
  
  const { username, email, password, errors} = this.state;


if (this.state.redirectToLogin) {
  return <Navigate replace to="/login" />;
}


  return (
    <Container>
      <Wrapper>
        <Title>Create your account</Title>
        <Form onSubmit={this.handleSubmit}>
        <Input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              placeholder="Enter your full name"
            />
{errors.username && (
              <ErrorMessage>{errors.username}</ErrorMessage>
            )}           
             <Input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="Enter your email"
            />
{errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            <Input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              placeholder="Enter password"
            />
             {errors.password && (
              <ErrorMessage>{errors.password}</ErrorMessage>
            )}
         
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
        <ToastContainer />
      </Wrapper>
    </Container>
  );
};
}

export default Register;