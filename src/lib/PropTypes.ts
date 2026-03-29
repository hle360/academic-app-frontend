import { Student } from "./Types";

export type SearchInputProps = {
    searchTerm: string;
    setSearchTerm: (value:string) => void;
    onClear: () => void;
}

export type GradeFilterProps = {
  selectedGrade: string;
  setSelectedGrade: (value: number | "all") => void;
};

export type StudentTableProps = {
    students: Student[];
}