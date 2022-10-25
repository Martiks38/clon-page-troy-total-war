const $$ = (selector) => document.querySelectorAll(selector)

const handleActive = (entry) => {
  if (entry.isIntersecting) entry.target.classList.remove('heroe-hidden')
}

export const observerPage = () => {
  const options = {
    root: null,
    rootMargin: '-20px 0px',
    threshold: 0.4,
  }

  let targets = $$('[data-heroe]')

  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => handleActive(entry))
  }, options)

  targets.forEach((target) => observer.observe(target))
}
