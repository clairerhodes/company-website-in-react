const externalLinks = [{ 
    name: "Our Facebook Page", 
    url: "https://facebook.com" 
  }, 
  { 
    name: "Follow us on Instagram", 
    url: "https://instagram.com" 
  }, { 
    name: "Our GitHub Repos", 
    url: "https://github.com" 
  }];

const Links = () => {
    return (
        <>
        <h1>Find the Pookies on the web</h1>
        <ul>
                {externalLinks.map((link, index) => (
                    <div className="link"
                    key={index}>
                        <li>
                        <h4>{link.name}</h4>
                        <p>{link.url}</p>
                        </li>
                    </div>
                ))}
            </ul>
      </>
    );
  };
  
  export default Links;