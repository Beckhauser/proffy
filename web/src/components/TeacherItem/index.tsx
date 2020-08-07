import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://pbs.twimg.com/profile_images/1069690828375904263/SXs-5rMN_400x400.jpg" alt="Lucas" />
        <div>
          <strong>Lucas Beckhauser</strong>
          <span>League of Legends</span>
        </div>
      </header>

      <p>
        Entusiasta dos melhores metas da BotLane
            <br /><br />
            Apaixonado por farmar a jungle do time e por feedar na botlane entregando partidas.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong> R$ 10,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>

    </article>
  );
}

export default TeacherItem;
