/**
 * validate in menumanage
 */
let menu = {};
let _Array = ['index', 'label', 'name'];
_Array.forEach(item => {
  menu[item] = [{ required: true, message: '输入不能为空', trigger: 'blur' }];
});
export default menu;
