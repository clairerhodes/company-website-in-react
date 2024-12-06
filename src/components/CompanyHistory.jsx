//

const TheirStory = [
    {
    content: "Lil Pookies was founded with a vision to bring creativity, passion, and a sense of community to its customers. What began as a small idea quickly grew into a thriving business thanks to the dedication of its talented team. Kayla, with her innovative ideas and leadership, laid the foundation for the company’s success. Claire brought her artistic flair and keen attention to detail, ensuring that every project reflected the brand's unique charm. Taihlor’s commitment to excellence and customer satisfaction helped build lasting relationships with clients. Together, this trio transformed Lil Pookies into a beloved name, known for its quality, creativity, and heart.",
    founded: "2024",
    }
]

const CompanyHistory = () => {
    // const { story } = props
    return (
        <>
        {TheirStory.map((story, index) => (
                // <FounderListItem
                //     key={index}
                //     founder={founder}
                // />
                    <div className="theirStory"
                    key={index}>
                        <h2>A Pookie History</h2>
                        <h3>Established {story.founded}</h3>
                        <h4> Our Story</h4>
                        <p>{story.content}</p>
                    </div>
        ))}
        </>
    )
};

export default CompanyHistory;