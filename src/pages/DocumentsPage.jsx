import Reveal from '../components/ui/Reveal.jsx'
import CtaBand from '../components/ui/CtaBand.jsx'
import { about } from '../content/site.js'

export default function DocumentsPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <p className="eyebrow">Документы</p>
          <h1 className="page-header__title">{about.documentsTitle}</h1>
          <p className="page-header__intro">
            Дипломы и подтверждения квалификации. Сюда встанут сканы документов –
            место под них уже готово
          </p>
        </div>
      </div>

      <section className="section section--tight">
        <div className="container">
          <Reveal as="div" className="doc-grid">
            {about.documents.map((doc) => (
              <figure className="doc" key={doc.title}>
                <div
                  className="doc__scan"
                  role="img"
                  aria-label={`Скан документа: ${doc.title}`}
                >
                  <span className="doc__scan-label">Скан документа</span>
                </div>
                <figcaption className="doc__body">
                  <span className="doc__tag">Документ</span>
                  <h3>{doc.title}</h3>
                  <p>{doc.text}</p>
                </figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
