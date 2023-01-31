import { userApi } from "../../utils/Apis/Apis";

export const userChat = async (userId) => {
  try {
    const { data } = await userApi.get(`/chat/${userId}`, {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
   
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMessages = async (chatId) => {
  try {
    const { data } = await userApi.get(`/chat/getMessages/${chatId}`, {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const AddMessage = async (formData) => {
  try {
    const { data } = await userApi.post("/chat/addMessage", formData, {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {
        console.log(error);
  }
};

export const createChat = async (formData) => {
  try {
    const { data } = await userApi.post("/chat/createChat", formData, {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return data;
  } catch (error) {   
     console.log(error);
  }
};
