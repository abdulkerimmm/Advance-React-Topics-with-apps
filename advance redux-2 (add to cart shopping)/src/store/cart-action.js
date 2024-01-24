import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const getData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://http-request-1cf75-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("gettin data has beem unsuccesful");
      }
      const data = await response.json();
      return data;
    };
    try {
      const data = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: data.items || [],
          totalQuantity: data.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.notificationHandler({
          status: "error",
          title: "error...",
          message: "something went wrong",
        })
      );
    }
  };
};

export const sendData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.notificationHandler({
        status: "pending",
        title: "pending...",
        message: "loading the fetch procceses",
      })
    );

    const fetchData = async () => {
      const response = await fetch(
        "https://http-request-1cf75-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        console.log("erorr wauttttt");
        throw new Error("failed the this proccess unfortunatlyy");
      }
    };

    try {
      fetchData();
      dispatch(
        uiActions.notificationHandler({
          status: "succes",
          title: "succesfully...",
          message: "the processes has been complete succesfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.notificationHandler({
          status: "error",
          title: "error...",
          message: "something went wrong",
        })
      );
    }
  };
};
