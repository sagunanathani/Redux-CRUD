
export const add =(data)=>{
    return{
        type:"ADD_DATA",
        payload:data
    }
};

export const remove =(index)=>{
    return{
        type:"DELETE_DATA",
        payload:index
    }
};

export const edit =(data)=>{
    return{
        type:"EDIT_DATA",
        payload:data
    }
};