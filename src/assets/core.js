export const getDate = async (url, options)=>{
    const api = 'https://api.bromel.cn/api/'+ url
    
    const defaultOptions = {
        mode: 'cors'
    }

    let res = Object.assign(defaultOptions, options)


    const ajax = await fetch(api, defaultOptions).then(response=>{ 
        if(!response.ok){
            return new Error('错了')
        }
        return response.json()
    })


    return ajax
}

/**
 * 对数组进行处理 
 * 如下处理
 * 1. 对数据进行分组 依据sort_id
 * 2. 查询所有的sort_id分组的名字
 * 返回处理后的数组
 * @param {*} jsonData 
 */
export const _dispose_json = (jsonData) => {
    
    console.log(jsonData);
}

/**
 * 
 */
export const _copy = (item)=>{
   const Text = item.name+','+item.url
   let ok = false
   navigator.permissions.query({ name: 'clipboard-write' }).then(result=>{
    if(result.state === 'granted' || result.state === 'prompt'){
        navigator.clipboard.writeText(Text).then(()=>{
            
        }).catch(
            err => {
                console.log('复制错误',err);
            }
        )
    }
   })
   ok = true
   return ok
}