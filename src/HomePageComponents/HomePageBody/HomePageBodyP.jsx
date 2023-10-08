/* eslint-disable react/no-unescaped-entities */
import "./HomePageBodycss/HomePageBody.css";
const HomePageBodyP = () => {
  return (
    <div className="hBodyContainer">
      <div className="firstBodyContainer">
        <div className="bheading">
          <h1>Showcase yourself</h1>
        </div>
        <div className="btext">
          <p>
            It is more than just a resume builder – it's a revolutionary
            platform designed to elevate your job search experience. Our focus
            is on empowering job seekers like you to present their full
            potential and secure their dream roles, all while saving time and
            enjoying the process as much as we've enjoyed creating it! Design a
            seamless visual journey across your application and visual
            appearance that reflects your unique identity, making each aspect of
            your application uniquely yours. With this, you can present yourself
            confidently and professionally, leaving a memorable impression on
            potential employers. Start building your distinctive brand today!
          </p>
        </div>
      </div>
      <div className="secondBodyContainer">
        <div className="sbcFirst">
          <img
            src="https://assets.flowcvassets.com/landing/woman-smiling-1024.webp"
            alt="image"
            className="gridImage"
          />
        </div>
        <div className="sbcSecond">
          <p>Unlock a world of opportunities to shape your career journey</p>
        </div>
        <div className="sbcThird">
          <p>Effortless Application Creation</p>
        </div>
        <div className="sbcFourth">
          <p>Become the standout candidate to potential employers</p>
        </div>
        <div className="sbcFifth">
          <p>Confidence strengthened by Personal Branding</p>
        </div>
        <div className="sbcSixth">
          <p>
            Streamlined application creation, freeing up more time for your
            preparation
          </p>
        </div>
      </div>
      <div className="thirdBodyContainer"></div>
    </div>
  );
};

export default HomePageBodyP;
