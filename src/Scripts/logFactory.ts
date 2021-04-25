/**
 * logFactory.ts
 * 模拟生成各种类型的日志
 */

import { v4 as uuid } from 'uuid';
import genEdge from './getRandomSourceAndTarget';

enum LogType {
  //创建节点事件（正式网络中无该事件）
  GENNODE = 0,

  //建立连接事件
  CONNECTED = 1,
  //断开连接事件
  DISCONNECTED = 2,
  //全网广播 节点查询事件
  BROADCAST = 4,
  //定向广播 节点查询事件
  DIRECTIONAL_CAST = 8,
  //节点 信息更新事件
  PEER_INFO = 16,
  //连接 信息更新事件
  CONNECTION_INFO = 32,
  //连接 相关事件
  CONNECTION = 3,
  //全网广播+定向广播 节点查询事件
  CAST = 12,
  //节点+连接 信息更新事件
  INFO = 48,
  //CONNECTION | CAST | INFO
  ALL = 63
}

export function genNodeLog() {
  return {
    timestamp: Date.now(),
    event: LogType.GENNODE,
    data: {
      mac: uuid()
    }
  }
}

export function connectedLog(graph: any) {
  const nodes = graph.getNodes();
  return {
    timestamp: Date.now(),
    event: LogType.CONNECTED,
    data: genEdge(nodes)
  }
}