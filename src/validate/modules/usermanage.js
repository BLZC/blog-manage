/**
 * validate in usermanage
 */
let usr = {};
let _Array = ['name', 'sex', 'age'];
_Array.forEach(item => {
  usr[item] = [{ required: true, message: '输入不能为空', trigger: 'blur' }];
});
export default usr;
