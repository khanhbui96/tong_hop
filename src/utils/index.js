export const findIndex = (arr, id) =>{
    var result = -1;
    arr.forEach((item, index)=>{
        if(item.id === id){
            result = index
        }
    });
    return result;
};
export const findItem = (arr, id)=>{
    var result = {};
    arr.forEach((item)=>{
        if(item.id == id){
            result = item
        }
    });
    return result;
};