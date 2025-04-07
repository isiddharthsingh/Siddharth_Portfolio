import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name, type }) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      
      {/* OpenGraph/Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Structured Data / Schema.org */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Siddharth Singh",
            "url": "https://isiddharthsingh.netlify.app/",
            "jobTitle": "Lead Developer",
            "alumniOf": "New York University",
            "worksFor": [{
              "@type": "Organization",
              "name": "FuteurAI"
            }, {
              "@type": "Organization",
              "name": "New York University"
            }],
            "description": "Lead Developer at FuteurAI and Web Developer at NYU with expertise in React, Java, and Cloud Technologies",
            "knowsAbout": ["Full Stack Development", "Cloud Engineering", "React", "Java", "Google Cloud Platform", "Web Development"],
            "sameAs": [
              "https://github.com/isiddharthsingh",
              "https://linkedin.com/in/isiddharthsingh"
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
