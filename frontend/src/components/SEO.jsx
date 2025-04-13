import React from 'react';
import { Helmet } from 'react-helmet';

export const SEO = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Shiva Transport",
    "image": "https://shivatransport.com/logo.png",
    "description": "The most trusted transport service in Mumbai and Maharashtra",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Transport Nagar",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.0760,
      "longitude": 72.8777
    },
    "url": "https://shivatransport.com",
    "telephone": "+911234567890",
    "priceRange": "₹₹",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/shivatransport",
      "https://www.instagram.com/shivatransport",
      "https://twitter.com/shivatransport"
    ]
  };

  return (
    <Helmet>
      <title>Shiva Transport - Trusted Logistics Partner</title>
      <meta name="description" content="Reliable freight transport and logistics services across Maharashtra" />
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}; 