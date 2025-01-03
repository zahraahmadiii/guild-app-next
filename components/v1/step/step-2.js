// import React, { useState, useEffect } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import DatePicker from "react-multi-date-picker";
// import * as Yup from "yup";
// import persian from "react-date-object/calendars/persian";
// import persian_fa from "react-date-object/locales/persian_fa";

// const StepTwo = () => {
//   const [isHydrated, setIsHydrated] = useState(false);

//   useEffect(() => {
//     setIsHydrated(true); // Set hydrated state to true after first render (client-side only)
//   }, []);

//   // Validation schema using Yup
//   const validationSchema = Yup.object().shape({
//     isOwner: Yup.boolean(),
//     role: Yup.string().when("isOwner", {
//       is: false, // Only required when isOwner is false
//       then: Yup.string().required("انتخاب سمت اجباری است"),
//     }),
//     guilds: Yup.string().required("انتخاب صنف اجباری است"),
//     union: Yup.string()
//       .required("اتحادیه اجباری است")
//       .min(2, "حداقل 2 کاراکتر"),
//     category: Yup.string()
//       .required("رسته اجباری است")
//       .min(2, "حداقل 2 کاراکتر"),
//     businessId: Yup.string()
//       .required("شناسه صنفی اجباری است")
//       .matches(/^[0-9]+$/, "شناسه صنفی باید عدد باشد"),
//   });

//   const {
//     register,
//     handleSubmit,
//     control,
//     watch,
//     formState: { errors, isValid },
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//     mode: "all", // Enable validation on change and blur
//   });

//   const isOwner = watch("isOwner", false);
//   const selectedGuild = watch("guilds", ""); // Watch the selected guild

//   // Ensure client-side rendering
//   if (!isHydrated) {
//     return <div>Loading...</div>;
//   }

//   // Handle form submission
//   const onSubmit = (data) => {
//     // if (isOwner) {
//     //   delete data.role;
//     // }
//     console.log("Form submitted successfully:", data);
//     localStorage.setItem("stepTwoData", JSON.stringify(data));
//   };

//   // Image mapping based on the guild
//   const imageMap = {
//     guild: "/assets/v1/img/bg.jpg",
//     police: "/assets/v1/img/police.jpg",
//     Tourism: "/assets/v1/img/tourism.jpg",
//     silence: "/assets/v1/img/silence.jpg",
//     Roads: "/assets/v1/img/roads.jpg",
//   };

//   const selectedImage = imageMap[selectedGuild] || "";

//   return (
//     <form>
//       <div className="multisteps-form__panel" data-animation="slideHorz">
//         <div className="wizard-forms">
//           <div className="form-content pera-content">
//             <div className="top">
//               <h4 className="title">اطلاعات صنفی</h4>
//               <div className="step-progress">
//                 <span className="title">2 از 4</span>
//                 <div className="step-progress-bar">
//                   <div className="progress">
//                     <div className="progress-bar"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Checkbox */}
//             <div className="parvane-selection">
//               <label>
//                 <input type="checkbox" {...register("isOwner")} />
//                 <span className="checkmark"></span>صاحب پروانه هستم
//               </label>
//               {errors.isOwner && (
//                 <span style={{ color: "red" }}>{errors.isOwner.message}</span>
//               )}
//             </div>

//             {/* Conditionally Render Role Selection */}
//             {!isOwner ? (
//               <div className="select-wrapper">
//                 <div className="form-group mt-3 select-option">
//                   <select className="form-control" {...register("role")}>
//                     <option value="">انتخاب سمت</option>
//                     <option value="مدیر">مدیر</option>
//                     <option value="کارمند">کارمند</option>
//                     <option value="مباشر">مباشر</option>
//                     <option value="کارگر">کارگر</option>
//                     <option value="راننده">راننده</option>
//                     <option value="خدماتی">خدماتی</option>
//                   </select>
//                   {errors.role && (
//                     <span style={{ color: "red" }}>{errors.role.message}</span>
//                   )}
//                 </div>
//               </div>
//             ) : (
//               ""
//             )}

