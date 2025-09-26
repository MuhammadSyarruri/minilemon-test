import { useState, useEffect } from "react";

export default function ProductPage() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const url = `https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1/book?page=${page}&keyword=${search}`;
        const res = await fetch(url);
        const data = await res.json();

        setBooks(data.books || []);
      } catch (err) {
        console.error("Gagal memuat data buku:", err);
        setBooks([]);
      }
    };

    fetchBooks();
  }, [page, search]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target[0].value);
    setPage(1);
  };

  return (
    <section className="p-6 bg-[#FFC14D]">
      <h1 className="text-3xl font-bold mb-4 text-center">Daftar Buku</h1>

      <form onSubmit={handleSearch} className="mb-6 flex gap-2 justify-center">
        <input
          type="text"
          placeholder="Cari judul buku..."
          className="border px-3 py-2 rounded w-2xl bg-white"
        />
        <button
          type="submit"
          className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-black cursor-pointer"
        >
          Cari
        </button>
      </form>

      {books.length > 0 ? (
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((book) => {
            return (
              <div
                key={book._id}
                className="flex gap-3 border p-4 rounded shadow w-full max-w-110 h-60 xl:h-80 bg-white"
              >
                <div className="bg-gray-100">
                  <img
                    src={book.cover_image}
                    alt="cover"
                    className="min-w-35 xl:min-w-50 h-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg line-clamp-3">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {book.author.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {book.details.published_date}
                  </p>
                  <p>{book.details.price}</p>
                  <button className="bg-indigo-700 text-white py-1 px-3 rounded-md mt-2 hover:bg-black cursor-pointer">
                    <a href={book.buy_links[0].url} target="_blank">
                      Beli
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500">Tidak ada buku ditemukan.</p>
      )}

      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
        >
          Prev
        </button>
        <span>Halaman {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-200 rounded cursor-pointer"
        >
          Next
        </button>
      </div>
    </section>
  );
}
