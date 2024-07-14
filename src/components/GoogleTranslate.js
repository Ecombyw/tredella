import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Select } from "antd";
import { getReducer } from "@/redux/reducer";
import "./GoogleTranslate.css"; // Import the CSS file

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
        <Option value="af" className="notranslate" translate="no">
          Afrikaans
        </Option>
        <Option value="sq" className="notranslate" translate="no">
          Albanian
        </Option>
        <Option value="am" className="notranslate" translate="no">
          Amharic
        </Option>
        <Option value="ar" className="notranslate" translate="no">
          Arabic
        </Option>
        <Option value="hy" className="notranslate" translate="no">
          Armenian
        </Option>
        <Option value="az" className="notranslate" translate="no">
          Azerbaijani
        </Option>
        <Option value="eu" className="notranslate" translate="no">
          Basque
        </Option>
        <Option value="be" className="notranslate" translate="no">
          Belarusian
        </Option>
        <Option value="bn" className="notranslate" translate="no">
          Bengali
        </Option>
        <Option value="bs" className="notranslate" translate="no">
          Bosnian
        </Option>
        <Option value="bg" className="notranslate" translate="no">
          Bulgarian
        </Option>
        <Option value="ca" className="notranslate" translate="no">
          Catalan
        </Option>
        <Option value="ceb" className="notranslate" translate="no">
          Cebuano
        </Option>
        <Option value="zh-CN" className="notranslate" translate="no">
          Chinese (Simplified)
        </Option>
        <Option value="zh-TW" className="notranslate" translate="no">
          Chinese (Traditional)
        </Option>
        <Option value="co" className="notranslate" translate="no">
          Corsican
        </Option>
        <Option value="hr" className="notranslate" translate="no">
          Croatian
        </Option>
        <Option value="cs" className="notranslate" translate="no">
          Czech
        </Option>
        <Option value="da" className="notranslate" translate="no">
          Danish
        </Option>
        <Option value="nl" className="notranslate" translate="no">
          Dutch
        </Option>
        <Option value="en" className="notranslate" translate="no">
          English
        </Option>
        <Option value="eo" className="notranslate" translate="no">
          Esperanto
        </Option>
        <Option value="et" className="notranslate" translate="no">
          Estonian
        </Option>
        <Option value="fi" className="notranslate" translate="no">
          Finnish
        </Option>
        <Option value="fr" className="notranslate" translate="no">
          French
        </Option>
        <Option value="fy" className="notranslate" translate="no">
          Frisian
        </Option>
        <Option value="gl" className="notranslate" translate="no">
          Galician
        </Option>
        <Option value="ka" className="notranslate" translate="no">
          Georgian
        </Option>
        <Option value="de" className="notranslate" translate="no">
          German
        </Option>
        <Option value="el" className="notranslate" translate="no">
          Greek
        </Option>
        <Option value="gu" className="notranslate" translate="no">
          Gujarati
        </Option>
        <Option value="ht" className="notranslate" translate="no">
          Haitian Creole
        </Option>
        <Option value="ha" className="notranslate" translate="no">
          Hausa
        </Option>
        <Option value="haw" className="notranslate" translate="no">
          Hawaiian
        </Option>
        <Option value="he" className="notranslate" translate="no">
          Hebrew
        </Option>
        <Option value="hi" className="notranslate" translate="no">
          Hindi
        </Option>
        <Option value="hmn" className="notranslate" translate="no">
          Hmong
        </Option>
        <Option value="hu" className="notranslate" translate="no">
          Hungarian
        </Option>
        <Option value="is" className="notranslate" translate="no">
          Icelandic
        </Option>
        <Option value="ig" className="notranslate" translate="no">
          Igbo
        </Option>
        <Option value="id" className="notranslate" translate="no">
          Indonesian
        </Option>
        <Option value="ga" className="notranslate" translate="no">
          Irish
        </Option>
        <Option value="it" className="notranslate" translate="no">
          Italian
        </Option>
        <Option value="ja" className="notranslate" translate="no">
          Japanese
        </Option>
        <Option value="jw" className="notranslate" translate="no">
          Javanese
        </Option>
        <Option value="kn" className="notranslate" translate="no">
          Kannada
        </Option>
        <Option value="kk" className="notranslate" translate="no">
          Kazakh
        </Option>
        <Option value="km" className="notranslate" translate="no">
          Khmer
        </Option>
        <Option value="rw" className="notranslate" translate="no">
          Kinyarwanda
        </Option>
        <Option value="ko" className="notranslate" translate="no">
          Korean
        </Option>
        <Option value="ku" className="notranslate" translate="no">
          Kurdish
        </Option>
        <Option value="ky" className="notranslate" translate="no">
          Kyrgyz
        </Option>
        <Option value="lo" className="notranslate" translate="no">
          Lao
        </Option>
        <Option value="la" className="notranslate" translate="no">
          Latin
        </Option>
        <Option value="lv" className="notranslate" translate="no">
          Latvian
        </Option>
        <Option value="lt" className="notranslate" translate="no">
          Lithuanian
        </Option>
        <Option value="lb" className="notranslate" translate="no">
          Luxembourgish
        </Option>
        <Option value="mk" className="notranslate" translate="no">
          Macedonian
        </Option>
        <Option value="mg" className="notranslate" translate="no">
          Malagasy
        </Option>
        <Option value="ms" className="notranslate" translate="no">
          Malay
        </Option>
        <Option value="ml" className="notranslate" translate="no">
          Malayalam
        </Option>
        <Option value="mt" className="notranslate" translate="no">
          Maltese
        </Option>
        <Option value="mi" className="notranslate" translate="no">
          Maori
        </Option>
        <Option value="mr" className="notranslate" translate="no">
          Marathi
        </Option>
        <Option value="mn" className="notranslate" translate="no">
          Mongolian
        </Option>
        <Option value="my" className="notranslate" translate="no">
          Myanmar
        </Option>
        <Option value="ne" className="notranslate" translate="no">
          Nepali
        </Option>
        <Option value="no" className="notranslate" translate="no">
          Norwegian
        </Option>
        <Option value="ny" className="notranslate" translate="no">
          Nyanja
        </Option>
        <Option value="or" className="notranslate" translate="no">
          Odia
        </Option>
        <Option value="ps" className="notranslate" translate="no">
          Pashto
        </Option>
        <Option value="fa" className="notranslate" translate="no">
          Persian
        </Option>
        <Option value="pl" className="notranslate" translate="no">
          Polish
        </Option>
        <Option value="pt" className="notranslate" translate="no">
          Portuguese
        </Option>
        <Option value="pa" className="notranslate" translate="no">
          Punjabi
        </Option>
        <Option value="ro" className="notranslate" translate="no">
          Romanian
        </Option>
        <Option value="ru" className="notranslate" translate="no">
          Russian
        </Option>
        <Option value="sm" className="notranslate" translate="no">
          Samoan
        </Option>
        <Option value="gd" className="notranslate" translate="no">
          Scots Gaelic
        </Option>
        <Option value="sr" className="notranslate" translate="no">
          Serbian
        </Option>
        <Option value="st" className="notranslate" translate="no">
          Sesotho
        </Option>
        <Option value="sn" className="notranslate" translate="no">
          Shona
        </Option>
        <Option value="sd" className="notranslate" translate="no">
          Sindhi
        </Option>
        <Option value="si" className="notranslate" translate="no">
          Sinhala
        </Option>
        <Option value="sk" className="notranslate" translate="no">
          Slovak
        </Option>
        <Option value="sl" className="notranslate" translate="no">
          Slovenian
        </Option>
        <Option value="so" className="notranslate" translate="no">
          Somali
        </Option>
        <Option value="es" className="notranslate" translate="no">
          Spanish
        </Option>
        <Option value="su" className="notranslate" translate="no">
          Sundanese
        </Option>
        <Option value="sw" className="notranslate" translate="no">
          Swahili
        </Option>
        <Option value="sv" className="notranslate" translate="no">
          Swedish
        </Option>
        <Option value="tl" className="notranslate" translate="no">
          Tagalog
        </Option>
        <Option value="tg" className="notranslate" translate="no">
          Tajik
        </Option>
        <Option value="ta" className="notranslate" translate="no">
          Tamil
        </Option>
        <Option value="tt" className="notranslate" translate="no">
          Tatar
        </Option>
        <Option value="te" className="notranslate" translate="no">
          Telugu
        </Option>
        <Option value="th" className="notranslate" translate="no">
          Thai
        </Option>
        <Option value="tr" className="notranslate" translate="no">
          Turkish
        </Option>
        <Option value="tk" className="notranslate" translate="no">
          Turkmen
        </Option>
        <Option value="uk" className="notranslate" translate="no">
          Ukrainian
        </Option>
        <Option value="ur" className="notranslate" translate="no">
          Urdu
        </Option>
        <Option value="ug" className="notranslate" translate="no">
          Uyghur
        </Option>
        <Option value="uz" className="notranslate" translate="no">
          Uzbek
        </Option>
        <Option value="vi" className="notranslate" translate="no">
          Vietnamese
        </Option>
        <Option value="cy" className="notranslate" translate="no">
          Welsh
        </Option>
        <Option value="xh" className="notranslate" translate="no">
          Xhosa
        </Option>
        <Option value="yi" className="notranslate" translate="no">
          Yiddish
        </Option>
        <Option value="yo" className="notranslate" translate="no">
          Yoruba
        </Option>
        <Option value="zu" className="notranslate" translate="no">
          Zulu
        </Option>
        {/* Add more languages as needed */}
      </Select>
    </div>
  );
};

export default GoogleTranslate;
