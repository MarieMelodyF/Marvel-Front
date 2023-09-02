import "../loader.css";

const Loader = () => {
  return (
    <div className="scene">
      <div className="cube-wrapper">
        <a href="https://www.rareprogrammer.com/bouncing-cube-css-loader">
          <div className="cube">
            <div className="cube-faces">
              <div className="cube-face shadow"></div>
              <div className="cube-face bottom"></div>
              <div className="cube-face top"></div>
              <div className="cube-face left"></div>
              <div className="cube-face right"></div>
              <div className="cube-face back"></div>
              <div className="cube-face front"></div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Loader;
