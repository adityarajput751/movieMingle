import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { getApiConfiguration } from "./store/reducers/homeSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch()
  const {url} = useSelector(state => state.home)
  console.log(url,'fkefknv');
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res))
    });
  };

  
  return <div className="App">App</div>;
}

export default App;
