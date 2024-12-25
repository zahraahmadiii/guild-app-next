// // import React from "react";

// // class StepThree extends React.Component {
// //   render() {
// //     return (
// //       <div className="multisteps-form__panel" data-animation="slideHorz">
// //         <div className="wizard-forms">
// //           <div className="inner pb-100 clearfix">
// //             <div className="form-content pera-content">
// //               <div className="step-inner-content">
// //                 <div className="top">
// //                   <h4 className=" title">تکمیل اطلاعات هویتی</h4>
// //                   <div className="step-progress ">
// //                     <span className="title">3 از 5</span>
// //                     <div className="step-progress-bar">
// //                       <div className="progress">
// //                         <div
// //                           className="progress-bar"
// //                           style={{ width: "40%" }}
// //                         ></div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <div className="step3-inputs-wrapper">
// //                   <input
// //                     type="text"
// //                     className="step3-inputs"
// //                     placeholder="نام و نام خانوادگی"
// //                   />
// //                   <input
// //                     type="text"
// //                     className="step3-inputs"
// //                     placeholder="نام پدر"
// //                   />
// //                   <input
// //                     type="text"
// //                     className="step3-inputs"
// //                     placeholder="کد ملی"
// //                   />
// //                   <input
// //                     type="text"
// //                     className="step3-inputs"
// //                     placeholder="تاریخ تولد"
// //                   />
// //                   <input
// //                     type="text"
// //                     className="step3-inputs"
// //                     placeholder="شماره موبایل"
// //                   />
// //                   {/* <button
// //                     className="shahkar-button"
// //                     onClick={() => alert("استعلام شاهکار در حال انجام است")}
// //                   >
// //                     استعلام شاهکار
// //                   </button> */}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="actions">
// //             <ul>
// //               <li>
// //                 <span className="js-btn-prev" title="BACK">
// //                   <i className="fa fa-arrow-right"></i> قبلی{" "}
// //                 </span>
// //               </li>
// //               <li>
// //                 <span className="js-btn-next" title="NEXT">
// //                   بعدی <i className="fa fa-arrow-left"></i>
// //                 </span>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // export default StepThree;

// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import DatePicker from "react-multi-date-picker";
// import persian from "react-date-object/calendars/persian";
// import persian_fa from "react-date-object/locales/persian_fa";

// // Validation schema
// const schema = yup.object().shape({
//   fullName: yup.string().required("نام و نام خانوادگی الزامی است"),
//   fatherName: yup.string().required("نام پدر الزامی است"),
//   nationalCode: yup
//     .string()
//     .matches(/^\d{10}$/, "کد ملی باید 10 رقم باشد")
//     .required("کد ملی الزامی است"),
//   birthDate: yup.string().required("تاریخ تولد الزامی است"),
//   mobileNumber: yup
//     .string()
//     .matches(/^09\d{9}$/, "شماره موبایل باید 11 رقم باشد")
//     .required("شماره موبایل الزامی است"),
// });

// const StepThree = () => {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors, isValid },
//   } = useForm({
//     resolver: yupResolver(schema),
//     mode: "onChange", // Validate on change
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className="multisteps-form__panel" data-animation="slideHorz">
//       <div className="wizard-forms">
//         <div className="inner pb-100 clearfix">
//           <div className="form-content pera-content">
//             <div className="step-inner-content">
//               <div className="top">
//                 <h4 className="title">تکمیل اطلاعات هویتی</h4>
//                 <div className="step-progress">
//                   <span className="title">3 از 5</span>
//                   <div className="step-progress-bar">
//                     <div className="progress">
//                       <div
//                         className="progress-bar"
//                         style={{ width: "40%" }}
//                       ></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="step3-inputs-wrapper">
//                 <Controller
//                   name="fullName"
//                   control={control}
//                   render={({ field }) => (
//                     <input
//                       {...field}
//                       type="text"
//                       className="step3-inputs"
//                       placeholder="نام و نام خانوادگی"
//                     />
//                   )}
//                 />
//                 {errors.fullName && <p>{errors.fullName.message}</p>}

//                 <Controller
//                   name="fatherName"
//                   control={control}
//                   render={({ field }) => (
//                     <input
//                       {...field}
//                       type="text"
//                       className="step3-inputs"
//                       placeholder="نام پدر"
//                     />
//                   )}
//                 />
//                 {errors.fatherName && <p>{errors.fatherName.message}</p>}

//                 <Controller
//                   name="nationalCode"
//                   control={control}
//                   render={({ field }) => (
//                     <input
//                       {...field}
//                       type="text"
//                       className="step3-inputs"
//                       placeholder="کد ملی"
//                     />
//                   )}
//                 />
//                 {errors.nationalCode && (
//                   <p className="error-message">{errors.nationalCode.message}</p>
//                 )}

//                 <Controller
//                   name="birthDate"
//                   control={control}
//                   render={({ field }) => (
//                     <DatePicker
//                       {...field}
//                       value={field.value || null} // Handle the initial value
//                       calendar={persian}
//                       locale={persian_fa}
//                       inputClass="step3-inputs" // Use your input styling
//                       placeholder="تاریخ تولد"
//                       onChange={(date) => field.onChange(date?.format())} // Format the date
//                     />
//                   )}
//                 />
//                 {errors.birthDate && <p>{errors.birthDate.message}</p>}

//                 <Controller
//                   name="mobileNumber"
//                   control={control}
//                   render={({ field }) => (
//                     <input
//                       {...field}
//                       type="text"
//                       className="step3-inputs"
//                       placeholder="شماره موبایل"
//                     />
//                   )}
//                 />
//                 {errors.mobileNumber && <p>{errors.mobileNumber.message}</p>}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="actions">
//           <ul>
//             <li>
//               <span className="js-btn-prev" title="BACK">
//                 <i className="fa fa-arrow-right"></i> قبلی{" "}
//               </span>
//             </li>
//             <li>
//               <span
//                 className="js-btn-next"
//                 title="NEXT"
//                 onClick={handleSubmit(onSubmit)}
//                 style={{
//                   pointerEvents: isValid ? "auto" : "none",
//                   opacity: isValid ? 1 : 0.5,
//                 }}
//               >
//                 بعدی <i className="fa fa-arrow-left"></i>
//               </span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepThree;
