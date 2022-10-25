import FB from '../FB'
import IG from '../IG'
import Logo from '../Logo'
import MenuBtn from '../MenuBtn'
import Twitter from '../Twitter'

function Header() {
  return (
    <header className="relative bg-black h-[54px]">
      <div className="flex items-center h-full justify-between mx-auto px-10 max-w-[1200px] text-cyan-50 min-[1210px]:px-0 max-md:items-center">
        <div className="mr-[30px]">
          <a href="https://www.totalwar.com/home" rel="noopener noreferrer">
            <Logo />
          </a>
        </div>
        <div className="flex items-center text-sm max-md:hidden">
          <nav className=" h-full">
            <ul className="flex flex-wrap items-center justify-end grow font-roboto">
              <li className="flex text-[18px] leading-[13px]">
                <a
                  href="https://dashboard.totalwar.com/home"
                  rel="noopener noreferrer"
                  className="flex items-center h-full text-[1.2em] hover:underline"
                >
                  <span className="text-[13px]">MY ACCOUNT</span>
                </a>
              </li>
              <li className="flex items-center before:content-['/'] text-[18px] before:mx-2 uppercase leading-[13px]">
                <a
                  href="https://academy.totalwar.com"
                  rel="noopener noreferrer"
                  className="flex items-center h-full text-[1.2em] hover:underline"
                >
                  <span className="text-[13px]">Academy</span>
                </a>
              </li>
              <li className="flex items-center before:content-['/'] text-[18px] before:mx-2 uppercase leading-[13px]">
                <a
                  href="https://www.totalwar.com/games/"
                  rel="noopener noreferrer"
                  className="flex items-center h-full text-[1.2em] hover:underline"
                >
                  <span className="text-[13px]">Games</span>
                </a>
              </li>
              <li className="flex items-center before:content-['/'] text-[18px] before:mx-2 uppercase leading-[13px]">
                <a
                  href="https://www.totalwar.com/support/"
                  rel="noopener noreferrer"
                  className="flex items-center h-full text-[1.2em] hover:underline"
                >
                  <span className="text-[13px]">Support</span>
                </a>
              </li>
              <li className="flex items-center before:content-['/'] text-[18px] before:mx-2 uppercase leading-[13px]">
                <a
                  href="https://www.totalwar.com/blog/"
                  rel="noopener noreferrer"
                  className="flex items-center h-full text-[1.2em] hover:underline"
                >
                  <span className="text-[13px]">Blog</span>
                </a>
              </li>
              <li className="flex items-center before:content-['/'] text-[18px] before:mx-2 uppercase leading-[13px]">
                <a
                  href="https://forums.totalwar.com"
                  rel="noopener noreferrer"
                  className="flex items-center h-full text-[1.2em] hover:underline"
                >
                  <span className="text-[13px]">Forums</span>
                </a>
              </li>
              <li className="flex items-center before:content-['/'] text-[18px] before:mx-2 uppercase leading-[13px]">
                <a
                  href="https://www.totalwar.com/faq/"
                  rel="noopener noreferrer"
                  className="flex items-center h-full text-[1.2em] hover:underline"
                >
                  <span className="text-[13px]">FAQ</span>
                </a>
              </li>
              <li className="flex ml-4 uppercase">
                <a
                  href="https://store.warhammer.totalwar.com"
                  rel="noopener noreferrer"
                  className="p-1 bg-[#B04A00] h-full text-[1.2em] hover:underline leading-[13px]"
                >
                  <span className="text-[13px]">Purchase</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex gap-x-2 ml-4">
            <FB styles="h-6 w-6" hover="true" />
            <Twitter styles="h-6 w-6" hover="true" />
            <IG styles="h-6 w-6" hover="true" />
          </div>
        </div>
        <MenuBtn />
      </div>
      <ul
        data-movilMenu
        className="absolute top-full h-fit w-full bg-white z-40 invisible"
      >
        <li className="text-[15px] font-normal font-galdeano leading-[30px] border-b border-solid border-black text-black text-center">
          <a
            className="block w-full h-full p-[4px_10px]"
            href="https://dashboard.totalwar.com/home"
          >
            My Account
          </a>
        </li>
        <li className="text-[15px] font-normal font-galdeano leading-[30px] border-b border-solid border-black text-black text-center">
          <a
            className="block w-full h-full p-[4px_10px]"
            href="https://academy.totalwar.com/"
          >
            Academy
          </a>
        </li>
        <li className="text-[15px] font-normal font-galdeano leading-[30px] border-b border-solid border-black text-black text-center">
          <a
            className="block w-full h-full p-[4px_10px]"
            href="https://www.totalwar.com/games/"
          >
            Games
          </a>
        </li>
        <li className="text-[15px] font-normal font-galdeano leading-[30px] border-b border-solid border-black text-black text-center">
          <a
            className="block w-full h-full p-[4px_10px]"
            href="https://www.totalwar.com/support/"
          >
            Support
          </a>
        </li>
        <li className="text-[15px] font-normal font-galdeano leading-[30px] border-b border-solid border-black text-black text-center">
          <a
            className="block w-full h-full p-[4px_10px]"
            href="https://www.totalwar.com/blog/"
          >
            Blog
          </a>
        </li>
        <li className="text-[15px] font-normal font-galdeano leading-[30px] border-b border-solid border-black text-black text-center">
          <a
            className="block w-full h-full p-[4px_10px]"
            href="https://forums.totalwar.com/"
          >
            Forums
          </a>
        </li>
        <li className="text-[15px] font-normal font-galdeano leading-[30px] border-b border-solid border-black text-black text-center">
          <a className="block w-full h-full p-[4px_10px]" href="/faq/">
            FAQ
          </a>
        </li>
        <li className="text-[15px] font-normal font-galdeano leading-[30px] border-b border-solid border-black text-black text-center">
          <a
            className="block w-full h-full p-[4px_10px]"
            href="https://store.warhammer.totalwar.com/"
          >
            Purchase
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header
