import React, { useState, useEffect } from "react";
import './index.css';
import socketIOClient from "socket.io-client";
const ENDPOINT = "https://47.97.164.7:10000";

// export default function() {
//   // const [response, setResponse] = useState("");

//   // // useEffect(() => {
//   // //   console.log('1')
//   // //   const socket = socketIOClient(ENDPOINT);
//   // //   console.log('2')
//   // //   socket.on("message", data => {
//   // //     console.log('recieve message', data)
//   // //     setResponse(data);
//   // //   });
//   // // }, []);
//   //   console.log('1')
//   //   const socket = io(ENDPOINT);
//   //   console.log('2')
//   //   socket.on("message", data => {
//   //     console.log('recieve message', data)
//   //     setResponse(data);
//   //   });
//   //   socket.emit('message', 'sasad')

//   const socket = socketIOClient("ws://localhost:30011");

//   socket.on("connect", () => {
//     console.log('connect')
//     // either with send()
//     socket.send("Hello!");

//     // or with emit() and custom event names
//     socket.emit("salutations", "Hello!", { "mr": "john" }, Uint8Array.from([1, 2, 3, 4]));
//   });

//   // handle the event sent with socket.send()
//   socket.on("message", data => {
//     console.log(data);
//   });

//   // handle the event sent with socket.emit()
//   socket.on("greetings", (elem1, elem2, elem3) => {
//     console.log(elem1, elem2, elem3);
//   });  

//   return (
//     <>
//       实时操作面板
//       <p>123</p>
//     </>    
//   );
// }

// export default function() {
//   const [response, setResponse] = useState("");

//   // useEffect(() => {
//     const socket = socketIOClient(ENDPOINT);
//     console.log(socket);
//     socket.on("FromAPI", data => {
//       setResponse(data);
//     });
//     return () => socket.disconnect();
//   }, [response]);

//   return (
//     <p>
//       It's {response}
//     </p>
//   );
// }

export default function() {
  const [response, setResponse] = useState("");

  console.log('-----')
  const socket = socketIOClient(ENDPOINT);
  console.log('------1')
  console.log(socket);
  socket.on("FromAPI", data => {
    console.log('------2')
    setResponse(data);
  });


  return (
    <p>
      It's {response}
    </p>
  );
}