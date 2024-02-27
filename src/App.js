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
        const datas = await res.json()
        setData(datas)
      }
      catch { }
    }
    Ap()
  }, [locate])
  return <Data.Provider value={{ data, setData }}>
    <Navbar />
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/categories/:id"><Category /></Route>
      <Route exact path="/shloka/:id/:ids"><Shlok /></Route>
      <Route exact path="/reference"><Reference /></Route>
      <Route><Four04 /></Route>
    </Switch>
  </Data.Provider>;
}

export default App;
