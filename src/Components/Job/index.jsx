

// // 'use client';

// // import { useEffect, useContext, useState, useRef } from 'react';
// // import { RiArrowRightLine, RiSearchLine } from 'react-icons/ri';
// // import { Card, CardBody, CardFooter, InputGroup, Input, Button, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, FormGroup, Label, Input as RadioInput } from 'reactstrap';
// // import I18NextContext from '@/Helper/I18NextContext';
// // import { useTranslation } from '@/app/i18n/client';
// // import { ASSETS_URL, JOB_TOKEN, GET_JOB } from '@/Config/Constant';
// // import RatioImage from '@/Utils/RatioImage';
// // import axios from 'axios';
// // import Pagination from 'react-bootstrap/Pagination';
// // import { IoIosSearch } from "react-icons/io";
// // import './job.css';

// // const BrowserJob = () => {
// //   const { i18Lang } = useContext(I18NextContext);
// //   const { t } = useTranslation(i18Lang, 'common');
// //   const [open, setOpen] = useState('1');
// //   const [jobData, setJobData] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [searchValue, setSearchValue] = useState('');
// //   const [selectedMode, setSelectedMode] = useState('');
// //   const [dropdownOpen, setDropdownOpen] = useState(false);
// //   const [dropdownApplied, setDropdownApplied] = useState(false);

// //   // Pagination state
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const itemsPerPage = 6;

// //   // Ref to search bar container
// //   const searchBarRef = useRef(null);

// //   // State for suggestions
// //   const [suggestions, setSuggestions] = useState([]);
// //   const [showSuggestions, setShowSuggestions] = useState(false);

// //   const toggle = (id) => {
// //     if (open === id) {
// //       setOpen();
// //     } else {
// //       setOpen(id);
// //     }
// //   };

// //   const fetchJobs = async (search = '', mode = '') => {
// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const response = await axios.put(GET_JOB, {
// //         search: search,
// //         mode,
// //       }, {
// //         headers: {
// //           'token': JOB_TOKEN // Replace with your token
// //         }
// //       });

// //       const filteredJobs = response.data.filter(job =>
// //         job.name.toLowerCase().includes(search.toLowerCase()) ||
// //         job.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
// //         job.longDescription.toLowerCase().includes(search.toLowerCase()) ||
// //         job.location.toLowerCase().includes(search.toLowerCase()) ||
// //         (mode && job.mode.toLowerCase() === mode.toLowerCase())
// //       );

// //       setJobData(filteredJobs);
// //       setLoading(false);
// //     } catch (error) {
// //       setError(error);
// //       setLoading(false);
// //     }
// //   };

// //   const handleSearch = () => {
// //     setCurrentPage(1); // Reset to first page on search
// //     fetchJobs(searchValue, selectedMode);
// //   };

// //   const handleModeSelect = (mode) => {
// //     setSelectedMode(mode);
// //   };

// //   const handleClear = () => {
// //     setSelectedMode('');
// //     setDropdownApplied(false);
// //     setDropdownOpen(false);
// //     setCurrentPage(1); // Reset to first page on clear
// //     fetchJobs(searchValue, '');
// //   };

// //   const handleApply = () => {
// //     setDropdownApplied(true);
// //     setDropdownOpen(false);
// //     setCurrentPage(1); // Reset to first page on apply
// //     fetchJobs(searchValue, selectedMode);
// //   };

// //   const handleSuggestionClick = (suggestion) => {
// //     setSearchValue(suggestion);
// //     setShowSuggestions(false);
// //   };

// //   const handleFocus = () => {
// //     setShowSuggestions(true);
// //   };

// //   const handleBlur = () => {
// //     setTimeout(() => {
// //       setShowSuggestions(false);
// //     }, 100);
// //   };

// //   useEffect(() => {
// //     fetchJobs('', selectedMode);

// //     // Mock suggestions, replace with your dynamic suggestions
// //     setSuggestions(['Developer', 'Designer', 'Project Manager', 'Tester', 'Support Engineer']);
// //   }, []);

