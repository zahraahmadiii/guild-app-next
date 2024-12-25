import React from "react";

class StepOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCard: "", // Default selection set to none
      nationalId: "",
      isValidNationalId: true,
      foreignerOption: "",
      foreignerValue: "",
    };
  }

  handleCardSelection = (card) => {
    this.setState({
      selectedCard: card,
      nationalId: "",
      isValidNationalId: true, // Reset validation
      foreignerOption: "",
      foreignerValue: "",
    });
  };

  handleNationalIdChange = (e) => {
    const value = e.target.value;
    const isValid = /^[0-9]{10}$/.test(value); // Validates a 10-digit number
    this.setState({ nationalId: value, isValidNationalId: isValid });
  };

  handleForeignerOptionChange = (e) => {
    this.setState({
      foreignerOption: e.target.value, // Update selected option
      foreignerValue: "", // Clear the value input when switching options
    });
  };

  handleForeignerValueChange = (e) => {
    this.setState({ foreignerValue: e.target.value });
  };

  handleNextClick = () => {
    const { selectedCard, nationalId, foreignerOption, foreignerValue } =
      this.state;
    console.log("Selected Card:", selectedCard);
    console.log("National ID:", nationalId);
    console.log("Foreigner Option:", foreignerOption);
    console.log("Foreigner Value:", foreignerValue);

    let dataToSave = null;

    if (selectedCard === "ایرانی") {
      if (!/^[0-9]{10}$/.test(nationalId)) {
        console.error("Invalid National ID");
        return; // Prevent further execution
      }
      dataToSave = {
        type: "national Id",
        value: nationalId,
      };
    } else if (selectedCard === "تبعه") {
      if (!foreignerOption || !foreignerValue) {
        console.error("Invalid data. Please fill the required fields.");
        return;
      }
      dataToSave = {
        type: foreignerOption,
        value: foreignerValue,
      };
    } else {
      console.error("Invalid data. Please fill the required fields.");
      return;
    }

    console.log("Data to save:", dataToSave);

    try {
      localStorage.setItem("identityData", JSON.stringify(dataToSave));
      console.log("Data saved to localStorage:", dataToSave);
    } catch (error) {
      console.error("Failed to save to localStorage:", error);
    }
  };
  isFormValid = () => {
    const {
      selectedCard,
      nationalId,
      isValidNationalId,
      foreignerOption,
      foreignerValue,
    } = this.state;

    if (selectedCard === "ایرانی") {
      return isValidNationalId && nationalId.trim() !== ""; // National ID must be valid and non-empty
    }

    if (selectedCard === "تبعه") {
      return foreignerOption.trim() !== "" && foreignerValue.trim() !== ""; // Foreigner option and value must be non-empty
    }

    return false; // Form is invalid if no card is selected
  };

  render() {
    const { selectedCard, nationalId, isValidNationalId, foreignerOption } =
      this.state;

    return (
      <div
        className="multisteps-form__panel js-active"
        data-animation="slideHorz"
      >
        <div className="form-wizard">
          <div className="pera-content flex">
            <h2 className="title">ثبت نام شاغلین در کسب و کارها</h2>
            <div className="top">
              <h4 className="step-no bottom-line title">اطلاعات هویتی</h4>
              <div className="step-progress ">
                <span className="title">1 از 4</span>
                <div className="step-progress-bar">
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "0%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-box form-wrapper">
              {/* Iranian Card */}
              <div className="row card-input-wrapper">
                <div
                  className={`row card ${
                    selectedCard === "ایرانی" ? "active" : ""
                  }`}
                  onClick={() => this.handleCardSelection("ایرانی")}
                >
                  <label className="step-box-content bg-white text-center relative-position">
                    <span className="step-box-icon">
                      <img src={"/assets/v1/img/d1.png"} alt="" />
                    </span>
                    <span className="font-text">ایرانی</span>
                    <span className="service-check-option">
                      <span>
                        <input
                          type="radio"
                          name="service_name"
                          value="Iranian"
                          checked={selectedCard === "ایرانی"}
                          readOnly
                        />
                      </span>
                    </span>
                  </label>
                </div>
                {selectedCard === "ایرانی" && (
                  <input
                    type="text"
                    placeholder="کد ملی"
                    className={`custom-textinput ${
                      isValidNationalId ? "" : "input-error"
                    }`}
                    value={nationalId}
                    onChange={this.handleNationalIdChange}
                  />
                )}
                {!isValidNationalId && selectedCard === "ایرانی" && (
                  <small className="error-message">
                    کد ملی باید ۱۰ رقم باشد.
                  </small>
                )}
              </div>

              {/* Foreigner Card */}
              <div className="row card-input-wrapper">
                <div
                  className={`row card ${
                    selectedCard === "تبعه" ? "active" : ""
                  }`}
                  onClick={() => this.handleCardSelection("تبعه")}
                >
                  <label className="step-box-content bg-white text-center relative-position">
                    <span className="step-box-icon">
                      <img src={"/assets/v1/img/d2.png"} alt="" />
                    </span>
                    <span className="font-text">تبعه</span>
                    <span className="service-check-option">
                      <span>
                        <input
                          type="radio"
                          name="service_name"
                          value="Foreigner"
                          checked={selectedCard === "تبعه"}
                          readOnly
                        />
                      </span>
                    </span>
                  </label>
                </div>
                {selectedCard === "تبعه" && (
                  <>
                    <div className="additional-options">
                      <label>
                        <input
                          type="radio"
                          name="sub_option"
                          value="شناسه یکتا"
                          checked={foreignerOption === "شناسه یکتا"}
                          onChange={this.handleForeignerOptionChange}
                        />
                        شناسه یکتا
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="sub_option"
                          value="کد فیدا"
                          checked={foreignerOption === "کد فیدا"}
                          onChange={this.handleForeignerOptionChange}
                        />
                        کد فیدا
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="sub_option"
                          value="کد فراگیر"
                          checked={foreignerOption === "کد فراگیر"}
                          onChange={this.handleForeignerOptionChange}
                        />
                        کد فراگیر
                      </label>

                      {/* Input field for the selected foreigner option */}
                      {foreignerOption && (
                        <input
                          type="text"
                          placeholder={foreignerOption}
                          value={this.state.foreignerValue}
                          onChange={this.handleForeignerValueChange}
                          className="input"
                        />
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="actions">
            <ul>
              <li className="disable" aria-disabled="true">
                <span className="js-btn-next" title="PREVIOUS">
                  قبلی <i className="fa fa-arrow-right" />
                </span>
              </li>
              <li>
                <span
                  className={`js-btn-next ${
                    !this.isFormValid() ? "disabled" : ""
                  }`} // Add a disabled class
                  title="NEXT"
                  onClick={
                    this.isFormValid() ? this.handleNextClick : undefined
                  } // Prevent click if invalid
                  style={{
                    pointerEvents: this.isFormValid() ? "auto" : "none", // Disable pointer events when invalid
                    opacity: this.isFormValid() ? 1 : 0.5, // Optional: Dim the button when invalid
                  }}
                >
                  بعدی <i className="fa fa-arrow-left" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default StepOne;
