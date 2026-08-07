import resumePdfUrl from '@assets/Naukri_PrateekUpadhyay[3y_0m]_1786084411974.pdf';

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  intro: string;
  details: string[];
  tools: string[];
  outcome?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  result: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface PortfolioData {
  personal: {
    fullName: string;
    role: string;
    company: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    summary: string;
    resumeUrl?: string;
  };
  skills: SkillGroup[];
  experience: Experience[];
  education: Education[];
  highlights: { value: string; label: string; detail: string }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    fullName: 'Prateek Upadhyay',
    role: 'Automation Engineer in Test',
    company: 'Knodtec Solutions Pvt. Ltd.',
    location: 'Bengaluru, KA',
    email: 'prateek2123@gmail.com',
    phone: '+91-7339791202',
    linkedin: 'https://linkedin.com/prateek1202',
    summary: 'Test Automation Engineer with 3 years of experience, currently deployed on a German automotive OEM (MBRDI) via Knodtec Solutions. System-level testing for FOTA functionality involving proprietary TCU, achieving up to 99% test coverage across supported functionalities. Hands-on with Ethernet, CAN, Flexray, UDS, DoIP flashing, and OTA update validation.',
    resumeUrl: resumePdfUrl,
  },
  skills: [
    { label: 'Automation & test', items: ['Python', 'CAPL Scripting', 'Automotive Testing', 'Software Testing', 'Vector Stack', 'Agile Methodology'] },
    { label: 'Embedded & architecture', items: ['Embedded Systems', 'C', 'C++', 'AUTOSAR', 'LVGL library', 'Telematics Control Unit'] },
    { label: 'Vehicle protocols', items: ['Ethernet', 'CAN', 'Flexray', 'UDS Protocol', 'DoIP Flashing', 'UART', 'I2C', 'SPI'] },
    { label: 'Software & tooling', items: ['JavaScript/Typescript', 'Git & Github', 'SQL', 'OTA/FOTA/Remote Update'] },
  ],
  experience: [
    {
      id: 'knodtec-engineer',
      company: 'Knodtec Solutions Pvt. Ltd.',
      role: 'Test Automation Engineer',
      period: 'Jan 2024–Present',
      location: 'Bengaluru, KA',
      intro: 'System-level validation of FOTA functionality for a proprietary telematics control unit on a German automotive OEM programme.',
      details: [
        'Built Python automation for 200+ test cases, reducing manual regression time by over 40%.',
        'Set up and debugged the HIL environment with Vector CANoe; automated CANoe/CAPL execution via Python.',
        'Worked with the telematics control unit, Ignition ECU/EIS, and Head unit across end-to-end OTA update flows.',
        'Automated release acceptance testing and designed a GUI for live testing results and progress.',
        'Ensured 100% automation coverage through Jenkins CI/CD; analysed hardware logs and production-line defects.',
        'Performed DoIP flashing, state-machine analysis, software qualification, system integration testing, and structured bug reporting.',
        'Collaborated cross-functionally across the testing and software delivery lifecycle.',
      ],
      tools: ['Python', 'Vector CANoe', 'CAPL', 'Jenkins CI/CD', 'DoIP', 'FOTA', 'HIL'],
      outcome: 'Up to 99% test coverage across supported functionalities',
    },
    {
      id: 'knodtec-intern',
      company: 'Knodtec Solutions Pvt. Ltd.',
      role: 'Software Engineering Intern',
      period: 'Jul 2023–Jan 2024',
      location: 'Bengaluru, KA',
      intro: 'Embedded software development across STM32, Renesas RX23W, and Onsemi RSL10 custom boards.',
      details: [
        'Developed an HMI in C with LVGL, including dashboards, settings, popups, animations, and touch navigation.',
        'Optimized LVGL rendering and memory usage on resource-constrained hardware.',
        'Worked with BLE, GPIO, timers, low power modes, and FOTA on Renesas RX23W and Onsemi RSL10.',
        'Used pUTTY terminal for embedded workflows, with Embedded C coding and flashing on custom boards.',
      ],
      tools: ['Embedded C', 'STM32', 'LVGL', 'Renesas RX23W', 'Onsemi RSL10', 'BLE'],
    },
  ],
  education: [
    {
      institution: 'Government Engineering College, Ajmer',
      degree: 'B.Tech in Electronics and Communications Engineering',
      period: '2019–2023',
      result: '8.5 CGPA',
    },
  ],
  highlights: [
    { value: '200+', label: 'test cases automated', detail: 'Python-led regression automation' },
    { value: '40%+', label: 'manual regression time reduced', detail: 'Through repeatable automation' },
    { value: '99%', label: 'test coverage reached', detail: 'Across supported functionalities' },
    { value: '100%', label: 'automation coverage', detail: 'Through Jenkins CI/CD' },
  ],
};