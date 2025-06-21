import React from 'react';

export default function Contact({ show }) {
  return (
    <article className={`contact${show ? ' active' : ''}`} data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <span role="img" aria-label="email">📧</span>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:anish.vempaty@gmail.com" className="contact-link">anish.vempaty@gmail.com</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <span role="img" aria-label="phone">📱</span>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+19296894564" className="contact-link">+1 (929) 689-4564</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <span role="img" aria-label="linkedin">🔗</span>
            </div>
            <div className="contact-info">
              <p className="contact-title">LinkedIn</p>
              <a href="https://www.linkedin.com/in/anish-vempaty-ba73571aa/" className="contact-link" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/anish-vempaty-ba73571aa
              </a>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}
