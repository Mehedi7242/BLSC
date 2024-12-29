import React, { useState } from "react";
import { useParams } from "react-router-dom";

const lawyers = [
  {
    name: { en: "John Doe", bn: "জন ডো" },
    specialization: { en: "Criminal Law", bn: "অপরাধ আইন" },
    experience: { en: "15 years", bn: "১৫ বছর" },
    bio: { en: "John is a seasoned criminal defense lawyer with a track record of successful cases.", bn: "জন একজন অভিজ্ঞ অপরাধ প্রতিরক্ষা আইনজীবী, যিনি সফল মামলার রেকর্ড সহ।" },
    contact: { en: "john.doe@example.com", bn: "john@bangladesh.com" },
    phone: { en: "+1 234 567 890", bn: "+880 123 456 789" },
    rating: 4.8,
  },
  {
    name: { en: "Jane Smith", bn: "জেন স্মিথ" },
    specialization: { en: "Family Law", bn: "পারিবারিক আইন" },
    experience: { en: "10 years", bn: "১০ বছর" },
    bio: { en: "Jane specializes in family law, helping families navigate challenging legal issues.", bn: "জেন পারিবারিক আইনে বিশেষজ্ঞ, পরিবারের সদস্যদের জটিল আইনি সমস্যাগুলি সমাধানে সহায়তা করেন।" },
    contact: { en: "jane.smith@example.com", bn: "jane@bangladesh.com" },
    phone: { en: "+1 234 567 891", bn: "+880 123 456 788" },
    rating: 4.9,
  },

];

const LawyerDetails = () => {
  const { lawyerName } = useParams(); 
  const [language, setLanguage] = useState("en"); 

  const lawyer = lawyers.find(
    (lawyer) => lawyer.name.en.toLowerCase().replace(/ /g, "-") === lawyerName
  );

  if (!lawyer) {
    return <div>Lawyer not found.</div>;
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "bn" : "en");
  };

  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-8">
        <button
          onClick={toggleLanguage}
          className="bg-blue-500 text-white py-2 px-4 rounded-full"
        >
          {language === "en" ? "বাংলা" : "English"}
        </button>
      </div>

      <h2 className="text-3xl font-bold text-center mb-8">{lawyer.name[language]}</h2>
      <p className="text-center text-gray-600">{lawyer.specialization[language]}</p>
      <p className="text-center text-gray-500">{lawyer.experience[language]}</p>
      <p className="mt-4 text-gray-700">{lawyer.bio[language]}</p>

      <div className="mt-8 text-center">
        <h3 className="text-2xl">{language === "en" ? "Contact Information" : "যোগাযোগের তথ্য"}</h3>
        <p>{language === "en" ? "Email:" : "ইমেইল:"} {lawyer.contact[language]}</p>
        <p>{language === "en" ? "Phone:" : "ফোন:"} {lawyer.phone[language]}</p>
      </div>
    </div>
  );
};

export default LawyerDetails;
