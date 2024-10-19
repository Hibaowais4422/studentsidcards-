
import StudentCard from './components/card';

export default function Home() {
  // Student data (you can replace with real data)
  const students = [
    {
      name: 'MUSKAN',
      rollNumber: '985634',
      fatherName: 'JAWAD',
      studentClass: 'XII',
      imageUrl: '/images/student1.jpg',  // Image for student 1
      validUpto: ' 31 May 2025',
      collegeAddress: 'GOVERNMENT GIRLS DEGREE COLLEGE LATIFABAD NO.8'
    },
    {
      name: 'MANAHIL',
      rollNumber: '362322',
      fatherName: 'AQEEL AHMED',
      studentClass: 'XII',
      imageUrl: '/images/student2.jpg',  // Image for student 2
      validUpto: '31 May 2025',
      collegeAddress: 'GOVERNMENT GIRLS DEGREE COLLEGE LATIFABAD NO.8'
    },
    {
      name: 'BUSHRA',
      rollNumber: '001234',
      fatherName: 'NADEEM AHMED',
      studentClass: 'XII',
      imageUrl: '/images/student2.jpg',  // Image for student 2
      validUpto: '31 May 2025',
      collegeAddress: 'GOVERNMENT GIRLS DEGREE COLLEGE LATIFABAD NO.8'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-200 p-6">
      <h1 className="text-4xl font-bold  font-serif mb-6 text-black-700 h-10  ">Student ID Cards</h1>
      <div className="flex flex-wrap justify-center gap-6 ">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            rollNumber={student.rollNumber}
            fatherName={student.fatherName}
            studentClass={student.studentClass}
            imageUrl={student.imageUrl}
            validUpto={student.validUpto}
            collegeAddress ={student.collegeAddress}
          />
        ))}
      </div>
    </div>
  );
}
