import React, { useState } from 'react';

const lawyers = [
  {
    name: { en: "John Doe", bn: "জন ডো" },
    specialization: { en: "Criminal Law", bn: "অপরাধ আইন" },
    experience: { en: "15 years", bn: "১৫ বছর" },
    bio: { en: "John is a seasoned criminal defense lawyer with a track record of successful cases.", bn: "জন একজন অভিজ্ঞ অপরাধ প্রতিরক্ষা আইনজীবী, যিনি সফল মামলার রেকর্ড সহ।" },
    contact: { en: "john@example.com", bn: "john@bangladesh.com" },
    phone: { en: "+1 234 567 890", bn: "+880 123 456 789" },
    image: "https://img.freepik.com/free-vector/female-lawyer-concept-illustration_114360-16427.jpg?t=st=1735472904~exp=1735476504~hmac=494e74223834197eee2ed13b053fbf8ba9b7f695d8ada2f1278653d96752e70b&w=740",
    contactLink: "/contact/john-doe",
    detailsLink: "/lawyers/john-doe",
    rating: 4.8
  },
  {
    name: { en: "Jane Smith", bn: "জেন স্মিথ" },
    specialization: { en: "Family Law", bn: "পারিবারিক আইন" },
    experience: { en: "10 years", bn: "১০ বছর" },
    bio: { en: "Jane specializes in family law, helping families navigate challenging legal issues.", bn: "জেন পারিবারিক আইনে বিশেষজ্ঞ, পরিবারের সদস্যদের জটিল আইনি সমস্যাগুলি সমাধানে সহায়তা করেন।" },
    contact: { en: "jane@example.com", bn: "jane@bangladesh.com" },
    phone: { en: "+1 234 567 891", bn: "+880 123 456 788" },
    image: "https://img.freepik.com/free-vector/female-lawyer-concept-illustration_114360-16427.jpg?t=st=1735472904~exp=1735476504~hmac=494e74223834197eee2ed13b053fbf8ba9b7f695d8ada2f1278653d96752e70b&w=740",
    contactLink: "/contact/jane-smith",
    detailsLink: "/lawyers/jane-smith",
    rating: 4.9
  },
  // Add other lawyers with similar structure...
];

const PopularLawyers = () => {
  const [contactInfo, setContactInfo] = useState(null);
  const [language, setLanguage] = useState('en'); // English as default

  const handleContactClick = (lawyer) => {
    setContactInfo(lawyer);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bn' : 'en');
  };

  return (
    <section className="container mx-auto py-10">
      <div className="text-center mb-8">
        <button
          onClick={toggleLanguage}
          className="bg-blue-500 text-white py-2 px-4 rounded-full"
        >
          {language === 'en' ? 'বাংলা' : 'English'}
        </button>
      </div>
      <h2 className="text-3xl font-bold text-center mb-8">
        {language === 'en' ? 'Popular Lawyers' : 'জনপ্রিয় আইনজীবী'}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {lawyers.map((lawyer, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <img
              src={lawyer.image}
              alt={lawyer.name[language]}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center">{lawyer.name[language]}</h3>
            <p className="text-center text-gray-600">{lawyer.specialization[language]}</p>
            <p className="text-center text-gray-500">{lawyer.experience[language]}</p>
            <p className="mt-4 text-gray-700">{lawyer.bio[language]}</p>

            <div className="mt-4 text-center">
              <a
                href={lawyer.detailsLink}
                className="bg-gray-500 text-white py-2 px-4 rounded-full hover:bg-gray-600 mr-2"
              >
                {language === 'en' ? 'View Details' : 'বিস্তারিত দেখুন'}
              </a>
              <button
                onClick={() => handleContactClick(lawyer)}
                className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600"
              >
                {language === 'en' ? 'Contact Now' : 'এখন যোগাযোগ করুন'}
              </button>
            </div>

            {/* Show contact information */}
            {contactInfo?.name[language] === lawyer.name[language] && (
              <div className="mt-4 text-center text-gray-700">
                <p>{language === 'en' ? 'Email:' : 'ইমেইল:'} {lawyer.contact[language]}</p>
                <p>{language === 'en' ? 'Phone:' : 'ফোন:'} {lawyer.phone[language]}</p>
              </div>
            )}

            <div className="mt-2 text-center text-yellow-500">
              {/* Display rating stars */}
              {"★".repeat(Math.floor(lawyer.rating))}
              {"☆".repeat(5 - Math.floor(lawyer.rating))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularLawyers;
