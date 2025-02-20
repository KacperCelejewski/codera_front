import { useEffect, useState } from "react";
import { Course } from "../../types/Course"; // Ensure this path is correct
import { Link } from "react-router-dom";

export default function Courses() {
    const [courses, setCourses] = useState<Course[]>([]); // Ensure the Course type is correctly imported
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/courses/");
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
            
                {courses.map((course) => (
                    <div key={course.id} className="bg-white shadow-md rounded-2xl overflow-hidden transition-transform transform hover:scale-105 duration-300">
                    
                        <div className="h-56 bg-cover bg-center p-4 flex items-end" style={{ backgroundImage: `url(${course.image})` }}>
                            <h1 className="text-2xl font-bold text-white bg-black/60 px-3 py-1 rounded-md">
                                {course.title}
                            </h1>
                        </div>
                        {/* Treść */}
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-900">{course.title}</h2>
                            <p className="mt-2 text-gray-600 line-clamp-3">{course.excerpt}</p>
                            {/* Autor + Przycisk */}
                            <div className="flex justify-between items-center mt-4">
                                <Link to={`/courses/${course.slug}`} className="text-blue-600 hover:underline font-medium transition-all">
                                    Czytaj więcej →
                                </Link>
                                <div className="flex items-center space-x-3">
                                    <img src={course.description} alt="Autor" className="w-10 h-10 object-cover rounded-full border-2 border-gray-300" />
                                    <h3 className="text-gray-700 font-semibold">{course.author || "Nieznany autor"}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Błąd: Dane kursów nie są dostępne.</p>
            ))}
        </>
    );
    
}
