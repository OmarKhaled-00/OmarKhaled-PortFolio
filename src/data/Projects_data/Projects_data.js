import { ICONS } from "../../constants/Icons/icons";
import dev1 from "../../assets/Projects/DevWorld/1.png";
import dev2 from "../../assets/Projects/DevWorld/2.png";
import dev3 from "../../assets/Projects/DevWorld/3.png";
import dev4 from "../../assets/Projects/DevWorld/4.png";
import dev5 from "../../assets/Projects/DevWorld/5.png";
import dev6 from "../../assets/Projects/DevWorld/6.png";
import dev7 from "../../assets/Projects/DevWorld/7.png";

import devMedia1 from "../../assets/Projects/DevMedia/1.png";
import devMedia2 from "../../assets/Projects/DevMedia/2.png";
import devMedia3 from "../../assets/Projects/DevMedia/3.png";
import devMedia4 from "../../assets/Projects/DevMedia/4.png";
import devMedia5 from "../../assets/Projects/DevMedia/5.png";
import devMedia6 from "../../assets/Projects/DevMedia/6.png";
import devMedia7 from "../../assets/Projects/DevMedia/7.png";
import devMedia8 from "../../assets/Projects/DevMedia/8.png";
import devMedia9 from "../../assets/Projects/DevMedia/9.png";
import devMedia10 from "../../assets/Projects/DevMedia/10.png";
import devMedia11 from "../../assets/Projects/DevMedia/11.png";
import devMedia12 from "../../assets/Projects/DevMedia/12.png";
import devMedia13 from "../../assets/Projects/DevMedia/13.png";
import devMedia14 from "../../assets/Projects/DevMedia/14.png";

import leon1 from "../../assets/Projects/Leon/1.png";
import leon2 from "../../assets/Projects/Leon/2.png";
import leon3 from "../../assets/Projects/Leon/3.png";
import leon4 from "../../assets/Projects/Leon/4.png";
import leon5 from "../../assets/Projects/Leon/5.png";
import leon6 from "../../assets/Projects/Leon/6.png";

import art1 from "../../assets/Projects/ArtLanguage/1.png";
import art2 from "../../assets/Projects/ArtLanguage/2.png";
import art3 from "../../assets/Projects/ArtLanguage/3.png";
import art4 from "../../assets/Projects/ArtLanguage/4.png";
import art5 from "../../assets/Projects/ArtLanguage/5.png";

import omega1 from "../../assets/Projects/Omega/1.png";
import omega2 from "../../assets/Projects/Omega/2.png";
import omega3 from "../../assets/Projects/Omega/3.png";
import omega4 from "../../assets/Projects/Omega/4.png";
import omega5 from "../../assets/Projects/Omega/5.png";
import omega6 from "../../assets/Projects/Omega/6.png";
import omega7 from "../../assets/Projects/Omega/7.png";
import omega8 from "../../assets/Projects/Omega/8.png";
import omega9 from "../../assets/Projects/Omega/9.png";
import omega10 from "../../assets/Projects/Omega/10.png";
import omega11 from "../../assets/Projects/Omega/11.png";
import omega12 from "../../assets/Projects/Omega/12.png";
import omega13 from "../../assets/Projects/Omega/13.png";
import omega14 from "../../assets/Projects/Omega/14.png";
import omega15 from "../../assets/Projects/Omega/15.png";

import simon1 from "../../assets/Projects/Simon/1.png";
import simon2 from "../../assets/Projects/Simon/2.png";
import simon3 from "../../assets/Projects/Simon/3.png";
import Tic1 from "../../assets/Projects/Simon/4.png";

import Power1 from "../../assets/Projects/Embedded/Power_Supply/power.png";
import Access1 from "../../assets/Projects/Embedded/Access_System/access.png";
import Safety1 from "../../assets/Projects/Embedded/Safety_System/safety.png";