// //   const indexOfLastItem = currentPage * itemsPerPage;
// //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// //   const currentItems = jobData.slice(indexOfFirstItem, indexOfLastItem);

// //   const renderPageNumbers = () => {
// //     const pageNumbers = [];
// //     for (let i = 1; i <= Math.ceil(jobData.length / itemsPerPage); i++) {
// //       pageNumbers.push(
// //         <Pagination.Item key={i} active={i === currentPage} onClick={() => handlePageChange(i)}>
// //           {i}
// //         </Pagination.Item>
// //       );
// //     }
// //     return pageNumbers;
// //   };

// //   const handlePageChange = (pageNumber) => {
// //     setCurrentPage(pageNumber);
// //     searchBarRef.current.scrollIntoView({ behavior: 'smooth' });
// //   };

// //   return (
// //     <>
// //       <div ref={searchBarRef} className='search-box1'>
// //         <div className="search-container">
// //           <div className="search-icon">
// //             <span><IoIosSearch /> </span>
// //           </div>
// //           <input
// //             type="search"
// //             className="search-bar"
// //             placeholder="Search..."
// //             value={searchValue}
// //             onChange={(e) => setSearchValue(e.target.value)}
// //             onFocus={handleFocus}
// //             onBlur={handleBlur}
// //           />
// //           <button className="find-job-btn" onClick={handleSearch}>Find Job</button>
// //           {showSuggestions && (
// //             <ul className="suggestions-list">
// //               {suggestions.map((suggestion, index) => (
// //                 <li key={index} onMouseDown={() => handleSuggestionClick(suggestion)}>
// //                   {suggestion}
// //                 </li>
// //               ))}
// //             </ul>
// //           )}
// //         </div>
     
// //         <div className='mode-selection'>
// //           <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)} >
           
// //             <DropdownToggle className='job-mode' caret style={{ border: dropdownApplied ? '2px solid white ' : 'none' }}>
// //               Select Job Mode
// //             </DropdownToggle>

// //             <DropdownMenu > 

// //               <DropdownItem toggle={false} >
// //                 <FormGroup check>
// //                   <Label check>
// //                     <RadioInput type="checkbox" checked={selectedMode === 'ONLINE'} onChange={() => handleModeSelect('ONLINE')} /> ONLINE
// //                   </Label>
// //                 </FormGroup>
// //               </DropdownItem>
// //               <DropdownItem toggle={false}>
// //                 <FormGroup check>
// //                   <Label check>
// //                     <RadioInput type="checkbox" checked={selectedMode === 'OFFLINE'} onChange={() => handleModeSelect('OFFLINE')} /> OFFLINE
// //                   </Label>
// //                 </FormGroup>
// //               </DropdownItem>
// //               <DropdownItem divider />
// //               <DropdownItem onClick={handleClear}>Clear</DropdownItem>
// //               <DropdownItem onClick={handleApply}>Apply</DropdownItem>

// //             </DropdownMenu>
// //           </Dropdown>
// //         </div>
// //       </div>

// //       <section className='faq-box-contain section-b-space'>
// //         <Container>
// //           {loading && <div className="centered-message">Loading...</div>}
// //           {error && <div className="centered-message">{error.message}</div>}
// //           {!loading && !error && (
// //             <>
// //               <div className='job-grid'>
// //                 {currentItems.map(job => (
// //                   <Card className='h-100 p-0 job-card' key={job.id}>
// //                     <CardBody className='p-2 d-flex flex-column'>
// //                       <div className='d-flex job-image'>
// //                         <RatioImage
// //                           src={ASSETS_URL + job.image}
// //                           height={90}
// //                           width={90}
// //                           className="rounded"
// //                         />
// //                         <div className='job-post'>
// //                           <h3>{job.name}</h3>
// //                           <h6>{job.shortDescription}</h6>
// //                         </div>
// //                       </div>
// //                       <div className='job-details'>
// //                         <div className='d-flex gap-2'>
// //                           <span>Experience:</span>
// //                           <span>{job.experience}</span>
// //                         </div>
// //                         <div className='d-flex gap-2'>
// //                           <span>Salary:</span>
// //                           <span>{job.salary}</span>
// //                         </div>
// //                         <div className='d-flex gap-2'>
// //                           <span>Location:</span>
// //                           <span>{job.location}</span>
// //                         </div>
// //                         <p>{job.longDescription}</p>
// //                         <div className='d-flex gap-2'>
// //                           <span>Mode:</span>
// //                           <span>{job.mode}</span>
// //                         </div>
// //                       </div>
// //                     </CardBody>
// //                     <CardFooter className='p-2 d-flex justify-content-between align-items-center'>
// //                       <h6>Posted: {job.CreatedAt}</h6>
// //                       <RiArrowRightLine fontSize={25} />
// //                     </CardFooter>
// //                   </Card>
// //                 ))}
// //               </div>
// //               <div className="d-flex justify-content-center mt-4">
// //                 <Pagination>{renderPageNumbers()}</Pagination>
// //               </div>
// //             </>
// //           )}
// //         </Container>
// //       </section>
// //     </>
// //   );
// // };

