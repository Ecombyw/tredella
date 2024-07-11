import { useEffect, useState } from "react";

const GoogleTranslate = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Select Language");

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
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };

    window.googleTranslateElementInit = initGoogleTranslate;

    addGoogleTranslateScript();

    const observer = new MutationObserver(() => {
      const selectElement = document.querySelector(".goog-te-combo");
      if (selectElement) {
        // Set event listener to show selected value
        selectElement.addEventListener("change", () => {
          const selectedValue =
            selectElement.options[selectElement.selectedIndex].text;
          setSelectedLanguage(selectedValue);
        });

        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`relative ${selectedLanguage ? "mt-0" : "mt-[36px]"}`}>
      <div id="google_translate_element"></div>
      <div className=" absolute  w-[170px] top-1.5 left-2">
        {selectedLanguage ? selectedLanguage : "Change language"}
      </div>
    </div>
  );
};

export default GoogleTranslate;
