import { useState, useEffect, useRef } from 'react';
import './DropdownProfile.css';

function DropdownProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-profile" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="profile-button">
        <div className="avatar">N</div>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <div className="avatar-large">N</div>
            <div className="user-info">
              <span className="user-name">Nhóm 4</span>
              <a href="/channel" className="user-email">@123@gmail.com</a>
              <a href="/channel" className="view-channel">View your channel</a>
            </div>
          </div>

          <div className="dropdown-section">
            <a href="/studio"><i className="fab fa-youtube"></i>YouTube Studio</a>
            <a href="/purchases"><i className="fas fa-dollar-sign"></i>Purchases and memberships</a>
            <a href="/switch"><i className="fas fa-user-friends"></i>Switch account</a>
            <a href="/signout"><i className="fas fa-sign-out-alt"></i>Sign out</a>
          </div>

          <div className="dropdown-section">
            <a href="/appearance"><i className="fas fa-moon"></i>Appearance: Device theme</a>
            <a href="/language"><i className="fas fa-language"></i>Language: English</a>
            <a href="/restricted"><i className="fas fa-shield-alt"></i>Restricted Mode: Off</a>
            <a href="/location"><i className="fas fa-globe"></i>Location: Vietnam</a>
            <a href="/keyboard"><i className="fas fa-keyboard"></i>Keyboard shortcuts</a>
          </div>

          <div className="dropdown-section">
            <a href="/settings"><i className="fas fa-cog"></i>Settings</a>
            <a href="/help"><i className="fas fa-question-circle"></i>Help</a>
            <a href="/feedback"><i className="fas fa-comment-alt"></i>Send feedback</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownProfile;
