/**
 * logFactory.ts
 * 模拟生成各种类型的日志
 */

import { v4 as uuid } from 'uuid';
import chooseEdge from './getRandomSourceAndTarget';

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

export function genNodeLog(source: any) {
  return {
    timestamp: Date.now(),
    event: LogType.GENNODE,
    data: {
      mac: source || uuid() as any
    }
  }
}

export function connectedLog(graph: any) {
  const nodes = graph.getNodes();
  const { source, target } = chooseEdge(nodes);
  /**
   * 0.1的概率是新节点发起的连接请求;
   * 0.9的概率是已存在的节点发起的请求;
   */
  if(Math.random() < 0.10) {
    return {
      timestamp: Date.now(),
      event: LogType.CONNECTED,
      data: {
        source: uuid(),
        target
      }
    }
  } else {
    return {
      timestamp: Date.now(),
      event: LogType.CONNECTED,
      data: { source, target }
    }
  }
}

export function disconnectedLog(graph: any) {
  const nodes = graph.getNodes();
  return {
    timestamp: Date.now(),
    event: LogType.DISCONNECTED,
    data: chooseEdge(nodes)
  }  
}

export function nodeInfoLog(graph: any) {
  const nodes = graph.getNodes();
  const edge = chooseEdge(nodes);
  const MAX_CONNECTIONS = 10; // 暂时约定最大连接数为10
  const capacity = Math.floor(Math.random() * nodes.length);
  return {
    timestamp: Date.now(),
    event: LogType.DISCONNECTED,
    data: {
      mac: edge.source,
      peerMac: edge.target,
      peerInfo: {
        capacity: capacity,
        connectPercent: capacity / MAX_CONNECTIONS,
        blockHeight: Math.floor(Math.random() * 100),
        delay: Math.floor(Math.random() * 10)
      }
    }
  }
}