// // export default BrowserJob;


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
//         search: search,
//         mode,
//       }, {
//         headers: {
//           'token': JOB_TOKEN // Replace with your token
//         }
//       });

//       const filteredJobs = response.data.filter(job =>
//         job.name.toLowerCase().includes(search.toLowerCase()) ||
//         job.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
//         job.longDescription.toLowerCase().includes(search.toLowerCase()) ||
//         job.location.toLowerCase().includes(search.toLowerCase()) ||
//         (mode && job.mode.toLowerCase() === mode.toLowerCase())
//       );

//       setJobData(filteredJobs);
//       setLoading(false);
//     } catch (error) {
//       setError(error);
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
//     setSuggestions(['trainer', 'fitness trianer', 'personal trainer', 'zumba trainer', ]);
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
//       <div ref={searchBarRef} className='search-box1'>
//         <div className="search-container">
//           <div className="search-icon">
//             <span><IoIosSearch /> </span>
//           </div>
//           <input
//             type="search"
//             className="search-bar"
//             placeholder="Search..."
//             value={searchValue}
//             onChange={(e) => setSearchValue(e.target.value)}
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//           />
//           <button className="find-job-btn" onClick={handleSearch}>Find Job</button>
//           {showSuggestions && (
//             <ul className="suggestions-list">
//               {suggestions.map((suggestion, index) => (
//                 <li key={index} onMouseDown={() => handleSuggestionClick(suggestion)}>
//                   {suggestion}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
     
        // <div className='mode-selection'>
        //   <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)} >
           
        //     <DropdownToggle className='job-mode' caret style={{ border: dropdownApplied ? '2px solid white ' : 'none' }}>
        //       Select Job Mode
        //     </DropdownToggle>

        //     <DropdownMenu > 

        //       <DropdownItem toggle={false} >
        //         <FormGroup check>
        //           <Label check>
        //             <RadioInput type="checkbox" checked={selectedMode === 'ONLINE'} onChange={() => handleModeSelect('ONLINE')} /> ONLINE
        //           </Label>
        //         </FormGroup>
        //       </DropdownItem>
        //       <DropdownItem toggle={false}>
        //         <FormGroup check>
        //           <Label check>
        //             <RadioInput type="checkbox" checked={selectedMode === 'OFFLINE'} onChange={() => handleModeSelect('OFFLINE')} /> OFFLINE
        //           </Label>
        //         </FormGroup>
        //       </DropdownItem>
        //       <DropdownItem divider />
        //       <DropdownItem onClick={handleClear}>Clear</DropdownItem>
        //       <DropdownItem onClick={handleApply}>Apply</DropdownItem>

        //     </DropdownMenu>
        //   </Dropdown>
        // </div>
//       </div>

