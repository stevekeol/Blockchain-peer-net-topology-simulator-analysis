import { v4 as uuid } from 'uuid'

interface Node {
  id: string;
  address?: string;
}

interface NodeInfo extends Node {
  label: string;
  size?: number;
  type?: string; // 枚举类型
  style?: string
}

// export default function(timeout) {
//   //
// }

const id = uuid();
console.log(id)