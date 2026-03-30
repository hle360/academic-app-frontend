export type Student = {
    id: string;
    name: string;
    grade: number;
    isActive: boolean;
};

export type UseStudentsResult = {
  students: Student[];
  loading: boolean;
  error: string | null;
};