//       <section className='faq-box-contain section-b-space'>
//         <Container>
//           {loading && <div className="centered-message">Loading...</div>}
//           {error && <div className="centered-message">{error.message}</div>}
//           {!loading && !error && (
//             <>
//               <div className='job-grid'>
//                 {currentItems.map(job => (
//                   <Card className='h-100 p-0 job-card' key={job.id}>
//                     <CardBody className='p-2 d-flex flex-column'>
//                       <div className='d-flex job-image'>
//                         <RatioImage
//                           src={ASSETS_URL + job.image}
//                           height={90}
//                           width={90}
//                           className="rounded"
//                         />
//                         <div className='job-post'>
//                           <h3>{job.name}</h3>
//                           <h6>{job.shortDescription}</h6>
//                         </div>
//                       </div>
//                       <div className='job-details'>
//                         <div className='d-flex gap-2'>
//                           <span>Experience:</span>
//                           <span>{job.experience}</span>
//                         </div>
//                         <div className='d-flex gap-2'>
//                           <span>Salary:</span>
//                           <span>{job.salary}</span>
//                         </div>
//                         <div className='d-flex gap-2'>
//                           <span>Location:</span>
//                           <span>{job.location}</span>
//                         </div>
//                         <p>{job.longDescription}</p>
//                         <div className='d-flex gap-2'>
//                           <span>Mode:</span>
//                           <span>{job.mode}</span>
//                         </div>
//                       </div>
//                     </CardBody>
//                     <CardFooter className='p-2 d-flex justify-content-between align-items-center'>
//                       <h6>Posted: {job.CreatedAt}</h6>
//                       <RiArrowRightLine fontSize={25} />
//                     </CardFooter>
//                   </Card>
//                 ))}
//               </div>
//               <div className="d-flex justify-content-center mt-4">
//                 <Pagination>{renderPageNumbers()}</Pagination>
//               </div>
//             </>
//           )}
//         </Container>
//       </section>
//     </>
//   );
// };

// export default BrowserJob;


'use client';

import { useEffect, useContext, useState, useRef } from 'react';
import { RiArrowRightLine, RiSearchLine } from 'react-icons/ri';
import { Card, CardBody, CardFooter, InputGroup, Input, Button, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, FormGroup, Label, Input as RadioInput } from 'reactstrap';
import I18NextContext from '@/Helper/I18NextContext';
import { useTranslation } from '@/app/i18n/client';
import { ASSETS_URL, JOB_TOKEN, GET_JOB } from '@/Config/Constant';
import RatioImage from '@/Utils/RatioImage';
import axios from 'axios';
import Pagination from 'react-bootstrap/Pagination';
import { IoIosSearch } from "react-icons/io";
import './job.css';

