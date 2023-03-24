import React,{ useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { storeUser } from "../helpers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";



// import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  border-top-right-radius: 60%;
  border-bottom-left-radius: 50%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/8386655/pexels-photo-8386655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  height: 35%;
  padding: 40px;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  // border-radius: 45px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  border-radius: 20%;
  padding: 15px 20px;
  background-color: purple;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
  &:hover{
    background-color: violet;
  }
`;


// const a = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `;

const Error = styled.span`
  color: red;
`;

// const initialUser = { password: "", identifier: ""};





class Login extends React.Component {




//   const [user, setUser] = useState(initialUser);
//   const navigate = useNavigate();

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const dispatch = useDispatch();




  // const handleChange = ({ target }) => {
  //   const { name, value } = target;
  //   setUser((currentUser) => ({
  //     ...currentUser,
  //     [name]: value,
  //   }));
  // };

  // const handleLogin = async () => {
  //   const url = `http://localhost:1337/api/auth/local`;
  //   try {
  //     if (user.identifier && user.password) {
  //       const { data } = await axios.post(url, user);
  //       if (data.jwt) {
  //         storeUser(data);
  //         toast.success("Logged in successfully!", {
  //           hideProgressBar: true,
  //         });
  //         setUser(initialUser);
  //         navigate("/");
  //       }
  //     }
  //   } catch (error) {
  //     toast.error(error.message, {
  //       hideProgressBar: true,
  //     });
  //   }
  // };

  state = {
    email: "",
    password: "",
    redirectToHome: false

  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
  
    const { email, password } = this.state;
  
    try {
      const response = await axios.post(
        "http://localhost:1337/api/auth/local",
        {
          identifier: email,
          password,
        }
      );
  
      console.log(response.data);
      toast.success("Login successful!");
      this.setState({ redirectToHome: true });

  
      // Redirect to the dashboard page on successful login
    } catch (error) {
      toast.error("Invalid email or password.");
      console.error(error);
    }
  };


render(){

  if (this.state.redirectToHome) {
    return <Navigate replace to="/" />;
  }

  return (
    <Container>
      <Wrapper>
        <Title>Log In</Title>
        <Form onSubmit={this.handleSubmit}>
          <Input
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <Input
            placeholder="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <Button type="submit">
            LOGIN
          </Button>
          {/* <Error>Something went wrong...</Error> */}
          {/* <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link> */}
          <Link className="link" to="/register">Create a new account</Link>
        </Form>
      </Wrapper>
      <ToastContainer />
    </Container>
  );
  }
};


export default Login;



