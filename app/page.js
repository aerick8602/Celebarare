// app/page.js
import Notepad from './components/Notepad.js';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <nav className="flex justify-center items-center h-20 w-full bg-gray-100">
        <div className="flex flex-row items-center h-full">
          <img
            src="/favicon.ico"
            alt="Favicon"
            className="h-14 w-14 object-contain"
          />
          <img
            src="https://celebrare.in/assets/img/celebrare-logo.webp"
            alt="Logo"
            className="h-16 w-auto object-contain ml-4"
          />
        </div>
      </nav>
      <div className="flex flex-grow justify-center items-center w-[700px] m-1 bg-gray-200 rounded-2xl">
        <Notepad />
      </div>
    </main>
  );
}
