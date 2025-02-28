/** @format */

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Course } from "./types/Course";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { useNavigate } from "react-router-dom";

export default function CourseDetails() {
  const { slug } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const isAuthenitacted = useIsAuthenticated();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCourse = async () => {
      setError(null); // Reset error state before fetching
      setLoading(true);

      try {
        const response = await fetch(
          `http://localhost:8000/courses/get_course/${slug}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch course data");
        }
        const data = await response.json();

        console.log("Course data:", data["course"]);

        const courseData: Course = data["course"];
        console.log("Course data", courseData);

        setCourse(courseData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchCourse();
    }
  }, [slug]);

  if (loading) return <p>Loading course details...</p>;
  if (!course) return <p>Course not found</p>;

  const handlePurchase = () => {
    if (!isAuthenitacted) {
      alert("Musisz byc zalogowany by kupic kurs");
      navigate("/login");
    } else {
      navigate(`/courses/${slug}/purchase`);
    }
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-5 flex flex-col items-center border-white border-2 rounded-lg h-screen">
      <h1 className="text-techGreen text-4xl font-poppins font-bold ">
        {course?.title}
      </h1>
      <p className="text-white p-2 text-lg">{course?.description}</p>
      <h2 className="text-white text-3xl font-semibold">
        Cena: <strong>{course?.price} </strong>PLN
      </h2>
      <div className=" p-6 rounded-lg shadow-lg">
        <h2 className="text-white text-2xl font-bold mb-4">
          Czego się nauczysz:
        </h2>
        <ul className="text-white text-lg space-y-2 list-disc list-inside">
          {Array.isArray(course?.learnings) && course.learnings.length > 0 ? (
            course.learnings.map((learning: any, index) => (
              <li className="p-2 bg-gray-700 rounded-lg" key={index}>
                {learning.title}
              </li>
            ))
          ) : (
            <p className="text-gray-400 italic">Brak dostępnych tematów.</p>
          )}
        </ul>
      </div>
      <button
        onClick={handlePurchase}
        className="w-24 text-white border border-white border-2 p-3 rounded-lg mt-5"
      >
        Kup
      </button>
    </div>
  );
}