//             {/* Guild Selection */}
//             <div className="select-wrapper">
//               <div className="form-group mt-3 select-option">
//                 <select className="form-control" {...register("guilds")}>
//                   <option value="">انتخاب صنف</option>
//                   <option value="guild">اصناف</option>
//                   <option value="police">پلیس</option>
//                   <option value="Tourism">وزارت گردشگری</option>
//                   <option value="silence">وزارت صمت</option>
//                   <option value="Roads">وزارت راه</option>
//                 </select>
//                 {errors.guilds && (
//                   <span style={{ color: "red" }}>{errors.guilds.message}</span>
//                 )}
//                 <div className="image-container mt-2">
//                   {selectedImage && (
//                     <img
//                       src={selectedImage}
//                       alt="Job Logo"
//                       style={{
//                         width: "60px",
//                         height: "60px",
//                         borderRadius: "10px",
//                       }}
//                     />
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Union, Category, Business ID Inputs */}
//             <div className="inputs-wrapper">
//               <input
//                 type="text"
//                 className="inputs"
//                 placeholder="اتحادیه"
//                 {...register("union")}
//               />
//               {errors.union && (
//                 <span style={{ color: "red" }}>{errors.union.message}</span>
//               )}

//               <input
//                 type="text"
//                 className="inputs"
//                 placeholder="رسته"
//                 {...register("category")}
//               />
//               {errors.category && (
//                 <span style={{ color: "red" }}>{errors.category.message}</span>
//               )}

//               <input
//                 type="text"
//                 className="inputs"
//                 placeholder="شناسه صنفی"
//                 {...register("businessId")}
//               />
//               {errors.businessId && (
//                 <span style={{ color: "red" }}>
//                   {errors.businessId.message}
//                 </span>
//               )}
//             </div>
//             <Controller
//               name="mobileNumber"
//               control={control}
//               render={({ field }) => (
//                 <input
//                   {...field}
//                   type="text"
//                   className="step3-inputs"
//                   placeholder="شماره موبایل"
//                 />
//               )}
//             />
//             {errors.mobileNumber && <p>{errors.mobileNumber.message}</p>}
//             <Controller
//               name="birthDate"
//               className="dateWrapper"
//               control={control}
//               render={({ field }) => (
//                 <DatePicker
//                   {...field}
//                   value={field.value || null} // Handle the initial value
//                   calendar={persian}
//                   locale={persian_fa}
//                   inputClass="step3-inputs" // Use your input styling
//                   placeholder="تاریخ تولد"
//                   onChange={(date) => field.onChange(date?.format())} // Format the date
//                 />
//               )}
//             />
//             {errors.birthDate && <p>{errors.birthDate.message}</p>}
//           </div>
//         </div>

