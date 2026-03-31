import AsideFilters from '../../components/FindJob.jsx/AsideFilters'
import JobListing from '../../components/FindJob.jsx/JobListing'

function FindJob() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
        <main className="mx-auto flex w-full max-w-7xl flex-1 gap-8 p-4 md:p-10">
            <AsideFilters/>
            <JobListing/>
        </main>
    </div>
  )
}

export default FindJob;
