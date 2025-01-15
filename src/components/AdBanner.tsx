
import "../components/AdBanner.css";


interface AdBannerProps {
  bannerSource: string;
}

function AdBanner({bannerSource}: AdBannerProps) {
  return (
    <img src={bannerSource} alt="Ad Image" className="ad-image"/>
  );
}

export default AdBanner;

