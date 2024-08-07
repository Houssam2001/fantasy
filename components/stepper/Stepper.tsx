import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { log } from "console";
import Image from "next/image";
import React, { useState } from "react";

const steps = [
  { title: "Personal Details", logo: "👤" },
  { title: "Your Favourites", logo: "⭐" },
  { title: "Email Preferences", logo: "📧" },
];
const partners = [
  { name: "Barclays" },
  { name: "EA SPORTS" },
  { name: "Football Manager" },
  { name: "Guinness*" },
  { name: "Hublot" },
  { name: "Nike" },
  { name: "Oracle" },
  { name: "Panini" },
  { name: "Rezzil" },
  { name: "Sorare*" },
];
const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Morocco",
];
type Club = {
  name: string;
  image: string;
};
const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    day: "",
    month: "",
    year: "",
    country: "",
    mobileCode: "",
    mobileNumber: "",
  });
  const [showAdditionalClubs, setShowAdditionalClubs] = useState(false);
  const [selectedPartners, setSelectedPartners] = useState<string[]>([]);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [generalCommun, setGeneralCommun] = useState(false);
  const [fantasy, setFantasy] = useState(false);
  const [team, setTeam] = useState(false);

  const handlePartnerSelection = (partnerName: any) => {
    setSelectedPartners((prevSelectedPartners: any) =>
      prevSelectedPartners.includes(partnerName)
        ? prevSelectedPartners.filter((name: any) => name !== partnerName)
        : [...prevSelectedPartners, partnerName]
    );
  };

  const clubs = [
    {id:0, name: "Manchester United", image: "/manu.png" },
    {id:1, name: "Barcelona", image: "/barcelona.png" },
    { name: "Real Madrid", image: "/realmadrid.png",id:2 },
    { name: "Liverpool", image: "/liverpool.png" ,id:3},
    { name: "Bayern Munich", image: "/bayern.png", id:4 },
    { name: "Juventus", image: "/juventus.png" ,id:5},
  ];
  const additionalClubs = [
    { name: "Chelsea", image: "/chelsea.png" },
    { name: "Paris Saint-Germain", image: "/psg.png" },
    { name: "AC Milan", image: "/acmilan.png" },
    { name: "Inter Milan", image: "/intermilan.png" },
    { name: "Arsenal", image: "/arsenal.png" },
  ];
  const handleShowAdditionalClubs = () => {
    setShowAdditionalClubs(true);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  // In your component:
  const [selectedClub, setSelectedClub] = useState< null | Club>(null);

  const handleClubSelection = (clubName: any) => {
    setSelectedClub(clubName);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log("Form Data:", formData);
    // Proceed to the next step
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const renderPasswordCriteria = () => {
    const { password } = formData;
    const isLengthValid = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!&*]/.test(password);

    return (
      <ul className="text-sm mt-2">
        <li className={isLengthValid ? "text-green-500" : "text-red-500"}>
          At least 8 characters
        </li>
        <li
          className={
            hasUpperCase && hasLowerCase ? "text-green-500" : "text-red-500"
          }
        >
          A mix of upper-case and lower-case characters
        </li>
        <li className={hasNumber ? "text-green-500" : "text-red-500"}>
          At least one number
        </li>
        <li className={hasSpecialChar ? "text-green-500" : "text-red-500"}>
          At least one special character e.g - !&*
        </li>
      </ul>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg w-full max-w-4xl">
        <ol className="items-center justify-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`flex items-center flex-col gap-3 font-light space-x-2.5 rtl:space-x-reverse`}
            >
              <span
                className={`flex items-center justify-center w-12 h-12 p-2 rounded-full shrink-0 ${
                  index === currentStep
                    ? "bg-[#37003C] text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {step.logo}
              </span>
              {index === currentStep || index === currentStep + 1 ? (
                <span>
                  <h3 className="font-light">
                    {index + 1} {step.title}
                  </h3>
                </span>
              ) : (
                <span>
                  <h3 className="font-light text-gray-500">{step.title}</h3>
                </span>
              )}
            </li>
          ))}
        </ol>

        {currentStep === 0 && (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <h1 className="text-2xl font-bold text-left mb-6">
              Your Personal Details{" "}
            </h1>
            <div className="flex flex-row">
              <label
                htmlFor="firstName"
                className="block text-sm  w-1/5 font-medium text-[#242424]"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="mt-1 block w-full  px-3 py-3 border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex flex-row">
              <label
                htmlFor="firstName"
                className="block text-sm  w-1/5 font-medium text-[#242424]"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="mt-1 block w-full  px-3 py-3 border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex flex-row">
              <label
                htmlFor="email"
                className="block text-sm w-1/5 font-medium text-[#242424]"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-3 border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex flex-row">
              <label
                htmlFor="password"
                className="block text-sm w-1/5 font-medium text-[#242424]"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 block w-full  px-3 py-3 border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <small className="text-sm text-gray-600">Show</small>
            {renderPasswordCriteria()}
            <div className="flex flex-row">
              <label className="block text-sm font-medium text-[#242424] w-1/5">
                Gender
              </label>
              <div className="mt-2 space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleInputChange}
                    className="form-radio w-7 h-7 text-[#37003C]"
                    required
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleInputChange}
                    className="form-radio w-7 h-7  text-[#37003C]"
                    required
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>
            <div className="flex flex-row ">
              <label className="block text-sm font-medium text-[#242424] w-1/5">
                Date of Birth
              </label>
              <div className="mt-2 space-x-2 flex flex-row">
                <input
                  type="text"
                  name="day"
                  value={formData.day}
                  onChange={handleInputChange}
                  placeholder="Day"
                  className="w-1/3 px-3 py-2 border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
                <input
                  type="text"
                  name="month"
                  value={formData.month}
                  onChange={handleInputChange}
                  placeholder="Month"
                  className="w-1/3 px-3 py-2 border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  placeholder="Year"
                  className="w-1/3 px-3 py-2 border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
            </div>
            <div className="flex flex-row">
              <label
                htmlFor="country"
                className="block text-sm font-medium w-1/4 text-[#242424]"
              >
                Country/Region of Residence
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              >
                <option value="" disabled>
                  Select a country
                </option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-row">
              <label
                htmlFor="mobileNumber"
                className="block w-1/5 text-sm font-medium text-[#242424]"
              >
                Mobile Number <span className="text-gray-500">*Optional</span>
              </label>
              <div className="mt-2 space-x-2 flex flex-row">
                <input
                  type="text"
                  name="mobileCode"
                  value={formData.mobileCode}
                  onChange={handleInputChange}
                  placeholder="Code"
                  className="w-1/3 px-3 py-2 border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <input
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  placeholder="Number"
                  className="w-2/3 px-3 py-2 border border-black rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="items-center flex flex-row justify-center">
              <button
                type="submit"
                className="w-2/4 inline-flex mt-3 items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#37003C] hover:bg-[#410b46] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Next
              </button>
            </div>
          </form>
        )}

        {currentStep === 1 && (
          <div className="mt-6">
            <h3 className="text-lg font-medium text-[#242424]">
              Your Favourites
            </h3>
            <p className="mt-4 text-sm text-gray-500">
              This section is a placeholder for your favourites.
            </p>
            <div className="grid grid-cols-5 gap-4">
              {clubs.map((club) => (
                <div
                  key={club.id}
                  onClick={() => handleClubSelection(club)}
                  className={`cursor-pointer p-4 border rounded-lg shadow-sm text-center ${
                    selectedClub?.name === club.name
                    ? "bg-[#E90052] text-white"
                      : "bg-white"
                  }`}
                >
                  <img
                    src={club.image}
                    alt={club.name}
                    className="h-16 mx-auto mb-2"
                  />
                  <h4 className="font-medium">{club.name}</h4>
                </div>
              ))}
            </div>
            <h2 className="mt-6 text-lg font-medium text-center text-[#242424]">
              Do you want to keep an eye on any other clubs?
            </h2>
            <div>
              {/* {selectedClub && !showAdditionalClubs && ( */}
                <div className="items-center flex flex-row my-10 justify-center">
                  <button
                    onClick={handleShowAdditionalClubs}
                    className="w-2/5 inline-flex mt-3 items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-[#5C99A6] hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Select other clubs
                  </button>
                </div>
              
              {showAdditionalClubs && (
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-[#242424]">
                    More Clubs to Choose From
                  </h3>
                  <div className="grid grid-cols-5 gap-4">
                    {additionalClubs.map((club) => (
                      <div
                        key={club.name}
                        onClick={() => handleClubSelection(club)}
                        className={`cursor-pointer p-4 border rounded-lg shadow-sm text-center ${
                          selectedClub?.name === club.name
                            ? "bg-[#E90052] text-white"
                            : "bg-white"
                        }`}
                      >
                        <img
                          src={club.image}
                          alt={club.name}
                          className="h-16 mx-auto mb-2"
                        />
                        <h4 className="font-medium">{club.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="items-center flex flex-row justify-center">
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="w-2/5 inline-flex mt-3 items-center justify-center py-2 px-4 border border-transparent  shadow-sm text-sm font-medium text-white bg-[#37003C] hover:bg-[#410b46] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Next
              </button>
            </div>
            <div className="items-center flex flex-row justify-center">
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="w-2/5 inline-flex mt-3 items-center justify-center py-2 px-4 border border-transparent  shadow-sm text-sm font-medium text-white bg-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Back to personal details
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="mt-6">
            <h1 className="text-2xl mb-10 font-medium text-[#242424]">
              Email Preferences
            </h1>
            <br />
            <h1 className="text-xl font-medium text-[#242424]">
              Club Email Communications
            </h1>
            <br />
            <p className="mt-4 text-lg text-gray-500">
              Let us know if you would like to hear about the club(s) you
              support.
            </p>
            <br />
            <h1 className="text-sm font-medium text-[#242424]">
              Favourite club (Change)
            </h1>

            <br />
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-6 w-6 text-blue-600"
                  checked={team}
                  onChange={(e) => setTeam(e.target.checked)}
                />
                <span className="ml-2 text-sm text-gray-700">
                  <Image
                    width={30}
                    height={30}
                    src={
                      selectedClub
                        ? typeof selectedClub === "object" &&
                          "image" in selectedClub
                          ? selectedClub.image
                          : "/"
                        : ""
                    }
                    alt="Club Logo"
                  />
                  Receive communications direct from{" "}
                  {selectedClub
                    ? typeof selectedClub === "object" && "name" in selectedClub
                      ? selectedClub.name
                      : "No club selected"
                    : "No club selected"}
                </span>
              </label>
            </div>
            <br />
            <h1 className="text-2xl mt-20 font-medium text-[#242424]">
              Premier League Email Communications
            </h1>
            <br />
            <p className="text-lg text-gray-500">
              Let us know if you would like the Premier League to send you
              information about any of the following topics.
            </p>
            <br />
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-8 w-8 text-blue-600"
                checked={generalCommun}
                onChange={(e) => setGeneralCommun(e.target.checked)}
              />
              <span className="mx-2  text-sm text-gray-700">
                General communication
              </span>

              <input
                type="checkbox"
                className="form-checkbox h-8 w-8 ml-4 text-blue-600"
                checked={fantasy}
                onChange={(e) => setFantasy(e.target.checked)}
              />
              <span className="ml-2 text-sm text-gray-700">Fantasy</span>
            </label>
            <br />
            <h1 className="text-2xl mt-20 font-medium text-[#242424]">
              Partner Email Communications
            </h1>
            <br />
            <p className="text-lg text-gray-500">
              Let us know if you would like the Premier League to send you
              information on behalf of the following official partners.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-4  space-y-2">
              {partners.map((partner) => (
                <label key={partner.name} className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-8 w-8 text-blue-600"
                    checked={selectedPartners.includes(partner.name)}
                    onChange={() => handlePartnerSelection(partner.name)}
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    {partner.name}
                  </span>
                </label>
              ))}
            </div>
            <p className="mt-6 text-xs text-gray-500">
              *You will only receive emails about Guinness if you&apos;re over
              the legal drinking age in the country of your residence, and about
              Sorare if youre over the age of 18.
            </p>
            <p className="mt-10 text-xs text-gray-500">
              Our Privacy Policy sets out why the Premier League collects data
              from you and how it will be processed. If you are under 18, please
              refer to our Childs Privacy Policy Q&A. You can manage your email
              preferences and change the information we send to you at any time
              by accessing your account and clicking &apos;Update Profile&apos;.
            </p>
            <p className="mt-10 text-xs text-gray-500">
              If you no longer wish to receive communications directly from the
              club(s) you support, you should contact the club(s) directly to
              inform them. More information on how to do this can be found on
              our Withdrawing consent from Clubs page.
            </p>
            <div className="mt-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-8 w-8 text-blue-600"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                />
                <span className="ml-2 text-sm text-gray-700">
                  I have read and agree to the Terms & Conditions
                </span>
              </label>
            </div>
            <div className="items-center flex flex-row justify-center">
              <button
                onClick={handleSubmit}
                className="w-2/5 inline-flex mt-6 items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-[#37003C] hover:bg-[#410b46] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Complete Registration
              </button>
            </div>
            <div className="items-center flex flex-row justify-center">
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="w-2/5 inline-flex mt-6 items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Back To Your Favourites
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stepper;
