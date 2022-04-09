import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import "./login.css";
import img from "./login1.jfif";
import img1 from "./sign.jfif";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

  // return (
  //   <div className="Login">
  //     <Form className="ui form" onSubmit={handleSubmit}>
  //       <Form.Group size="lg" controlId="email">
  //         <Form.Label>Email</Form.Label>
  //         <Form.Control
  //           autoFocus
  //           type="email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //         />
  //       </Form.Group>
  //       <Form.Group size="lg" controlId="password">
  //         <Form.Label>Password</Form.Label>
  //         <Form.Control
  //           type="password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //         />
  //       </Form.Group>
  //       <Button block size="lg" type="submit" disabled={!validateForm()}>
  //         Login
  //       </Button>
  //     </Form>
  //   </div>
  // );
   export default function Login(){
    return(
        <div className="log-head">
          <center><table>
            <tr>
              <td>If you are a new user</td>
            </tr>
            <tr>
            <td>
            <a href="./sign_up/sign_up.js"> <img src={img1}/></a>
            </td>  
            </tr>
            <tr>
              <td>If you already have an account</td>
            </tr>
            <tr>
              <td>
                <a href="./log/log.js"> <img src={img}/></a>
              </td>
            </tr>
          </table></center>
        </div>
      );
   };