import hosb1 from "../../assets/Projects/Desktop/Hospital_System/1.png";
import hosb2 from "../../assets/Projects/Desktop/Hospital_System/2.png";
import hosb3 from "../../assets/Projects/Desktop/Hospital_System/3.png";
import hosb4 from "../../assets/Projects/Desktop/Hospital_System/4.png";
import hosb5 from "../../assets/Projects/Desktop/Hospital_System/5.png";
import hosb6 from "../../assets/Projects/Desktop/Hospital_System/6.png";
import hosb7 from "../../assets/Projects/Desktop/Hospital_System/7.png";
import hosb8 from "../../assets/Projects/Desktop/Hospital_System/8.png";
import hosb9 from "../../assets/Projects/Desktop/Hospital_System/9.png";

import clinic1 from "../../assets/Projects/Desktop/Clinic_System/1.png";

export const Projects_data = {
  main_heading: {
    title: "Projects",
    icon: ICONS.project,
  },
  Projects: {
    web: [
      {
        id: 1,
        name: "DevWorld Blog",
        status: "Under Development",
        status_icon: ICONS.underDevelop,
        content:
          " DevWorld is a full-stack blog application built using React.js, Node.js, Express, and PostgreSQL. It delivers a modern, responsive user experience with a clean UI powered by Tailwind CSS and a scalable component-based architecture. The platform implements secure authentication using JWT and Passport.js (Google OAuth and local strategy), along with robust session and cookie management to ensure safe client–server communication. Backend functionality includes RESTful API integration, dynamic content rendering, and efficient state handling using Axios. Security and data integrity are reinforced through password hashing with bcrypt and unique user identification via UUID. The backend is structured with microservices-inspired principles, enabling scalability, maintainability, and clean separation of concerns.",
        images: [
          {
            id: 1,
            img_path: dev1,
          },
          {
            id: 2,
            img_path: dev2,
          },
          {
            id: 3,
            img_path: dev3,
          },
          {
            id: 4,
            img_path: dev4,
          },
          {
            id: 5,
            img_path: dev5,
          },
          {
            id: 6,
            img_path: dev6,
          },
          {
            id: 7,
            img_path: dev7,
          },
        ],
        nav_btns: {
          details: true,
          view_project_url: false,
          code_url: "https://github.com/OmarKhaled-00/DevWorld-Blog",
        },
        tech_used: [
          "reactjs",
          "tailwind Css",
          "nodeJs",
          "express",
          "google auth",
          "postgreSql",
          "microservices",
        ],
      },
      {
        id: 2,
        name: "DevMedia",
        status: "Published",
        status_icon: ICONS.done,
        content:
          " DevMedia is a modern web platform developed for media and production companies using React.js. The project goes beyond a simple demo, offering a production-ready solution that can be easily customized to meet different client requirements.The core idea behind DevMedia was to build a flexible and scalable system that allows easy modification, maintains a clean and organized architecture, and supports seamless integration with Content Management Systems (CMS). The platform features a dynamic data structure, a responsive UI powered by Tailwind CSS, and a component-based architecture for high performance and maintainability. It is designed to integrate with WordPress as a CMS and can be extended with a custom dashboard for full content management. This solution is ideal for media, marketing, and production agencies, and can be used either as a ready-to-deploy product with minor adjustments or further developed into a fully customized system.",
        images: [
          {
            id: 1,
            img_path: devMedia1,
          },
          {
            id: 2,
            img_path: devMedia2,
          },
          {
            id: 3,
            img_path: devMedia3,
          },
          {
            id: 4,
            img_path: devMedia4,
          },
          {
            id: 5,
            img_path: devMedia5,
          },
          {
            id: 6,
            img_path: devMedia6,
          },
          {
            id: 7,
            img_path: devMedia7,
          },
          {
            id: 8,
            img_path: devMedia8,
          },
          {
            id: 9,
            img_path: devMedia9,
          },
          {
            id: 10,
            img_path: devMedia10,
          },
          {
            id: 11,
            img_path: devMedia11,
          },
          {
            id: 12,
            img_path: devMedia12,
          },
          {
            id: 13,
            img_path: devMedia13,
          },
          {
            id: 14,
            img_path: devMedia14,
          },
        ],
        nav_btns: {
          details: true,
          view_project_url: "https://media-production-website.vercel.app/",
          code_url: "https://github.com/OmarKhaled-00/Omega_Media",
        },
        tech_used: ["reactjs", "tailwind Css", "javascript", "css"],
      },
      {
        id: 3,
        name: "Leon",
        status: "Published",
        status_icon: ICONS.done,
        content:
          " This project is a responsive web template built using HTML and CSS, designed with a clean and modern layout suitable for business and corporate websites. It focuses on structured sections, consistent styling, and a user-friendly interface, demonstrating strong fundamentals in layout design and responsive development.",
        images: [
          {
            id: 1,
            img_path: leon1,
          },
          {
            id: 2,
            img_path: leon2,
          },
          {
            id: 3,
            img_path: leon3,
          },
          {
            id: 4,
            img_path: leon4,
          },
          {
            id: 5,
            img_path: leon5,
          },
          {
            id: 6,
            img_path: leon6,
          },
        ],
        nav_btns: {
          details: true,
          view_project_url:
            "https://omarkhaled-00.github.io/Leon-Agency-Template/",
          code_url: "https://github.com/OmarKhaled-00/Leon-Agency-Template",
        },
        tech_used: ["HTML", "Css"],
      },
      {
        id: 4,
        name: "ArtLanguage",
        status: "Published",
        status_icon: ICONS.done,
        content:
          " This template is a visually focused design built with HTML and CSS, showcasing modern UI concepts and smooth layout structure. It highlights attention to detail in spacing, typography, and responsiveness, making it suitable for portfolios or creative websites.",
        images: [
          {
            id: 1,
            img_path: art1,
          },
          {
            id: 2,
            img_path: art2,
          },
          {
            id: 3,
            img_path: art3,
          },
          {
            id: 4,
            img_path: art4,
          },
          {
            id: 5,
            img_path: art5,
          },
        ],
        nav_btns: {
          details: true,
          view_project_url:
            "https://omarkhaled-00.github.io/Art-Language-Template/",
          code_url: "https://github.com/OmarKhaled-00/Art-Language-Template",
        },
        tech_used: ["html", "css"],
      },
      {
        id: 5,
        name: "Omega",
        status: "Published",
        status_icon: ICONS.done,
        content:
          "This template is a visually focused design built with HTML and CSS, showcasing modern UI concepts and smooth layout structure. It highlights attention to detail in spacing, typography, and responsiveness, making it suitable for portfolios or creative websites.",
        images: [
          {
            id: 1,
            img_path: omega1,
          },
          {
            id: 2,
            img_path: omega2,
          },
          {
            id: 3,
            img_path: omega3,
          },
          {
            id: 4,
            img_path: omega4,
          },
          {
            id: 5,
            img_path: omega5,
          },
          {
            id: 6,
            img_path: omega6,
          },
          {
            id: 7,
            img_path: omega7,
          },
          {
            id: 8,
            img_path: omega8,
          },
          {
            id: 9,
            img_path: omega9,
          },
          {
            id: 10,
            img_path: omega10,
          },
          {
            id: 11,
            img_path: omega11,
          },
          {
            id: 12,
            img_path: omega12,
          },
          {
            id: 13,
            img_path: omega13,
          },
          {
            id: 14,
            img_path: omega14,
          },
          {
            id: 15,
            img_path: omega15,
          },
        ],
        nav_btns: {
          details: true,
          view_project_url:
            "https://omarkhaled-00.github.io/Omega-Web-Template/",
          code_url: "https://github.com/OmarKhaled-00/Omega-Web-Template",
        },
        tech_used: ["html", "css"],
      },
    ],
    embedded: [
      {
        id: 1,
        name: "Autonomous Power and Voltage Control System",
        status: "Published",
        status_icon: ICONS.done,
        content:
          "Designed to monitor voltage levels and manage power source switching between renewable and backup sources, ensuring energy efficiency and hospital equipment safety.",
        images: [
          {
            id: 1,
            img_path: Power1,
          },
        ],
        nav_btns: {
          details: true,
          view_project_url: false,
          view_video:
            "https://drive.google.com/file/d/1kdIN6JOOQqQp9gwdolKf63l6us8pXr_0/view",
          view_circuit: false,
          code_url: false,
        },
        tech_used: ["hardware", "voltage", "control system"],
      },
      {
        id: 2,
        name: "Access Control and Limitation System",
        status: "Published",
        status_icon: ICONS.done,
        content:
          "Designed and implemented an automated access control and lift system using embedded technologies to enhance operational efficiency and security. The system utilizes IR sensors to detect entry and exit at the hospital gate, controlling a DC motor-driven mechanism, while a separate lift control module enables smooth up and down movement via push buttons. Both systems operate concurrently without interference, ensuring reliable real-time performance.",
        images: [
          {
            id: 1,
            img_path: Access1,
          },
        ],
        nav_btns: {
          details: true,
          view_project_url: false,
          view_video:
            "https://www.linkedin.com/posts/omar-khaled-4a85aa271_engineering-mechatronics-embeddedsystems-activity-7201962434155147265-VC7S/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJ5PEABloBk-I_pPlzgtOS0jw7eBO_Uh7Y",
          view_circuit:
            "https://www.linkedin.com/posts/omar-khaled-4a85aa271_engineering-mechatronics-embeddedsystems-activity-7201962067405205508-o1Rw/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJ5PEABloBk-I_pPlzgtOS0jw7eBO_Uh7Y",
          code_url:
            "https://github.com/OmarKhaled-00/Hospital-System/tree/main/Access%20Control%20and%20Limitation%20System",
        },
        tech_used: [
          "Embedded Systems",
          "ATmega32 Microcontroller",
          "PWM Control",
          "External Interrupts",
          "IR Sensors",
          "DC Motor Control",
          "L298 Motor Driver",
        ],
      },
      {
        id: 3,
        name: "Safety Monitoring & Control System",
        status: "Published",
        status_icon: ICONS.done,
        content:
          "Designed and implemented a multi-sensor safety monitoring system using a master-slave architecture with two ATmega32 microcontrollers communicating via SPI. The system collects real-time data from temperature, light, smoke, and flame sensors, then processes and executes automated responses to ensure a safe and controlled hospital environment.The master microcontroller handles sensor data processing and decision-making, while the slave manages output actions including LCD display, RGB status indicators, water pumps, and ventilation fans. The system enables real-time hazard detection and automated emergency response, improving safety and operational efficiency.",
        images: [
          {
            id: 1,
            img_path: Safety1,
          },
        ],
        nav_btns: {
          details: true,
          view_project_url: false,
          view_video:
            "https://www.linkedin.com/posts/omar-khaled-4a85aa271_embeddedsystems-microcontrollers-atmega32-activity-7203832811701592065-KgOb/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJ5PEABloBk-I_pPlzgtOS0jw7eBO_Uh7Y",
          view_circuit:
            "https://www.linkedin.com/posts/omar-khaled-4a85aa271_embeddedsystems-microcontrollers-atmega32-activity-7203828261896765441-jI9i/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJ5PEABloBk-I_pPlzgtOS0jw7eBO_Uh7Y",
          code_url:
            "https://github.com/OmarKhaled-00/Hospital-System/tree/main/Safety%20Monitoring%20and%20Alarm%20System",
        },
        tech_used: [
          "Embedded Systems",
          "ATmega32 Microcontrollers",
          "SPI Communication",
          "Sensor Integration",
          "LDR Sensor",
          "LM35 Temperature Sensor",
          "Smoke & Flame Sensors",
          "LCD Interface",
          "RGB LED Control",
          "Actuator Control (Fans & Water Pumps)",
        ],
      },
    ],
    desktop_systems: [
      {
        id: 1,
        name: "Hospital System",
        status: "Published",
        status_icon: ICONS.done,
        content:
          "The Hospital Management System is a secure, role-based console application developed in C programming language, designed to simulate real hospital operations including patient management, appointment scheduling, operation room allocation, and multi-level authentication.The system also integrates basic security mechanisms such as IP/hostname verification, intrusion detection simulation, and fake interface redirection to demonstrate cybersecurity concepts in embedded-style software design.",
        images: [
          {
            id: 1,
            img_path: hosb1,
          },
          {
            id: 2,
            img_path: hosb2,
          },
          {
            id: 3,
            img_path: hosb3,
          },
          {
            id: 4,
            img_path: hosb4,
          },
          {
            id: 5,
            img_path: hosb5,
          },
          {
            id: 6,
            img_path: hosb6,
          },
          {
            id: 7,
            img_path: hosb7,
          },
          {
            id: 8,
            img_path: hosb8,
          },
          {
            id: 9,
            img_path: hosb9,
          },
        ],
        nav_btns: {
          details: true,
          view_project_url: false,
          view_video: false,
          view_circuit: false,
          code_url:
            "https://github.com/OmarKhaled-00/Hospital-System/tree/main/Reservation_System",
        },
        tech_used: [
          "C",
          "WinAPI",
          "Winsock",
          "Security",
          "Authentication",
          "Networking",
          "Structs",
          "Scheduling",
          "Reservation",
          "Simulation",
          "Console",
          "SystemDesign",
          "Multirole",
          "Validation",
        ],
      },
      {
        id: 2,
        name: "Clinic Management System",
        status: "Published",
        status_icon: ICONS.done,
        content:
          "Implemented a C-based clinic management system, allowing admin features like adding and editing patient records, reserving slots, and canceling reservations, along with user features like viewing patient records and reservations.",
        images: [
          {
            id: 1,
            img_path: clinic1,
          },
        ],
        nav_btns: {
          details: true,
          view_project_url: false,
          view_video:
            "https://www.linkedin.com/posts/omar-khaled-4a85aa271_embeddedsystems-clanguage-clinicabrmangementabrsystem-activity-7122718901481713664-b-UK/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJ5PEABloBk-I_pPlzgtOS0jw7eBO_Uh7Y",
          view_circuit: false,
          code_url: false,
        },
        tech_used: [
          "C",
          "Console",
          "Structures",
          "Arrays",
          "FileHandling",
          "Authentication",
          "Validation",
          "Scheduling",
          "CRUD",
          "Reservation",
        ],
      },
    ],
    games: [
      {
        id: 1,
        name: "Simon Game",
        status: "Published",
        status_icon: ICONS.done,
        content:
          "This project is an interactive memory game inspired by the classic Simon game, built using HTML, CSS, and JavaScript. It challenges players to remember and replicate an increasingly complex sequence of colors and sounds, with each level introducing higher difficulty to test memory and focus. The game features dynamic DOM manipulation, event handling, and smooth UI interactions, providing an engaging and responsive user experience. Visual and audio feedback enhance gameplay, making it both intuitive and immersive. This project highlights strong fundamentals in JavaScript logic, state management, and user interaction design.",

        images: [
          {
            id: 1,
            img_path: simon1,
          },
          {
            id: 2,
            img_path: simon2,
          },
          {
            id: 3,
            img_path: simon3,
          },
        ],
        nav_btns: {
          details: true,
          view_project_url: "https://simon-game-eight-psi.vercel.app/",
          view_video: false,
          code_url: "https://github.com/OmarKhaled-00/SimonGame",
        },
        tech_used: ["html", "css", "javascript"],
      },
      {
        id: 2,
        name: "TicTacToe Game",
        status: "Published",
        status_icon: ICONS.done,
        content:
          "Developed an unbeatable Tic Tac Toe game with an AI algorithm for the single-player mode, and multiplayer mode for two players.",
        images: [
          {
            id: 1,
            img_path: Tic1,
          },
        ],
        nav_btns: {
          details: true,
          view_project_url: false,
          view_video:
            "https://www.linkedin.com/posts/omar-khaled-4a85aa271_tic-tac-toe-the-game-is-developed-in-activity-7121471829038252032-yvNE/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJ5PEABloBk-I_pPlzgtOS0jw7eBO_Uh7Y",
          code_url: "https://github.com/OmarKhaled-00/SimonGame",
        },
        tech_used: ["html", "css", "javascript"],
      },
    ],
  },
};
