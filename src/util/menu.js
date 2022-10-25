export const handleMenu = () => {
  document.querySelector('.box').classList.toggle('collapseLine')
  document.querySelector('.backMenu').classList.toggle('active')
  document.querySelector('[data-movilMenu]').classList.toggle('invisible')
}
