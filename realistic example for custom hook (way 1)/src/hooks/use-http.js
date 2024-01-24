import { useEffect, useState } from "react";

const useHttp = (initialValue) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [datas, setDatas] = useState([]);

  // var datas = [];
  const httpTasks = async (taskText, callback) => {
    setIsLoading(true);

    setError(null);
    try {
      const response = await fetch(
        "https://http-request-1cf75-default-rtdb.firebaseio.com//tasks.json",
        initialValue
          ? {
              method: "POST",
              body: JSON.stringify({ text: taskText }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          : {}
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      if (initialValue) {
        const generatedId = data.name; // firebase-specific => "name" contains generated id
        // setDatas({ id: generatedId, text: taskText });
        callback({ id: generatedId, text: taskText }); // Send the newTask to the callback
      } else {
        const loadedTasks = [];

        for (const taskKey in data) {
          loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        }
        console.log("laodedtask:", loadedTasks);
        setDatas(loadedTasks);
      }
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return { datas, isLoading, error, httpTasks };
};

export default useHttp;
