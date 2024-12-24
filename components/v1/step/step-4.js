import React from "react";

class StepFour extends React.Component {
  render() {
    return (
      <div className="multisteps-form__panel" data-animation="slideHorz">
        <div className="wizard-forms">
          <div className="inner pb-100 clearfix">
            <div
              className="form-content pera-content"
              style={{ width: "100%" }}
            >
              <div className="step-inner-content">
                <div className="top">
                  <h4 className=" title">تایید شماره موبایل</h4>
                  <div className="step-progress float-right ">
                    <span className="title"> 4 از 5</span>
                    <div className="step-progress-bar">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="step3-inputs-wrapper">
                  <p className="mobileContent">
                    کد ارسال شده به شماره موبایل 09121234567 را وارد نمایید.{" "}
                  </p>
                  <div className="mobileContent">
                    <input
                      type="text"
                      className="step3-inputs"
                      placeholder="کد تایید"
                    />
                    <button
                      className="shahkar-button"
                      onClick={() => alert("استعلام شاهکار در حال انجام است")}
                    >
                      تایید شماره موبایل
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="actions">
            <ul>
              <li>
                <span className="js-btn-prev" title="BACK">
                  <i className="fa fa-arrow-right"></i> قبلی{" "}
                </span>
              </li>
              <li>
                <span className="js-btn-next" title="NEXT">
                  بعدی <i className="fa fa-arrow-left"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default StepFour;
