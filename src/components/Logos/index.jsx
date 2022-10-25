function Logos() {
  return (
    <div className="relative flex flex-wrap justify-evenly px-[15px] max-w-full w-full text-[18px] leading-[30px] md:basis-0 md:grow min-[992px]:block">
      <a
        target="_blank"
        href="http://www.games-workshop.com/en-GB/Home?_requestid=4705908"
      >
        <img
          src="https://cdn.creative-assembly.com/warstrap/artifacts/components/footer/warstrap-component-footer-logo-gamesworkshop.png"
          alt="Games Workshop"
          className="inline mb-4 mr-[8%] h-[40px] w-auto align-middle min-[992px]:mb-[2%]"
        />
      </a>
      <a target="_blank" href="http://www.creative-assembly.com/">
        <img
          src="https://cdn.creative-assembly.com/warstrap/artifacts/components/footer/warstrap-component-footer-logo-creative.png"
          alt="Creative Assembly"
          className="inline mb-4 mr-[8%] h-[40px] w-auto align-middle min-[992px]:mb-[2%]"
        />
      </a>
      <a href="https://www.totalwar.com">
        <img
          src="https://cdn.creative-assembly.com/warstrap/artifacts/components/footer/warstrap-component-footer-logo-totalwar.png"
          alt="Total War"
          className="inline mb-4 mr-[8%] h-[40px] w-auto align-middle min-[992px]:mb-[2%]"
        />
      </a>
      <a target="_blank" href="http://www.sega.com/">
        <img
          src="https://cdn.creative-assembly.com/warstrap/artifacts/components/footer/warstrap-component-footer-logo-sega.png"
          alt="Sega"
          className="inline mb-4 mr-[8%] h-[40px] w-auto align-middle min-[992px]:mb-[2%]"
        />
      </a>
    </div>
  )
}

export default Logos
