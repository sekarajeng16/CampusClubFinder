// src/pages/About.jsx

function About() {
  return (
    <section className="min-h-screen py-20 px-6 md:px-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">About Campus Club Finder</h2>
        <p className="text-lg text-gray-700 mb-6">
          Campus Club Finder is a platform designed to help students discover, explore, and join various student clubs on campus. 
          Whether you're into sports, arts, or technology, our app makes it easy to find the right club for you.
        </p>
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tech Stack</h3>
          <ul className="text-gray-700 text-base list-disc list-inside space-y-2 text-left max-w-md mx-auto">
            <li><strong>React</strong> – For building a fast, responsive, and component-based user interface</li>
            <li><strong>React Router</strong> – For managing navigation in the single-page application</li>
            <li><strong>Tailwind CSS</strong> – For fast and flexible styling using utility-first CSS</li>
            <li><strong>Vite</strong> – For blazing-fast development and build tooling</li>
          </ul>
        </div>
      </div>
    </section>

  )
}

export default About
