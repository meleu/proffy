import React from 'react';

import iconWhatsapp from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/8508804?s=460&u=d755d87366b0118df6cc6024e932aeff99056a2f&v=4" alt="meleu" />
        <div>
          <strong>meleu</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>Entusiasta do Linux e código limpo.</p>

      <footer>
        <p>Preço/hora
              <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={iconWhatsapp} alt="WhatsApp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
}

export default TeacherItem;