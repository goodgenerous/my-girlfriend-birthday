import AOS from "aos";
import React, { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { Link as ScrollLink } from "react-scroll";
import confetti from "canvas-confetti";


const HeroComponent = () => {
  const handleClick = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

useEffect(() => {
  AOS.init()
}, [])

const [text] = useTypewriter({
  words: ['Nurkhalissa Mahdanie!', 'Sayangku!', 'Calon Istriku!', 'Bubby!'],
  loop: {}
})

return (
  <div className="bg-white min-h-screen">
    <div className="relative isolate px-5 pt-10 lg:px-8 min-h-screen flex justify-center items-center">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#59C173] to-[#a17fe0] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20" data-aos="fade-up">
            Introducing this masterpiece especially for you &#127881;
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" data-aos="fade-up">
            Happy Birthday <br />
            <span style={{ color: "#a17fe0" }}>{text}</span><span><Cursor cursorColor="#a17fe0" /></span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600" data-aos="fade-up">
            Selamat ulang tahun sayangku cintaku Nurkhalissa Mahdanie. Website ini aku buat spesial memperingati hari ulang tahun bubby yang ke-23. Coba discroll sampe abis yah banyak
            hal yang aku kasih liat ke kamu, semoga bubby suka ya! <br/> Klik tombol dibawah ini ya! &#128071;
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <ScrollLink
              onClick={handleClick}
              to="timeline"
              smooth={true}
              duration={500}
              className="transition ease-in-out delay-150 animate-bounce rounded-lg bg-purple px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer flex items-center space-x-2"
            >
              <span>Explore More</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                  />
                </svg>
              </span>
            </ScrollLink>

          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#59C173] to-[#a17fe0] opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  </div>
)
}

export default HeroComponent