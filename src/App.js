import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Four04 } from "./pages/Four04";
import key from './components/key'
import { useLocation } from "react-router-dom";
import {Category} from './pages/Category'
import {Reference} from './pages/Reference'
import {Shlok} from './pages/Shlok'
import { Loading } from "./components/Loading";

export const Data = React.createContext()

function App() {
  const [data, setData] = React.useState([])
  let locate = useLocation()

  React.useEffect(() => {
    const Ap = async () => {
      try {
        const res = await fetch(`${key}/data/data.json`, {
          method: "GET",
          headers: {
            "Content-type": "application/json"
          },
        })
        let datas = await res.json()
        if(datas.length < 1){
          datas = [{ "name": "Loading",}]
        }
        setData(datas)
      }
      catch { }
    }
    Ap()
  }, [locate])
  return <Data.Provider value={{ data, setData }}>
    {data.length > 0 ? <><Navbar />
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/categories/:id"><Category /></Route>
      <Route exact path="/shloka/:id/:ids"><Shlok /></Route>
      <Route exact path="/reference"><Reference /></Route>
      <Route><Four04 /></Route>
    </Switch></> : <Loading height={"100vh"} />}
  </Data.Provider>;
}

export default App;
