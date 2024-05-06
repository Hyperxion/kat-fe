export function ContactSection() {
  return (
    <div className="contact-container">
      <p className="contact-text">kosickyairsofttim@gmail.com</p>
      <div className="social-media-container">
        <div className="social-media">
          <a href="https://www.facebook.com/profile.php?id=100095069676679" target="_blank" title="Košický Airsoft Tím">
            <img src="/facebook-logo.png" className="logo" />
          </a>
        </div>
        <div className="social-media">
          <a href="https://www.instagram.com/kosickyairsofttim/" target="_blank" title="Košický Airsoft Tím">
            <img src="/instagram-logo.png" className="logo" />
          </a>
        </div>
        <div className="social-media">
          <a
            href="https://www.google.com/maps/place/Paintball+Op%C3%A1tske/@48.7044925,21.2774903,436m/data=!3m1!1e3!4m14!1m7!3m6!1s0x473edfe7fdebe633:0xecbdd8f134488118!2sPaintball+Op%C3%A1tske!8m2!3d48.7045468!4d21.2787125!16s%2Fg%2F11fx8yrzmw!3m5!1s0x473edfe7fdebe633:0xecbdd8f134488118!8m2!3d48.7045468!4d21.2787125!16s%2Fg%2F11fx8yrzmw?entry=ttu"
            target="_blank"
            title="Košický Airsoft Tím"
          >
            <img src="/google-maps-logo.png" className="logo" />
          </a>
        </div>
      </div>
    </div>
  );
}
