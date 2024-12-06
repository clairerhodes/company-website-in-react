const pastWork = [
    {
    img: "",
    discription: "Designed other company websites",
    },
    {
    img: "",
    discription: "Developed 'click' JavaScript games",     
    },
    {
    img: "",
    discription: "Developed 'Choose Your Own Adventure' style games",
    },
 ]

const PastWork = () => {
    return (
      <>
        <h1>Past Pookie Projects</h1>
        <ul>
                {pastWork.map((work, index) => (
                
                    <div className="pastWork"
                    key={index}>
                        <li>
                          <img src={work.img} />
                          <h3>{work.discription}</h3>
                        </li>
                    </div>
                ))}
            </ul>
      </>
    );
  };
  
  export default PastWork;