// Use for localhost
// import { io } from "socket.io-client";

// export const socket = io("http://localhost:8080", {
//   autoConnect: false,
// });

// use for aws ec2
import { io } from "socket.io-client";

export const socket = io("http://13.126.41.28:8080", {
  autoConnect: false,
});