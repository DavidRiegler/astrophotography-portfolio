export default function Footer() {
    return (
      <footer className="bg-black py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} David Riegler. All rights reserved.</p>
          <div className="mt-4">
            <a href="https://www.instagram.com/daves_astrophotography/" className="text-blue-400 hover:text-blue-300 mx-2">Instagram</a>
            <a href="https://www.astrobin.com/users/Anakonda06/" className="text-blue-400 hover:text-blue-300 mx-2">Astrobin</a>
          </div>
        </div>
      </footer>
    )
  }