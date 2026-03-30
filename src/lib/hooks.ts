import { useEffect, useState } from "react";
import { UseStudentsResult, Student } from "./Types";
import { mockStudents } from "./data";

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup: cancel previous timer if value changes
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export function useStudents(debouncedSearchTerm: string): UseStudentsResult {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true; // prevents state updates if unmounted

    const fetchStudents = async () => {
      setLoading(true);
      setError(null);

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500));
        // TODO: Replace data response from API fetch call
        const data = mockStudents;

        if (isMounted) {
          setStudents(data);
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to fetch students");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchStudents();

    return () => {
      isMounted = false;
    };
  }, []);

  return { students, loading, error };
}