type JobCardProps = {
    title: string
    company: string
    location: string
    description: string
  }
  
  export default function JobCard({ title, company, location, description }: JobCardProps) {
    return (
      <div className="card bg-white p-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">{location}</span>
        </div>
        <p className="text-sm text-gray-700 mt-1">{company}</p>
        <p className="text-gray-600 mt-3">{description}</p>
      </div>
    )
  }
  