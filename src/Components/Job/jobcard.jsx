
// 'use client'
// import { useEffect, useContext, useState } from 'react';
// import { RiArrowRightLine, RiCloseCircleLine } from 'react-icons/ri';
// import { Card, CardBody, CardFooter, Container } from 'reactstrap';
// import I18NextContext from '@/Helper/I18NextContext';
// import { useTranslation } from '@/app/i18n/client';
// import { GET_JOB, INR_LOG } from '@/Config/Constant';
// import axios from 'axios';
// import Image from 'next/image';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import jobimage from '../../../public/assets/images/about-avatar.png';
// import { IoMdClose } from "react-icons/io";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaSearch } from "react-icons/fa";
// import { TbSearch } from "react-icons/tb";
// import { HiOutlineSearch } from "react-icons/hi";
// import './job.css';


// const BrowserJob = () => {
//   const { i18Lang } = useContext(I18NextContext);
//   const { t } = useTranslation(i18Lang, 'common');
//   const [jobs, setJobs] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [jobTitleInput, setJobTitleInput] = useState('');
//   const [locationInput, setLocationInput] = useState('');
//   const [suggestions, setSuggestions] = useState({ jobTitles: [], locations: [] });
//   const [noResults, setNoResults] = useState(false);

//   const predefinedJobKeywords = ['Engineer', 'Manager', 'Developer', 'Designer', 'Analyst'];
//   const predefinedLocations = ['Surat', 'Gujarat', 'India', 'Dindoli', 'Pune', 'Mumbai'];

//   useEffect(() => {
//     const fetchJobData = async () => {
//       try {
//         const response = await axios.put(GET_JOB, {}, {
//           headers: {
//             'token': 'essentials',
//             'Content-Type': 'application/json',
//           },
//         });
//         if (response.data.message === "Data Found") {
//           setJobs(response.data.data); // assuming response.data.data is an array
//           setFilteredJobs(response.data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching job data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobData();
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let filtered = jobs;

//     if (jobTitleInput) {
//       filtered = filtered.filter(job => job.name.toLowerCase().includes(jobTitleInput.toLowerCase()));
//     }

//     if (locationInput) {
//       filtered = filtered.filter(job => job.location.toLowerCase().includes(locationInput.toLowerCase()));
//     }

//     if (filtered.length === 0) {
//       setNoResults(true);
//     } else {
//       setNoResults(false);
//     }

//     setFilteredJobs(filtered);

//     // Clear suggestions when form is submitted
//     setSuggestions({ jobTitles: [], locations: [] });
//   };

//   const handleJobTitleChange = (e) => {
//     const value = e.target.value;
//     setJobTitleInput(value);

//     const jobTitles = predefinedJobKeywords.filter(keyword => keyword.toLowerCase().includes(value.toLowerCase()));
//     setSuggestions({ ...suggestions, jobTitles: jobTitles.length > 0 ? jobTitles : [] });
//   };

//   const handleLocationChange = (e) => {
//     const value = e.target.value;
//     setLocationInput(value);

//     const locations = predefinedLocations.filter(loc => loc.toLowerCase().includes(value.toLowerCase()));
//     setSuggestions({ ...suggestions, locations: locations.length > 0 ? locations : [] });
//   }; 

  
//   const handleSuggestionClick = (type, value) => {
//     if (type === 'jobTitle') {
//       setJobTitleInput(value);
//       setSuggestions({ ...suggestions, jobTitles: [] });
//     } else if (type === 'location') {
//       setLocationInput(value);
//       setSuggestions({ ...suggestions, locations: [] });
//     }
//   };

//   const handleClearInput = (type) => {
//     if (type === 'jobTitle') {
//       setJobTitleInput('');
//       setSuggestions({ ...suggestions, jobTitles: [] });
//     } else if (type === 'location') {
//       setLocationInput('');
//       setSuggestions({ ...suggestions, locations: [] });
//     }
//   };

