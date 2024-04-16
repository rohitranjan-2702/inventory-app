import { useState, useEffect } from "react";

const useData = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const getData = async () => {
    setLoading(true);
    try {
      const user = await fetch(url, {
        method: "GET",
      });
      const data = await user.json();
      console.log("data: ", data);
      setData(data);
    } catch (err) {
      console.log("err: ", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const refetch = () => {
    setLoading(true);
    getData();
  };

  const addData = async (url: string, body: any) => {
    setLoading(true);
    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ ...body }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log("data: ", data);
      setResponse(data);
      return data;
    } catch (err) {
      console.log("err: ", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteData = async (url: string, body: any) => {
    setLoading(true);
    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ ...body }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log("data: ", data);
      setResponse(data);
      return data;
    } catch (err) {
      console.log("err: ", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const updateData = async (url: string, body: any) => {
    setLoading(true);
    try {
      const res = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify({ ...body }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log("data: ", data);
      setResponse(data);
      return data;
    } catch (err) {
      console.log("err: ", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    refetch,
    addData,
    response,
    updateData,
    deleteData,
  };
};

export default useData;
