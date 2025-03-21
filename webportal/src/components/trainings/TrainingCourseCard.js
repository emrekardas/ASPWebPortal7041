import Link from 'next/link';

export default function TrainingCourseCard({ course }) {
  return (
    <div className="bg-base-100 p-4 rounded-lg shadow border-l-4 border-primary hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <h4 className="font-bold text-lg">{course.title}</h4>
        <span className="badge badge-primary">${course.price}</span>
      </div>
      <p className="text-sm text-gray-600 my-2">{course.description}</p>
      
      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {course.duration}
        </span>
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          {course.level}
        </span>
      </div>
      
      <Link href={`/trainings/${course.id}`} className="text-sm text-primary hover:underline">
        View Details →
      </Link>
    </div>
  );
}
