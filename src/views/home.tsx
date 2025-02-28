/** @format */

import NewsletterCard from "../components/newsletter_section/NewsletterCard";
import MainLayout from "../MainLayout";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="">
      <MainLayout>
        <div className="flex items-center justify-center min-h-screen flex-col">
          <h1 className="text-4xl text-center text-techGreen font-bold mt-10">
            Zdobądź wiedzę, która zmienia życie
          </h1>
          <button
            onClick={() => navigate("/kursy")}
            className="bg-none text-techGreen font-semibold px-5 py-3 rounded-lg border-2 border-techGreen hover:bg-techGreen hover:text-black transition mt-5"
          >
            Kup E-booka
          </button>
        </div>
      </MainLayout>
    </div>
  );
}
