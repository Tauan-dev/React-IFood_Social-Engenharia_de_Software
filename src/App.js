import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ListarFormasPagamentoPage from "./pages/ListarFormasPagamentoPage";
import AddFormaPagamentoPage from "./pages/AddFormaPagamentoPage";
import DeletarFormaPagamentoPage from "./pages/DeletarFormaPagamentoPage";
import HomePage from "./pages/HomePage";

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
              <Link to="/formas-pagamento">Formas de Pagamento</Link>
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
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/formas-pagamento"
            element={<h1>Formas de Pagamento</h1>}
          />
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
