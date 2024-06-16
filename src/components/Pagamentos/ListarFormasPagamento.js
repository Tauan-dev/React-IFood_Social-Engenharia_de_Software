import React, { useState, useEffect } from "react";
import api from "../../api";

const ListarFormasPagamento = () => {
  const [formasPagamento, setFormasPagamento] = useState([]);

  useEffect(() => {
    const fetchFormasPagamento = async () => {
      try {
        const response = await api.get("/formas_pagamento");
        setFormasPagamento(response.data);
      } catch (error) {
        console.error("Erro ao carregar formas de pagamento", error);
      }
    };

    fetchFormasPagamento();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/formas_pagamento/${id}`);
      setFormasPagamento(
        formasPagamento.filter((fp) => fp.COD_FORMA_PAGTO !== id)
      );
    } catch (error) {
      console.error("Erro ao deletar forma de pagamento", error);
    }
  };

  return (
    <ul>
      {formasPagamento.map((fp) => (
        <li key={fp.COD_FORMA_PAGTO}>{fp.DCR_FORMA_PAGTO}</li>
      ))}
    </ul>
  );
};

export default ListarFormasPagamento;
