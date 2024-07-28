// 'use client';

// import { useEffect, useContext, useState, useRef } from 'react';
// import { RiArrowRightLine, RiSearchLine } from 'react-icons/ri';
// import { Card, CardBody, CardFooter, InputGroup, Input, Button, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, FormGroup, Label, Input as RadioInput } from 'reactstrap';
// import I18NextContext from '@/Helper/I18NextContext';
// import { useTranslation } from '@/app/i18n/client';
// import { ASSETS_URL, JOB_TOKEN, GET_JOB } from '@/Config/Constant';
// import RatioImage from '@/Utils/RatioImage';
// import axios from 'axios';
// import Pagination from 'react-bootstrap/Pagination';
// import { IoIosSearch } from "react-icons/io";
// import './job.css';

// const BrowserJob = () => {
//   const { i18Lang } = useContext(I18NextContext);
//   const { t } = useTranslation(i18Lang, 'common');
//   const [open, setOpen] = useState('1');
//   const [jobData, setJobData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchValue, setSearchValue] = useState('');
//   const [selectedMode, setSelectedMode] = useState('');
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [dropdownApplied, setDropdownApplied] = useState(false);

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   // Ref to search bar container
//   const searchBarRef = useRef(null);

//   // State for suggestions
//   const [suggestions, setSuggestions] = useState([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   const toggle = (id) => {
//     if (open === id) {
//       setOpen();
//     } else {
//       setOpen(id);
//     }
//   };

//   const fetchJobs = async (search = '', mode = '') => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.put(GET_JOB, {
//         search,
//         mode,
//       },
//       {
//         headers:
//         {

//           token: 'essentials',
//           'Content-Type': 'application/json',
//         },

//       }
//     );

//     console.log('response :: ', response)

//       if (response) {
//         const filteredJobs = response.data.filter(job =>
//           job.name.toLowerCase().includes(search.toLowerCase()) ||
//           job.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
//           job.longDescription.toLowerCase().includes(search.toLowerCase()) ||
//           job.location.toLowerCase().includes(search.toLowerCase()) ||
//           (mode && job.mode.toLowerCase() === mode.toLowerCase())
//         );
//         setJobData(filteredJobs);
//       } else {
//         throw new Error('Unexpected response data format');
//       }
//       setLoading(false);
//     } catch (error) {
//       setError('Error fetching data. Please try again later.');
//       setLoading(false);
//     }
//   };

//   const handleSearch = () => {
//     setCurrentPage(1); // Reset to first page on search
//     fetchJobs(searchValue, selectedMode);
//   };

//   const handleModeSelect = (mode) => {
//     setSelectedMode(mode);
//   };

//   const handleClear = () => {
//     setSelectedMode('');
//     setDropdownApplied(false);
//     setDropdownOpen(false);
//     setCurrentPage(1); // Reset to first page on clear
//     fetchJobs(searchValue, '');
//   };

//   const handleApply = () => {
//     setDropdownApplied(true);
//     setDropdownOpen(false);
//     setCurrentPage(1); // Reset to first page on apply
//     fetchJobs(searchValue, selectedMode);
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setSearchValue(suggestion);
//     setShowSuggestions(false);
//   };

//   const handleFocus = () => {
//     setShowSuggestions(true);
//   };

//   const handleBlur = () => {
//     setTimeout(() => {
//       setShowSuggestions(false);
//     }, 100);
//   };

//   useEffect(() => {
//     fetchJobs('', selectedMode);

//     // Mock suggestions, replace with your dynamic suggestions
//     setSuggestions(['Developer', 'Designer', 'Project Manager', 'Tester', 'Support Engineer']);
//   }, []);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = jobData.slice(indexOfFirstItem, indexOfLastItem);

