import Hero from '../components/home/Hero.jsx'
import Button from '../components/ui/Button.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Accordion from '../components/ui/Accordion.jsx'
import PriceCard from '../components/ui/PriceCard.jsx'
import ReviewCard from '../components/ui/ReviewCard.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import CtaBand from '../components/ui/CtaBand.jsx'
import {
  stats,
  benefits,
  audience,
  steps,
  reviews,
  pricing,
  faq,
} from '../content/site.js'

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section section--tight" aria-label="Коротко о занятиях">
        <div className="container">
          <div className="stats">
            {stats.map((item) => (
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
              eyebrow="Почему меня выбирают"
              title="Почему ученики выбирают подготовку со мной"
            />
          </Reveal>
          <Reveal as="div" className="card-grid card-grid--three">
            {benefits.map((item) => (
              <article className="subject" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow={audience.eyebrow}
              title={audience.title}
              intro={audience.intro}
            />
          </Reveal>
          <div className="two-col">
            {audience.groups.map((group) => (
              <Reveal key={group.title}>
                <h3 className="column-title">{group.title}</h3>
                <ul className="check-list">
                  {group.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Как проходит работа"
              title="Понятный путь от первого занятия до результата"
            />
          </Reveal>
          <Reveal as="div" className="steps">
            {steps.map((step) => (
              <article className="step" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Отзывы"
              title="Что говорят ученики и родители"
            />
          </Reveal>
          <Reveal as="div" className="reviews-grid">
            {reviews.slice(0, 4).map((review) => (
              <ReviewCard {...review} key={review.name} />
            ))}
          </Reveal>
          <div className="section-actions">
            <Button to="/reviews" variant="secondary">
              Все результаты и отзывы
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Стоимость"
              title="Форматы занятий"
              intro="Выберите формат, который подходит вашему ребёнку"
            />
          </Reveal>
          <Reveal as="div" className="price-grid">
            {pricing.plans.map((plan) => (
              <PriceCard key={plan.title} {...plan} />
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow="Вопросы" title="Частые вопросы" />
          </Reveal>
          <Reveal>
            <Accordion items={faq.slice(0, 3)} />
          </Reveal>
          <div className="section-actions">
            <Button to="/faq" variant="secondary">
              Все вопросы
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
