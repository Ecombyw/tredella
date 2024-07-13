import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Select } from "antd";
import { getReducer } from "@/redux/reducer";
import './GoogleTranslate.css'; // Import the CSS file

const { Option } = Select;

const GoogleTranslate = () => {
  const dispatch = useDispatch();
  const [selectedLanguage, setSelectedLanguage] = useState("Select Language");
  const serCheckLanguage = getReducer("checkLanguage");

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    };

    const initGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_translate_element"
        );
      }
    };

    window.googleTranslateElementInit = initGoogleTranslate;

    addGoogleTranslateScript();

    const observer = new MutationObserver(() => {
      const selectElement = document.querySelector(".goog-te-combo");
      if (selectElement) {
        // Hide the original Google Translate selector
        selectElement.style.display = "none";

        // Set event listener to show selected value
        selectElement.addEventListener("change", () => {
          const selectedValue = selectElement.options[selectElement.selectedIndex].text;
          setSelectedLanguage(selectedValue);
        });

        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    console.log("===== call ===", selectedLanguage);
    if (selectedLanguage === "Select Language") {
      dispatch(serCheckLanguage(false));
    } else {
      dispatch(serCheckLanguage(true));
    }
  }, [selectedLanguage?.length]);

  const handleChange = (value) => {
    const selectElement = document.querySelector(".goog-te-combo");
    if (selectElement) {
      selectElement.value = value;
      const event = new Event("change");
      selectElement.dispatchEvent(event);
    }
  };

  return (
    <div className={`relative ${selectedLanguage ? "mt-0" : "mt-[36px]"}`}>
      <div id="google_translate_element" style={{ display: "none" }}></div>
      <Select
        defaultValue="Select Language"
        style={{ width: 200 }}
        onChange={handleChange}
        className="notranslate" // Add a class to the Select component
        translate="no" // Add translate attribute to prevent translation
      >
        <Option value="en" className="notranslate" translate="no">English</Option>
        <Option value="es" className="notranslate" translate="no">Spanish</Option>
        <Option value="fr" className="notranslate" translate="no">French</Option>
        <Option value="de" className="notranslate" translate="no">German</Option>
        {/* Add more languages as needed */}
      </Select>
 
    </div>
  );
};

export default GoogleTranslate;
