import Logo from "./Logo";
import "../loading.css";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center mx-3">
      <div className="text-center">
        <div className="mb-10">
          <Logo />
        </div>
        <div className="container-load">
          <div id="loader">
            <div id="title" className="flex">
              <p className="loading-text">LOADING</p>
              <div className="therefore">∴</div>
              <p className="loading-number">%</p>
            </div>
            <div id="loading-bar-border">
              <div className="loading-bar"></div>
            </div>
            <div id="warning">
              <p>
                <div className="exclamation">!</div>
                &nbsp; CAUTION, Do not turn off.
              </p>
              <div id="line-cascates"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
