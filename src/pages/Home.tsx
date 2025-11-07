import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 px-6">
      <div className="max-w-2xl space-y-8">
        <h1 className="text-5xl font-bold">Welcome to Job Recommendation Portal</h1>
        <p className="text-gray-600 text-lg">
          Discover personalized job opportunities tailored to your skills and experience.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link to="/portal" className="btn btn-primary text-lg px-6 py-3">
            Start Exploring
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          A static frontend demo built with React + Tailwind for Mid Check presentation.
        </p>
      </div>
    </div>
  )
}
