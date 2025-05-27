const Logo = () => {
  return (
    <div
      className="flex flex-row  bg-white items-center text-center justify-between  bg-transaprent gap-1 "
      data-theme="cmyk"
    >
      <img
        src="public/images/cesam.jpg" // Mets le bon chemin ici
        alt="logocesam"
        width={24}
        height={24}
        className="w-6 h-6 md:w-8 md:h-8 text-primary "
      />
      <h1
        className=" text-lg flex md:text-3xl font-bold  first-letter:text-2xl    bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1671a3, #e63946, #f1c40f, #2ecc71,#1671a3)",
        }}
      >
        Cesam
      </h1>
    </div>
  );
};

export default Logo;
