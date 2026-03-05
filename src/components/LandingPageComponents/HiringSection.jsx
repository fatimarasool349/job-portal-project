function HiringSection() {
  return (
    <div>
          <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Are You Hiring?</h2>
            <p className="mb-4">Post your job listings and reach millions of qualified candidates today. Let's find your next star hire.</p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">Post a Job for Free</button>
              <button className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-blue-600">Learn More</button>
            </div>
          </div>
          <div className="bg-blue-500 p-6 rounded-lg w-full md:w-1/3">
            <p className="text-white mb-2">Daily Applicants</p>
            <div className="w-full bg-blue-400 h-2 rounded-full">
              <div className="bg-white h-2 rounded-full w-2/3"></div>
            </div>
            <p className="text-white text-sm mt-2">Join 10k+ companies already growing with us.</p>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default HiringSection
