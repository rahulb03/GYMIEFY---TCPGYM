
"use client";
import { useEffect, useContext, useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { Card, CardBody, CardFooter, Container } from "reactstrap";
import I18NextContext from "@/Helper/I18NextContext";
import { useTranslation } from "@/app/i18n/client";
import { GET_JOB, INR_LOG } from "@/Config/Constant";
import axios from "axios";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import jobimage from "../../../public/assets/images/about-avatar.png";
import { IoMdClose } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import "./job.css";

const Job = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, "common");
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jobTitleInput, setJobTitleInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [suggestions, setSuggestions] = useState({
    jobTitles: [],
    locations: [],
  });
  const [noResults, setNoResults] = useState(false);
  const [combinedInput, setCombinedInput] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [error, setError] = useState(false); // New state for error handling

  const predefinedJobKeywords = [
    "trainer",
    "zumba trainer",
    "fitness trainer",
    "personal trainer",
    "recptionist",
  ];
  const predefinedLocations = [
    "Surat , gujarat ",
    "Ahmedabad, Gujarat",
    "Mumbai, Maharashtra",
    "Gujarat",
    "India",
    "dindoli",
    "Pune",
    "Mumbai",
  ];

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await axios.put(
          GET_JOB,
          {},
          {
            headers: {
              token: "essentials",
              "Content-Type": "application/json",
            },
          }
        );
        if (response.data.message === "Data Found") {
          setJobs(response.data.data); // assuming response.data.data is an array
          setFilteredJobs(response.data.data);
          setError(false); // Reset error state if data is fetched successfully
        } else {
          setError(true); // Set error state if no data found
        }
      } catch (error) {
        console.error("Error fetching job data:", error);
        setError(true); // Set error state on any error
      } finally {
        setLoading(false);
      }
    };

    fetchJobData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Set initial state
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let filtered = jobs;

    if (isMobile) {
      if (combinedInput) {
        filtered = filtered.filter(
          (job) =>
            job.name.toLowerCase().includes(combinedInput.toLowerCase()) ||
            job.location.toLowerCase().includes(combinedInput.toLowerCase())
        );
      }
    } else {
      if (jobTitleInput) {
        filtered = filtered.filter((job) =>
          job.name.toLowerCase().includes(jobTitleInput.toLowerCase())
        );
      }

      if (locationInput) {
        filtered = filtered.filter((job) =>
          job.location.toLowerCase().includes(locationInput.toLowerCase())
        );
      }
    }

    if (filtered.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }

    setFilteredJobs(filtered);

    // Clear suggestions when form is submitted
    setSuggestions({ jobTitles: [], locations: [] });
  };

  const handleJobTitleChange = (e) => {
    const value = e.target.value;
    if (isMobile) {
      setCombinedInput(value);
    } else {
      setJobTitleInput(value);
    }

    const jobTitles = predefinedJobKeywords.filter((keyword) =>
      keyword.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions({
      ...suggestions,
      jobTitles: jobTitles.length > 0 ? jobTitles : [],
    });
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    if (isMobile) {
      setCombinedInput(value);
    } else {
      setLocationInput(value);
    }

    const locations = predefinedLocations.filter((loc) =>
      loc.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions({
      ...suggestions,
      locations: locations.length > 0 ? locations : [],
    });
  };

  const handleCombinedInputChange = (e) => {
    const value = e.target.value;
    setCombinedInput(value);

    const jobTitles = predefinedJobKeywords.filter((keyword) =>
      keyword.toLowerCase().includes(value.toLowerCase())
    );
    const locations = predefinedLocations.filter((loc) =>
      loc.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions({
      jobTitles: jobTitles.length > 0 ? jobTitles : [],
      locations: locations.length > 0 ? locations : [],
    });
  };

//handle suggestion click

  const handleSuggestionClick = (type, value) => {
    if (isMobile) {
      setCombinedInput(value);
    } else if (type === "jobTitle") {
      setJobTitleInput(value);
      setSuggestions({ ...suggestions, jobTitles: [] });
    } else if (type === "location") {
      setLocationInput(value);
      setSuggestions({ ...suggestions, locations: [] });
    }
  };
  //handle clear input 
  const handleClearInput = (type) => {
    if (isMobile) {
      setCombinedInput("");
    } else if (type === "jobTitle") {
      setJobTitleInput("");
      setSuggestions({ ...suggestions, jobTitles: [] });
    } else if (type === "location") {
      setLocationInput("");
      setSuggestions({ ...suggestions, locations: [] });
    }
  };

  const renderSkeleton = () => (
    <Card className="h-100 p-0 job-card">
      <CardBody className="p-2 d-flex flex-column">
        <div className="d-flex job-image">
          <Skeleton height={90} width={90} circle={true} />
          <div className="job-post">
            <h3>
              <Skeleton width={120} />
            </h3>
            <h6>
              <Skeleton width={200} />
            </h6>
          </div>
        </div>
        <div className="job-details">
          <div className="d-flex gap-2">
            <span>Experience:</span>
            <Skeleton width={60} />
          </div>
          <div className="d-flex gap-2">
            <span>Salary:</span>
            <Skeleton width={60} />
          </div>
          <div className="d-flex gap-2">
            <span>Mode:</span>
            <Skeleton width={60} />
          </div>
          <div className="d-flex gap-2">
            <span>Location:</span>
            <Skeleton width={60} />
          </div>
        </div>
      </CardBody>
      <CardFooter className="p-2 d-flex justify-content-between align-items-center card-footer">
        <h6>
          Posted: <Skeleton width={80} />
        </h6>
        <RiArrowRightLine fontSize={25} />
      </CardFooter>
    </Card>
  );

  return (
    <>

    {/* search bar for mobile devices*/}
      <form
        className="d-flex align-items-center search search-mobile"
        style={{ maxWidth: "630px", margin: "0 auto" }}
        onSubmit={handleSubmit}
      >
        {isMobile ? (
          <>
            <FaSearch
              style={{
                marginLeft: "10px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            />
            <div className="position-relative w-100">
              <input
                type="text"
                className="form-control border-0"
                placeholder="Job title, keywords or location"
                aria-label="Job title, keywords, or location"
                style={{ borderRadius: "0" }}
                value={combinedInput}
                onChange={handleCombinedInputChange}
              />
            
              {combinedInput && (
                <IoMdClose
                  className="clear-input-icon"
                  onClick={() => setCombinedInput("")}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                />
              )}
           
              {combinedInput &&
                (suggestions.jobTitles.length > 0 ||
                  suggestions.locations.length > 0) && (
                  <ul className="suggestions-list">
                    {suggestions.jobTitles.map((suggestion, index) => (
                      <li
                        key={index}
                        className="suggestion-item"
                        onClick={() =>
                          handleSuggestionClick("jobTitle", suggestion)
                        }
                      >
                        {suggestion}
                      </li>
                    ))}
                    {suggestions.locations.map((suggestion, index) => (
                      <li
                        key={index}
                        className="suggestion-item"
                        onClick={() =>
                          handleSuggestionClick("location", suggestion)
                        }
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          </>
        ) : (
          <>
          {/* search bar for desktop */}
           
            <FaSearch
              style={{
                marginLeft: "10px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            />
            <div className="position-relative w-50">
              <input
                type="text"
                className="form-control border-0 line-height"
                placeholder="Job title, keywords"
                aria-label="Job title, keywords"
                style={{
                  borderRight: "",
                  borderTopRightRadius: "0",
                  borderBottomRightRadius: "0",
                  
                }}
                value={jobTitleInput}
                onChange={handleJobTitleChange}
              />
              {jobTitleInput && (
                <IoMdClose
                  className="clear-input-icon"
                  onClick={() => handleClearInput("jobTitle")}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                />
              )}
              {jobTitleInput && suggestions.jobTitles.length > 0 && (
                <ul className="suggestions-list">
                  {suggestions.jobTitles.map((suggestion, index) => (
                    <li
                      key={index}
                      className="suggestion-item"
                      onClick={() =>
                        handleSuggestionClick("jobTitle", suggestion)
                      }
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
         
            <FaLocationDot
              style={{
                marginLeft: "10px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            />
            <div className="position-relative w-50">
              <input
                type="text"
                className="form-control2"
                placeholder="Location"
                aria-label="Location"
                style={{
                  borderLeft: "",
                  borderTopLeftRadius: "0",
                  borderBottomLeftRadius: "0",
                }}
                value={locationInput}
                onChange={handleLocationChange}
              />
              {locationInput && (
                <IoMdClose
                  className="clear-input-icon"
                  onClick={() => handleClearInput("location")}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                />
              )}
              {locationInput && suggestions.locations.length > 0 && (
                <ul className="suggestions-list">
                  {suggestions.locations.map((suggestion, index) => (
                    <li
                      key={index}
                      className="suggestion-item"
                      onClick={() =>
                        handleSuggestionClick("location", suggestion)
                      }
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        )}
      
        <button
          type="submit"
          className="btn btn-search text-white"
          style={{ backgroundColor: "#ffa53b", borderColor: "#ffa53b" }}
        >
          Find jobs
        </button>
      </form>
  


  {/* job card */}
      <section className="faq-box-contain section-b-space">
        <Container>
          {noResults && (
            <div className=" warning1" role="alert">
              Please enter a valid keyword for job title and location.
            </div>
          )}
          {error && (
            <div className=" danger1 " role="alert">
              Network error, please try again later.
            </div>
          )}
          <div className="job-grid">
            {loading
              ? Array.from({ length: 5 }).map((_, index) => renderSkeleton())
              : filteredJobs.map((job, index) => (
                  <Card
                    className="h-80 p-0 job-card position-relative  text-capitalize"
                    key={index}
                    // onClick={() => router.push(`/job/${job.id}`)} // Navigate on card click
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      className="position-absolute px-3 py-1 end-0 bg-theme text-white"
                      style={{ borderTopRightRadius: "inherit" }}
                    >
                      {job?.jobTypeName}
                    </div>
                    <CardBody className="p-2 d-flex flex-column">
                      <div className="d-flex job-image">
                        <Image
                          src={jobimage}
                          height={90}
                          width={90}
                          className="rounded img-thumbnail theme-border"
                          alt="loading"
                        />
                        <div className="job-post">
                          <h3>{job?.name}</h3>
                          <h6>{job?.shortDescription}</h6>
                        </div>
                      </div>
                      <div className="job-details">
                        <div className="d-flex gap-2">
                          <span className="font-weight-bold">Experience:</span>
                          <span>{job?.experience} years</span>
                        </div>
                        <div className="d-flex gap-2">
                          <span className="font-weight-bold">Salary:</span>
                          <span>
                            {INR_LOG}
                            {job?.salary}
                          </span>
                        </div>
                        <div className="d-flex gap-2">
                          <span className="font-weight-bold">Mode:</span>
                          <span>{job?.mode}</span>
                        </div>
                        <div className="d-flex gap-2">
                          <span className="font-weight-bold">Location:</span>
                          <span>{job?.location}</span>
                        </div>
                      </div>
                    </CardBody>
                    <CardFooter className="py-3 d-flex justify-content-between align-items-center card-footer">
                      <span>Posted on: {job?.updatedAt}</span>
                      <h5>
                        <b>Apply</b>
                      </h5>
                    </CardFooter>
                  </Card>
                ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Job;
