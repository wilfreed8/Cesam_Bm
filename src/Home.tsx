import { AnimatedListDemo } from "./components/animatedListDemo";

const sg =
{
  name: "ZONGO ROLAND",
  role: "Secretaire General",
  image: "/sg.jpg",
  text: " Archiver notre passé, enrichir notre présent,inpirer notre futur",
  color: "text-gray-800",
}

const BureauExecutifs = [

  {
    name: "NDILINODJI MARIUS",
    role: "Secretaire General Adjoint",
    image: "/sgAdjoint.jpg",
    text: "N'ayons pas peur de perdre des gens, mais plutôt ayons peur de perdre du temps avec ceux qui  nous apportent rien,le jour nous guerirons. ",
    color: "text-info",
  },
  {
    name: "OURO-AGORO YASMINE",
    role: "chargée a la Communication",
    image: "/communication.jpg",
    text: "They tried to bury us.They didn't know we were seeds ",
    color: "text-info",
  },
  {
    name: "AFFODO JEREMIE",
    role: "Charge sportif",
    image: "/sportif.jpg",
    text: "Ce n'est pas parceque la vie est bonne qu'il faut l aimer;c'est en l'aimant qu'elle devient bonne ",
    color: "text-info",
  },
  {
    name: "ATREVY ARMOREL",
    role: "Charge Culturelle",
    image: "/culturel.jpg",
    text: " Entre ombre et lumiere , je trace ma propre voie",
    color: "text-info",
  }, {
    name: "MAHAMADOU SAGARA",
    role: "Charger Scientifique",
    image: "/scientifique.jpg",
    text: "Lire,c'est boire et manger.l'esprit qui ne lit pas maigrit comme le corps qui ne mange pas ",
    color: "text-info",
  },
];

export default function Home() {
  return (
    <div className="w-screen h-full">
    <section className=" pb-5 px-4">
        <div className="max-w-6xl mx-auto text-center">
        <AnimatedListDemo/>
        <div className="grid grid-cols-1 sm:grid-cols-1  shadow-lg shadow-gray-300 rounded-lg sm:mx-40  md:grid-cols-1  mt-10 md:w-100 md:ml-96">
          <div className="bg-white rounded-xl p-6  hover:bg-slate-50 shadow-sm ">
            <div className="flex justify-center  ">
              <div className="flex justify-center rounded-full w-40 h-40  md:w-50 md:h-50">
                <img
                  src={sg.image}
                  alt={sg.name}
                  width={80}
                  height={80}
                  className="rounded-full w-full h-auto"
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
            <p className="text-gray-700 mt-4 text-sm">❝ {sg.text} ❞</p>
            <h4 className={`mt-4 font-bold text-blue-800 $`}>{sg.name}</h4>
            <p className="text-sm font-bold text-gray-700">{sg.role}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {BureauExecutifs.map((testimonial, index) => (
            <div
              key={index}
              className=" hover:bg-gray-50 shadow-lg shadow-gray-300 z-1 rounded-xl p-6 "
            >
              <div className="flex justify-center">
                <div className="flex justify-center rounded-full w-40 h-40 md:h-50 md:w-50  ">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full w-full h-auto text-primary"
                    style={{
                      width: "100%", // Responsive
                      height: "auto",
                      borderRadius: "100%",
                      overflow: "hidden", // Maintient l'aspect ratio
                    }}
                  />
                </div>
              </div>
              <p className="text-gray-700 mt-4 text-sm ">
                ❝ {testimonial.text} ❞
              </p>
              <h4 className={`mt-4 font-bold ${testimonial.color}`}>
                {testimonial.name}
              </h4>
              <p className="text-sm font-bold text-gray-700">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