//   const renderSkeleton = () => (
//     <Card className='h-100 p-0 job-card'>
//       <CardBody className='p-2 d-flex flex-column'>
//         <div className='d-flex job-image'>
//           <Skeleton height={90} width={90} circle={true} />
//           <div className='job-post'>
//             <h3><Skeleton width={120} /></h3>
//             <h6><Skeleton width={200} /></h6>
//           </div>
//         </div>
//         <div className='job-details'>
//           <div className='d-flex gap-2'>
//             <span>Experience:</span>
//             <Skeleton width={60} />
//           </div>
//           <div className='d-flex gap-2'>
//             <span>Salary:</span>
//             <Skeleton width={60} />
//           </div>
//           <div className='d-flex gap-2'>
//             <span>Mode:</span>
//             <Skeleton width={60} />
//           </div>
//           <div className='d-flex gap-2'>
//             <span>Location:</span>
//             <Skeleton width={60} />
//           </div>
//         </div>
//       </CardBody>
//       <CardFooter className='p-2 d-flex justify-content-between align-items-center card-footer'>
//         <h6>Posted: <Skeleton width={80} /></h6>
//         <RiArrowRightLine fontSize={25} />
//       </CardFooter>
//     </Card>
//   );

//   return (
//     <>
//       <form
//         className="d-flex align-items-center search"
//         style={{ maxWidth: '630px', margin: '0 auto' }}
//         onSubmit={handleSubmit}
//       >
//         <FaSearch style={{ marginLeft: '10px', fontSize: '16px', fontWeight: 'bold' }} />
//         <div className="position-relative w-50">
//           <input 
//             type="text" 
//             className="form-control1" 
//             placeholder="Job title, keywords " 
//             aria-label="Job title, keywords, or company"
//             style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }}
//             value={jobTitleInput }
//             onChange={handleJobTitleChange }

//           />
//           {jobTitleInput && (
//             <IoMdClose
//               className="clear-input-icon" 
//               onClick={() => handleClearInput('jobTitle')}
//               style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
//             />
//           )}
//           {jobTitleInput && suggestions.jobTitles.length > 0 && (
//             <ul className="suggestions-list">
//               {suggestions.jobTitles.map((suggestion, index) => (
//                 <li 
//                   key={index} 
//                   className="suggestion-item" 
//                   onClick={() => handleSuggestionClick('jobTitle', suggestion)}
//                 >
//                   {suggestion}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         <div className='divide' > 
//           </div>
        
//         <FaLocationDot style={{ color: '' }} />
//         <div className="position-relative w-50">
//           <input 
//             type="text" 
//             className="form-control2" 
//             placeholder="Surat, Gujarat" 
//             aria-label="Location"
//             style={{ borderLeft: '', borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}
//             value={locationInput}
//             onChange={handleLocationChange}
//           />
//           {locationInput && (
//             <IoMdClose
//               className="clear-input-icon" 
//               onClick={() => handleClearInput('location')}
//               style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
//             />
//           )}
//           {locationInput && suggestions.locations.length > 0 && (
//             <ul className="suggestions-list">
//               {suggestions.locations.map((suggestion, index) => (
//                 <li 
//                   key={index} 
//                   className="suggestion-item" 
//                   onClick={() => handleSuggestionClick('location', suggestion)}
//                 >
//                   {suggestion}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//         <button 
//           type="submit" 
//           className="btn btn-search"
//           style={{ backgroundColor: '#ffa53b', borderColor: '#ffa53b' }}
//         >
//           Find jobs
//         </button>
//       </form>

     
    

// <section className='faq-box-contain section-b-space'>
//         <Container>
//           {noResults && (
//             <div className="alert alert-warning" role="alert">
//               Please enter a valid keyword for job title and location.
//             </div>
//           )}
//           <div className='job-grid'>
//             {loading ? (
//               Array.from({ length: 5 }).map((_, index) => renderSkeleton())
//             ) : (
//               filteredJobs.map((job, index) => (
//                 <Card
//                   className='h-80 p-0 job-card position-relative text-capitalize'
//                   key={index}
//                   // onClick={() => router.push(`/job/${job.id}`)} // Navigate on card click
//                   style={{ cursor: 'pointer' }}
//                 >
//                    <div className="position-absolute px-3 py-1 end-0 bg-theme text-white" style={{borderTopRightRadius:'inherit'}}>
//                       {job?.jobTypeName}
//                    </div>
//                   <CardBody className='p-2 d-flex flex-column'>

                  
//                     <div className='d-flex job-image'>
//                       <Image
//                         src={jobimage}
//                         height={90}
//                         width={90}
//                         className="rounded img-thumbnail theme-border"
//                         alt='loading'
//                       />
//                       <div className='job-post'>
//                         <h3>{job?.name}</h3>
//                         <h6>{job?.shortDescription}</h6>
//                       </div>



