/*初始化人的列表*/
const initState = [{id:'01',name:'tom',age:'18'}]
export default function personReducer(preState=initState,action){
    const {type,data} = action
    switch (type){
        case 'addPerson':  //如果添加一个人
            return [data,...preState]
        default:
            return preState
    }
}