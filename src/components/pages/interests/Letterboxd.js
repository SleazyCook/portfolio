import React, { useEffect, useState } from 'react';

function Letterboxd() {
  const [embedContent, setEmbedContent] = useState('Loading...');

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('https://lb-embed-content.bokonon.dev?username=sleazycook')
      .then((response) => response.text())
      .then((data) => {
        setEmbedContent(data);  // Update the state with the fetched content
      })
      .catch((error) => {
        console.error('Error fetching the content:', error);
        setEmbedContent('Failed to load content');  // Handle errors
      });
  }, []); // Empty dependency array means this effect runs only once (on mount)

  return (
    <div
        className='letterboxd'
      id="letterboxd-embed-wrapper-tc"
      dangerouslySetInnerHTML={{ __html: embedContent }} 
    />
  );
};

export default Letterboxd;