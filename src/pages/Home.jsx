import HomePicture from '../assets/img/home.jpg';

function Home() {
  return (

    <div className='px-10'>
      <div className='min-h-screen flex items-center'>
        <div className='w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:px-20'>
          <div className='flex-1 md:text-left text-center'>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
                Welcome to Campus Club Finder!
              </h1>
              <p className="text-gray-700 text-lg mb-8 max-w-md mx-auto md:mx-0">
                Discover exciting student clubs to join and connect with.
              </p>
              <a
                href="/clubs"
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-blue-600 transition"
              >
                Explore Clubs
              </a>
          </div>

          <div className='flex-1 max-w-lg w-full'>
            <img src={HomePicture} alt="CampusClubs" className='w-full h-full' />
          </div>
        </div>
      </div>
      
      <div className='min-h-screen'>
        <h1 className='text-center text-4xl md:text-5xl font-extrabold text-gray-800'>Discover Our Club Categories</h1>
        <h3 className='text-center text-lg md:text-2xl font-medium mt-5'>Here are three popular categories which one fits you best?</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
          <div className='flex flex-col items-center justify-center text-center bg-white rounded shadow p-5 h-96 hover:shadow-lg transition-all'>
            <svg xmlns="http://www.w3.org/2000/svg" className='' width={48} height={48} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="m15 9l-6 6m1-3l2 2m0-4l2 2m-6 9a5 5 0 0 0-5-5"></path><path d="M16 3C8.82 3 3 8.82 3 16a5 5 0 0 0 5 5c7.18 0 13-5.82 13-13a5 5 0 0 0-5-5"></path><path d="M16 3a5 5 0 0 0 5 5"></path></g></svg>
            <h4 className='text-lg font-extrabold mt-5'>Sports</h4>
            <p>Stay active and energized while having fun! From futsal and basketball to yoga and running clubs — there's something for every athlete.</p>
          </div>

          <div className='flex flex-col items-center justify-center text-center bg-white rounded shadow p-5 h-96 hover:shadow-lg transition-all'>
            <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M4 11.319c0 3.102.444 5.319 2.222 7.978c1.351 1.797 3.156 2.247 5.08.988c.426-.268.97-.268 1.397 0c1.923 1.26 3.728.809 5.079-.988C19.556 16.637 20 14.421 20 11.32C20 8.659 18.01 6 15.556 6c-1.267 0-2.41.693-3.22 1.44a.5.5 0 0 1-.672 0C10.855 6.694 9.711 6 8.444 6C5.99 6 4 8.66 4 11.319"></path><path d="M7 12c0-1.47.454-2.34 1.5-3M12 7c0-1.2.867-4 3-4"></path></g></svg>
            <h4 className='text-lg font-extrabold mt-5'>Arts & Culture</h4>
            <p>Express your creativity through music, dance, theater, or visual arts. Collaborate with fellow campus creatives and let your talent shine!</p>
          </div>

          <div className='flex flex-col items-center justify-center text-center bg-white rounded shadow p-5 h-96 hover:shadow-lg transition-all'>
            <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm6-4v2m-3 8v9m6-9v9M5 16l4-2m6 0l4 2M9 18h6M10 8v.01M14 8v.01"></path></svg>
            <h4 className='text-lg font-extrabold mt-5'>Technology</h4>
            <p>Dive into the world of coding, robotics, and digital trends. Join tech-driven communities that love building, hacking, and solving problems together.  </p>
          </div>
        </div>
      </div>

      <div className='min-h-screen'>
        <h1 className='text-center text-4xl md:text-5xl font-extrabold text-gray-800'>About Us</h1>
        <div className='flex justify-center items-center'>
          <img src="/img/home/about-us.png" className='h-96 lg:h-128' alt="About Us" />
        </div>
        <p className="text-center text-gray-700 text-lg mb-6">
            Campus Club Finder is your go-to platform to discover, explore, and join student clubs that match your passions and goals. We help students connect with like-minded individuals and enrich their campus life through active participation in club activities.
          </p>
      </div>

    </div>
  );
}

export default Home;
