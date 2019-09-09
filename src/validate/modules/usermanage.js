/**
 * validate in usermanage
 */
let usr = {}
let usArray = ['name', 'sex', 'age']
usArray.forEach(item => {
  usr[item] = [{ required: true, message: '输入不能为空', trigger: 'blur' }]
})
export default usr
