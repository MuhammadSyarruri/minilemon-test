export default function HomePage() {
  return (
    <section className="relative w-screen min-h-screen flex flex-col items-center justify-center text-center bg-[#FFC14D] pt-55 overflow-hidden">
      <div className="max-w-5xl mx-5">
        <h1 className="text-3xl md:text-4xl lg:text-6xl  font-extrabold text-white leading-tight drop-shadow-lg">
          Temukan Buku Favoritmu dan Biarkan Setiap Halaman Membawa Cerita Baru
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white">
          Koleksi buku terbaru dan terlengkap untuk menemani setiap perjalanan
          pengetahuanmu.
        </p>
        <button className="mt-8 px-10 py-4 bg-white text-indigo-700 font-bold rounded-full shadow-lg hover:bg-indigo-100 hover:scale-105 transition duration-300">
          Lihat Koleksi
        </button>
      </div>

      <Summary />

      <img src="/img/3d-books-2.png" alt="books" className="w-4xl mt-10" />

      <img
        src="/img/book-1.png"
        alt="float-book"
        className="hidden lg:block w-30 absolute 2xl:w-50 top-130 lg:left-10 left-20 animate-float animation-delay-0"
      />
      <img
        src="/img/book-2.png"
        alt="float-book"
        className="hidden lg:block w-40 absolute 2xl:w-60 top-150 right-20 animate-float animation-delay-750"
      />
    </section>
  );
}

function Summary() {
  const sums = [
    {
      title: "Banyak Pilihan",
      text: "Dari novel, komik, buku pelajaran, hingga nonfiksi, semua ada disini.",
    },
    {
      title: "Cari Lebih Mudah",
      text: "Tinggal ketik judul, penulis, atau kategori, langsung ketemu.",
    },
    {
      title: "Selalu Update",
      text: "Koleksi terus bertambah biar kamu nggak ketinggalan buku terbaru.",
    },
    {
      title: "Praktis & Cepat",
      text: "Pesan online, buku langsung sampai ke rumahmu.",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 mt-50 mb-10">
      {sums.map((sum, index) => {
        return (
          <div
            key={index}
            className="max-w-40 flex flex-col gap-2 bg-white leading-tight py-10 rounded-xl"
          >
            <p className="font-extrabold text-xl md:text-2xl">{sum.title}</p>
            <p>{sum.text}</p>
          </div>
        );
      })}
    </div>
  );
}
