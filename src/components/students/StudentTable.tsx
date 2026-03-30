import React, { FC } from "react"
import { StudentTableProps } from "../../lib/proptypes";

const StudentTable: FC<StudentTableProps> = ({ students }) => {
    return (
    <>
      <h3>Student Results</h3>
      <ul className="student-result-list">
        {students.map((student) => (
          <li key={student.id} className="student-list-item">
            <span>{student.id}</span>
            <span>{student.name}</span>
            <span>Grade: {student.grade}</span>
            <span>{student.isActive ? "Active" : "Inactive"}</span>
          </li>
        ))}
      </ul>
    </>
  )
};

export default StudentTable;