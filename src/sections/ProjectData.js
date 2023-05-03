import ReMix from "./project-images/remix.png"
import FaitFrette from "./project-images/FaitFrette.PNG"
import EE from "./project-images/ibee.JPG"

let data = [
    {
        image: FaitFrette,
        title: "Travel recommendation based on weather",
        skills: ['React js', 'Weather API', 'DNS configuration', 'SVG and material UI'],
        description: "Built this website during a hackathon to recommend cities to travel to based on a user's desired weather. It can be useful for skiers just travelers who want to find a good destination.",
        hasCode: true,
        hasLiveVersion: true,
        liveVersionLink: 'http://faitfrette.tech/',
        codeLink: "https://github.com/SamuelMaltais/fait-frette.tech",
        parOf:  "hackathon"
    },
    {
        image: ReMix,
        title: "Smoothie recipe app",
        skills: ['React native', 'Smoothie recipe API'],
        description: "Created a mobile app with 3 other people during a hackathon that can recommend smoothie recipes based on what the user has on hand. The UI is quite polished for a 24h project.",
        hasCode: true,
        hasLiveVersion: false,
        liveVersionLink: '',
        codeLink: "https://github.com/SamSDK/reMIX",
        parOf:  "hackathon"
    },
    {
        image: EE,
        title: "Sorting algorithms study",
        skills: ['Java', 'Data collection', 'Complexity analysis', 'Algorithms'],
        description: "Wrote a 4000 word report on sorting algorithms for my IB Diploma Extended Essay. I wrote code, ran tests on it to measure its efficiency and came up with complex equations to explain the data",
        hasCode: true,
        hasLiveVersion: false,
        liveVersionLink: '',
        codeLink: "https://drive.google.com/file/d/1JPXCSmP1AZ7W05o6r2eHvni8B0zcW8PU/view?usp=sharing",
        parOf:  "ib"
    },

]
function Data() {
    return ( 
        data
     );
}

export default Data;
