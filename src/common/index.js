import { Message } from '_element-ui@2.12.0@element-ui'

/**
 * message 消息封装
 * @param {*} msg
 * @param {*} type
 */
export let LZCMessage = (msg, type) => {
  Message({
    message: msg,
    type: type
  })
}
