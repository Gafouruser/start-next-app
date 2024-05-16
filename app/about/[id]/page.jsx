import Link from 'next/link'

const DynamicPage = ({params}) => {
  return (
    <div>
      <h1 className="text-4xl">This is about page with ID : {params.id}</h1>

      <Link href="/">Home page</Link>

      <Link href="/about">About page</Link>

      <Link href="/about/faq">Faq page</Link>
    </div>
  );
};

export default DynamicPage