//                     </div>
//                     <div className='job-details'>
//                       <div className='d-flex gap-2'>
//                         <span className="font-weight-bold">Experience:</span>
//                         <span>{job?.experience} years</span>
//                       </div>
//                       <div className='d-flex gap-2'>
//                         <span className="font-weight-bold">Salary:</span>
//                         <span>{INR_LOG}{job?.salary}</span>
//                       </div>
//                       <div className='d-flex gap-2'>
//                         <span className="font-weight-bold">Mode:</span>
//                         <span>{job?.mode}</span>
//                       </div>
//                       <div className='d-flex gap-2'>
//                         <span className="font-weight-bold">Location:</span>
//                         <span>{job?.location}</span>
//                       </div>
//                     </div>
//                   </CardBody>
//                   <CardFooter className='py-3 d-flex justify-content-between align-items-center card-footer'>
//                       <span>Posted on: {job?.updatedAt}</span>
//                       <h5><b>Apply</b></h5>

//                   </CardFooter>
//                 </Card>
//               ))
//             )}
//           </div>
//         </Container>
//       </section>

//     </>
//   );
// };

// export default BrowserJob;




'use client'

import { useEffect, useContext, useState } from 'react';
import { RiArrowRightLine, RiCloseCircleLine } from 'react-icons/ri';
import { Card, CardBody, CardFooter, Container } from 'reactstrap';
import I18NextContext from '@/Helper/I18NextContext';
import { useTranslation } from '@/app/i18n/client';
import { GET_JOB, INR_LOG } from '@/Config/Constant';
import axios from 'axios';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import jobimage from '../../../public/assets/images/about-avatar.png';
import { IoMdClose } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import './job.css';

