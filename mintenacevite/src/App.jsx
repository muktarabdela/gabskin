import Logo from "../public/logo.png"
import fb from "../public/facebook.png"
import yt from "../public/youtube.png"
import ig from "../public/instagram.png"
import tg from "../public/telegram.png"
import google from "../public/search.png"
function App() {
  return (
    <>
      <section className="relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full flex-col justify-center items-center lg:gap-14 gap-10 inline-flex">
            <div className=" justify-center items-centerflex">
              <img src={Logo} width={150} height={100} alt="logo" />
              <h1 className="text-center text-white text-3xl font-bold font-manrope leading-normal">
                Gabiskin
              </h1>
            </div>
            <div className="w-full flex-col justify-center items-center gap-5 flex">
              <div className="w-full flex-col justify-center items-center gap-6 flex">
                <div className="w-full flex-col justify-start items-center gap-2.5 flex">
                  <h2 className="text-center text-white text-3xl font-bold font-manrope leading-normal">
                    Please bear with us! We're currently under maintenance.
                  </h2>
                  <p className="text-center text-gray-200 text-base font-normal leading-relaxed">
                    It's going to take some time to fix the error. We'll be back
                    online soon.
                  </p>
                </div>
                <div className="flex items-start justify-center w-full gap-1 count-down-main">
                  <div className="timer">
                    <div className="">
                      <h3 className="countdown-element days text-center text-black text-3xl font-normal font-manrope leading-normal" />
                    </div>
                  </div>
                  <h3 className="text-center text-black text-3xl font-normal font-manrope leading-normal">
                    :
                  </h3>
                  <div className="timer">
                    <div className="">
                      <h3 className="countdown-element hours text-center text-black text-3xl font-normal font-manrope leading-normal" />
                    </div>
                  </div>
                  <h3 className="text-center text-black text-3xl font-normal font-manrope leading-normal">
                    :
                  </h3>
                  <div className="timer">
                    <div className="">
                      <h3 className="countdown-element minutes text-center text-black text-3xl font-normal font-manrope leading-normal" />
                    </div>
                  </div>
                  <h3 className="text-center text-black text-3xl font-normal font-manrope leading-normal">
                    :
                  </h3>
                  <div className="timer">
                    <div className="">
                      <h3 className="countdown-element seconds text-center text-black text-3xl font-normal font-manrope leading-normal" />
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="https://pagedone.io/asset/uploads/1718004199.png"
                alt="under maintenance image"
              />
            </div>
            <div
              class="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-blue-gray-50 md:flex-row md:justify-between">
              <p
                class="block mb-4 font-sans text-sm antialiased font-normal leading-normal text-center text-blue-gray-900 md:mb-0">
                to order stickers{" "}
                you can contact us at
              </p>
              <div class="flex gap-4 text-blue-gray-900 sm:justify-center">
                <a
                  href="http://t.me/gabiskin"
                  target="_blank"
                  class="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100">
                  <img src={tg} width={20} height={20} alt="telegram" />
                </a>
                <a href="http://m.facebook.com/gabiskin1"
                  target="_blank"
                  class="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100">
                  <img src={fb} width={20} height={20} alt="facebook" />
                </a>
                <a
                  href="https://youtube.com/@gabiskin_?si=OKwEAlr-AWUkGtS0"
                  target="_blank"
                  class="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100">
                  <img src={yt} width={20} height={20} alt="youtube" />
                </a>
                <a
                  href="http://instagram.com/gabiskin_"
                  target="_blank"
                  class="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100">
                  <img src={ig} width={20} height={20} alt="instagram" />
                </a>
                <a
                  href="https://g.page/r/CfSOeFFiE4QSEAI/review"
                  target="_blank"
                  class="block font-sans text-base antialiased font-light leading-relaxed transition-opacity text-inherit opacity-80 hover:opacity-100">
                  <img src={google} width={20} height={20} alt="whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>

  );
}

export default App