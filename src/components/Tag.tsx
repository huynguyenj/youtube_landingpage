import React from 'react'
import '../components/Tag.css'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const slideIconStyle:React.CSSProperties = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "50%",
      right:'33.5%',
      transform: "translateY(-50%)",
      height: "50px",
      width: "50px",
      cursor: "pointer",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      borderRadius:'50%',
      zIndex: 100,
};
    
function Tag() {
  return (
    <div className='tags'>
      <div className="miniTag">
            Tất cả
      </div>
      <div className="miniTag">
            Âm nhạc
      </div>
      <div className="miniTag">
            Danh sách kết hợp
      </div>
      <div className="miniTag">
            Trò chơi
      </div>
      <div className="miniTag">
            Trực tiếp
      </div>
      <div className="miniTag">
            Hoạt họa
      </div>
      <div className="miniTag">
            Bóng đá
      </div>
      <div className="miniTag">
            Thiên nhiên
      </div>
      <div className="miniTag">
            Trò chơi hành động phiêu lưu
      </div>
      <div className="miniTag">
            Mới tải lên gần đây
      </div>
      <div className="miniTag">
            Đã xem
      </div>
      <div className="miniTag">
            Đề xuất mới
      </div>
      <div className="slide-icon" style={slideIconStyle}>
            <ArrowForwardIosOutlinedIcon sx={{background:'none',fontSize:'13px'}}/>
      </div>
    </div>
  )
}

export default Tag