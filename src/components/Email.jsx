const Email = () => {
  return (
    <div className="hidden fixed bottom-0 right-0 xl:flex flex-col items-center pr-4">
      <a
        href="mailto:maciejsdev@gmail.com"
        className="text-slate-500 hover:text-emerald-300 duration-300 mb-4"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        maciejsdev@gmail.com
      </a>
      <div className="h-32 border-r-2 border-emerald-300"></div>
    </div>
  );
};

export default Email;
