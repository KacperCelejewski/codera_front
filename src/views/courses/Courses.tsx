/** @format */

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
        const response = await fetch(
          "http://127.0.0.1:8000/courses/get_courses"
        );
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
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold">
        Ładowanie...
      </div>
    );
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
        <h1 className="text-3xl font-semibold text-center text-white mt-10">
          Kursy
        </h1>

        <div className="grid p-5 mt-10 w-full grid-cols-4 gap-8 h-96">
          {Array.isArray(courses) &&
            courses.map((course) => (
              <div className="flex flex-row justify-around bg-techGreen text-black bg-opacity-80  shadow-lg rounded-lg overflow-hidden border-2 border-white">
                <div className="flex justify-center flex-col items-center bg-techGreen text-black bg-opacity-40 p-3 my-2  shadow-xl rounded-lg overflow-hidden">
                  <h2 className="text-lg font-poppins font-semibold">
                    {course.title}
                  </h2>
                  <h2>
                    <Link
                      to={`/kursy/${course.slug}`}
                      className="block w-full h-1/2 bg-cover bg-center"
                    >
                      <button className="text-white bg-black font-semibold px-5 py-3 rounded-lg border-2 border-black hover:bg-white hover:text-black transition mt-5">
                        Sprawdź
                      </button>
                    </Link>
                  </h2>
                </div>
                <div className="flex justify-center flex-col items-center bg-techGreen text-black bg-opacity-40 p-3 my-2  shadow-xl rounded-lg overflow-hidden">
                  <img
                    className="w-24 h-24 object-cover rounded-full"
                    src="public/sample.jpg"
                    alt="sample image"
                  />
                </div>
              </div>
            ))}
        </div>
      </MainLayout>
    </>
  );
}
