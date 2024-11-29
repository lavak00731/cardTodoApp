import { Navbar } from "../components/Navbar";

export const Categories = () => {
  return (
    <>
      <header className="container mx-auto">
        <Navbar />
      </header>
      <main aria-labelledby="h1" className="container mx-auto">
        <h1 id="h1" className="text-6xl mb-7 mt-7">Categories</h1>
      </main>
    </>    
  )
}