const BrowserJob = () => {
  const { i18Lang } = useContext(I18NextContext);
  const { t } = useTranslation(i18Lang, 'common');
  const [open, setOpen] = useState('1');
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [selectedMode, setSelectedMode] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownApplied, setDropdownApplied] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Ref to search bar container
  const searchBarRef = useRef(null);

  // State for suggestions
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const fetchJobs = async (search = '', mode = '') => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.put(GET_JOB, {
        search,
        mode,
      }, 
      {
        headers: 
        {
        
          token: 'essentials',
          'Content-Type': 'application/json',
  
        },
  
      }
    );

    console.log('response :: ', response)

      if (response) {
        const filteredJobs = response.data.filter(job =>
          job.name.toLowerCase().includes(search.toLowerCase()) ||
          job.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
          job.longDescription.toLowerCase().includes(search.toLowerCase()) ||
          job.location.toLowerCase().includes(search.toLowerCase()) ||
          (mode && job.mode.toLowerCase() === mode.toLowerCase())
        );
        setJobData(filteredJobs);
      } else {
        throw new Error('Unexpected response data format');
      }
      setLoading(false);
    } catch (error) {
      setError('Error fetching data. Please try again later.');
      setLoading(false);
    }
  };

  const handleSearch = () => {
    setCurrentPage(1); // Reset to first page on search
    fetchJobs(searchValue, selectedMode);
  };

  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
  };

  const handleClear = () => {
    setSelectedMode('');
    setDropdownApplied(false);
    setDropdownOpen(false);
    setCurrentPage(1); // Reset to first page on clear
    fetchJobs(searchValue, '');
  };

  const handleApply = () => {
    setDropdownApplied(true);
    setDropdownOpen(false);
    setCurrentPage(1); // Reset to first page on apply
    fetchJobs(searchValue, selectedMode);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchValue(suggestion);
    setShowSuggestions(false);
  };

  const handleFocus = () => {
    setShowSuggestions(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 100);
  };

  useEffect(() => {
    fetchJobs('', selectedMode);

    // Mock suggestions, replace with your dynamic suggestions
    setSuggestions(['Developer', 'Designer', 'Project Manager', 'Tester', 'Support Engineer']);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = jobData.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(jobData.length / itemsPerPage); i++) {
      pageNumbers.push(
        <Pagination.Item key={i} active={i === currentPage} onClick={() => handlePageChange(i)}>
          {i}
        </Pagination.Item>
      );
    }
    return pageNumbers;
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    searchBarRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div ref={searchBarRef} className='search-box1'>
        <div className="search-container">
          <div className="search-icon">
            <span><IoIosSearch /> </span>
          </div>
          <input
            type="search"
            className="search-bar"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button className="find-job-btn" onClick={handleSearch}>Find Job</button>
          {showSuggestions && (
            <ul className="suggestions-list">
              {suggestions.map((suggestion, index) => (
                <li key={index} onMouseDown={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      
          
        <div className='mode-selection'>
          <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)} >
           
            <DropdownToggle className='job-mode' caret style={{ border: dropdownApplied ? '2px solid white ' : 'none' }}>
              Select Job Mode
            </DropdownToggle>

            <DropdownMenu > 

              <DropdownItem toggle={false} >
                <FormGroup check>
                  <Label check>
                    <RadioInput type="checkbox" checked={selectedMode === 'ONLINE'} onChange={() => handleModeSelect('ONLINE')} /> ONLINE
                  </Label>
                </FormGroup>
              </DropdownItem>
              <DropdownItem toggle={false}>
                <FormGroup check>
                  <Label check>
                    <RadioInput type="checkbox" checked={selectedMode === 'OFFLINE'} onChange={() => handleModeSelect('OFFLINE')} /> OFFLINE
                  </Label>
                </FormGroup>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={handleClear}>Clear</DropdownItem>
              <DropdownItem onClick={handleApply}>Apply</DropdownItem>

            </DropdownMenu>
          </Dropdown>
        </div>
        
      </div>

      {loading && <div className="centered-message">Loading...</div>}
      {error && <div className="centered-message">{error}</div>}

      {!loading && !error && (
        <section className='faq-box-contain section-b-space'>
          <Container>
            <div className='job-grid'>
              {currentItems.map(job => (
                <Card className='h-100 p-0 job-card' key={job.id}>
                  <CardBody className='p-2 d-flex flex-column'>
                    <div className='d-flex job-image'>
                      <RatioImage
                        src={ASSETS_URL + job.image}
                        height={90}
                        width={90}
                        className="rounded"
                      />
                      <div className='job-post'>
                        <h3>{job.name}</h3>
                        <h6>{job.shortDescription}</h6>
                      </div>
                    </div>
                    <div className='job-details'>
                      <div className='d-flex gap-2'>
                        <span>Experience:</span>
                        <span>{job.experience}</span>
                      </div>
                      <div className='d-flex gap-2'>
                        <span>Salary:</span>
                        <span>{job.salary}</span>
                      </div>
                      <div className='d-flex gap-2'>
                        <span>Location:</span>
                        <span>{job.location}</span>
                      </div>
                      <p>{job.longDescription}</p>
                      <div className='d-flex gap-2'>
                        <span>Mode:</span>
                        <span>{job.mode}</span>
                      </div>
                    </div>
                  </CardBody>
                  <CardFooter className='p-2 d-flex justify-content-between align-items-center'>
                    <h6>Posted: {job.CreatedAt}</h6>
                    <RiArrowRightLine fontSize={25} />
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className='pagination'>
              <Pagination>{renderPageNumbers()}</Pagination>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

export default BrowserJob;
