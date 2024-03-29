const API_END_POINT = 'https://todo-api.roto.codes/roto'

export const request = async(url) =>{
    try{
        const res = await fetch(`${API_END_POINT}${url}`)
        
        if(!res.ok){
            throw new Error('호출오류')
        }

        return await res.json()
    }catch(e){
        alert(e.message)
    }
}