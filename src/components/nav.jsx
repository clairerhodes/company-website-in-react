import './nav.css';

// const Navbar = () => {
//     return (
//         <nav id="top-navbar">
//             <a href="/">Home</a>
//             <a href="/our-team">Our Team</a>
//             <a href="/their-story">Their Story</a>
//             <a href="/past-work">Past Work</a>
//             <a href="/external-links">External Links</a>
//             <a href="/contact-us">Contact Us</a>
//         </nav>
//     );
// };

// export default Navbar;

const Navbar = ({ handleSection }) => {
    return (
    <nav>
    <button onClick={handleSection} value="Home"> Home </button>
    <button onClick={handleSection} value="CompanyHistory"> Company History </button>
    <button onClick={handleSection} value="MeetOurTeam"> Meet Our Team </button>
    <button onClick={handleSection} value="PastWork"> Past Work </button>
    <button onClick={handleSection} value="Links"> Related Links </button>
    <button onClick={handleSection} value="Contact"> Contact Us </button>
    </nav>
    );
};
    
    export default Navbar;