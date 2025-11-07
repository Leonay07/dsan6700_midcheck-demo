import { Link } from 'react-router-dom'
import JobCard from '../components/JobCard'
import { mockJobs } from '../data/mockJobs'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-12">
      {/* ===== Header + Form Section ===== */}
      <div className="max-w-3xl w-full text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Job Recommendation Portal
        </h1>
        <p className="text-gray-600 mt-3">
          Upload your resume or enter details to get personalized job suggestions.
        </p>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-left space-y-6 mt-10">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Job Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="e.g. Data Scientist"
              className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location (State)
          </label>
          <select
            id="location"
            className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
          >
            <option value="">Select a state</option>
            <option value="AL">Alabama (AL)</option>
            <option value="AK">Alaska (AK)</option>
            <option value="AZ">Arizona (AZ)</option>
            <option value="AR">Arkansas (AR)</option>
            <option value="CA">California (CA)</option>
            <option value="CO">Colorado (CO)</option>
            <option value="CT">Connecticut (CT)</option>
            <option value="DE">Delaware (DE)</option>
            <option value="FL">Florida (FL)</option>
            <option value="GA">Georgia (GA)</option>
            <option value="HI">Hawaii (HI)</option>
            <option value="ID">Idaho (ID)</option>
            <option value="IL">Illinois (IL)</option>
            <option value="IN">Indiana (IN)</option>
            <option value="IA">Iowa (IA)</option>
            <option value="KS">Kansas (KS)</option>
            <option value="KY">Kentucky (KY)</option>
            <option value="LA">Louisiana (LA)</option>
            <option value="ME">Maine (ME)</option>
            <option value="MD">Maryland (MD)</option>
            <option value="MA">Massachusetts (MA)</option>
            <option value="MI">Michigan (MI)</option>
            <option value="MN">Minnesota (MN)</option>
            <option value="MS">Mississippi (MS)</option>
            <option value="MO">Missouri (MO)</option>
            <option value="MT">Montana (MT)</option>
            <option value="NE">Nebraska (NE)</option>
            <option value="NV">Nevada (NV)</option>
            <option value="NH">New Hampshire (NH)</option>
            <option value="NJ">New Jersey (NJ)</option>
            <option value="NM">New Mexico (NM)</option>
            <option value="NY">New York (NY)</option>
            <option value="NC">North Carolina (NC)</option>
            <option value="ND">North Dakota (ND)</option>
            <option value="OH">Ohio (OH)</option>
            <option value="OK">Oklahoma (OK)</option>
            <option value="OR">Oregon (OR)</option>
            <option value="PA">Pennsylvania (PA)</option>
            <option value="RI">Rhode Island (RI)</option>
            <option value="SC">South Carolina (SC)</option>
            <option value="SD">South Dakota (SD)</option>
            <option value="TN">Tennessee (TN)</option>
            <option value="TX">Texas (TX)</option>
            <option value="UT">Utah (UT)</option>
            <option value="VT">Vermont (VT)</option>
            <option value="VA">Virginia (VA)</option>
            <option value="WA">Washington (WA)</option>
            <option value="WV">West Virginia (WV)</option>
            <option value="WI">Wisconsin (WI)</option>
            <option value="WY">Wyoming (WY)</option>
          </select>

          </div>

          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
              Experience Level
            </label>
            <select
              id="experience"
              className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none"
            >
              <option value="">Select level</option>
              <option value="junior">Junior (0–2 years)</option>
              <option value="mid">Mid (3–5 years)</option>
              <option value="senior">Senior (5+ years)</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Resume Upload
              </label>
              <button className="btn btn-secondary">Choose File</button>
            </div>
            <Link to="/results" className="btn btn-primary h-10">
              Search Jobs
            </Link>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          This is a static demo for Mid Check presentation.
        </p>
      </div>

      {/* ===== Scrollable Job List Section ===== */}
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-md p-8 overflow-y-auto max-h-[600px]">
        <h2 className="text-2xl font-semibold mb-6 text-center">Latest Job Recommendations</h2>

        <div className="grid md:grid-cols-2 gap-5">
          {mockJobs.map((job, idx) => (
            <JobCard key={idx} {...job} />
          ))}
        </div>
      </div>
    </div>
  )
}
