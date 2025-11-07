import { Link } from 'react-router-dom'
import JobCard from '../components/JobCard'
import { mockJobs } from '../data/mockJobs'

export default function Results() {
  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-8">
          <h1 className="text-3xl font-bold">Recommended Jobs (Static Demo)</h1>
          <Link to="/" className="btn btn-secondary">Back to Home</Link>
        </div>

        <p className="text-gray-600 mb-6">
          These are static mock results for demonstration purposes only.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {mockJobs.map((job, idx) => (
            <JobCard key={idx} {...job} />
          ))}
        </div>
      </div>
    </div>
  )
}