const BrowserJob = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jobTitleInput, setJobTitleInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [unifiedSearchInput, setUnifiedSearchInput] = useState('');
  const [suggestions, setSuggestions] = useState({ jobTitles: [], locations: [], unified: [] });
  const [noResults, setNoResults] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const predefinedJobKeywords = ['trainer', 'zumba trainer', 'personal trainer', 'fitness trainer'];
  const predefinedLocations = ['Dindoli', 'navagam', 'udhna', 'godadara', 'pandesara', ];

  //api calling 
  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await axios.put(GET_JOB, {}, {
          headers: {
            'token': 'essentials',
            'Content-Type': 'application/json',
          },
        });
        if (response.data.message === "Data Found") {
          setJobs(response.data.data); // assuming response.data.data is an array
          setFilteredJobs(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching job data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobData();

    // Set the initial screen size
    setIsMobile(window.innerWidth <= 768);

    // Update the screen size on window resize
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
 
  //searching job
  const handleSubmit = (e) => {
    e.preventDefault();
    let filtered = jobs;

    if (jobTitleInput) {
      filtered = filtered.filter(job => job.name.toLowerCase().includes(jobTitleInput.toLowerCase()));
    }

    if (locationInput) {
      filtered = filtered.filter(job => job.location.toLowerCase().includes(locationInput.toLowerCase()));
    }

    if (filtered.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }

    setFilteredJobs(filtered);

    // Clear suggestions when form is submitted
    setSuggestions({ jobTitles: [], locations: [], unified: [] });
  };
  
  //unified search where i can search both location and job 
 
  const handleUnifiedSubmit = (e) => {
    e.preventDefault();
    const searchQuery = unifiedSearchInput.toLowerCase();
    const filtered = jobs.filter(job =>
      `${job.name.toLowerCase()} ${job.location.toLowerCase()}`.includes(searchQuery)
    );

    if (filtered.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }

    setFilteredJobs(filtered);
  };

  //job title change
  const handleJobTitleChange = (e) => {
    const value = e.target.value;
    setJobTitleInput(value);

    const jobTitles = predefinedJobKeywords.filter(keyword => keyword.toLowerCase().includes(value.toLowerCase()));
    setSuggestions({ ...suggestions, jobTitles: jobTitles.length > 0 ? jobTitles : [] });
  };


  // location change
  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocationInput(value);

    const locations = predefinedLocations.filter(loc => loc.toLowerCase().includes(value.toLowerCase()));
    setSuggestions({ ...suggestions, locations: locations.length > 0 ? locations : [] });
  };

  //unified search change

  const handleUnifiedSearchChange = (e) => {
    const value = e.target.value;
    setUnifiedSearchInput(value);

    const combinedSuggestions = [
      ...predefinedJobKeywords,
      ...predefinedLocations
    ].filter(keyword => keyword.toLowerCase().includes(value.toLowerCase()));

    setSuggestions({ ...suggestions, unified: combinedSuggestions.length > 0 ? combinedSuggestions : [] });
  };


  //suggestioin click
  const handleSuggestionClick = (type, value) => {
    if (type === 'jobTitle') {
      setJobTitleInput(value);
      setSuggestions({ ...suggestions, jobTitles: [] });
    } else if (type === 'location') {
      setLocationInput(value);
      setSuggestions({ ...suggestions, locations: [] });
    } else if (type === 'unified') {
      setUnifiedSearchInput(value);
      setSuggestions({ ...suggestions, unified: [] });
    }
  };
 

  //clear input
  const handleClearInput = (type) => {
    if (type === 'jobTitle') {
      setJobTitleInput('');
      setSuggestions({ ...suggestions, jobTitles: [] });
    } else if (type === 'location') {
      setLocationInput('');
      setSuggestions({ ...suggestions, locations: [] });
    } else if (type === 'unified') {
      setUnifiedSearchInput('');
      setSuggestions({ ...suggestions, unified: [] });
    }
  };

  const renderSkeleton = () => (
    <Card className='h-100 p-0 job-card'>
      <CardBody className='p-2 d-flex flex-column'>
        <div className='d-flex job-image'>
          <Skeleton height={90} width={90} circle={true} />
          <div className='job-post'>
            <h3><Skeleton width={120} /></h3>
            <h6><Skeleton width={200} /></h6>
          </div>
        </div>
        <div className='job-details'>
          <div className='d-flex gap-2'>
            <span>Experience:</span>
            <Skeleton width={60} />
          </div>
          <div className='d-flex gap-2'>
            <span>Salary:</span>
            <Skeleton width={60} />
          </div>
          <div className='d-flex gap-2'>
            <span>Mode:</span>
            <Skeleton width={60} />
          </div>
          <div className='d-flex gap-2'>
            <span>Location:</span>
            <Skeleton width={60} />
          </div>
        </div>
      </CardBody>
      <CardFooter className='p-2 d-flex justify-content-between align-items-center card-footer'>
        <h6>Posted: <Skeleton width={80} /></h6>
        <RiArrowRightLine fontSize={25} />
      </CardFooter>
    </Card>
  );

  return (
    <>
      {/* Split Search Bar */}
      {!isMobile && (
        <form
          className="d-flex align-items-center search"
          style={{ maxWidth: '630px', margin: '0 auto' }}
          onSubmit={handleSubmit}
        >
          <FaSearch style={{ marginLeft: '10px', fontSize: '16px', fontWeight: 'bold' }} />
          <div className="position-relative w-50">
            <input 
              type="text" 
              className="form-control1" 
              placeholder="Job title, keywords " 
              aria-label="Job title, keywords, or company"
              style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }}
              value={jobTitleInput }
              onChange={handleJobTitleChange }

            />
            {jobTitleInput && (
              <IoMdClose
                className="clear-input-icon" 
                onClick={() => handleClearInput('jobTitle')}
                style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
              />
            )}
            {jobTitleInput && suggestions.jobTitles.length > 0 && (
              <ul className="suggestions-list">
                {suggestions.jobTitles.map((suggestion, index) => (
                  <li 
                    key={index} 
                    className="suggestion-item" 
                    onClick={() => handleSuggestionClick('jobTitle', suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className='divide' /> 
          
          <FaLocationDot style={{ color: '' }} />
          <div className="position-relative w-50">
            <input 
              type="text" 
              className="form-control2" 
              placeholder="Surat, Gujarat" 
              aria-label="Location"
              style={{ borderRadius: '0' }}
              value={locationInput}
              onChange={handleLocationChange}
            />
            {locationInput && (
              <IoMdClose
                className="clear-input-icon" 
                onClick={() => handleClearInput('location')}
                style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
              />
            )}
            {locationInput && suggestions.locations.length > 0 && (
              <ul className="suggestions-list">
                {suggestions.locations.map((suggestion, index) => (
                  <li 
                    key={index} 
                    className="suggestion-item" 
                    onClick={() => handleSuggestionClick('location', suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button 
            type="submit" 
            className="btn btn-search"
            style={{ backgroundColor: '#ffa53b', borderColor: '#ffa53b' }}
          >
            Find jobs
          </button>
        </form>
      )}

      {/* Unified Search Bar */}
      {isMobile && (
        <form
          className="d-flex align-items-center search mt-4 "
          style={{ maxWidth: '630px', margin: '0 auto' }}
          onSubmit={handleUnifiedSubmit}
        >
          <FaSearch style={{ marginLeft: '10px', fontSize: '16px', fontWeight: 'bold' }} />
          <div className="position-relative w-100">
            <input 
              type="text" 
              className="form-control border-0 " 
              placeholder="Job title or location" 
              aria-label="Job title or location"
              style={{ borderRadius: '5px' }}
              value={unifiedSearchInput}
              onChange={handleUnifiedSearchChange}
            />
            {unifiedSearchInput && (
              <IoMdClose
                className="clear-input-icon" 
                onClick={() => handleClearInput('unified')}
                style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
              />
            )}
            {unifiedSearchInput && suggestions.unified.length > 0 && (
              <ul className="suggestions-list">
                {suggestions.unified.map((suggestion, index) => (
                  <li 
                    key={index} 
                    className="suggestion-item" 
                    onClick={() => handleSuggestionClick('unified', suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button 
            type="submit" 
            className="btn btn-search"
            style={{ backgroundColor: '#ffa53b', borderColor: '#ffa53b' }}
          >
            Find Job
          </button>
        </form>
      )}
     
      <section className='faq-box-contain section-b-space'>
        <Container>
          {noResults && (
            <div className="alert alert-warning" role="alert">
              No jobs found matching your search criteria.
            </div>
          )}
          <div className='job-grid'>
            {loading ? (
              Array.from({ length: 5 }).map((_, index) => renderSkeleton())
            ) : (
              filteredJobs.map((job, index) => (
                <Card
                  className='h-80 p-0 job-card position-relative text-capitalize'
                  key={index}
                  // onClick={() => router.push(`/job/${job.id}`)} // Navigate on card click
                  style={{ cursor: 'pointer' }}
                >
                  <div className="position-absolute px-3 py-1 end-0 bg-theme text-white" style={{borderTopRightRadius:'inherit'}}>
                    {job?.jobTypeName}
                  </div>
                  <CardBody className='p-2 d-flex flex-column'>
                    <div className='d-flex job-image'>
                      <Image
                        src={jobimage}
                        height={90}
                        width={90}
                        className="rounded img-thumbnail theme-border"
                        alt='loading'
                      />
                      <div className='job-post'>
                        <h3>{job?.name}</h3>
                        <h6>{job?.shortDescription}</h6>
                      </div>
                    </div>
                    <div className='job-details'>
                      <div className='d-flex gap-2'>
                        <span className="font-weight-bold">Experience:</span>
                        <span>{job?.experience} years</span>
                      </div>
                      <div className='d-flex gap-2'>
                        <span className="font-weight-bold">Salary:</span>
                        <span>{INR_LOG}{job?.salary}</span>
                      </div>
                      <div className='d-flex gap-2'>
                        <span className="font-weight-bold">Mode:</span>
                        <span>{job?.mode}</span>
                      </div>
                      <div className='d-flex gap-2'>
                        <span className="font-weight-bold">Location:</span>
                        <span>{job?.location}</span>
                      </div>
                    </div>
                  </CardBody>
                  <CardFooter className='py-3 d-flex justify-content-between align-items-center card-footer'>
                      <span>Posted on: {job?.updatedAt}</span>
                      <h5><b>Apply</b></h5>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </Container>
      </section>
    </>
  );
};

export default BrowserJob;

