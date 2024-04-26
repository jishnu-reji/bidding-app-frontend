import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverURL"

export const registerAPI = async (reqBody) =>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}

export const loginAPI = async (reqBody) =>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}

export const addProductAPI = async (reqBody,reqHeader) =>{
    return await commonAPI("POST",`${SERVER_URL}/addproduct`,reqBody,reqHeader)
}

export const getHomeProductAPI = async () =>{
    return await commonAPI("GET",`${SERVER_URL}/homeproducts`,"")
}

export const getAllProductAPI = async (searchKey,reqHeader) =>{
    return await commonAPI("GET",`${SERVER_URL}/allproducts?search=${searchKey}`,"",reqHeader)
}

export const getUserProductAPI = async (reqHeader) =>{
    return await commonAPI("GET",`${SERVER_URL}/userproducts`,"",reqHeader)
}

export const addBidAPI = async (reqBody,reqHeader) =>{
    return await commonAPI("POST",`${SERVER_URL}/addbid`,reqBody,reqHeader)
}

export const getUserBidsAPI = async (reqHeader) =>{
    return await commonAPI("GET",`${SERVER_URL}/userbids`,"",reqHeader)
}

export const addToSoldAPI = async (reqBody,reqHeader) =>{
    return await commonAPI("POST",`${SERVER_URL}/addtosold`,reqBody,reqHeader)
}

export const getUserSoldProductAPI = async (reqHeader) =>{
    return await commonAPI("GET",`${SERVER_URL}/usersoldproducts`,"",reqHeader)
}

export const getUserBoughtProductAPI = async (reqHeader) =>{
    return await commonAPI("GET",`${SERVER_URL}/userboughtproducts`,"",reqHeader)
}

export const removeSoldAPI = async (sid,reqHeader) =>{
    return await commonAPI("DELETE",`${SERVER_URL}/removesold/${sid}`,{},reqHeader)
}

export const removeBoughtAPI = async (boughtid,reqHeader) =>{
    return await commonAPI("DELETE",`${SERVER_URL}/removebought/${boughtid}`,{},reqHeader)
}

export const editProfileAPI = async (reqBody,reqHeader) =>{
    return await commonAPI("PUT",`${SERVER_URL}/edituser/`,reqBody,reqHeader)
}

export const getUserDetailsAPI = async (uid,reqHeader) =>{
    return await commonAPI("GET",`${SERVER_URL}/userdetails/${uid}`,"",reqHeader)
}