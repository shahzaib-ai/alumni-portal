import { mentors } from "../../constants/constants";

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
      <div>
        <span className="mx-2 inline-block w-[200px] h-[200px] align-bottom mr-4">
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
        </span>
      </div>
    );
  } else {
    console.error("Mentor not found for id:", desiredId);
    return (
      <div>
        <h1>Mentor not found for id: {params.id}</h1>
      </div>
    );
  }
}
