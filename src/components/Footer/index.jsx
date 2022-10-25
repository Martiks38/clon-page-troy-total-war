import CardSocial from '../CardSocial'
import Logos from '../Logos'

function Footer() {
  return (
    <footer className="bg-[#282828] text-[0.6rem] py-[2%] px-[8.3%] font-roboto">
      <div className="container-fluid text-[18px] leading-[30px]">
        <div className="row">
          <Logos />
          <CardSocial />
        </div>
        <div className="row text-white">
          <div className="flex flex-[0_0_50%] flex-wrap items-center justify-center mt-8 px-[15px] min-[992px]:justify-start min-[992px]:flex-nowrap min-[992px]:max-w-full md:max-w-1/2">
            <img
              src="https://content.totalwar.com/ratings/troy/esrb.jpg"
              alt="ESRB Rating"
              className="h-[85px] w-auto align-middle max-[992px]:m-[0_1rem_1rem] aspect-[auto_236/59]"
            />
          </div>
          <div className="mt-8 px-[15px] font-normal md:flex-[0_0_50%] md:max-w-1/2 min-[992px]:pr-0">
            <div className="text-right">
              <ul className="mb-4 mt-0 text-[18px] leading-[30px] min-[992px]:text-center">
                <li className="inline-block mr-2">
                  <a
                    target="_blank"
                    href="https://privacy.sega.com/en/sega-europe-limited-privacy-policy"
                    className="text-[13px] tracking-normal"
                  >
                    Privacy policy
                  </a>
                </li>
                <li className="inline-block mr-2">
                  <a
                    target="_blank"
                    href="https://www.sega.co.uk/Terms-and-Conditions"
                    className="text-[13px] tracking-normal"
                  >
                    Terms of service
                  </a>
                </li>
                <li className="inline-block mr-2">
                  <a
                    target="_blank"
                    href="https://privacy.sega.com/en/sega-cookie-policy"
                    className="text-[13px] tracking-normal"
                  >
                    Cookie policy
                  </a>
                </li>
                <li className="inline-block mr-2">
                  <a
                    target="_blank"
                    href="https://support.sega.co.uk/hc/en-gb/categories/200307381-Total-War-Support"
                    className="text-[13px] tracking-normal"
                  >
                    Support
                  </a>
                </li>
                <li className="inline-block mr-2">
                  <a
                    target="_blank"
                    href="https://www.sega.co.uk/sega-approved-partner-list"
                    className="text-[13px] tracking-normal"
                  >
                    Approved Partners
                  </a>
                </li>
                <li className="inline">
                  <a
                    target="_blank"
                    href="https://www.creative-assembly.com/careers"
                    className="text-[13px] tracking-normal"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-[10px] text-center leading-[15px] min-[992px]:text-right">
              &copy; Copyright Games Workshop Limited 2022. Warhammer, the
              Warhammer logo, GW, Games Workshop, The Game of Fantasy Battles,
              the twin-tailed comet logo, and all associated logos,
              illustrations, images, names, creatures, races, vehicles,
              locations, weapons, characters, and the distinctive likeness
              thereof, are either &reg; or TM, and/or &copy; Games Workshop
              Limited, variably registered around the world, and used under
              licence. Developed by Creative Assembly and published by SEGA.
              Creative Assembly, the Creative Assembly logo, Total War and the
              Total War logo are either registered trademarks or trademarks of
              The Creative Assembly Limited. SEGA and the SEGA logo are either
              registered trademarks or trademarks of SEGA Holdings Co., Ltd. or
              its affiliates. All rights reserved. SEGA is registered in the
              U.S. Patent and Trademark Office. All other trademarks, logos and
              copyrights are property of their respective owners.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
