import { useEffect, useState } from 'react'
import { handleMenu } from '../../util/menu'

function MenuBtn() {
  const [checked, setChecked] = useState(false)

  const viewMenu = () => {
    handleMenu()
    setChecked((prevCheked) => !prevCheked)
    console.log('hi')
  }

  useEffect(() => {
    const closeMenu = (e) => {
      const $collapse = document.querySelector('.collapseLine')

      if ($collapse && !e.target.closest('.box')) {
        handleMenu()
        setChecked((prevCheked) => !prevCheked)
      }
    }

    document.addEventListener('click', closeMenu)

    return () => document.removeEventListener('click', closeMenu)
  }, [])

  return (
    <div
      className={`box ${checked && 'collapseLine'} md:hidden`}
      onClick={viewMenu}
    >
      <span className="line"></span>
    </div>
  )
}

export default MenuBtn
