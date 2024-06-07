import React, { useState } from 'react';
import styles from './Usuario.module.css';
import EnderecoEntrega from '../EnderecoEntrega/EnderecoEntrega';
import DadosPessoais from '../DadosPessoais/DadosPessoais';
import SuporteUsuario from '../SuporteUsuario/SuporteUsuario';
import { useAuthValue } from "../../context/AuthContext";

const Usuario = () => {
  const { user, logout } = useAuthValue();
  const [currentSection, setCurrentSection] = useState('profile');

  const handleLogoutClick = () => {
    logout(); // Chama a função de logout fornecida pelo AuthProvider
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'Endereço Entrega':
        return <EnderecoEntrega user={user} onBack={() => setCurrentSection('profile')} />;
      case 'Dados Pessoais':
        return <DadosPessoais onBack={() => setCurrentSection('profile')} />;
      case 'Suporte Usuario':
        return <SuporteUsuario onBack={() => setCurrentSection('profile')} />;
      default:
        return (
          <div className={styles.div_area_do_usuario}>
            <img className={styles.foto_usuario} src='../src/assets/Hugo.jpg' alt="Foto_Usuario" />
            <label className={styles.nome_usuario}>Hugo Frajocomo</label>
            <button className={styles.btn_usuario} onClick={() => setCurrentSection('Endereço Entrega')}>
              Endereço de Entrega
            </button>
            <button className={styles.btn_usuario} onClick={() => setCurrentSection('Dados Pessoais')}>
              Dados Pessoais
            </button>
            <button className={styles.btn_usuario} onClick={() => setCurrentSection('Suporte Usuario')}>
              Suporte ao Usuario
            </button>
            <button className={styles.btn_sair} onClick={handleLogoutClick}>
              Sair
            </button>
          </div>
        );
    }
  };

  return <>{renderSection()}</>;
};

export default Usuario;