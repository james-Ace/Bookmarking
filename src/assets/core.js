export const getDate = async (url, options)=>{
    const api = 'https://api.bromel.cn/api/'+ url
    
    const defaultOptions = {
        mode: 'cors'
    }

    Object.assign(options, defaultOptions)
    // const ajax = await fetch(api, defaultOptions).then(response=>{ 
    //     if(!response.ok){
    //         return new Error('错了')
    //     }
    //     return response.json()
    // })
    console.log(options);
}