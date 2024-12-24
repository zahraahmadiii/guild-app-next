// import React from "react";

// class StepFive extends React.Component {
//   render() {
//     return (
//       <div className="multisteps-form__panel" data-animation="slideHorz">
//         <div className="wizard-forms">
//           <div className="inner pb-100 clearfix">
//             <div className="form-content pera-content">
//               <div className="step-inner-content">
//                 <span className="step-no bottom-line">تکمیل ثبت نام</span>
//                 <div className="step-progress float-right">
//                   <span>5 of 5 completed</span>
//                   <div className="step-progress-bar">
//                     <div className="progress">
//                       <div
//                         className="progress-bar"
//                         style={{ width: "100%" }}
//                       ></div>
//                     </div>
//                   </div>
//                 </div>
//                 <h2>ثبت نام شما با موفقیت انجام شد.</h2>
//                 <p>
//                   Tation argumentum et usu, dicit viderer evertitur te has. Eu
//                   dictas concludaturque usu, facete detracto patrioque an per,
//                   lucilius pertinacia eu vel.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="actions">
//             <ul>
//               <li>
//                 <span className="js-btn-prev" title="BACK">
//                   <i className="fa fa-arrow-left"></i> BACK{" "}
//                 </span>
//               </li>
//               <li>
//                 <button type="submit" title="NEXT">
//                   SUBMIT <i className="fa fa-arrow-right"></i>
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default StepFive;
import React from "react";

class StepFive extends React.Component {
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
                  <h4 className=" title">تکمیل ثبت نام</h4>
                  <div className="step-progress float-right ">
                    <span className="title">5 از 5</span>
                    <div className="step-progress-bar">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="step3-inputs-wrapper">
                  <h2>ثبت نام شما با موفقیت انجام شد.</h2>

                  <div className="mobileContent">
                    <p>جهت تکمیل اطلاعات وارد ناحیه کاربری شوید.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="actions">
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
          </div> */}
        </div>
      </div>
    );
  }
}

export default StepFive;
