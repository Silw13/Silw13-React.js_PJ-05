import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import { Layout } from './components/layout/layout.jsx';
import Board from './components/board/board.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FullCard from "./components/board/fullCard/fullCard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Board />
  },
  {
    path: "/tasks/:cardId",
    element: <FullCard />
  }
])

function App() {

  return (
    <Layout>
      <Header />
      <main>
        <RouterProvider router={router}>
          <Board />
        </RouterProvider>
      </main>
      <Footer />
    </Layout>
  )
}

export default App
