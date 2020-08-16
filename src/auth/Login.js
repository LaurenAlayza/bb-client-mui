// import React, { useState } from 'react';
// import FormGroup from '@material-ui/core/FormGroup';

// const Login = (props) => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [accounttype, setAccountType] = useState("");

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         fetch('http://localhost:3000/polis/user/login',{
//             method: 'POST',
//             Body: JSON.stringify({
//                 user: {username: username, passwordhash: password, accounttype: accounttype}
//             }),
//             headers: new Headers({
//                 "Content-Type": "application/json",
//             }),
//         })
//         .then((response) => response.json())
//         .then((data)=>{
//             console.log(data);
//             props.updateToken(data.sessionToken);
//         });
//     };
//     return ( 
//         <div>
//       <h1>Login</h1>
//       <Form onSubmit={handleSubmit}>
//         <FormGroup>
//           <Label htmlfor="username">Username</Label>
//           <Input
//             onChange={(e) => setUsername(e.target.value)}
//             name="username"
//             value={username}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlfor="password">Password</Label>
//           <Input
//             onChange={(e) => setPassword(e.target.value)}
//             name="password"
//             value={password}
//           />
//         </FormGroup>
//         <Button type="submit">Login</Button>
//       </Form>
//     </div>
//      );
// }
 
// export default Login;