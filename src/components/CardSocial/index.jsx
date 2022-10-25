import FB from '../FB'
import IG from '../IG'
import Twitter from '../Twitter'

function CardSocial() {
  return (
    <div className="mx-auto">
      <div className="ml-[0.8rem] mt-8 h-[42px] text-center text-[18px] leading-[30px] md:basis-0 md:grow md:max-w-full min-[992px]:text-right min-[992px]:mt-0 max-[992px]:ml-0 max-[992px]:w-full">
        <FB styles="text-right h-[42px] w-[42px] ml-[0.8rem]" />
        <Twitter styles="text-right h-[42px] w-[42px] ml-[0.8rem]" />
        <IG styles="text-right h-[42px] w-[42px] ml-[0.8rem]" />
      </div>
    </div>
  )
}

export default CardSocial
