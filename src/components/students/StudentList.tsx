import React, { FC, useState, useMemo } from "react";
import { useDebounce, useStudents } from "../../lib/hooks";
import SearchInput from "./SearchInput";
import GradeFilter from "./GradeFilter";
import StudentTable from "./StudentTable";

const StudentList : FC = () => {
    // Initialize state to store students, loading, search term, and selected grade
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [selectedGrade, setSelectedGrade] = useState<number | "all">("all");

    // 👇 Debounced value (500ms delay)
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const { students, loading, error } = useStudents(searchTerm);

    // Derived filtered data
  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch = student.name
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase());

      const matchesGrade =
        selectedGrade === "all" || student.grade === selectedGrade;

      return matchesSearch && matchesGrade;
    });
  }, [students, debouncedSearchTerm, selectedGrade]);

    const clearSearch = () => setSearchTerm("");

    if (loading) return <p>Loading students...</p>
    if (error) return <p>Error fetching students...</p>

    return (
        <>
            <h3>Student List</h3>
            <div className="student-search-bar">
                <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} onClear={clearSearch} />
                <GradeFilter selectedGrade={String(selectedGrade)} setSelectedGrade={setSelectedGrade} />
            </div>

            {
                filteredStudents.length === 0 ? (
                    <h3>No students found.</h3>
                ) : (
                    <StudentTable students={filteredStudents} />
                )
            }
        </>
    )
};

export default StudentList;