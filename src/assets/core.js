export const getDate = async (url, options) => {
    const api = 'https://api.bromel.cn/api/' + url

    const defaultOptions = {
        mode: 'cors'
    }

    let res = Object.assign(defaultOptions, options)

    const ajax = await fetch(api, res).then(response => {
        console.log(response);
        if (response.ok) {
            return response.json()
            
        }
        return new Error('出错了,来自getDate !response.ok 处')
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
    let category = []
    let old = []
    for (let i = 1; i < jsonData.length; i++) {
        if(old.indexOf(jsonData[i].sort_id) != 0){
            old.push(jsonData[i].sort_id)
        }
    }


    for (let index = 0; index < old.length; index++) {
        let temp = {id: old[index], data:[]}
        for(let i = 0; i < jsonData.length; i++ ){
            if(jsonData[i].sort_id == old[index]){
                temp.data.push(jsonData[i])
            }
        } 
        category.push(temp)
    }
    return category
}

/**
 * 
 */
export const _copy = (item) => {
    const Text = item.name + ',' + item.url
    let ok = false
    navigator.permissions.query({ name: 'clipboard-write' }).then(result => {
        if (result.state === 'granted' || result.state === 'prompt') {
            navigator.clipboard.writeText(Text).then(() => {

            }).catch(
                err => {
                    console.log('复制错误', err);
                }
            )
        }
    })
    ok = true
    return ok
}