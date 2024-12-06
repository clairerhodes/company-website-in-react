// src/components/FounderListItem/FounderListItem.jsx

const founders = [
    {
      name: "Claire Rhodes",
      title: "Pookie",
      bio: "professional le$bean queer icon with a doctorate in being a bad bitch",
      img: "./src/images/cr.jpg",
      id: 1,
    },
    {
      name: "Taihlor Elliott",
      title: "Pookie",
      bio: "resident crafting queen extraordinaire",
      img: "./src/images/te.png",
      id: 2,
    },
    {
      name: "Kayla Bristol",
      title: "Pookie",
      bio: "Dr. Kayla holds a PhD in knowing shit",
      img: "./src/images/kb.jpeg",
      id: 3,
    },
    {
      name: "Bruiser Rhodes",
      title: "wittol pookie",
      bio: "da baddest emotional support dog ya ever met",
      img: "./src/images/bwuisey.png",
      id: 4,
    },
  ];

// retain access to props
const FounderListItem = () => {
    // const { founder } = props

    return (
        <>
          <h1>Meet the Pookies</h1>
            <ul>
                {founders.map((founder, index) => (
                // <FounderListItem
                //     key={index}
                //     founder={founder}
                // />
                    <div className="foundersList"
                    key={index}>
                        <li>
                            <img src={founder.img} />
                            <h2>Hello! I'm {founder.name}, the {founder.title}!</h2>
                            <p>Bio: {founder.bio}</p>
                        </li>
                    </div>
                ))}
            </ul>
            
        </>
    );
};

export default FounderListItem;