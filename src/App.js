import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ListarFormasPagamentoPage from "./pages/ListarFormasPagamentoPage";
import AddFormaPagamentoPage from "./pages/AddFormaPagamentoPage";
import DeletarFormaPagamentoPage from "./pages/DeletarFormaPagamentoPage";
import HomePage from "./pages/HomePage";
import FinalizarPagamentoPage from "./pages/FinalizarPagamentoPage";
import AvalieNos from "./components/Geral/Avaliar";
import CriarEntregaPage from "./pages/CriarEntregaPage";
import ListarEntregaPage from "./pages/ListarEntregaPage";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/formas-pagamento/listar">
                Listar Formas de Pagamento
              </Link>
            </li>
            <li>
              <Link to="/formas-pagamento/add">
                Adicionar Forma de Pagamento
              </Link>
            </li>
            <li>
              <Link to="/formas-pagamento/delete">
                Deletar Forma de Pagamento
              </Link>
            </li>
            <li>
              <Link to="/finalizar-compra">Finalizar Compra</Link>
            </li>
            <li>
              <Link to="/cria-entrega">Delegar Entrega</Link>
            </li>
            <li>
              <Link to="/listar-entrega">Listar Entrega</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/formas-pagamento/listar"
            element={<ListarFormasPagamentoPage />}
          />
          <Route
            path="/formas-pagamento/add"
            element={<AddFormaPagamentoPage />}
          />
          <Route
            path="/formas-pagamento/delete"
            element={<DeletarFormaPagamentoPage />}
          />
          <Route
            path="/finalizar-compra"
            element={<FinalizarPagamentoPage />}
          />
          <Route path="/avaliar" element={<AvalieNos />} />
          <Route path="/cria-entrega" element={<CriarEntregaPage />} />
          <Route path="/listar-entrega" element={<ListarEntregaPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
