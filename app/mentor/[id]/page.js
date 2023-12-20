import { mentors } from "../../constants/constants";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import Image from "next/image";

export default function Page({ params }) {
  function getMentorById(id) {
    return mentors.find((mentor) => mentor.id === id);
  }

  const desiredId = parseInt(params.id, 10);
  const mentor = getMentorById(desiredId);

  if (mentor) {
    const { id, name, img, designation } = mentor;

    return (
      <>
        <NavBar />
        <div className="h-[90vh]">
          <div className="bg-primary h-[400px]">
            <Image
              width={200}
              height={200}
              className="ml-[5%] mt-[3%] inline-block w-[100px] h-[100px]  md:w-[200px] md:h-[200px] rounded-full mx-auto"
              src={img}
              alt={name}
            />
            <h3 className="font-bold ml-[5%] mt-4 text-white whitespace-nowrap">
              {name}
            </h3>
            <h5 className="ml-[5%] mt-1 text-white whitespace-nowrap">
              {designation}
            </h5>
          </div>
          {/* <span className="mx-2 inline-block w-[200px] h-[200px] align-bottom mr-4">
            <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
              <Image
                width={64}
                height={64}
                className="block w-16 h-16 rounded-full mx-auto"
                src={img}
                alt={name}
              />
              <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
                <h5 className="font-bold text-navy-900 whitespace-nowrap">
                  {name}
                </h5>
                <span className="text-gray-400 text-sm mt-2" lang="en">
                  {designation}
                </span>
              </div>
            </div>
          </span> */}
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <div className="mt-[50vh]">
          <center className="text-2xl">
            Mentor not found,{" "}
            <a
              className="hover:bg-primary hover:text-white transition-all translate-x-1 inline-block underline-offset-2 underline"
              href="/"
            >
              Back to Home
            </a>
          </center>
        </div>
      </>
    );
  }
}
