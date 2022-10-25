import { useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { observerPage } from './util'

function App() {
  useEffect(() => {
    observerPage()
  }, [])

  return (
    <>
      <Header />
      <div className="relative text-white">
        <div className="absolute top-0 bottom-0 w-full h-full bg-black opacity-0 -z-10 backMenu"></div>
        <div className="relative mx-auto mb-[30px] min-h-[100vw] flex items-center justify-center px-8 w-full max-w-[1440px] effectBlack xl:p-4 min-[576px]:min-h-[60vw] min-[1440px]:min-h-[815px] min-[1440px]:max-w-[1440px] md:object-cover">
          <img
            width={1920}
            height={1080}
            src="https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2021/09/02155818/troy-out-now.jpg"
            srcSet="https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2021/09/02155818/troy-out-now.jpg 1920w, https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2021/09/02155818/troy-out-now-300x169.jpg 300w, https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2021/09/02155818/troy-out-now-1024x576.jpg 1024w, https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2021/09/02155818/troy-out-now-768x432.jpg 768w, https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2021/09/02155818/troy-out-now-1536x864.jpg 1536w, https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2021/09/02155818/troy-out-now-360x203.jpg 360w, https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2021/09/02155818/troy-out-now-640x360.jpg 640w, https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2021/09/02155818/troy-out-now-1080x608.jpg 1080w, https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2021/09/02155818/troy-out-now-1366x768.jpg 1366w, https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2021/09/02155818/troy-out-now-480x270.jpg 480w"
            sizes="(max-width: 1920px) 100vw, 1920px"
            alt=""
            className="absolute inset-0 w-full max-w-none max-h-none h-full vertical-middle object-cover aspect-[auto_1920/1080]"
          />
        </div>
        <a id="top" className="px-[30px] min-[1260px]:px-0"></a>
        <div className="flex gap-[2em] max-w-[940px] mx-auto mb-[30px] px-[30px] text-lg flex-wrap min-[782px]:flex-nowrap min-[782px]:px-0">
          <div className="grow basis-full"></div>
          <div className="grow basis-full">
            <figure>
              <a
                target="_blank"
                href="https://store.troy.totalwar.com/?utm_source=Mythos&utm_medium=Website&utm_campaign=Launch&utm_content=Pre_order_now"
                rel="noreferrer noopener"
              >
                <img
                  loading="lazy"
                  width="500"
                  height="112"
                  src="https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2021/07/23101905/Buy-Now-Button-2.jpg"
                  alt=""
                  className="w-full h-auto aspect-[auto_500/112]"
                  srcSet="https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2021/07/23101905/Buy-Now-Button-2.jpg 500w, https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2021/07/23101905/Buy-Now-Button-2-300x67.jpg 300w, https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2021/07/23101905/Buy-Now-Button-2-360x81.jpg 360w"
                  sizes="(max-width: 500px) 100vw, 500px"
                />
              </a>
            </figure>
          </div>
          <div className="grow basis-full"></div>
        </div>
        <div className="mx-auto mb-[66px] px-[30px] max-w-[1200px] min-[1260px]:px-0">
          <div className="bg-white text-black font-normal font-roboto text-[18px]">
            <ul className="flex flex-col flex-wrap gap-y-[0.5em] justify-center p-[0.9rem] text-[1.125em] tracking-[0.2em] leading-[30px] min-[651px]:flex-row">
              <li className="border-none border-black leading-[0.9rem] opacity-60 min-[651px]:border-2-l min-[651px]:border-solid">
                <a
                  href="https://totalwar.com/games/troy"
                  className="block w-fit mx-auto py-4 uppercase hover:underline underline-offset-2 decoration-2 min-[651px]:py-0 min-[651px]:px-4"
                >
                  Home
                </a>
              </li>
              <li className="mx-auto py-4 w-fit border-t-[3px] border-black leading-[0.9rem] opacity-60 [651px]:mx-0 min-[651px]:py-0 min-[651px]:px-4 min-[651px]:border-l-2 min-[651px]:border-t-0 min-[651px]:mx-0">
                <a
                  target="_blank"
                  href="https://www.youtube.com/playlist?list=PL7l8yJHLU_BHZFuXqlqJEtB2tQC5We-hv"
                  className="uppercase hover:underline underline-offset-2 decoration-2"
                >
                  Media
                </a>
              </li>
              <li className="mx-auto py-4 w-fit border-t-[3px] border-black leading-[0.9rem] opacity-60 [651px]:mx-0 min-[651px]:py-0 min-[651px]:px-4 min-[651px]:border-l-2 min-[651px]:border-t-0 min-[651px]:mx-0">
                <a
                  href="#heroes"
                  className="uppercase hover:underline underline-offset-2 decoration-2"
                >
                  Heroes
                </a>
              </li>
              <li className="mx-auto py-4 w-fit border-t-[3px] border-black leading-[0.9rem] opacity-60 [651px]:mx-0 min-[651px]:py-0 min-[651px]:px-4 min-[651px]:border-l-2 min-[651px]:border-t-0 min-[651px]:mx-0">
                <a
                  href="https://www.totalwar.com/games/troy/amazons/"
                  className="uppercase hover:underline underline-offset-2 decoration-2"
                >
                  Amazons
                </a>
              </li>
              <li className="mx-auto py-4 w-fit border-t-[3px] border-black leading-[0.9rem] opacity-60 [651px]:mx-0 min-[651px]:py-0 min-[651px]:px-4 min-[651px]:border-l-2 min-[651px]:border-t-0 min-[651px]:mx-0">
                <a
                  href="https://www.totalwar.com/games/troy/troy-mythos-dlc/"
                  className="uppercase hover:underline underline-offset-2 decoration-2"
                >
                  Mythos
                </a>
              </li>
              <li className="mx-auto py-4 w-fit border-t-[3px] border-black leading-[0.9rem] opacity-60 [651px]:mx-0 min-[651px]:py-0 min-[651px]:px-4 min-[651px]:border-l-2 min-[651px]:border-t-0 min-[651px]:mx-0">
                <a
                  href="https://totalwar.com/games/troy/troy-faq"
                  className="uppercase hover:underline underline-offset-2 decoration-2"
                >
                  FAQ
                </a>
              </li>
              <li className="mx-auto py-4 w-fit border-t-[3px] border-black leading-[0.9rem] opacity-60 [651px]:mx-0 min-[651px]:py-0 min-[651px]:px-4 min-[651px]:border-l-2 min-[651px]:border-t-0 min-[651px]:mx-0">
                <a
                  target="_blank"
                  href="https://access.totalwar.com/auth/email_register/?source=troy"
                  rel="noreferrer noopener"
                  className="uppercase hover:underline underline-offset-2 decoration-2"
                >
                  <strong>Sign Up</strong>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h1 className="mx-auto mb-[30px] px-[30px] text-center text-[39px] leading-[48px] font-asul font-bold tracking-wider">
          THE TRUTH BEHIND THE MYTH
        </h1>
        <div
          style={{ height: '20px', marginBottom: '30px', lineHeight: '30px' }}
          aria-hidden="true"
        ></div>
        <div className="flex flex-col gap-[2em] px-[30px] max-w-[940px] mx-auto mb-[30px] font-roboto text-[18px] leading-[30px] min-[1260px]:px-0 md:flex-row">
          <div className="grow basis-full">
            <p className="mb-2.5 text-lg leading-[26px] tracking-[-0.25px] font-light">
              A new Total War Saga game: TROY is the first entry in the
              award-winning series to focus on the legendary 20-year conflict
              between the kingdoms of Troy and Mycenaean Greece, now known as
              the Trojan War, set against the striking backdrop of the Bronze
              Age Mediterranean.
            </p>
            <p className="mb-2.5 text-lg leading-[26px] tracking-[-0.25px] font-light">
              Combining Total War’s unique blend of grand, turn-based empire
              management and spectacular real-time battles, TROY explores this
              epic conflict from both the Greek and Trojan perspectives –
              peeling back the layers of myth and legend to reveal the realities
              that may have inspired them.
            </p>
            <p className="mb-2.5 text-lg leading-[26px] tracking-[-0.25px] font-light">
              Play as one of eight famed Heroes, and more in the DLC, and fight
              to conquer or protect the legendary kingdom of Troy.
            </p>
          </div>

          <div className="grow basis-full">
            <iframe
              className="aspect-[auto_16/9] w-full h-auto"
              loading="lazy"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/4ZR3DGFwehw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="flex justify-center">
              <div className="text-[1.125em] tracking-[0.2em] leading-[30px]">
                <a
                  target="_blank"
                  href="https://www.youtube.com/playlist?list=PL7l8yJHLU_BHZFuXqlqJEtB2tQC5We-hv"
                  rel="noreferrer noopener"
                  className="inline-block min-w-[256px] bg-[#B5773D] hover:underline decoration-2 text-center uppercase block-button"
                >
                  View all
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ height: '75px', marginBottom: '30px', lineHeight: '30px' }}
          aria-hidden="true"
        ></div>
        <div className="mx-auto mb-[30px] max-w-[1200px]">
          <h1 className="mx-auto mb-[30px] px-[30px] text-center text-[39px] leading-[48px] font-asul font-bold tracking-wider">
            FIGHT MONSTERS WITH MONSTERS!
          </h1>
          <div className="px-[30px] min-[1261px]:px-0">
            <div className="flex flex-col relative">
              <figure className="inline-block min-[880px]:w-4/5">
                <a href="https://store.troy.totalwar.com/?utm_source=Mythos&utm_medium=Website&utm_campaign=Launch&utm_content=Pre_order_now">
                  <img
                    loading="lazy"
                    src="https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2021/07/21154843/new-cerberus-1024x576.jpg"
                    alt=""
                    className="h-auto max-w-[unset] w-full align-middle animationCerberus"
                  />
                </a>
              </figure>
              <div className="flex flex-col justify-center top-0 right-0 text-[18px] font-roboto min-[880px]:absolute min-[880px]:w-1/2 min-[880px]:h-full">
                <figure>
                  <blockquote>
                    <p className="p-4 bg-[#7D3A1E] tracking-[0.2em] text-[1.2rem] text-center leading-[26px]">
                      THREE MYTHIC CREATURES
                    </p>
                    <cite className="block bg-white text-black text-[1rem] leading-[30px] font-normal p-10 not-italic">
                      The battle for troy rages ever on! The Mythos DLC and free
                      update adds two nre game modes, including mythological
                      mode, which introduces beasts of legend to hunt, capture,
                      and fight with.
                    </cite>
                  </blockquote>
                </figure>
                <div className="flex justify-center">
                  <div className="text-[1.125em] tracking-[0.2em] leading-[30px]">
                    <a
                      target="_blank"
                      href="https://www.youtube.com/playlist?list=PL7l8yJHLU_BHZFuXqlqJEtB2tQC5We-hv"
                      rel="noreferrer noopener"
                      className="inline-block min-w-[256px] bg-[#B5773D] hover:underline decoration-2 text-center uppercase block-button"
                    >
                      Buy now
                    </a>
                  </div>
                </div>
                <p style={{ height: '25px' }} arial-hidden="true"></p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ height: '20px', margin: '0 auto 30px', maxWidth: '940px' }}
          arial-hidden="true"
        ></div>
        <a id="heroes" className="px-[30px] h-[21.6px]"></a>
        <div className="flex flex-wrap items-center mx-auto mb-[30px] px-[30px] max-w-[940px] min-[1261px]:px-0">
          <figure className="mx-auto my-4 max-w-[940px]">
            <blockquote>
              <p className="p-4 bg-[#7D3A1E] tracking-[0.2em] text-[1.2rem] text-center leading-[26px]">
                BEHOLD: THE HEROES OF TROY!
              </p>
              <cite className="block p-10  bg-white text-black text-[1rem] leading-[30px] font-normal not-italic">
                Every hero is equipped with special abilities, weapons, units
                and strategic positions on the map. Find out what these are and
                learn much more about our legendary line-up here.
              </cite>
            </blockquote>
          </figure>
        </div>
        <div className="flex flex-wrap mx-auto mb-[30px] px-[30px] max-w-[940px] min-[1261px]:px-0">
          <div className="flex flex-wrap text-[18px] gap-[2em] min-[780px]:flex-nowrap">
            <div className="relative basis-full">
              <figure>
                <a href="https://www.totalwar.com/games/troy/achilles/">
                  <img
                    className="w-full heroe-visibility heroe-hidden"
                    loading="lazy"
                    src="https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2020/06/01181147/Achilles_nav.jpg"
                    alt=""
                    data-heroe
                  />
                </a>
                <figcaption className="font-asul text-[#97743A] text-center uppercase">
                  <a href="https://www.totalwar.com/games/troy/achilles/">
                    Achilles
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="relative basis-full">
              <figure>
                <a href="https://totalwar.com/games/troy/hector">
                  <img
                    className="w-full heroe-visibility heroe-hidden"
                    loading="lazy"
                    src="https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2020/06/01180437/Hector_nav.jpg"
                    alt=""
                    data-heroe
                  />
                </a>
                <figcaption className="font-asul text-[#97743A] text-center uppercase">
                  <a href="https://totalwar.com/games/troy/hector">Hector</a>
                </figcaption>
              </figure>
            </div>

            <div className="basis-full">
              <figure>
                <a href="https://www.totalwar.com/games/troy/menelaus/">
                  <img
                    className="w-full heroe-visibility heroe-hidden"
                    loading="lazy"
                    src="https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2020/06/22142637/Menelaus_285x285.jpg"
                    alt=""
                    data-heroe
                  />
                </a>
                <figcaption className="font-asul text-[#97743A] text-center uppercase">
                  <a href="https://www.totalwar.com/games/troy/menelaus/">
                    Menelao
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="basis-full">
              <figure>
                <a href="https://www.totalwar.com/games/troy/paris/">
                  <img
                    className="w-full heroe-visibility heroe-hidden"
                    loading="lazy"
                    src="https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2020/06/22161446/Paris_285x285.jpg"
                    alt=""
                    data-heroe
                  />
                </a>
                <figcaption className="font-asul text-[#97743A] text-center uppercase">
                  <a href="https://www.totalwar.com/games/troy/paris/">Paris</a>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="flex flex-wrap text-[18px] gap-[2em] min-[780px]:flex-nowrap">
            <div className="basis-full">
              <figure>
                <a href="https://www.totalwar.com/games/troy/agamemnon/">
                  <img
                    className="w-full heroe-visibility heroe-hidden"
                    loading="lazy"
                    src="https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2020/06/23103706/Agamemnon_285x285.jpg"
                    alt=""
                    data-heroe
                  />
                </a>
                <figcaption className="font-asul text-[#97743A] text-center uppercase">
                  <a href="https://www.totalwar.com/games/troy/agamemnon/">
                    Agamemnon
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="basis-full">
              <figure>
                <a href="https://www.totalwar.com/games/troy/sarpedon/">
                  <img
                    className="w-full heroe-visibility heroe-hidden"
                    loading="lazy"
                    src="https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2020/06/23103826/Sarpedon_285x285.jpg"
                    alt=""
                    data-heroe
                  />
                </a>
                <figcaption className="font-asul text-[#97743A] text-center uppercase">
                  <a href="https://www.totalwar.com/games/troy/sarpedon/">
                    Sarpedon
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="basis-full">
              <figure>
                <a href="https://www.totalwar.com/games/troy/odysseus/">
                  <img
                    className="w-full heroe-visibility heroe-hidden"
                    loading="lazy"
                    src="https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2020/06/23103747/Odysseus_285x285.jpg"
                    alt=""
                    data-heroe
                  />
                </a>
                <figcaption className="font-asul text-[#97743A] text-center uppercase">
                  <a href="https://www.totalwar.com/games/troy/odysseus/">
                    Odysseus
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="basis-full">
              <figure>
                <a href="https://www.totalwar.com/games/troy/aeneas/">
                  <img
                    className="w-full heroe-visibility heroe-hidden"
                    loading="lazy"
                    src="https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2020/06/23103626/Aeneas_285x285.jpg"
                    alt=""
                    data-heroe
                  />
                </a>
                <figcaption className="font-asul text-[#97743A] text-center uppercase">
                  <a href="https://www.totalwar.com/games/troy/aeneas/">
                    Aeneas
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="flex flex-wrap text-[18px] gap-[2em] min-[780px]:flex-nowrap">
            <div className="basis-full">
              <figure>
                <a href="https://www.totalwar.com/games/troy/ajax/">
                  <img
                    className="w-full heroe-visibility heroe-hidden"
                    loading="lazy"
                    src="https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2021/01/25101555/AJAX_Profile_Image_270x270_FINAL.jpg"
                    alt=""
                    data-heroe
                  />
                </a>
                <figcaption className="font-asul text-[#97743A] text-center uppercase">
                  <a href="https://www.totalwar.com/games/troy/ajax/">Ajax</a>
                </figcaption>
              </figure>
            </div>

            <div className="basis-full">
              <figure>
                <a href="https://www.totalwar.com/games/troy/diomedes/">
                  <img
                    className="w-full heroe-visibility heroe-hidden"
                    loading="lazy"
                    src="https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2021/01/25101629/DIOMEDES_Profile_Image_270x270_FINAL.jpg"
                    alt=""
                    data-heroe
                  />
                </a>
                <figcaption className="font-asul text-[#97743A] text-center uppercase">
                  <a href="https://www.totalwar.com/games/troy/diomedes/">
                    Diomedes
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="basis-full">
              <figure>
                <a href="https://www.totalwar.com/games/troy/hippolyta/">
                  <img
                    className="w-full heroe-visibility heroe-hidden"
                    loading="lazy"
                    src="https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2020/10/05113406/Hyppolita-1x1-1-1024x1024.jpg"
                    alt=""
                    data-heroe
                  />
                </a>
                <figcaption className="font-asul text-[#97743A] text-center uppercase">
                  <a href="https://www.totalwar.com/games/troy/hippolyta/">
                    Hippolyta
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className="basis-full">
              <figure>
                <a href="https://www.totalwar.com/games/troy/penthesilea/">
                  <img
                    className="w-full heroe-visibility heroe-hidden"
                    loading="lazy"
                    src="https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2020/10/05113555/Penthesilea-1x1-1-1024x1024.jpg"
                    alt=""
                    data-heroe
                  />
                </a>
                <figcaption className="font-asul text-[#97743A] text-center uppercase">
                  <a href="https://www.totalwar.com/games/troy/penthesilea/">
                    Penthesilea
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div
          style={{ margin: '0 auto 30px', height: '20px', maxWidth: '940px' }}
          arial-hidden="true"
        ></div>
        <div
          style={{ margin: '0 auto 30px', height: '20px', maxWidth: '940px' }}
          arial-hidden="true"
        ></div>
        <div className="mb-5 mx-auto px-[30px] max-w-[940px]">
          <figure className="mx-auto w-fit">
            <a href="#top">
              <img
                width="236"
                height="59"
                src="https://content.totalwar.com/total-war/com.totalwar.www2019/uploads/2020/10/14102256/Back-to-Top-Flat-Colour.png"
                alt=""
                className="w-[236px] h-auto max-w-full align-bottom aspect-[auto_236/59]"
              />
            </a>
          </figure>
        </div>
        <div
          style={{ margin: '0 auto 30px', height: '30px', maxWidth: '940px' }}
          arial-hidden="true"
        ></div>
      </div>
      <Footer />
    </>
  )
}

export default App
