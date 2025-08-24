export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saurabh Yadav",
    "jobTitle": "Full Stack Web Developer",
    "description": "Full Stack Web Developer with 1.6 years of experience in React.js, Next.js, Node.js, and modern web technologies.",
    "url": "https://saurabhyadav.dev",
    "image": "https://saurabhyadav.dev/og-image.png",
    "sameAs": [
      "https://github.com/saurabhyadav",
      "https://www.linkedin.com/in/saurabhyadav1210"
    ],
    "knowsAbout": [
      "React.js",
      "Next.js", 
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "SQL",
      "MongoDB",
      "AWS",
      "Git"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Web Developer",
      "description": "Building modern web applications with React.js, Next.js, and Node.js"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance",
      "description": "Independent web development services"
    },
    "knowsLanguage": [
      "English",
      "Hindi"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Computer Science Graduate"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
} 