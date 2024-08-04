// // 'use clients'

// import React from 'react';
// import './trainercard.css';
// import images from '../../../public/assets/images/about-avatar.png';
// import Image from 'next/image';

// const ProfileCard = () => {
//     return (
//         <>
//         <div className = 'roman'>
        
//          <div className="card1">
            
//             <div className="card-header1">
//                 <div className="rating1">
//                     <span>4.3</span>
//                     <span className="star1">&#9733;</span>
//                 </div>
           
//             </div>
           
//             <div className="card-body1">
               
//                 <div className="image-container1">
//                     <Image src={images} alt="Profile" width={100} height={100} className="profile-image1" />
//                     <div>
//                         <h2 className='image-name1'> John Done</h2>
//                         <div className="location1">
//                             <span className="location-icon1">&#x1F4CD;</span>
//                             <span>Ahmedabad</span>
//                         </div>
//                     </div>
//                 </div>
               
//                 <div className="information1">
//                     <ul className="requirements1">
//                         <li>Must be physically and medically fit.</li>
//                         <li>Must have passion for fitness / sport.</li>
//                         <li>Certification Have good knowledge about all gym machines.</li>
//                     </ul>
//                     <p className="tags1">•Fitness trainer • Safety trainer • Medical services</p>
//                 </div>

//             </div>
           
//             <div className="card-actions1">
               
//                 <button className="connect-button1">Connect</button>
//                 <button className="message-button1">Message</button>

//             </div>

//         </div>
//     <div>
//         </>
//     );
// }

// export default ProfileCard;


import React from 'react';
import './trainercard.css';
import images from '../../../public/assets/images/about-avatar.png';
import Image from 'next/image';

const users = [
    { name: 'John Doe', rating: 4.3, image: 'https://via.placeholder.com/80' , location:'surat' },
    { name: 'Jane Doe', rating: 4.5, image: 'https://via.placeholder.com/80' },
    { name: 'John Smith', rating: 4.1, image: 'https://via.placeholder.com/80' },
    { name: 'Jane Smith', rating: 4.7, image: 'https://via.placeholder.com/80' },
    { name: 'John Doe', rating: 4.3, image: 'https://via.placeholder.com/80' },
    { name: 'Jane Doe', rating: 4.5, image: 'https://via.placeholder.com/80' },
    { name: 'John Doe', rating: 4.3, image: 'https://via.placeholder.com/80' },
    { name: 'Jane Doe', rating: 4.5, image: 'https://via.placeholder.com/80' },
    { name: 'John Smith', rating: 4.1, image: 'https://via.placeholder.com/80' },
    { name: 'Jane Smith', rating: 4.7, image: 'https://via.placeholder.com/80' },
    { name: 'John Doe', rating: 4.3, image: 'https://via.placeholder.com/80' },
    { name: 'Jane Doe', rating: 4.5, image: 'https://via.placeholder.com/80' },
  ];
  

const ProfileCard = () => {
    return (
        <>
        <div className='roman '>
        
     <div className='card-container1 p-5' style={{ backgroundColor:'black'}} >
        {users.map( (user, index ) =>  ( 
         <div className="card1" key={index}>
            
            <div className="card-header1">
                <div className="rating1">
                    <span>{user.rating}</span>
                    <span className="star1">&#9733;</span>
                </div>
           
            </div>
           
            <div className="card-body1">
               
                <div className="image-container1">
                    <Image src={images} alt="Profile" width={100} height={100} className="profile-image1" />
                    <div>
                        <h2 className='image-name1'> {user.name}</h2>
                        <div className="location1">
                            <span className="location-icon1">&#x1F4CD;</span>
                            <span>{user.location}</span>
                        </div>
                    </div>
                </div>
               
                <div className="information1">
                    <ul className="requirements1">
                        <li>Must be physically and medically fit.</li>
                        <li>Must have passion for fitness / sport.</li>
                        <li>Certification Have good knowledge about all gym machines.</li>
                    </ul>
                    <p className="tags1">•Fitness trainer • Safety trainer • Medical services</p>
                </div>

            </div>
           
            <div className="card-actions1">
               
                <button className="connect-button1">Connect</button>
                <button className="message-button1">Message</button>

            </div>
        
        </div>
    ))};
    </div>
    </div>
    </>
    );
}

export default ProfileCard;
