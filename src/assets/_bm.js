export const ajax =function (url, options) {
    return new Promise(function (resolve, reject) {
        fetch(url, options).then(response => {
            if (response.ok) {
                response.json().then(res => resolve(res))
            } else {
                reject(response)
            }
        }).catch(err => reject(err))
    })
}


export default {
    
};