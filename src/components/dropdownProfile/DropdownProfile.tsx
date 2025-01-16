
import React, { useState, useEffect, useRef } from 'react';
import './DropdownProfile.css';
import GoogleIcon from '@mui/icons-material/Google';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import TranslateIcon from '@mui/icons-material/Translate';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
const styleIcon:React.CSSProperties = {
      background:'none'
}

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

              <a href="/channel" className="view-channel">Xem kênh</a>
            </div>
          </div>
          <div className="dropdown-section">
            <a href="/studio"><GoogleIcon sx={{...styleIcon}}/>Tài khoản google</a>
            <a href="/purchases"><SwitchAccountIcon sx={{...styleIcon}}/>Giao dịch và mua gói thành viên</a>
            <a href="/switch"><LocalOfferIcon sx={{...styleIcon}}/>Đổi tài khoản</a>
            <a href="/signout"><ExitToAppIcon sx={{...styleIcon}}/>Đăng xuất</a>
          </div>
            <hr />
          <div className="dropdown-section">
            <a href="/appearance"><DarkModeIcon sx={{...styleIcon}}/>Giao diện</a>
            <a href="/language"><TranslateIcon sx={{...styleIcon}}/>Ngôn ngữ: Tiếng Việt</a>
            <a href="/restricted"><AdminPanelSettingsOutlinedIcon sx={{...styleIcon}}/>Chế độ hạn chế: Đã tắt</a>
            <a href="/location"><LocationOnOutlinedIcon sx={{...styleIcon}}/>Địa điểm: Việt Nam</a>
            <a href="/keyboard"><KeyboardAltOutlinedIcon sx={{...styleIcon}}/>Phím tắt</a>
          </div>
            <hr />
          <div className="dropdown-section">
            <a href="/settings"><SettingsOutlinedIcon sx={{...styleIcon}}/>Cài đặt</a>
            <a href="/help"><HelpOutlineOutlinedIcon sx={{...styleIcon}}/>Trợ giúp</a>
            <a href="/feedback"><AnnouncementOutlinedIcon sx={{...styleIcon}}/>Gửi ý kiến phản hồi</a>

         
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownProfile;

