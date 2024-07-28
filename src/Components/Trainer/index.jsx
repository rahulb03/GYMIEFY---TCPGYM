


'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './style.css';
import Image from 'next/image';
import images from '../../../public/assets/images/about-avatar.png';
import { FaHeart } from 'react-icons/fa';
import ProfileCard from './Trainercard.jsx';
// import './style.css';

const users = [
  { name: 'John Doe', rating: 4.3, image: 'https://via.placeholder.com/80' },
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

const Trainers = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const cardWidth = container.children[0].offsetWidth + parseInt(getComputedStyle(container.children[0]).marginRight, 10);

    const scroll = () => {
      if (currentIndex >= users.length - 1) {
        setCurrentIndex(0);
        container.scrollLeft = 0;
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        container.scrollLeft += cardWidth;
      }
    };

    const intervalId = setInterval(scroll, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  useEffect(() => {
    const container = containerRef.current;
    const cards = Array.from(container.children);

    // Remove elevation from all cards
    cards.forEach(card => card.classList.remove('elevated'));

    // Add elevation to the current card
    if (cards[currentIndex]) {
      cards[currentIndex].classList.add('elevated');
    }
  }, [currentIndex]);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
    setIsAnimating(true);

    // Remove the animation class after it completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="roman">
      <div className='container-card' ref={containerRef}>
        {users.map((user, index) => (
          <div className={`profile-card ${currentIndex === index ? 'elevated' : ''}`} key={index}>
            <div className="card-header">
              <div className='rating'>
                <span>{user.rating} ⭐</span>
              </div>
              <div
                className={`heart ${isAnimating ? 'pulse' : ''}`}
                onClick={handleFavoriteClick}
              >
                <FaHeart style={{ color: isFavorited ? '#ff007a' : '#ccc' }} />
              </div>
            </div>
            <div className="profile-image">
              <Image src={images} alt={user.name} width={100} height={100} className="image" />
            </div>
            <h2 className="name">{user.name}</h2>
            <div className="buttons">
              <button className="connect-btn">message</button>
            </div>
          </div>
        ))}
      </div>
      <ProfileCard />
    </div>
  );
}

export default Trainers;
