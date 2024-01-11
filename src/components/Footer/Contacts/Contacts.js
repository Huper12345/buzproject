import React from "react";
import "./Contacts.scss";

export const Contacts = () => {
  
  const OrganizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ОДО «АМАТЕГ», ",
    address: "222120, Республика Беларусь, Минская обл, г. Борисов, Ул. Герцена, д.15,",
    telephone: "+375 (177) 75-50-03",
  };

  return (
    <div className="Contacts-Container" id="Contacts">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(OrganizationStructuredData),
        }}
      />

      <h4 className="Contacts-Title">
       {OrganizationStructuredData.name} {OrganizationStructuredData.address}
        <a className="Contacts-phone" href="tel:+375177755003"> {OrganizationStructuredData.telephone}</a>
      </h4>
      <h5 className="Contacts-Subtext">
      Продукт Не является лекарственным средством
      </h5>
      
    </div>
  );
};
