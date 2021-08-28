/*
*    该文件用于创建一个为count组件服务的reducer,reducer的本质就是一个函数
*    reducer接收两个参数====> 之前的状态,动作对象
*/
const initState = 0
export default function countReducer(preState=initState,action){
    //从action对象获取type和data
    const {type,data} = action
    //根据type决定如何加工数据
    switch (type) {
        case 'incrementa':
            return preState + data
        case 'decrement':
            return preState - data
        default:
            return preState
    }
}