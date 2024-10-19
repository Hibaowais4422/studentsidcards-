import Image from 'next/image';

// const StudentCard=({ name, rollNumber, fatherName, studentClass, imageUrl, validUpto, collegeAddress }) => {
  interface IProps {
    name: string;
    rollNumber: string;
    fatherName: string;
    studentClass: string;
    imageUrl: string;
    validUpto: string;
    collegeAddress: string;
  }
  const StudentCard =(props:IProps)=>{
  return (
    <div className="w-96 border-2 border-gray-500 rounded-lg shadow-md overflow-hidden">
      {/* Top section with background color and school info */}
      <div className="bg-green-700 text-white p-4 flex justify-between shadow-2md shadow-black">
        <div className="flex items-center">
          <div className="bg-white rounded-full p-2">
            <Image
              src="/download.png" // Replace this with your actual logo
              alt="School Logo"
              width={40}
              height={40}
              className='object-cover '
            />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-bold"> Government of sindh </h2>
            <p className="text-sm">College  Education  Department</p>
          </div>
        </div>
      </div>

      {/* Card body with image and student details */}
      <div className="p-4 flex">
        {/* Left Side: Image */}
        <div className="w-1/3">
          <Image
            src={'/images 3.png'}
            alt="Student Profile Picture"
            width={100}
            height={100}
            className="rounded-lg object-cover"
          />
          <p className="mt-2 text-center font-bold">{props.name}</p>
        </div>

        {/* Right Side: Student Info */}
        <div className="w-4/5 pl-4">
          <p className="text-sm">Student ID No: <span className="font-bold">{props.rollNumber}</span></p>
          <p className="text-sm">Father's Name: <span className="font-bold">{props.fatherName}</span></p>
          <p className="text-sm">Class: <span className="font-bold">{props.studentClass}</span></p>
          <p className="text-sm">Valid Upto: <span className="font-bold">{props.validUpto}</span></p>
        </div>
        
      </div>

      {/* Bottom section with school address */}
      <div className="  bg-blue-300 text-blue-900 text-center p-6  ">
        <p ><span className='text-black font-bold font-serif'>College Address:</span> {props.collegeAddress}</p>
      </div>
    </div>
  
  );
  
  }

export default StudentCard;



