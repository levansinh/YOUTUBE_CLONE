import {publicRouters} from'./routes/Routes'
import { Routes, Route } from "react-router-dom";

import Layout from './layout/Layout';
function App() {
  return (
    <div className="App">
      <Routes>
        {publicRouters.map((item, index) => {
          const Page = item.component;
          return (
            <Route
              key={index}
              path={item.path}
              element={
                <Layout>
                  <Page></Page>
                </Layout>
              }
            ></Route>
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
