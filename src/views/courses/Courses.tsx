import { useEffect, useState } from "react";
import { Course } from "../../types"; 
import { Link } from "react-router-dom";
import MainLayout from "../../MainLayout";

export default function Courses() {
    const [courses, setCourses] = useState<Course[]>(() => []); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/courses/courses/");
                if (!response.ok) {
                    throw new Error(`Błąd: ${response.status} ${response.statusText}`);
                }
                const data: Course[] = await response.json();
                setCourses(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-screen text-lg font-semibold">Ładowanie...</div>;
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-screen text-red-500">
                <p className="text-xl font-bold">Błąd ładowania danych</p>
                <p className="text-md">{error}</p>
            </div>
        );
    }

    return (
        <>
            <MainLayout>
            <h1 className="text-3xl font-semibold text-center mt-10">Kursy</h1>
            
            <div className="grid p-5 mt-10 w-full grid-cols-4 gap-8 h-96"> 
                {Array.isArray(courses) && courses.map((course) => (
     
        <div className="flex justify-center bg-white shadow-lg rounded-lg overflow-hidden">
            {course.title}
            </div>
        
    ))}
    </div>
            </MainLayout>
        </>
    );
    
}