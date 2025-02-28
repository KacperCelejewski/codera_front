/** @format */

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-darkBlue text-white">
      <div className="flex flex-row justify-around p-10">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Codera</h1>
          <p className="mt-4 w-96">
            Jesteśmy firmą uczącą programowania. Naszym celem jest dostarczanie
            najwyższej jakości kursów programowania, które pozwolą Ci na
            zdobycie nowych umiejętności i rozwoju zawodowego.
          </p>
        </div>
        <div className="flex flex-col mt-4 md:mt-0">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <p className="mt-4">
            Email:
            <a href="mailto:kontakt@codera.pl" className="text-techGreen"></a>
          </p>
          <p>Phone: 123-456-789</p>
        </div>
        <div className="flex flex-col mt-4 md:mt-0">
          <h1 className="text-2xl font-bold">Social Media</h1>
          <div className="flex mt-4">
            <a href="https://www.facebook.com" className="mr-4"></a>
            <a href="https://www.twitter.com" className="mr-4"></a>
            <a href="https://www.instagram.com"></a>
          </div>
        </div>
      </div>
      <div className="bg-darkBlue text-white text-center py-4 border-t-2 border-techGreen">
        <p>&copy; Codera. All rights reserved.</p>
        <p>{year}</p>
      </div>
    </footer>
  );
}
