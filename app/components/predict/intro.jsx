export default function Intro() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Judul tetap di tengah */}
        <h1 className="text-3xl md:text-4xl font-medium mt-20">
          Tomato Leaf Disease Classifier
        </h1>

        {/* Wrapper gambar + teks */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-10">

          {/* Gambar di kiri */}
          <img
            src="/tomato-leaf.JPG"
            alt="Example Tomato Leaf"
            className="
            w-36 h-36 object-cover rounded-2xl shadow-lg
            transition duration-300 ease-out
            hover:scale-105 hover:shadow-2xl
            "
          />

          {/* Teks di kanan gambar */}
          <p className="text-lg text-pretty text-left md:w-1/2">
            Upload an image of a tomato leaf and let our AI model analyze it.
            Get instant predictions with high accuracy to help you diagnose
            plant health more effectively.
          </p>

        </div>
      </div>
    </section>
  );
}
