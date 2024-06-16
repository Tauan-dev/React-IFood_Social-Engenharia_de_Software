import React, { useState } from "react";
import api from "../../api";

const AddFormaPagamento = () => {
  const [descricao, setDescricao] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/formas_pagamento", { DCR_FORMA_PAGTO: descricao });
      alert("Forma de pagamento adicionada com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar forma de pagamento", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Descrição da Forma de Pagamento"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AddFormaPagamento;
