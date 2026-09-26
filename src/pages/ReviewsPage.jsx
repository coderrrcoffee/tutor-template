import SectionHeading from '../components/ui/SectionHeading.jsx'
import ReviewCard from '../components/ui/ReviewCard.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import CtaBand from '../components/ui/CtaBand.jsx'
import { intros, results, reviews } from '../content/site.js'

export default function ReviewsPage() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <p className="eyebrow">{intros.reviews.eyebrow}</p>
          <h1 className="page-header__title">{intros.reviews.title}</h1>
          <p className="page-header__intro">{intros.reviews.intro}</p>
        </div>
      </div>

      <section className="section section--tight">
        <div className="container">
          <div className="stats">
            {results.stats.map((item) => (
              <div className="stat" key={item.label}>
                <div className="stat__value">{item.value}</div>
                <div className="stat__label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              title="Результаты по годам"
              intro="Баллы учеников за последние годы"
            />
          </Reveal>
          <Reveal as="div" className="results-years">
            {results.years.map((row, index) => (
              <div className="results-year" key={`${index}-${row.year}`}>
                <span className="results-year__year">{row.year}</span>
                <span className="results-year__scores">{row.scores}</span>
              </div>
            ))}
          </Reveal>
          <Reveal as="div" className="results-notes">
            {results.notes.map((note, index) => (
              <p key={`${index}-${note}`}>{note}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <SectionHeading title="Отзывы" />
          </Reveal>
          <Reveal as="div" className="reviews-grid">
            {reviews.map((review, index) => (
              <ReviewCard {...review} key={`${index}-${review.name}`} />
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
