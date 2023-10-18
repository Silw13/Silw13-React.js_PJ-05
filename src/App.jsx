import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import { Layout } from './components/layout/layout.jsx';
import Board from './components/board/board.jsx';

function App() {

  return (
    <Layout>
      <Header />
      <main>
        <Board />
      </main>
      <Footer />
    </Layout>
  )
}

export default App