//   const renderPageNumbers = () => {
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(jobData.length / itemsPerPage); i++) {
//       pageNumbers.push(
//         <Pagination.Item key={i} active={i === currentPage} onClick={() => handlePageChange(i)}>
//           {i}
//         </Pagination.Item>
//       );
//     }
//     return pageNumbers;
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     searchBarRef.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <>
      // <div ref={searchBarRef} className='search-box1'>
      //   <div className="search-container">
      //     <div className="search-icon">
      //       <span><IoIosSearch /> </span>
      //     </div>
      //     <input
      //       type="search"
      //       className="search-bar"
      //       placeholder="Search..."
      //       value={searchValue}
      //       onChange={(e) => setSearchValue(e.target.value)}
      //       onFocus={handleFocus}
      //       onBlur={handleBlur}
      //     />
      //     <button className="find-job-btn" onClick={handleSearch}>Find Job</button>
      //     {showSuggestions && (
      //       <ul className="suggestions-list">
      //         {suggestions.map((suggestion, index) => (
      //           <li key={index} onMouseDown={() => handleSuggestionClick(suggestion)}>
      //             {suggestion}
      //           </li>
      //         ))}
      //       </ul>
      //     )}
      //   </div>
      
          
//         <div className='mode-selection'>
//           <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)} >
           
//             <DropdownToggle className='job-mode' caret style={{ border: dropdownApplied ? '2px solid white ' : 'none' }}>
//               Select Job Mode
//             </DropdownToggle>

//             <DropdownMenu > 

//               <DropdownItem toggle={false} >
//                 <FormGroup check>
//                   <Label check>
//                     <RadioInput type="checkbox" checked={selectedMode === 'ONLINE'} onChange={() => handleModeSelect('ONLINE')} /> ONLINE
//                   </Label>
//                 </FormGroup>
//               </DropdownItem>
//               <DropdownItem toggle={false}>
//                 <FormGroup check>
//                   <Label check>
//                     <RadioInput type="checkbox" checked={selectedMode === 'OFFLINE'} onChange={() => handleModeSelect('OFFLINE')} /> OFFLINE
//                   </Label>
//                 </FormGroup>
//               </DropdownItem>
//               <DropdownItem divider />
//               <DropdownItem onClick={handleClear}>Clear</DropdownItem>
//               <DropdownItem onClick={handleApply}>Apply</DropdownItem>

//             </DropdownMenu>
//           </Dropdown>
//         </div>
        
//       </div>

//       {loading && <div className="centered-message">Loading...</div>}
//       {error && <div className="centered-message">{error}</div>}

//       {!loading && !error && (
        // <section className='faq-box-contain section-b-space'>
        //   <Container>
        //     <div className='job-grid'>
        //       {currentItems.map(job => (
        //         <Card className='h-100 p-0 job-card' key={job.id}>
        //           <CardBody className='p-2 d-flex flex-column'>
        //             <div className='d-flex job-image'>
        //               <RatioImage
        //                 src={ASSETS_URL + job.image}
        //                 height={90}
        //                 width={90}
        //                 className="rounded"
        //               />
        //               <div className='job-post'>
        //                 <h3>{job.name}</h3>
        //                 <h6>{job.shortDescription}</h6>
        //               </div>
        //             </div>
        //             <div className='job-details'>
        //               <div className='d-flex gap-2'>
        //                 <span>Experience:</span>
        //                 <span>{job.experience}</span>
        //               </div>
        //               <div className='d-flex gap-2'>
        //                 <span>Salary:</span>
        //                 <span>{job.salary}</span>
        //               </div>
        //               <div className='d-flex gap-2'>
        //                 <span>Location:</span>
        //                 <span>{job.location}</span>
        //               </div>
        //               <p>{job.longDescription}</p>
        //               <div className='d-flex gap-2'>
        //                 <span>Mode:</span>
        //                 <span>{job.mode}</span>
        //               </div>
        //             </div>
        //           </CardBody>
        //           <CardFooter className='p-2 d-flex justify-content-between align-items-center'>
        //             <h6>Posted: {job.CreatedAt}</h6>
        //             <RiArrowRightLine fontSize={25} />
        //           </CardFooter>
        //         </Card>
        //       ))}
        //     </div>
        //     <div className='pagination'>
        //       <Pagination>{renderPageNumbers()}</Pagination>
        //     </div>
        //   </Container>
        // </section>
//       )}
//     </>
//   );
// }

// export default BrowserJob;



// 'use client';

// import { useContext, useState  } from 'react';
// import { RiArrowDownSLine, RiArrowRightLine, RiShoppingBag2Line, RiShoppingBag3Line } from 'react-icons/ri';
// import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, CardFooter, Col, Container, Row } from 'reactstrap';

// import I18NextContext from '@/Helper/I18NextContext';
// import { useTranslation } from '@/app/i18n/client';
// import { jobData , ASSETS_URL } from '@/Config/Constant';
// import RatioImage from '@/Utils/RatioImage';
// import { FaPaperPlane } from "react-icons/fa";
// import { GET_JOB } from '@/Config/Constant';

// const BrowserJob = () => {
 
  

//   const handleMessageClick = (userId) => {
//     history.push(`/message/${userId}`);
//   };


//   const { i18Lang } = useContext(I18NextContext);
//   const { t } = useTranslation(i18Lang, 'common');
//   const [open, setOpen] = useState('1');
//   const toggle = (id) => {
//     if (open === id) {
//       setOpen();
//     } else {
//       setOpen(id);
//     }
//   };

//   return (
    // <>
    //   <section className='faq-box-contain section-b-space'>
    //     <Container>
    //       <Row>
    //       {
//             jobData?.map((e, index) => {
//               return (
//                 <>
                  // <Col lg='4' sm='6' xs='12' >
                  //   <Card className='h-100 p-0 job-card' >
                  //     <CardBody className='p-2'>
                  //       <Row>
                  //         <Col lg='4' xs='12'>
                  //           <div className='h-100'>
                  //             <RatioImage
                  //               src={ASSETS_URL + e?.jobThumbnail}
                  //               height={90}
                  //               width={90}
                  //               className="rounded"
                  //             />
                  //           </div>
                  //         </Col>
                  //         <Col lg='8' xs='12'>
                  //           <div className='d-flex justify-content-start flex-column gap-2 h-100 border-2 border-bottom'>
                  //             <h3>{e?.jobTitle}</h3>
                  //             <h6>{e?.jobShortDescription}</h6>
                  //           </div>
                  //         </Col>
                  //       </Row>
                  //       <Row>
                  //         <Col lg='12' mt='3'> 
                  //           <div className='d-flex flex-column gap-1'>
                  //             <div className='d-flex gap-2'>
                  //               <span>Exp:</span>
                  //               <span>{e?.jobExeperince}</span>
                  //             </div>
                  //             <div className='d-flex gap-2'>
                  //               <span>Salary:</span>
                  //               <span>{e?.jobSalary?? 'Not Disclosed'}</span>
                  //             </div>
                  //             <div className='d-flex gap-2'>
                  //               <span>Location:</span>
                  //               <span>{e?.jobLocation?? 'Remote'}</span>
                  //             </div>
                  //             <div>
                  //               <p>{e?.jobDescription}</p>
                  //             </div>
                  //           </div>
                               
                  //               <div className='button-holder' >
                  //             <button  className='btn deal-button btn btn-secondary' onClick={() => handleMessageClick(userId) }
                  //             // <button  className='btn deal-button btn btn-secondary' onClick={() => handleMessageClick(userId) }
                                
                  //             >
                  //                Message <FaPaperPlane className="icon" />
                  //             </button>
                  //           </div>

                  //         </Col>
                  //       </Row>
              
                  //     </CardBody>
                     
                  //     <CardFooter className='p-2 ' >
                  //       <div className='d-flex justify-content-between align-items-center'>
                  //         <div>
                  //           <h6>Posted: {e?.jobCreatedAt}</h6>
                  //         </div>
                  //         <div>
                  //           <RiArrowRightLine fontSize={25} />
                  //         </div>
                  //       </div>
                  //     </CardFooter>
                  //   </Card>
                  // </Col>
//                 </>
//               )
//             })
//           }
//           </Row>
//           <Row className='d-none'>
//             <Col xl={5}>
//               <div className='faq-contain'>
//                 <h2>{t('FrequentlyAskedQuestions')}</h2>
//                 <p>{t('faqDescription')}</p>
//               </div>
//             </Col>
//             <Col xl={7}>
//               <div className='faq-accordion'>

//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
 
    
//  </>
//   );
// };

// export default BrowserJob;





// 'use client'
// import { useEffect, useContext, useState, useRef } from 'react';
// import { RiArrowRightLine, RiSearchLine } from 'react-icons/ri';
// import { Card, CardBody, CardFooter, InputGroup, Input, Button, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, FormGroup, Label, Input as RadioInput } from 'reactstrap';
// import I18NextContext from '@/Helper/I18NextContext';
// import { useTranslation } from '@/app/i18n/client';
// import { GET_JOB } from '@/Config/Constant';

// import axios from 'axios';
// import  './job.css';
// import Image from 'next/image';


// const BrowserJob = () => {
//   const { i18Lang } = useContext(I18NextContext);
//   const { t } = useTranslation(i18Lang, 'common');
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     const fetchJobData = async () => {
//       try {
//         const response = await axios.put( GET_JOB , {}, {
//           headers: {
//             'token': 'essentials',
//             'Content-Type': 'application/json'
//           }
//         });
//         if (response.data.message === "Data Found") {
//           setJobs(response.data.data); // assuming response.data.data is an array
//         }
//       } catch (error) {
//         console.error("Error fetching job data:", error);
//       }
//     };

//     fetchJobData();
//   }, []);

//   if (!jobs.length) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <> 

//         <section className='faq-box-contain section-b-space'>
//           <Container>
//             <div className='job-grid'>
//             {jobs.map((job, index) => (
//                 <Card className='h-100 p-0 job-card' key={index}>
//                   <CardBody className='p-2 d-flex flex-column'>
//                     <div className='d-flex job-image'>
//                       <Image
//                         src = ''
//                         // src = {ASSETS_URL}
//                         height={90}
//                         width={90}
//                         className="rounded"
//                         alt=''
//                       />
//                       <div className='job-post'>
//                         <h3>{job.name}</h3>
//                         <h6>{job.shortDescription}</h6>
//                       </div>
//                     </div>
//                     <div className='job-details'>
//                       <div className='d-flex gap-2'>
//                         <span>Experience:</span>
//                         <span>{job.experience} years</span>
//                       </div>
//                       <div className='d-flex gap-2'>
//                         <span>Salary:</span>
//                         <span>{job.salary}</span>
//                       </div>

//                       <div className='d-flex gap-2'>
//                         <span>Mode:</span>
//                         <span>{job.mode}</span>
//                       </div>
                     
//                       <div className='d-flex gap-2'>
//                         <span>Location:</span>
//                         <span>{job.location}</span>
//                       </div>

//                     </div>
//                   </CardBody>
//                   <CardFooter className='p-2 d-flex justify-content-between align-items-center card-footer'>
//                     <h6>Posted: {job.CreatedAt}</h6>
//                     <RiArrowRightLine fontSize={25} />
//                   </CardFooter>
//                 </Card>
//               ))}
//             </div>          
//           </Container>
//         </section>


//     </>
//   );
// };


// export default BrowserJob;



// 'use client'
// import { useEffect, useContext, useState } from 'react';
// import { RiArrowRightLine } from 'react-icons/ri';
// import { Card, CardBody, CardFooter, Container } from 'reactstrap';
// import I18NextContext from '@/Helper/I18NextContext';
// import { useTranslation } from '@/app/i18n/client';
// import { GET_JOB } from '@/Config/Constant';
// import axios from 'axios';
// import './job.css';
// import Image from 'next/image';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import jobimage from '../../../public/assets/images/about-avatar.png'


// import './job.css';

// const BrowserJob = () => {
//   const { i18Lang } = useContext(I18NextContext);
//   const { t } = useTranslation(i18Lang, 'common');
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

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
//         }
//       } catch (error) {
//         console.error("Error fetching job data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobData();
//   }, []);

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


//         <form className="d-flex align-items-center search" style={{ maxWidth: '600px', margin: '0 auto' }}>
//       <input 
//         type="text" 
//         className="form-control" 
//         placeholder="Job title, keywords, or company" 
//         aria-label="Job title, keywords, or company"
//         style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }}
//       />
//       <input 
//         type="text" 
//         className="form-control" 
//         placeholder="Surat, Gujarat" 
//         aria-label="Location"
//         style={{ borderLeft: '0', borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}
//       />
//       <button 
//         type="submit" 
//         className="btn btn-primary"
//         style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}
//       >
//         Find jobs
//       </button>
//     </form>

//       <section className='faq-box-contain section-b-space'>
//         <Container>
//           <div className='job-grid'>
//             {loading ? (
//               Array.from({ length: 5 }).map((_, index) => renderSkeleton())
//             ) : (
//               jobs.map((job, index) => (
//                 <Card className='h-100 p-0 job-card' key={index}>
//                   <CardBody className='p-2 d-flex flex-column'>
//                     <div className='d-flex job-image'>
//                       <Image
//                         src={jobimage}
//                         height={90}
//                         width={90}
//                         className="rounded"
//                         alt=''
//                       />
//                       <div className='job-post'>
//                         <h3>{job.name}</h3>
//                         <h6>{job.shortDescription}</h6>
//                       </div>
//                     </div>
//                     <div className='job-details'>
//                       <div className='d-flex gap-2'>
//                         <span>Experience:</span>
//                         <span>{job.experience} years</span>
//                       </div>
//                       <div className='d-flex gap-2'>
//                         <span>Salary:</span>
//                         <span>{job.salary}</span>
//                       </div>
//                       <div className='d-flex gap-2'>
//                         <span>Mode:</span>
//                         <span>{job.mode}</span>
//                       </div>
//                       <div className='d-flex gap-2'>
//                         <span>Location:</span>
//                         <span>{job.location}</span>
//                       </div>
//                     </div>
//                   </CardBody>
//                   <CardFooter className='p-2 d-flex justify-content-between align-items-center card-footer'>
//                     <h6>Posted: {job.CreatedAt}</h6>
//                     <RiArrowRightLine fontSize={25} />
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


// 'use client'
// import { useEffect, useContext, useState } from 'react';
// import { RiArrowRightLine } from 'react-icons/ri';
// import { Card, CardBody, CardFooter, Container } from 'reactstrap';
// import I18NextContext from '@/Helper/I18NextContext';
// import { useTranslation } from '@/app/i18n/client';
// import { GET_JOB } from '@/Config/Constant';
// import axios from 'axios';
// import './job.css';
// import Image from 'next/image';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import jobimage from '../../../public/assets/images/about-avatar.png';

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
//         style={{ maxWidth: '600px', margin: '0 auto' }}
//         onSubmit={handleSubmit}
//       >
//         <div className="position-relative w-50">
//           <input 
//             type="text" 
//             className="form-control" 
//             placeholder="Job title, keywords, or company" 
//             aria-label="Job title, keywords, or company"
//             style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }}
//             value={jobTitleInput}
//             onChange={handleJobTitleChange}
//           />
//           {jobTitleInput && suggestions.jobTitles.length > 0 && (
//             <ul className="list-group position-absolute w-100" style={{ zIndex: 10 }}>
//               {suggestions.jobTitles.map((suggestion, index) => (
//                 <li 
//                   key={index} 
//                   className="list-group-item" 
//                   onClick={() => handleSuggestionClick('jobTitle', suggestion)}
//                 >
//                   {suggestion}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//         <div className="position-relative w-50">
//           <input 
//             type="text" 
//             className="form-control" 
//             placeholder="Surat, Gujarat" 
//             aria-label="Location"
//             style={{ borderLeft: '0', borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}
//             value={locationInput}
//             onChange={handleLocationChange}
//           />
//           {locationInput && suggestions.locations.length > 0 && (
//             <ul className="list-group position-absolute w-100" style={{ zIndex: 10 }}>
//               {suggestions.locations.map((suggestion, index) => (
//                 <li 
//                   key={index} 
//                   className="list-group-item" 
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
//           className="btn btn-primary"
//           style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}
//         >
//           Find jobs
//         </button>
//       </form>

//       <section className='faq-box-contain section-b-space'>
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
//                 <Card className='h-100 p-0 job-card' key={index}>
//                   <CardBody className='p-2 d-flex flex-column'>
//                     <div className='d-flex job-image'>
//                       <Image
//                         src={jobimage}
//                         height={90}
//                         width={90}
//                         className="rounded"
//                         alt=''
//                       />
//                       <div className='job-post'>
//                         <h3>{job.name}</h3>
//                         <h6>{job.shortDescription}</h6>
//                       </div>
//                     </div>
//                     <div className='job-details'>
//                       <div className='d-flex gap-2'>
//                         <span>Experience:</span>
//                         <span>{job.experience} years</span>
//                       </div>
//                       <div className='d-flex gap-2'>
//                         <span>Salary:</span>
//                         <span>{job.salary}</span>
//                       </div>
//                       <div className='d-flex gap-2'>
//                         <span>Mode:</span>
//                         <span>{job.mode}</span>
//                       </div>
//                       <div className='d-flex gap-2'>
//                         <span>Location:</span>
//                         <span>{job.location}</span>
//                       </div>
//                     </div>
//                   </CardBody>
//                   <CardFooter className='p-2 d-flex justify-content-between align-items-center card-footer'>
//                     <h6>Posted: {job.CreatedAt}</h6>
//                     <RiArrowRightLine fontSize={25} />
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



// 'use client'
// import { useEffect, useContext, useState } from 'react';
// import { RiArrowRightLine, RiCloseCircleLine } from 'react-icons/ri';
// import { Card, CardBody, CardFooter, Container } from 'reactstrap';
// import I18NextContext from '@/Helper/I18NextContext';
// import { useTranslation } from '@/app/i18n/client';
// import { GET_JOB } from '@/Config/Constant';
// import axios from 'axios';
// import './job.css';
// import Image from 'next/image';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import jobimage from '../../../public/assets/images/about-avatar.png';
// import { IoMdClose } from "react-icons/io";
// import { IoSearchSharp } from "react-icons/io5";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaSearch } from "react-icons/fa";

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
//         style={{ maxWidth: '600px', margin: '0 auto' }}
//         onSubmit={handleSubmit}
//       >
//         <FaSearch />
//         <div className="position-relative w-50">

          
//           <input 
          
//             type="text" 
//             className="form-control" 
//             placeholder="Job title, keywords, or company" 
//             aria-label="Job title, keywords, or company"
//             style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }}
//             value={jobTitleInput}
//             onChange={handleJobTitleChange}
//           />
//           {jobTitleInput && (
//             <IoMdClose
//               className="clear-input-icon" 
//               onClick={() => handleClearInput('jobTitle')}
//               style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
//             />
//           )}
//           {jobTitleInput && suggestions.jobTitles.length > 0 && (
//             <ul className="list-group position-absolute w-100" style={{ zIndex: 10 }}>
//               {suggestions.jobTitles.map((suggestion, index) => (
//                 <li 
//                   key={index} 
//                   className="list-group-item" 
//                   onClick={() => handleSuggestionClick('jobTitle', suggestion)}
//                 >
//                   {suggestion}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         <FaLocationDot />

//         <div className="position-relative w-50">
        

//           <input 
//             type="text" 
//             className="form-control" 
//             placeholder="Surat, Gujarat" 
//             aria-label="Location"
//             style={{ borderLeft: '0', borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}
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
//             <ul className="list-group position-absolute w-100" style={{ zIndex: 10 }}>
//               {suggestions.locations.map((suggestion, index) => (
//                 <li 
//                   key={index} 
//                   className="list-group-item" 
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
//           style={{ borderTopLeftRadius: '', borderBottomLeftRadius: '' }}
//         >
//           Find jobs
//         </button>
//       </form>

      // <section className='faq-box-contain section-b-space'>
      //   <Container>
      //     {noResults && (
      //       <div className="alert alert-warning" role="alert">
      //         Please enter a valid keyword for job title and location.
      //       </div>
      //     )}
      //     <div className='job-grid'>
      //       {loading ? (
      //         Array.from({ length: 5 }).map((_, index) => renderSkeleton())
      //       ) : (
      //         filteredJobs.map((job, index) => (
      //           <Card className='h-100 p-0 job-card' key={index}>
      //             <CardBody className='p-2 d-flex flex-column'>
      //               <div className='d-flex job-image'>
      //                 <Image
      //                   src={jobimage}
      //                   height={90}
      //                   width={90}
      //                   className="rounded"
      //                   alt=''
      //                 />
      //                 <div className='job-post'>
      //                   <h3>{job.name}</h3>
      //                   <h6>{job.shortDescription}</h6>
      //                 </div>
      //               </div>
      //               <div className='job-details'>
      //                 <div className='d-flex gap-2'>
      //                   <span>Experience:</span>
      //                   <span>{job.experience} years</span>
      //                 </div>
      //                 <div className='d-flex gap-2'>
      //                   <span>Salary:</span>
      //                   <span>{job.salary}</span>
      //                 </div>
      //                 <div className='d-flex gap-2'>
      //                   <span>Mode:</span>
      //                   <span>{job.mode}</span>
      //                 </div>
      //                 <div className='d-flex gap-2'>
      //                   <span>Location:</span>
      //                   <span>{job.location}</span>
      //                 </div>
      //               </div>
      //             </CardBody>
      //             <CardFooter className='p-2 d-flex justify-content-between align-items-center card-footer'>
      //               <h6>Posted: {job.CreatedAt}</h6>
      //               <RiArrowRightLine fontSize={25} />
      //             </CardFooter>
      //           </Card>
      //         ))
      //       )}
      //     </div>
      //   </Container>
      // </section>
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
import { TbSearch } from "react-icons/tb";
import { HiOutlineSearch } from "react-icons/hi";
import './job.css';


const BrowserJob = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jobTitleInput, setJobTitleInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [suggestions, setSuggestions] = useState({ jobTitles: [], locations: [] });
  const [noResults, setNoResults] = useState(false);

  const predefinedJobKeywords = ['Engineer', 'Manager', 'Developer', 'Designer', 'Analyst'];
  const predefinedLocations = ['Surat', 'Gujarat', 'India', 'Dindoli', 'Pune', 'Mumbai'];

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
  }, []);

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
    setSuggestions({ jobTitles: [], locations: [] });
  };

  const handleJobTitleChange = (e) => {
    const value = e.target.value;
    setJobTitleInput(value);

    const jobTitles = predefinedJobKeywords.filter(keyword => keyword.toLowerCase().includes(value.toLowerCase()));
    setSuggestions({ ...suggestions, jobTitles: jobTitles.length > 0 ? jobTitles : [] });
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocationInput(value);

    const locations = predefinedLocations.filter(loc => loc.toLowerCase().includes(value.toLowerCase()));
    setSuggestions({ ...suggestions, locations: locations.length > 0 ? locations : [] });
  }; 

  
  const handleSuggestionClick = (type, value) => {
    if (type === 'jobTitle') {
      setJobTitleInput(value);
      setSuggestions({ ...suggestions, jobTitles: [] });
    } else if (type === 'location') {
      setLocationInput(value);
      setSuggestions({ ...suggestions, locations: [] });
    }
  };

  const handleClearInput = (type) => {
    if (type === 'jobTitle') {
      setJobTitleInput('');
      setSuggestions({ ...suggestions, jobTitles: [] });
    } else if (type === 'location') {
      setLocationInput('');
      setSuggestions({ ...suggestions, locations: [] });
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
            value={jobTitleInput}
            onChange={handleJobTitleChange}
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

        <div className='divide' > 
          </div>
        
        <FaLocationDot style={{ color: '' }} />
        <div className="position-relative w-50">
          <input 
            type="text" 
            className="form-control2" 
            placeholder="Surat, Gujarat" 
            aria-label="Location"
            style={{ borderLeft: '', borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}
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

     
    

<section className='faq-box-contain section-b-space'>
        <Container>
          {noResults && (
            <div className="alert alert-warning" role="alert">
              Please enter a valid keyword for job title and location.
            </div>
          )}
          <div className='job-grid'>
            {loading ? (
              Array.from({ length: 5 }).map((_, index) => renderSkeleton())
            ) : (
              filteredJobs.map((job, index) => (
                <Card
                  className='h-100 p-0 job-card position-relative text-capitalize'
                  key={index}
                  onClick={() => router.push(`/job/${job.id}`)} // Navigate on card click
                  style={{ cursor: 'pointer' }}
                >
                   <div className="position-absolute px-3 py-1 end-0 bg-theme text-white" style={{borderTopRightRadius:'inherit'}}>
                      {job?.jobTypeName}
                   </div>
                  <CardBody className='p-2 d-flex flex-column'>

                    {/* <div className = "class-header"> 
                       
                       <span> {job.jobType.name}</span>

                      </div> */}
                    <div className='d-flex job-image'>
                      <Image
                        src={jobimage}
                        height={90}
                        width={90}
                        className="rounded img-thumbnail theme-border"
                        alt=''
                      />
                      <div className='job-post'>
                        <h3>{job.name}</h3>
                        <h6>{job.shortDescription}</h6>
                      </div>

                      {/* <span className='class-header'>{job.jobType.name}</span> */}


                    </div>
                    <div className='job-details'>
                      <div className='d-flex gap-2'>
                        <span className="font-weight-bold">Experience:</span>
                        <span>{job.experience} years</span>
                      </div>
                      <div className='d-flex gap-2'>
                        <span className="font-weight-bold">Salary:</span>
                        <span>{INR_LOG}{job.salary}</span>
                      </div>
                      <div className='d-flex gap-2'>
                        <span className="font-weight-bold">Mode:</span>
                        <span>{job.mode}</span>
                      </div>
                      <div className='d-flex gap-2'>
                        <span className="font-weight-bold">Location:</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </CardBody>
                  <CardFooter className='py-3 d-flex justify-content-between align-items-center card-footer'>
                      <span>Posted on: {job?.updatedAt}</span>
                      <h5><b>Apply</b></h5>
                    {/* <h6>Apply {job.CreatedAt}</h6> */}
                    {/* <h6> {job.jobType.name} </h6> */}
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
