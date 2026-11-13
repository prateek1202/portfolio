export interface Experience {
  id: string;
  company: string;
  role: string;
  period?: string;
  intro: string;
  details: string[];
  tools: string[];
  outcome?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export const portfolioData = {
  personal: {
    fullName: 'Prateek Upadhyay',
    role: 'Test Automation Engineer',
    company: 'Knodtec Solutions Pvt. Ltd.',
    location: 'Bengaluru, KA',
    email: 'prateek2123@gmail.com',
    phone: '+91-7339791202',
    linkedin: 'https://linkedin.com/in/prateek1202',
    github: 'https://github.com/prateek1202',
    summary: 'Test Automation Engineer with over 3.3 years of experience in automotive regression testing and end-to-end FOTA verification and validation (SWE.5 and SWE.6). Experienced in Python automation, Playwright, and keyword-driven testing with Robot Framework, with up to 99% test coverage across multiple software components. Hands-on with CAN, Ethernet, FlexRay, UDS, DoIP flashing, and OTA validation.',
  },
  skills: [
    { label: 'Automotive testing', items: ['HIL FOTA E2E Testing', 'OTA/FOTA', 'Telematics Control Unit', 'DoIP Flashing', 'UDS', 'AUTOSAR', 'Vector Stack', 'CAPL Scripting'] },
    { label: 'Networking & communication', items: ['CAN', 'CAN-FD', 'Ethernet', 'FlexRay', 'UART', 'I2C', 'SPI'] },
    { label: 'Programming & databases', items: ['Python', 'C', 'C++', 'CAPL', 'JavaScript/TypeScript', 'SQL'] },
    { label: 'Test automation & tooling', items: ['Playwright', 'Robot Framework', 'PyTest', 'Selenium', 'Jenkins', 'JFrog Artifactory', 'Docker', 'Git & GitHub'] },
    { label: 'Test delivery', items: ['Software Quality Assurance', 'Test Planning & Estimation', 'Regression Testing', 'Black-Box Testing', 'Defect Tracking & Prevention', 'Test Documentation & Metrics', 'Agile', 'Client & Stakeholder Management'] },
  ],
  experience: [
    {
      id: 'knodtec-engineer',
      company: 'Knodtec Solutions Pvt. Ltd.',
      role: 'Automation Software Engineer',
      period: 'Jul 2023–Present at Knodtec',
      intro: 'End-to-end FOTA validation for a major German automotive OEM.',
      details: [
        'Built a Python automation framework with Playwright, Robot Framework, PyTest, and Excel for regression, system, and software qualification testing.',
        'Automated 200+ FOTA test cases covering vehicle ECU simulations, package configurations, and scenario-specific validation across the final handover test stack.',
        'Developed end-to-end testing for a telematics ECU using 4G LTE and Wi-Fi. Manually tested Remote Update and On-the-Fly Reprogramming (OFR) in ADAS.',
        'Defined test scope and qualification criteria across scenarios involving powertrain, windows, handbrake, BMS, and GNSS ECUs.',
        'Led a four-person team setting up standalone and multi-ECU HIL benches, including a Raspberry Pi client-server integration.',
        'Performed root-cause analysis on 350+ critical defect tickets across Europe, China, and Asia using hardware logs and internal state machines, and supported in-vehicle investigations.',
        'Led discussions with business counterparts on test strategy, planning, execution, budgeting, and requirements. Worked with developers to track hardware defects through resolution.',
      ],
      tools: ['Python', 'Playwright', 'Robot Framework', 'PyTest', 'Excel', 'HIL', 'FOTA'],
      outcome: '90% reduction in manual regression effort',
    },
    {
      id: 'knodtec-intern',
      company: 'Knodtec Solutions Pvt. Ltd.',
      role: 'Software Engineering Intern',
      intro: 'Embedded software development across STM32, Renesas RX23W, and ON Semiconductor RSL10 custom boards.',
      details: [
        'Built an STM32 HMI in C with LVGL, including dashboards, settings, pop-ups, animations, and touch navigation.',
        'Improved LVGL rendering and memory usage through frame buffer, display refresh, and widget update tuning.',
        'Developed firmware for Renesas RX23W and ON Semiconductor RSL10 with BLE, GPIO, GPT/RTC timers, low-power modes, and FOTA.',
        'Used PuTTY for UART and log diagnostics, and worked on embedded C, firmware flashing, and custom board bring-up.',
      ],
      tools: ['Embedded C', 'STM32', 'LVGL', 'Renesas RX23W', 'RSL10', 'BLE'],
    },
  ] satisfies Experience[],
  projects: [
    {
      title: 'Autonomous Model Vehicle',
      tools: 'OpenCV, YOLOv8-Nano, Raspberry Pi 4',
      details: [
        'Combined OpenCV road tracking with YOLOv8-Nano perception.',
        'Used A* path planning for dead ends and obstacle-aware rerouting.',
        'Implemented encoder-based odometry and closed-loop differential drive control.',
        'Built a traffic-rule state machine for signal compliance and pedestrian yielding. Validated it with maze scenarios, fault injection, and autonomous navigation tests.',
      ],
    },
  ],
  education: [
    {
      institution: 'Government Engineering College, Ajmer',
      degree: 'B.Tech in Electronics and Communications Engineering',
      period: 'Apr 2019–Jul 2023',
      result: '8.5 / 10.0 CGPA',
    },
  ],
  highlights: [
    { value: '200+', label: 'test cases automated', detail: 'Across the FOTA pipeline' },
    { value: '90%', label: 'less manual regression effort', detail: 'Python-based regression framework' },
    { value: 'Up to 99%', label: 'test coverage', detail: 'Across multiple software components' },
    { value: '350+', label: 'critical defect tickets investigated', detail: 'Root-cause analysis across regions' },
  ],
};
