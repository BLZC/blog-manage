import { Message } from '_element-ui@2.12.0@element-ui'

export let LZCMessage = (msg, type) => {
  Message({
    message: msg,
    type: type
  })
}
