


export default function Button({ text, onClick } : { text: string, onClick: () => void }) {
  return (
    <button
      className="rounded-md bg-[#4C6162] py-3 px-7 text-base font-medium text-white sm:py-2 sm:px-5 sm:text-sm transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
      onClick={onClick}
    >
      {text}
    </button>
  );
}