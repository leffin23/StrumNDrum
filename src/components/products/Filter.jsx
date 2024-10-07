/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const Filter = ({ selectedCategory, setSelectedCategory, categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const handleToggleSelect = () => {
    const touchDevice = isTouchDevice();
    if (touchDevice) {
      setIsTouch((prev) => !prev);
    }
    setIsOpen((prev) => !prev);
  };

  const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="filters">
      <FontAwesomeIcon icon={faFilter} className='filter-btn' onClick={handleToggleSelect} />
      {isOpen && (
        <div className="dropdown">
          <div className="dropdown-selected">{selectedCategory}</div>
          <div className={`dropdown-options ${isTouch ? 'show' : ''}`}>
            <div onClick={() => setSelectedCategory("All")}>All</div>
            {categories.map((item, i) => (
              <div key={i} onClick={() => setSelectedCategory(item)}>
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;