//         <div className="actions">
//           <ul>
//             <li>
//               <button className="js-btn-prev" title="BACK">
//                 <i className="fa fa-arrow-right"></i> قبلی
//               </button>
//             </li>
//             <li>
//               <button
//                 type="submit"
//                 className="js-btn-next"
//                 disabled={!isValid}
//                 style={{
//                   backgroundColor: !isValid ? "#ccc" : "#6b59d3",
//                   cursor: !isValid ? "not-allowed" : "pointer",
//                 }}
//                 onClick={handleSubmit(onSubmit)}
//               >
//                 بعدی <i className="fa fa-arrow-left"></i>
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default StepTwo;
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DatePicker from "react-multi-date-picker";
import * as Yup from "yup";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const StepTwo = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true); // Ensure client-side rendering
  }, []);

  const validationSchema = Yup.object().shape({
    isOwner: Yup.boolean(),
    role: Yup.string().when("isOwner", {
      is: false, // Required when isOwner is false
      then: Yup.string().required("انتخاب سمت اجباری است"),
    }),
    guilds: Yup.string().required("انتخاب صنف اجباری است"),
    union: Yup.string()
      .required("اتحادیه اجباری است")
      .min(2, "حداقل 2 کاراکتر"),
    category: Yup.string()
      .required("رسته اجباری است")
      .min(2, "حداقل 2 کاراکتر"),
    businessId: Yup.string()
      .required("شناسه صنفی اجباری است")
      .matches(/^[0-9]+$/, "شناسه صنفی باید عدد باشد"),
    mobileNumber: Yup.string()
      .required("شماره موبایل اجباری است")
      .matches(/^(\+98|0)?9\d{9}$/, "شماره موبایل معتبر نیست"),
    birthDate: Yup.string().required("تاریخ تولد اجباری است"),
  });

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "all",
  });

  const isOwner = watch("isOwner", false); // Watch `isOwner` with a default value of `false`
  const selectedGuild = watch("guilds", ""); // Watch `guilds` for dynamic image display

  const onSubmit = (data) => {
    const formData = {
      ...data,
      isOwner, // Ensure `isOwner` is explicitly included
    };

    console.log("Form submitted successfully:", formData);
    localStorage.setItem("stepTwoData", JSON.stringify(formData));
  };

  if (!isHydrated) {
    return <div>Loading...</div>;
  }

  const imageMap = {
    guild: "/assets/v1/img/bg.jpg",
    police: "/assets/v1/img/police.jpg",
    Tourism: "/assets/v1/img/tourism.jpg",
    silence: "/assets/v1/img/silence.jpg",
    Roads: "/assets/v1/img/roads.jpg",
  };

  const selectedImage = imageMap[selectedGuild] || "";

  return (
    <form>
      <div className="multisteps-form__panel" data-animation="slideHorz">
        <div className="wizard-forms">
          <div className="form-content pera-content">
            <div className="top">
              <h4 className="title">اطلاعات صنفی</h4>
              <div className="step-progress">
                <span className="title">2 از 4</span>
                <div className="step-progress-bar">
                  <div className="progress">
                    <div className="progress-bar"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkbox */}
            <div className="parvane-selection">
              <label>
                <input type="checkbox" {...register("isOwner")} />
                <span className="checkmark"></span>صاحب پروانه هستم
              </label>
              {errors.isOwner && (
                <span style={{ color: "red" }}>{errors.isOwner.message}</span>
              )}
            </div>

            {/* Conditionally Render Role Selection */}
            {!isOwner && (
              <div className="select-wrapper">
                <div className="form-group mt-3 select-option">
                  <select className="form-control" {...register("role")}>
                    <option value="">انتخاب سمت</option>
                    <option value="مدیر">مدیر</option>
                    <option value="کارمند">کارمند</option>
                    <option value="مباشر">مباشر</option>
                    <option value="کارگر">کارگر</option>
                    <option value="راننده">راننده</option>
                    <option value="خدماتی">خدماتی</option>
                  </select>
                  {errors.role && (
                    <span style={{ color: "red" }}>{errors.role.message}</span>
                  )}
                </div>
              </div>
            )}

            {/* Guild Selection */}
            <div className="select-wrapper">
              <div className="form-group mt-3 select-option">
                <select className="form-control" {...register("guilds")}>
                  <option value="">انتخاب صنف</option>
                  <option value="guild">اصناف</option>
                  <option value="police">پلیس</option>
                  <option value="Tourism">وزارت گردشگری</option>
                  <option value="silence">وزارت صمت</option>
                  <option value="Roads">وزارت راه</option>
                </select>
                {errors.guilds && (
                  <span style={{ color: "red" }}>{errors.guilds.message}</span>
                )}
                <div className="image-container mt-2">
                  {selectedImage && (
                    <img
                      src={selectedImage}
                      alt="Job Logo"
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "10px",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Inputs */}
            <div className="inputs-wrapper">
              <input
                type="text"
                className="inputs"
                placeholder="اتحادیه"
                {...register("union")}
              />
              {errors.union && (
                <span style={{ color: "red" }}>{errors.union.message}</span>
              )}

              <input
                type="text"
                className="inputs"
                placeholder="رسته"
                {...register("category")}
              />
              {errors.category && (
                <span style={{ color: "red" }}>{errors.category.message}</span>
              )}

              <input
                type="text"
                className="inputs"
                placeholder="شناسه صنفی"
                {...register("businessId")}
              />
              {errors.businessId && (
                <span style={{ color: "red" }}>
                  {errors.businessId.message}
                </span>
              )}
            </div>

            {/* Mobile Number */}
            <Controller
              name="mobileNumber"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="step3-inputs"
                  placeholder="شماره موبایل"
                />
              )}
            />
            {errors.mobileNumber && (
              <span style={{ color: "red" }}>
                {errors.mobileNumber.message}
              </span>
            )}

            {/* Birth Date */}
            <Controller
              name="birthDate"
              className="dateWrapper"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  value={field.value || null}
                  calendar={persian}
                  locale={persian_fa}
                  inputClass="step3-inputs"
                  placeholder="تاریخ تولد"
                  onChange={(date) => field.onChange(date?.format())}
                />
              )}
            />
            {errors.birthDate && (
              <span style={{ color: "red" }}>{errors.birthDate.message}</span>
            )}
          </div>
        </div>

        <div className="actions">
          <ul>
            <li>
              <button className="js-btn-prev" title="BACK">
                <i className="fa fa-arrow-right"></i> قبلی
              </button>
            </li>
            <li>
              <button
                type="submit"
                className="js-btn-next"
                disabled={!isValid}
                style={{
                  backgroundColor: !isValid ? "#ccc" : "#6b59d3",
                  cursor: !isValid ? "not-allowed" : "pointer",
                }}
                onClick={handleSubmit(onSubmit)}
              >
                بعدی <i className="fa fa-arrow-left"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
};

export default StepTwo;
