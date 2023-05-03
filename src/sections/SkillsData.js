//BAR CHART
const labels = [
  "Python",
  "Java",
  "Javascript",
  "React",
  "HTML/CSS",
  "C++"
];
export const data = {
  labels: labels,
  datasets: [
    {
      label: "My strongest languages",
      data: [100, 100, 90, 90, 80, 50],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};
export const setting = {
  scales: {
    y: {
      title: {
        text: "Mastery (%)",
        display: true,
      },
    },
  },
};

//AUTOCOMPLETE
export const options = [
  {
    label: "Python",
    mastery: 100,
    description:
      "I've done a lot of projects with it while I was in high school. I still use Python often when I want to test quickly test an algorithm.",
  },
  {
    label: "Java",
    mastery: 100,
    description:
      "I've used Java for a lot of projects I did during highschool. I find the interdependence of objects fascinating in any Java project."
  },
  {
    label: "Javascript",
    mastery: 90,
    description:
      "I've used Javascript quite extensively for web development, mainly frontend.",
  },
  {
    label: "HTML/CSS",
    mastery: 90,
    description:
      "Although I use frontend libraries more often now, I can use HTML and CSS quite freely to create sophisticated designs.",
  },
  {
    label: "React",
    mastery: 80,
    description:
      "I love using React with material UI to build projects quickly. I find it easy to use and I like how the code is organized.",
  },
  {
    label: "C#",
    mastery: 40,
    description:
      "I have a little experience developing with C#, for game development. I'm sure I can learn it quickly as the syntax is similar to Java",
  },
  {
    label: "C++",
    mastery: 50,
    description:
      "I use C++ when I'm actively learning new algorithms. I like the unambiguous syntax it has compared to something like Python",
  },
  {
    label: "Excel",
    mastery: 50,
    description:
      "Back in high school I used excel quite often when analyzing data for physics lab reports",
  },
];
const labelsPieChart = [
  "Javascript",
  "React",
  "CSS / HTML",
  "Python",
  "ExpressJS",
  "No SQL",
  "SQL",
];
export const dataPieChart = {
  labels: labelsPieChart,
  datasets: [
    {
      label: "Interest / Time spend studying recently",
      data: [100, 100, 95, 90, 90, 80, 70],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};
