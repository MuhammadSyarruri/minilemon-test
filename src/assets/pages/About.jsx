export default function AboutPage() {
  return (
    <section className="relative h-screen w-screen flex justify-center items-center flex-col bg-[#FFC14D]">
      <div className="w-full lg:w-200">
        <p className="text-center mx-3 sm:text-xl lg:text-2xl">
          Kami percaya setiap buku punya cerita dan makna tersendiri. Karena
          itu, kami hadir untuk membawakan koleksi buku pilihan langsung ke
          tanganmu dengan cara yang mudah dan menyenangkan.
        </p>
        <p className="text-center mx-3 mt-2 sm:text-xl lg:text-2xl">
          Kami selalu berusaha agar menghadirkan pilihan terbaik agar kamu bisa
          menemukan buku favoritmu.
        </p>
      </div>
      <div>
        <p className="text-center mt-10 font-bold">
          Butuh bantuan atau punya pertanyaan?
        </p>
        <div className="flex justify-center mt-2 gap-5">
          <a
            href="mailto:muhammadsyarruri@gmail.com"
            className="bg-white w-25 py-3 rounded-4xl border-2 text-center"
          >
            Email
          </a>
          <a
            href="https://wa.me/6281272484363"
            target="_blank"
            className="bg-lime-400 text-white w-25 py-3 rounded-4xl border-2 border-black text-center"
          >
            Whatsapp
          </a>
        </div>
      </div>

      <img
        src="/img/book-3.png"
        alt="float-book"
        className="hidden lg:block w-30 top-100 absolute 2xl:w-50 2xl:top-50 lg:left-20 left-20 animate-float animation-delay-0"
      />
      <img
        src="/img/book-4.png"
        alt="float-book"
        className="hidden lg:block w-40 top-120 absolute 2xl:w-80 2xl:top-100 right-10 animate-float animation-delay-750"
      />
    </section>
  );
}
