const testimonials = [
  {
    name: "Nat Reynolds",
    role: "PDG",
    image: "/chargeScientifique.jpg",
    text: "Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin.",
    color: "text-gray-800",
  },
  {
    name: "Céla Almeda",
    role: "Secrétaire",
    image: "/chargeScientifique.jpg",
    text: "Pharetra vel turpis nunc eget lorem. Quisque id diam vel quam elementum pulvinar etiam. Urna porttitor rhoncus dolor non enim praesent elementum.",
    color: "text-emerald-600",
  },
  {
    name: "Bob Roberts",
    role: "Directeur commercial",
    image: "/chargeScientifique.jpg",
    text: "Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin. Nibh nisl dictumst vestibulum rhoncus est pellentesque elit.",
    color: "text-green-600",
  },
  {
    name: "Mattie Smith",
    role: "Comptable-auditeur",
    image: "/chargeScientifique.jpg",
    text: "Nisl condimentum id venenatis a gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin. Nibh nisl condimentum id venenatis a condimentum.",
    color: "text-green-600",
  },
];

export default function Home() {
  return (
    <div className="w-screen">
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="uppercase tracking-widest text-gray-600 text-sm font-semibold">
          Témoignages
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mt-2">
          Bureau Executif de la Cesam
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Nous accordons une grande importance aux relations solides et avons vu
          les avantages qu&apos;elles apportent à notre entreprise.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 sm:mx-40  md:grid-cols-2 gap-6 mt-10 md:ml-110">
          <div className="bg-gray-50 rounded-xl p-6  hover:bg-white shadow-sm ">
            <div className="flex justify-center  ">
              <div className="flex justify-center rounded-full w-40 h-40 bg-blue-400 md:w-50 md:h-50">
                <img
                  src="chargeScientifique.jpg"
                  alt="president"
                  width={80}
                  height={80}
                  className="rounded-full w-full h-70 text-primary"
                  style={{
                    width: "100%", // Responsive
                    height: "auto",
                    borderRadius: "100%",
                    overflow: "hidden",
                    // Maintient l'aspect ratio
                  }}
                />
              </div>
            </div>
            <p className="text-gray-700 mt-4 text-sm">❝ {} ❞</p>
            <h4 className={`mt-4 font-bold $`}>{}</h4>
            <p className="text-sm text-gray-500">{}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="flex justify-center">
                <div className="flex justify-center rounded-full w-40 h-30 md:h-50   ">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full w-full h-60 text-primary"
                    style={{
                      width: "100%", // Responsive
                      height: "auto",
                      borderRadius: "100%",
                      overflow: "hidden", // Maintient l'aspect ratio
                    }}
                  />
                </div>
              </div>
              <p className="text-gray-700 mt-4 text-sm">
                ❝ {testimonial.text} ❞
              </p>
              <h4 className={`mt-4 font-bold ${testimonial.color}`}>
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
    </div>
  );
}
