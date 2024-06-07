// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from '../EnderecoEntrega/EnderecoEntrega.module.css'

const EnderecoEntrega = ({ onBack }) => {
  return (
    <div className={styles.div_endereco_entrega}>
      <h3>CEP</h3>
      <input placeholder={"00000-00"} className={styles.inputs_entrega}></input>
      <h3>Rua</h3>
      <input placeholder={"Marechal Lorenzo"} className={styles.inputs_entrega}></input>
      <h3>Bairo</h3>
      <input placeholder={"Jardim Primavera"} className={styles.inputs_entrega}></input>
      <h3>Complemento</h3>
      <input placeholder={"Ap. N°13"} className={styles.inputs_entrega}></input>
      <h3>UF/ESTADO</h3>
      <input placeholder={"São Paulo"} className={styles.inputs_entrega}></input>
      <button className={styles.btn_entrega}>Alterar</button>
      <button className={styles.btn_entrega}>Salvar</button>
      <div className={styles.div_voltar}>
        <button className={styles.btn_voltar} onClick={onBack}>
          <i className="bi bi-arrow-return-left" id={styles.icone_voltar}></i>
        </button>
      </div>
    </div>
  )
}

export default EnderecoEntrega
