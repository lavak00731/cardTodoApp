import { Navbar } from "../components/Navbar"

export const Tags = () => {
  return (
    <>
       <header className="container mx-auto">
        <Navbar />
       </header>
       <main aria-labelledby="h1" className="container mx-auto">
        <h1 id="h1" className="text-6xl mb-7 mt-7">Tags</h1>
      </main>
    </>    
  )
}
