import uuid from 'uuid4'
// const uuid = require('uuid4');

interface Node {
  id: string;
  address?: string;
}

interface NodeInfo extends Node {
  label: string;
  size?: number;
  type?: string; // 枚举类型
  style?: 
}

// export default function(timeout) {
//   //
// }

const id = uuid();
console.log(id)