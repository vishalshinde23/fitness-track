const BASE_URL=process.env.REACT_APP_BASE_URL


export const userpoints={
    ADDUSER_API:BASE_URL+"/user/adduserData",
     GETUSER_API:BASE_URL+"/user/getuserData"
}

export const exercisepoint={
    GETDATA_API:BASE_URL+"/exercise/getAllData",
    GETDATABYID_API:BASE_URL+"/exercise/getDataById",
    ADDDATA_API:BASE_URL+"/exercise/add",
    UPDATE_API:BASE_URL+"/exercise/getUpdate",
    DELETE_API:BASE_URL+"/exercise/DeleteData",
}