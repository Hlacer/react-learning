//同步action指的是 action值为object类型的一般对象
export const createIncrementAction = (data) =>({type:'incrementa',data:data})

export const createDecrementAction = (data) =>({type:'decrement',data:data})

//异步action就是指action的值为函数
export const createDecrementAsyncAction = (data,time) =>{
    return (dispatch)=>{
        setTimeout(() =>{
            //通知redux+data
            dispatch(createIncrementAction(data)) //异步action中一般都会调用同步action，异步action不是必须用的
        },time)
    }
}