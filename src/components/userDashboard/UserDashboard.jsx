import InformationData from "./InformationData";
import ProjectDetails from "./ProjectDetails";

function UserDashboard({ userData }) {
  const {
    profile: {
      name,
      job_title,
      rating,
      contact_info: { phone, email, website },
      location: { company, address, secondary_address },
      skills,
      personal_info: { birthday, gender },
    },
    sections: { work },
    actions: { message, contacts, report },
  } = userData;

  return (
    <div className="container mx-auto p-4 md:p-8">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
        {/* Left Column: Profile Image and Work Details */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
          {/* Profile Image */}
          <div className="mb-4 md:mb-6">
            <img
              src="https://media.istockphoto.com/id/1562983249/photo/portrait-of-happy-and-successful-businessman-indian-man-smiling-and-looking-at-camera.webp?b=1&s=170667a&w=0&k=20&c=z2tuWSfqvWQvucbL9nyjgHXIFvWqwE1CxwI7OoSk3sk="
              alt="profile image"
              className="w-full rounded-lg"
            />
          </div>
          {/* Work Details */}
          <div className="w-full">
            <div className="md:hidden mb-6">
              <h1 className="text-3xl font-semibold">{name}</h1>
              <p className="mt-1 text-md font-medium text-primary">{job_title}</p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-[18px] text-light-text font-semibold mb-2">
                Work
              </h3>
              <div className="w-[80%] border-b border-dashed border-gray-300"></div>
            </div>
            <ProjectDetails projectTitle={company} projectDesc={address} />
            <ProjectDetails
              projectTitle={secondary_address.name}
              projectDesc={secondary_address.address}
            />
            <div className="flex items-center gap-2">
              <h3 className="text-[18px] text-light-text font-semibold mb-2">
                Skill
              </h3>
              <div className="w-[80%] border-b border-dashed border-gray-300"></div>
            </div>
            <ul className="text-[18px] text-[#424242] font-semibold">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Right Column: Profile Info */}
        <div className="flex-1">
          {/* Profile Name and Title */}
          <div className="hidden md:block mb-6">
            <h1 className="text-3xl font-semibold">{name}</h1>
            <p className="text-md font-medium text-primary">{job_title}</p>
          </div>
          {/* Rating and Buttons */}
          <div className="flex flex-col gap-6 mb-6 sm:flex-row sm:items-center">
            <div className="sm:order-1">
              <p className="text-sm text-light-text">Recommended</p>
              <div className="flex items-center">
                <span className="text-2xl font-semibold">
                  {rating.toFixed(2)}
                </span>
                <div className="flex text-yellow-500 ml-2">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:order-2 sm:flex-row sm:gap-6">
              <button className="flex items-center gap-2 border border-primary py-2 px-4 rounded-md">
                <i className="ri-chat-4-fill text-xl text-primary"></i>
                <span>{message}</span>
              </button>
              <button className="flex items-center gap-2 bg-primary text-white py-2 px-4 rounded-md">
                <span>{contacts}</span>
              </button>
              <button className="text-[17px] text-light-header font-semibold border border-light-header rounded-md px-2">
              <i class="ri-error-warning-line mr-1"></i>
                {report}
              </button>
            </div>
          </div>
          {/* Tabs */}
          <div className="flex gap-6 border-b border-dashed border-gray-300 mb-6">
            <a href="#" className="pb-1">
              <i className="ri-time-line mr-[2px] text-light-text font-semibold"></i>
              <span className="text-light-text font-bold">{work[0]}</span>
            </a>
            <a href="#" className="pb-1 border-b-2 border-primary">
              <i className="ri-shield-user-line mr-[2px] text-light-text font-semibold"></i>
              <span className="text-light-text font-bold">{work[1]}</span>
            </a>
          </div>
          {/* Contact Information */}
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-[18px] text-light-text font-semibold mb-2">
                Contact Information
              </h3>
              <div className="w-[40%] border-b border-dashed border-gray-300"></div>
            </div>
            <div className="mb-2">
              <InformationData title={"Phone No."} desc={phone} />
            </div>
            <div className="mb-2">
              <InformationData title={"Address:"} desc={address} />
            </div>
            <div className="mb-2">
              <InformationData
                title={"Email:"}
                aTag={true}
                href={`mailto:${email}`}
                aTagText={email}
              />
            </div>
            <div className="mb-2">
              <InformationData
                title={"Website:"}
                aTag={true}
                href={`http://${website}`}
                aTagText={website}
              />
            </div>
          </div>
          {/* Personal Information */}
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-[18px] text-light-text font-semibold mb-2">
                Personal Information
              </h3>
              <div className="w-[40%] border-b border-dashed border-gray-300"></div>
            </div>
            <div className="mb-2">
              <InformationData title={"Birthday:"} desc={birthday} />
            </div>
            <div className="mb-2">
              <InformationData title={"Gender:"} desc={gender} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
