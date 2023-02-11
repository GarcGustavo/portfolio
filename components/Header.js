import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-6">
      <Link href="/">
        <a>
        <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4"/>
        <div className="container text-1xl dark:text-white text-left">
            <h1>Gustavo Reyes</h1>
            <p>Software Engineer</p>
            <p>Contact: greyescarrion@gmail.com</p>
            <br/>
          </div>
        </a>
      </Link>
    </header>
  );
}
