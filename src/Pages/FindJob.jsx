import React from 'react'
import Header from '../components/header'
import AsideFilters from '../components/FindJob.jsx/AsideFilters'
import JobListing from '../components/FindJob.jsx/JobListing'
import Footer from '../common/Footer'

function FindJob() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
        <Header/>
        <main className="mx-auto flex w-full max-w-7xl flex-1 gap-8 p-4 md:p-10">
            <AsideFilters/>
            <JobListing/>
        </main>
        <Footer/>   
    </div>
  )
}

export default FindJob;
