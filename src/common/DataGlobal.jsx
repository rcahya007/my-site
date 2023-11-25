import {
  BsBootstrap,
  BsFiletypeCss,
  BsFiletypeHtml,
  BsFiletypePhp,
} from "react-icons/bs";
import {
  SiDart,
  SiExpress,
  SiFlutter,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiReact,
  SiStrapi,
  SiTailwindcss,
} from "react-icons/si";

import JobListCover from "../assets/images/Job List.png";
import aldiCover from "../assets/images/aldi.png";
import pokedexCover from "../assets/images/pokedex.png";
import notaKodehackCover from "../assets/images/Nota Kodehack.png";
import notaKodehack2Cover from "../assets/images/Nota Kodehack 2.png";
import nowdots from "../assets/images/nowdots.png";
import vape_store from "../assets/images/vape-store.png";
import khs from "../assets/images/Khs.png";

export default class DataGlobal {
  static dataSkill = [
    {
      skill: "HTML",
      icon: BsFiletypeHtml,
    },
    {
      skill: "CSS",
      icon: BsFiletypeCss,
    },
    {
      skill: "Javascript",
      icon: SiJavascript,
    },
    {
      skill: "PHP",
      icon: BsFiletypePhp,
    },
    {
      skill: "Laravel",
      icon: SiLaravel,
    },
    {
      skill: "Bootstrap",
      icon: BsBootstrap,
    },
    {
      skill: "TailwindCSS",
      icon: SiTailwindcss,
    },
    {
      skill: "MySQL",
      icon: SiMysql,
    },
    {
      skill: "React",
      icon: SiReact,
    },
    {
      skill: "Dart",
      icon: SiDart,
    },
    {
      skill: "Flutter",
      icon: SiFlutter,
    },
  ];

  static dataProject = [
    {
      img: khs,
      titleProject: "FIC 8 - Siakad",
      typeProject: "Mobile Application",
      descriptionProject:
        "Final project from Fluter Intensive Club batch 8 Fullstack.\n\n Mobile: Flutter\n Backend: Laravel.",
      tech: [
        {
          icon: SiDart,
          titleIcon: "Dart",
        },
        {
          icon: SiFlutter,
          titleIcon: "Flutter",
        },
        {
          icon: SiLaravel,
          titleIcon: "Laravel",
        },
      ],
      linkDemo: "",
      linkSource:
        "https://github.com/rcahya007/flutter-siakad-app/tree/meet11-student-scedule",
    },
    {
      img: vape_store,
      titleProject: "Vape Store",
      typeProject: "Mobile Application",
      descriptionProject:
        "Final project from Fluter Intensive Club batch 6 Fullstack.\n\n Mobile: Flutter\n Backend: Strapi.\n Payment Gateway: Midtrans Sandbox\n\nThis is my first e-commerce application.",
      tech: [
        {
          icon: SiDart,
          titleIcon: "Dart",
        },
        {
          icon: SiFlutter,
          titleIcon: "Flutter",
        },
        {
          icon: SiStrapi,
          titleIcon: "Strapi",
        },
      ],
      linkDemo: "https://youtu.be/Yzu0g2sVozk?si=Qw1lFuyU6HmFf9pm",
      linkSource: "https://github.com/rcahya007/fic-vape-store",
    },
    {
      img: nowdots,
      titleProject: "Nowdots",
      typeProject: "Web Application",
      descriptionProject: "Company Profile - Nowdots",
      tech: [
        {
          icon: SiReact,
          titleIcon: "React",
        },
        {
          icon: SiTailwindcss,
          titleIcon: "TailwindCSS",
        },
      ],
      linkDemo: "https://nowdots.com",
      linkSource: "",
    },
    {
      img: JobListCover,
      titleProject: "Job List",
      typeProject: "Mobile Application",
      descriptionProject:
        "Mobile application used to search for job vacancies. Using Flutter-Laravel",
      tech: [
        {
          icon: SiLaravel,
          titleIcon: "Laravel",
        },
        {
          icon: SiDart,
          titleIcon: "Dart",
        },
        {
          icon: SiFlutter,
          titleIcon: "Flutter",
        },
      ],
      linkDemo: "https://youtu.be/T7C1J6vqDig?si=7UafbQSXNXAm1-9E",
      linkSource: "https://github.com/rcahya007/job-list",
    },
    {
      img: aldiCover,
      titleProject: "Aldi Priyanto Portofolio",
      typeProject: "Web Application",
      descriptionProject:
        "Convert landing page from Aldi Priyanto design to Website.",
      tech: [
        {
          icon: SiReact,
          titleIcon: "React",
        },
        {
          icon: SiTailwindcss,
          titleIcon: "TailwindCSS",
        },
      ],
      linkDemo: "https://aldi-priyanto.opwarnet.my.id/",
      linkSource: "https://github.com/rcahya007/aldi-priyanto",
    },
    {
      img: pokedexCover,
      titleProject: "Pokedex",
      typeProject: "Website Application",
      descriptionProject:
        'Get and display data of all pokemon from data API "PokeAPI"',
      tech: [
        {
          icon: BsFiletypeHtml,
          titleIcon: "HTML",
        },
        {
          icon: BsFiletypeCss,
          titleIcon: "CSS",
        },
        {
          icon: SiJavascript,
          titleIcon: "Javascript",
        },
      ],
      linkDemo: "https://pokedex.opwarnet.my.id/",
      linkSource: "https://github.com/rcahya007/Pokedex-Javascript-Native",
    },
    {
      img: notaKodehackCover,
      titleProject: "Nota Kodehack",
      typeProject: "Website Application",
      descriptionProject:
        "Website for recording data, sales, goods receipts. Convert Project Nota Native Javascript to React. \n\n Username: coba\n Password: coba",
      tech: [
        {
          icon: SiReact,
          titleIcon: "React",
        },
        {
          icon: SiTailwindcss,
          titleIcon: "TailwindCSS",
        },
        {
          icon: SiExpress,
          titleIcon: "Express Js",
        },
      ],
      linkDemo: "https://notareact.opwarnet.my.id/",
      linkSource: "https://github.com/rcahya007/nota-react",
    },
    {
      img: notaKodehack2Cover,
      titleProject: "Nota Kodehack",
      typeProject: "Website Application",
      descriptionProject:
        "The website records data, sales, goods notes using Laravel-Javascript and can be printed via thermal print. \n\n Username: coba\n Password: coba",
      tech: [
        {
          icon: SiLaravel,
          titleIcon: "Laravel",
        },
        {
          icon: BsBootstrap,
          titleIcon: "Bootstrap",
        },
        {
          icon: SiJavascript,
          titleIcon: "Javascript",
        },
      ],
      linkDemo: "https://nota.opwarnet.my.id/",
      linkSource: "https://github.com/rcahya007/nota_thermal_laravel",
    },
  ];
}
