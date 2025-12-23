import Footer from "../Footer/Footer";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  return (
    <div className={css.page}>
      {/* Hero Section */}
      <section className={css.hero}>
        <div className={css.container}>
          <h1 className={css.title}>Зв&apos;яжіться з нами</h1>
          <p className={css.subtitle}>
            Маєте питання? Ми завжди раді допомогти!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className={css.mainSection}>
        <div className={css.container}>
          <div className={css.grid}>
            {/* Ліва колонка */}
            <div className={css.leftColumn}>
              {/* Контактна інформація */}
              <div className={css.contactInfo}>
                <h2 className={css.sectionTitle}>Контактна інформація</h2>

                {/* Телефон */}
                <div className={css.contactItem}>
                  <div className={css.iconWrapper}>
                    <svg
                      className={css.icon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <div className={css.contactLabel}>Телефон</div>
                    <div className={css.contactValue}>+38 (050) 123-45-67</div>
                    <div className={css.contactValue}>+38 (067) 890-12-34</div>
                  </div>
                </div>

                {/* Email */}
                <div className={css.contactItem}>
                  <div className={css.iconWrapper}>
                    <svg
                      className={css.icon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m2 7 10 7 10-7" />
                    </svg>
                  </div>
                  <div>
                    <div className={css.contactLabel}>Email</div>
                    <div className={css.contactValue}>info@agroavto.ua</div>
                  </div>
                </div>

                {/* Адреса */}
                <div className={css.contactItem}>
                  <div className={css.iconWrapper}>
                    <svg
                      className={css.icon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className={css.contactLabel}>Адреса</div>
                    <div className={css.contactValue}>
                      м. Харків, вул. Георгія Тарасенка, 12,
                    </div>
                  </div>
                </div>

                {/* Графік роботи */}
                <div className={css.contactItem}>
                  <div className={css.iconWrapper}>
                    <svg
                      className={css.icon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <div className={css.contactLabel}>Графік роботи</div>
                    <div className={css.contactValue}>Пн-Пт: 10:00-18:00</div>
                    <div className={css.contactValue}>Сб-Нд: вихідний</div>
                  </div>
                </div>
              </div>

              {/* Форма зв'язку
              <div className={css.formCard}>
                <h2 className={css.sectionTitle}>Напишіть нам</h2>
                <p className={css.formDescription}>
                  Залиште заявку і ми зв'яжемось з вами протягом 15 хвилин
                </p>

                <form className={css.form}>
                  <div className={css.formGroup}>
                    <label className={css.label}>Ваше ім'я</label>
                    <input
                      type="text"
                      className={css.input}
                      placeholder="Іван Петренко"
                    />
                  </div>

                  <div className={css.formGroup}>
                    <label className={css.label}>Телефон</label>
                    <input
                      type="tel"
                      className={css.input}
                      placeholder="+38 (0__) ___-__-__"
                    />
                  </div>

                  <div className={css.formGroup}>
                    <label className={css.label}>Email</label>
                    <input
                      type="email"
                      className={css.input}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className={css.formGroup}>
                    <label className={css.label}>Повідомлення</label>
                    <textarea
                      className={css.textarea}
                      rows={4}
                      placeholder="Опишіть ваше питання..."
                    ></textarea>
                  </div>

                  <button type="submit" className={css.submitButton}>
                    Відправити повідомлення
                  </button>
                </form>
              </div> */}
            </div>

            {/* Права колонка - Карта */}
            <div className={css.rightColumn}>
              <div className={css.mapCard}>
                <h2 className={css.sectionTitle}>Як нас знайти</h2>
                <div className={css.mapWrapper}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d641.3837833751993!2d36.24864716962924!3d49.982575860577214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a08eb9fc515d%3A0x2d257b983b5750cc!2z0LLRg9C70LjRhtGPINCT0LXQvtGA0LPRltGPINCi0LDRgNCw0YHQtdC90LrQsCwgMTIsINCl0LDRgNC60ZbQsiwg0KXQsNGA0LrRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDYxMDAw!5e0!3m2!1sru!2sua!4v1759322536834!5m2!1sru!2sua"
                    className={css.map}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Кнопка маршруту */}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=49.982576,36.248647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.routeButton}
                >
                  <svg
                    className={css.routeIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Побудувати маршрут
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={css.featuresSection}>
        <div className={css.container}>
          <h2 className={css.featuresTitle}>Чому обирають нас?</h2>

          <div className={css.features}>
            <div className={css.feature}>
              <div className={css.featureIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className={css.featureTitle}>Якість</h3>
              <p className={css.featureText}>
                Тільки оригінальні запчастини від перевірених виробників
              </p>
            </div>

            <div className={css.feature}>
              <div className={css.featureIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className={css.featureTitle}>Консультації</h3>
              <p className={css.featureText}>
                Допоможемо підібрати потрібні запчастини безкоштовно
              </p>
            </div>

            <div className={css.feature}>
              <div className={css.featureIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <h3 className={css.featureTitle}>Доставка</h3>
              <p className={css.featureText}>
                Самовивіз та доставка по Україні протягом 1-3 днів
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
