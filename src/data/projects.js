const projects = [
  {
    id: 2,
    title: "Fantasy Sports Optimizer",
    description: "Aggregates real-time sportsbook data from the Odds API across multiple markets and surfaces actionable insights for sports bettors and fantasy players. Built with a Python backend and JavaScript frontend.",
    technologies: ["Python", "Flask (REST API)", "SQLAlchemy (ORM)", "MySQL / SQLite", "Render", "React 18", "React Router", "Tailwind CSS", "Vite", "Vercel"],
    githubUrl: "https://github.com/Harsh-Patel73/Fantasy-Sports-Optimizer",
    liveUrl: "https://fantasy-sports-optimizer-steel.vercel.app/",
    image: "/fantasy-sports.png",
    color: "#5C7CFA",
    // Detail page
    dossier: "002",
    quote: "Information is the resolution of uncertainty.",
    detail: [
      "The Fantasy Sports Optimizer connects to the Odds API to pull real-time sportsbook data across multiple markets and bookmakers. The Python backend aggregates, normalizes, and cross-references this data to surface patterns that are difficult to identify through manual analysis.",
      "A JavaScript frontend presents the processed insights in an actionable format tailored for sports bettors and fantasy players. The system is designed to reduce noise in publicly available market data and highlight the signals that matter.",
    ],
    techArsenal: [],
    techSections: [
      {
        name: "Backend",
        items: ["Python 3.10+", "Flask (REST API)", "SQLAlchemy (ORM)", "MySQL (production) / SQLite (demo)", "Render"],
      },
      {
        name: "Frontend",
        items: ["React 18", "React Router", "Tailwind CSS", "Vite", "Vercel"],
      },
    ],
    philosophy: "Publicly available data, properly aggregated, is a systematic edge.",
    methodology: "Odds ingested via REST, normalized through a Python analysis layer, surfaced through a lightweight JS frontend.",
    output: "Actionable, cross-market insights from real-time sportsbook data.",
  },
  {
    id: 4,
    title: "Bodybuilding Volume Tracker",
    description: "A React single-page application with an interactive SVG body diagram for planning weekly workout routines. Muscles are color-coded to visualize progress toward weekly set goals across all major muscle groups.",
    technologies: ["React 18", "Vite 5", "CSS Modules", "SVG", "Context API", "jsPDF", "XLSX"],
    githubUrl: "https://github.com/Harsh-Patel73/Bodybuilding-Volume-Tracker",
    liveUrl: "https://bodybuilding-volume-tracker.vercel.app/",
    color: "#5C7CFA",
    // Detail page
    dossier: "004",
    quote: "Training data should be as visual as the results it produces.",
    detail: [
      "A React single-page application built for athletes who want a data-driven approach to structuring their training. The centerpiece is an interactive SVG body diagram that allows users to select muscle groups, log weekly working sets, and track volume distribution across the body.",
      "Muscles are dynamically color-coded based on progress toward weekly volume targets, providing immediate visual feedback on training balance and recovery status. State is managed via React Context API with local storage persistence, so data survives page refreshes. Users can export their full workout history to PDF or Excel for external tracking.",
    ],
    techSections: [
      {
        name: "Frontend",
        items: ["React 18", "Vite 5", "CSS Modules", "SVG Body Diagram", "Context API", "useLocalStorage Hook"],
      },
      {
        name: "Libraries & Export",
        items: ["jsPDF 3", "jsPDF-AutoTable", "XLSX", "Vercel (Hosting)"],
      },
    ],
    philosophy: "Precision in planning produces precision in results.",
    methodology: "Interactive SVG anatomy diagram driven by React state, with color-coded volume progress per muscle group.",
    output: "A responsive SPA that visualizes weekly workout volume across all major muscle groups with PDF and Excel export.",
  },
  {
    id: 1,
    title: "Augmented Reality Heads Up Display",
    description: "An augmented reality heads-up display built in Unity with C# for the Oculus Quest 2. Renders real-time algorithm-driven visualizations and an integrated warning system as an overlay on the physical world.",
    technologies: ["Unity Game Engine", "C# (Scripting)", "Oculus Quest 2", "OVR SDK v1.70", "Android / OpenXR", "ShaderLab", "HLSL", "TextMesh Pro", "AR Foundation", "Oculus Spatializer"],
    githubUrl: "https://github.com/Harsh-Patel73/AR-HUD",
    liveUrl: null,
    hideDemo: true,
    color: "#4facfe",
    // Detail page
    dossier: "001",
    quote: "Consumer hardware is an untapped frontier for serious augmented reality applications.",
    detail: [
      "Built on the Unity Game Engine using C# and deployed on the Oculus Quest 2, AR-HUD renders a functional heads-up display as an augmented reality overlay composited directly into the user's field of view. The project demonstrates how consumer-grade VR hardware can be leveraged for practical AR applications beyond gaming.",
      "The system integrates algorithm-driven data visualizations, a dynamic layered display architecture, and a real-time warning system — all rendered through custom ShaderLab and HLSL pipelines to achieve low-latency overlay performance on mobile VR hardware.",
    ],
    techArsenal: [],
    techSections: [
      {
        name: "Engine & Platform",
        items: ["Unity Game Engine", "C# (Scripting)", "Oculus Quest 2", "OVR SDK v1.70 (XR Integration)", "Android / OpenXR (Build Target)"],
      },
      {
        name: "Rendering & UI",
        items: ["ShaderLab (Custom Shaders)", "HLSL (Shader Language)", "TextMesh Pro (HUD Text)", "AR Foundation (Spatial Anchors)", "Oculus Spatializer (3D Audio)"],
      },
    ],
    philosophy: "Immersive interfaces are not novelties — they are the next layer of human-computer interaction.",
    methodology: "Real-time AR overlay composition via Unity XR pipeline with custom HLSL shaders and algorithm-driven HUD modules.",
    output: "A functional AR heads-up display running natively on consumer VR hardware.",
  },
  {
    id: 3,
    title: "Database Entry Heatmap",
    description: "A Python automation that integrates with the Notion API to track daily database entry counts and visualizes consistency over time as a dynamically generated SVG heatmap. Runs on a schedule via GitHub Actions.",
    technologies: ["Python 3.11", "Notion API", "Plotly", "GitHub Actions", "GitHub Pages"],
    githubUrl: "https://github.com/Harsh-Patel73/Database-Entry-Count-Heatmap",
    liveUrl: null,
    hideDemo: true,
    color: "#5C7CFA",
    // Detail page
    dossier: "003",
    quote: "Consistency made visible — discipline rendered as data.",
    detail: [
      "This automation integrates directly with the Notion API to track the number of entries added to a database each day. The data is processed by a Python script and rendered as an interactive heatmap using Plotly, providing an at-a-glance view of contribution consistency over time.",
      "The entire pipeline runs on a daily cron schedule via GitHub Actions — the heatmap regenerates and deploys to GitHub Pages automatically without manual intervention. It functions as both a productivity tracking tool and a live demonstration of CI/CD automation and API integration principles.",
    ],
    techSections: [
      {
        name: "Data & Visualization",
        items: ["Python 3.11", "Notion API", "requests", "Plotly (Interactive Heatmap)", "python-dateutil"],
      },
      {
        name: "Automation & Deployment",
        items: ["GitHub Actions (Daily Cron)", "GitHub Pages (Hosting)", "python-dotenv (Env Management)", "GitHub Secrets (Credentials)"],
      },
    ],
    philosophy: "Visibility into effort is the first step toward improving it.",
    methodology: "Scheduled GitHub Actions trigger a Python script that queries Notion, processes daily counts, and regenerates an interactive Plotly heatmap deployed to GitHub Pages.",
    output: "A self-updating interactive heatmap that publishes daily to GitHub Pages.",
  },
];

export default projects;
