import NewsletterContent from "./NewsletterContent";
import NewsletterForm from "./NewsletterForm";

export default function NewsletterCard() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-darkBlue text-techGreen rounded-2xl p-10 shadow-2xl w-full relative max-w-lg">
        {/* Gradient w tle */}
        <div className=" absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent rounded-2xl "></div>

        {/* Zawartość */}
        <div className="relative text-center">
          <NewsletterContent />
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}
