import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Home = () => {
  return(
    <>
      <Header />
        <section>
          <h1>Página Inicial</h1>
          <p>
            Você pode gerenciar Produtos e Clientes atráves dos menus acima :D
          </p>
        </section>
      <Footer />
    </>
  )
}

export default Home;