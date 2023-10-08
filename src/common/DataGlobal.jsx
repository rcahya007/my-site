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
  SiTailwindcss,
} from "react-icons/si";

import JobListCover from "../assets/images/Job List.png";
import aldiCover from "../assets/images/aldi.png";
import pokedexCover from "../assets/images/pokedex.png";
import notaKodehackCover from "../assets/images/Nota Kodehack.png";
import notaKodehack2Cover from "../assets/images/Nota Kodehack 2.png";

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
      linkDemo: "https://aldipriyanto.rendycahyae.my.id/",
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
      linkDemo: "https://pokedex.rendycahyae.my.id/",
      linkSource: "https://github.com/rcahya007/Pokedex-Javascript-Native",
    },
    {
      img: notaKodehackCover,
      titleProject: "Nota Kodehack",
      typeProject: "Website Application",
      descriptionProject:
        "Website for recording data, sales, goods receipts. Convert Project Nota Native Javascript to React.",
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
      linkDemo: "https://notareact.rendycahyae.my.id/",
      linkSource: "https://github.com/rcahya007/nota-react",
    },
    {
      img: notaKodehack2Cover,
      titleProject: "Nota Kodehack",
      typeProject: "Website Application",
      descriptionProject:
        "The website records data, sales, goods notes using Laravel-Javascript and can be printed via thermal print.",
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
      linkDemo: "https://nota.rendycahyae.my.id/",
      linkSource: "https://github.com/rcahya007/nota_thermal_laravel",
    },
  ];
}
