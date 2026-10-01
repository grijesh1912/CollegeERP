export type Lab = {
  title: string;
  image: string;
  description: string;
  experiments: string[];
};

export type Faculty = {
  name: string;
  post: string;
  qualification:string;
  email:string;
  image: string;
  branch:string;
};

export type Department = {
  title: string;
  about: string;
  vision: string;
  mission: string[];
  peo: string[];
  pso: string[];
  labs: Lab[];
  faculty: Faculty[];
};

export const departments: Record<string, Department> = {

  // =====================================================
  // COMPUTER ENGINEERING
  // =====================================================

  computer: {
    title: "Computer Engineering",

    about:
      "The Computer Engineering department offers Undergraduate Programs in Computer Engineering. Graduates of the computer engineering program can make their careers in the field of Information & Communication Technology, Electronics Industry, Academics and R & D. The Computer Department has a computer center with more than 300 computers with latest software and internet connectivity.",

    vision:
      "Our vision is to build a research identity around the information sciences and computation, and data analytics and to build an educational identity through leading degree programs based on curricular innovation and research. Our educational approach emphasizes a solid technical base combined with critical thinking, emotional intelligence and experiential learning while encouraging entrepreneurship through open innovation with quality, high-impact service.",

    mission: [
      "Provide excellent graduate education in strong environment for preparing students to be self motivated, creative researcher, entrepreneurship and knowledge transformer to industry and society. The department promotes excellence in teaching, curriculum activities and real time platforms for students to discover themselves",
    ],

    peo: [
      "To excel in professional career and/or higher education by acquiring knowledge in mathematical, computing and engineering principles.",

      "To exibit professionalism, ethical attitude, team work in their profession and adapt to current trends by engaging in life long learning.",

      "To develop communication and managerial skills, leadership skills, professional ethics, and creative thinking.",
    ],

    pso: [
      "Program Outcomes are narrower statements that describe what the students are expected to know and be able to do upon the graduation. These relate to the knowledge, skills and behavior the students acquire through the program. They are specific to the program and are consistent with the Graduate Attributes and facilitate the attainment of PEOs. The graduate of BE program in Computer Engineering should be able to",

      "PO1. Ability to apply Mathematics, Science and Engineering.",

      "PO2. Ability to design and conduct experiments; as well as to analyze and interpret data",

      "PO3. Ability to design a system, component or process to meet desired needs within realistic constraints such as economic, environmental, social, political, ethical, health and safety, manufacturability and sustainability",

      "PO4. Ability to function in multidisciplinary teams",

      "PO5. Ability to identify, formulate and solve engineering problems",

      "PO6. Understanding of professional and ethical responsibility",

      "PO7. Ability to communicate effectively",

      "PO8. Understanding the impact of engineering solutions in a global, economic, environmental and societal context",

      "PO9. Recognizing the need and having the ability to engage in lifelong learning",

      "PO10. Knowledge of contemporary issues",

      "PO11. Ability to use techniques, skills and modern engineering tools necessary for engineering practice",
    ],

    labs: [
      {
        title: "Computer Programming & Utilization",
        image: "/labs/programming.jpg",
        description:
        "Computer Programming & Utilization deals with the basic fundamentals of C Lainguage.We Perform the C basic Program to develop the coding skills.",
        experiments: [
          
          "Introduction to Basic Computer, Flow Charts & Algorithm",
          "Introduction to Basic C programs",
          "Programs Using Condition Making and Branching",
          "Programs Using Condition Making and Looping",
          "Programs Using Arrays and Strings",
          "Programs Using User - defined Functions and Structure",
          "Programs Using Pointers",
        ],
      },

      {
        title: "Operating System",
        image: "/labs/database.jpg",
        description:"An operating system (OS) is the software component of a computer system that is responsible for the management and coordination of activities and the sharing of the resources of the computer. We Perform the Practical related to scheduling Algo and Shell script Programming.\nTo understand the basic concepts of computer network and firm foundation for understanding how data communication occurring using computer network. It is based around the OSI Reference Model which deals with the major issues and related protocol studies in the various layers (Physical, Data Link, Network, Transport, Session, Presentation and Application) of the model. This course provides the student with fundamental knowledge of the various aspects of computer networking and enables students to appreciate recent developments in the area. The course will be driven from the engineering perspective.",
        experiments: [
          "Basic commands of UNIX.",
          "Write a shell script to print a name of user.",
          "Write a shell script to add two numbers.",
          "Write a shell script to find a greater number out of two numbers.",
          "Write a shell script to find a greater number out of three numbers.",
          "Write a shell script to add, subtract, multiply and divide two numbers.",
          "Write a shell script to generate marksheet of student. 1) Take three subjects. 2) Calculate percentage and a class obtained by the student.",
          "Write a shell script to check the given number is even or odd.",
          "Write a shell script to check whether the given number is prime or not.",
          "Write a shell script to find Fibonacci series.",
          "Write a shell script to find Factorial of given number.",
        ],
      },

      {
        title: "Computer Network",
        image: "/labs/ai.jpg",
        description:"To understand the basic concepts of computer network and firm foundation for understanding how data communication occurring using computer network. It is based around the OSI Reference Model which deals with the major issues and related protocol studies in the various layers (Physical, Data Link, Network, Transport, Session, Presentation and Application) of the model. This course provides the student with fundamental knowledge of the various aspects of computer networking and enables students to appreciate recent developments in the area. The course will be driven from the engineering perspective.",
        experiments: [
          "TCP Client Server Programming",
          "UDP Client Server Programming",
          "Installation & Study of Network Simulator NS3",
          "Creating Point to Point to Link in NS3",
          "Changes required to generate .pcap files",
          "Changes required to pass real data in NS3",
          "Creating CSMA in NS3",
          "Creating Wifi Access Point in NS3",
        ],
      },

      {
        title: "System Programming",
        image: "/labs/network.jpg",
        description:"System Progamming is the activity of computer programming system software. We Perform the Practical using the LEX AND YACC Parser.\nTo understand the basic concepts of computer network and firm foundation for understanding how data communication occurring using computer network. It is based around the OSI Reference Model which deals with the major issues and related protocol studies in the various layers (Physical, Data Link, Network, Transport, Session, Presentation and Application) of the model. This course provides the student with fundamental knowledge of the various aspects of computer networking and enables students to appreciate recent developments in the area. The course will be driven from the engineering perspective.",
        experiments: [
          "Introduction to LEX.",
          "Lex program that contains no patterns and no actions.",
          "LEX program to show the message when enter key is pressed.",
          "LEX program to print the name of user with message when enter key is pressed.",
          "LEX program to check whether the string is in small case letter, uppercase letter or contains mixed letter.",
          "LEX program to print the name of the user with message when the enter key is pressed using the function.",
          "LEX program to check whether the given word is vowel or not.",
          "LEX program to recognizes the keyword if, begin and identifier which is defined as any string starts with letter and followed by letter or digit.",
          "LEX program to check whether the parenthesis in the statement is missing or not.",
          "Lex program which replaces all the occurrances of “rama” with “RAMA” and “sita” with “SITA”. It demonstrates the use of string as a direct pattern in the specification file.",
          "Lex program to count all occurrences of “rama” and “sita” in a given file.",
          "Introduction to Yacc.",
        ],
      },
      {
        title: "Software Engineering",
        image: "/labs/programming.jpg",
        description:"Software engineeringi the study and an application of engineering to the design development, and maintenance of software. we Develope the Various Diagram Like Use Case Diagram , Sequence Diagram, Data Flow Diagram, Class Diagram related to Different Projects.\nTo understand the basic concepts of computer network and firm foundation for understanding how data communication occurring using computer network. It is based around the OSI Reference Model which deals with the major issues and related protocol studies in the various layers (Physical, Data Link, Network, Transport, Session, Presentation and Application) of the model. This course provides the student with fundamental knowledge of the various aspects of computer networking and enables students to appreciate recent developments in the area. The course will be driven from the engineering perspective.",
        experiments: [
          "Introduction Of System and specify Hardware And Software Requirement",
          "Design Use-Case Diagram for the system.",
          "List Out Functional & Non-Functional Requirement for the system.",
          "Make SRS (System Requirement Specification) for system.",
          "Identify The Process Model and write description about model for the System.",
          "Design E-R Diagram for the system.",
          "Design class Diagram for the system.",
          "Design Sequence Diagram for the system.",
          "Design State Diagram for the system.",
          "Design Activity Diagram for the system.",
          "Design Data Flow Diagram (DFD) for the system.",
          "Make the Data Dictionary for the system",
        ],
      },
      {
        title: "Web Technology",
        image: "/labs/programming.jpg",
        description:"Web Application Devlopment deals with the Development of the Website. We Perform the Practical related to HTML ,CSS ,Java Script and PHP.",
        experiments: [
          "Describe the concepts of WWW including browser and HTTP protocol.",
          "List the various HTML tags and use them to develop the user friendly web pages.",
          "Define the CSS with its types and use them to provide the styles to the web pages at various levels.",
          "Develop the modern web pages using the HTML and CSS features with different layouts as per need of applications.",
          "Use the JavaScript to develop the dynamic web pages.",
          "Use server side scripting with PHP to generate the web p ages dynamically using the database connectivity.",
          "Develop the modern Web applications using the client and server side technologies and the web design fundamentals",
        ],
      },
      {
        title: "Design and Analysis of Algorithm",
        image: "/labs/programming.jpg",
        description:"Techniques for the design and analysis of efficient algorithms, emphasizing methods useful in practice. Practicals include sorting; search trees, heaps, and hashing; divide-and-conquer; dynamic programming; greedy algorithms; amortized analysis; graph algorithms; and shortest paths.",
        experiments: [
          "Implementation and Time analysis of Bubble Sort",
          "Implementation and Time analysis of Insertion Sort.",
          "Implementation and Time analysis of Selection Sort.",
          "Implementation and Time analysis of Merge Sort.",
          "Implementation and Time analysis of Quick Sort.",
          "Implementation and Time analysis of Linear and binary Search algorithm.",
          "Implementation and Time analysis of Max heap algorithm.",
          "Implementation and Time analysis of Factorial program using recursive and iterative method.",
          "Implementation and Time analysis of Knapsack Problem (Dynamic Programing).",
          "Implementation and Time analysis of matrix multiplication.",
          "Implementation and Time analysis of prims algorithm.",
        ],
      },
      {
        title: "Database Management System",
        image: "/labs/programming.jpg",
        description:"Information Security refers to the processes and methodologies which are designed and implemented to protect print, electronic, or any other form of confidential, private and sensitive information or data from unauthorized access, use, misuse, disclosure, destruction, modification, or disruption. We Perform the Practiclas of Various Encryption and Decryption Algorithm like Ceaser Cipher,Play Fair cipher, Data Encryption Standard, RSA Algorithm.",
        experiments: [
          "To study DDL create and DML insert commands.",
          "Create table and insert data accordingly.",
          "To perform various data manipulation commands, aggregate functions and sorting conceptson all created tables.",
          "To study single row functions.",
          "Displaying data from multiple tables.",
          "To apply the concept of aggregating data using group functions.",
          "To solve queries using the concept of sub query.",
          "Manipulating data.",
          "To apply the concept of security and privileges.",
          "To study Transaction control commands",
        ],
      },
      {
        title: "Advance Java",
        image: "/labs/programming.jpg",
        description:"Distributed System is a software in which components located on networked computers communicate and coordinate their actions by passing messages. We Perform the various Practical for Remote Method Invocation, Remote Procedure Call and Message Passing Interface.",
        experiments: [
          "Write a JDBC program to display data of table.",
          "Write a JDBC program to insert data into table.",
          "Write a JDBC program to delete data from table.",
          "Write a JDBC program to insert data into table using Prepared Statement.",
          "Write java servlet Program to display Hello.",
          "Write java servlet Program for count.",
          "Write java servlet Program to insert data into table.",
          "Write a servlet Program for finding area of circle",
          "Write a servlet Program for Filter.",
          "Write a servlet to show how cookies work.",
          "Write JSP Program to display Hello",
          "Write JSP Program for Writing resume in well format",
        ],
      },
      {
        title: "Basic Electronics",
        image: "/labs/programming.jpg",
        description:"",
        experiments: [
          "To observe sine,square and rectangular waveform on CRO",
          "To verify and check superposition theorem",
          "To verify and check thevenin’s theorem",
          "To develop half adder and verify its operation",
          "To study about R-S and D flip flop",
          "To stimulate low pass filter in multisim",
          "To design IC741 as a Schmitt trigger circuit in multisim",
          "To study about inverting and non inverting amplifer",
          "To study about Amplitude shift keying",
          "To study about transfer function for series and parallel feedback system",
        ],
      },
      {
        title: "Elements of Electrical Engineering",
        image: "/labs/programming.jpg",
        description:"In computers, parallel processing is the processing of program instructions by dividing them among multiple processors with the objective of running a program in less time. In the earliest computers, only one program ran at a time.",
        experiments: [
          "Symbol and Colour Coding",
          "Verify Ohm's Law",
          "Effect of Temperature on Resistance",
          "Kirchhoff Law",
          "R-L Series Circuit",
          "R-C Series Circuit",
          "Resonance in AC-RLC series circuit",
          "Star-Delta Connection",
          "Two wattmeter method",
          "Study about the different types of cables",
          "Study about the different types of wiring systems",
          "Study about the different types of Protective Switches and Relays",
        ],
      },
      {
        title: "Compiler Design",
        image: "/labs/programming.jpg",
        description:"",
        experiments: [
          "Introduction to LEX",
          "LEX program to show the message when enter key is pressed.",
          "LEX program to check whether the string is in small case letter, uppercase letter or contains mixed letter",
          "LEX program to print the name of the user with message when the enter key is pressed using the function.",
          "LEX program to check whether the given word is vowel or not using the function.",
          "LEX program to recognizes the keyword if, begin and identifier which is defined as any string starts with letter and followed by letter or digit.",
          "Program using LEX to count the number of characters, words, spaces and lines in a given input file.",
          "LEX program to check whether the parenthesis in the statement is missing or not",
          "Lex program which replaces all the occurrances of “rama” with “RAMA” and “sita” with “SITA”. It demonstrates the use of string as a direct pattern in the specification file.",
          "Lex program to count all occurrences of “ rama “ and “ sita “ in a given file.",
          "Introduction to Yacc",
          "Yacc program which identify the language L = Σ, where Σ = {1,0} if and only if the string starts with 10",
        ],
      },
    ],

    // faculty: [
    //   {
    //     name: "Prof. Amit Prakash Tiwari",
    //     post: "Assistant Professor",
    //   },

    //   {
    //     name: "Prof. Shirin Patel",
    //     post: "Assistant Professor",
    //   },

    //   {
    //     name: "Prof. Grijesh Nemiwal",
    //     post: "Assistant Professor",
    //   },

    //   {
    //     name: "Prof. Piyush Kumar",
    //     post: "Assistant Professor",
    //   },
    // ],
    faculty: [
  {
    name: "Prof. Amit Prakash Tiwari",
    post: "Assistant Professor",
    qualification: "M.Tech iiit Allahabad",
    email: "amit.comp@srpec.org",
    image: "/faculty/amit.jpg",
    branch: "Computer Engineering",
  },
  {
    name: "Prof. Shirin Patel",
    post: "Assistant Professor",
    qualification: "Master (Manipal University)",
    email: "shirin@srpec.org",
    image: "/faculty/shirin.jpg",
    branch: "Computer Engineering",
  },
  {
    name: "Prof. Grijesh Nemiwal",
    post: "Assistant Professor",
    qualification: "M.Tech NIT Hamirpur",
    email: "grijesh.comp@srpec.org",
    image: "/faculty/grijesh.jpg",
    branch: "Computer Engineering",
  },
  {
    name: "Prof. Piyush Kumar",
    post: "Assistant Professor",
    qualification: "M.Tech NIT Hamirpur",
    email: "piyush.comp@srpec.org",
    image: "/faculty/piyush.jpg",
    branch: "Computer Engineering",
  },
],
  },


  // =====================================================
  // CIVIL ENGINEERING
  // =====================================================

  civil: {
    title: "Civil Engineering",

    about:
      "The department offers Undergraduate program in Civil Engineering, is one of the pioneer department since the commencement of the college in 2009. Over the years, the department is rapidly progressed with the development in the spheres of quality education, laboratory facilities and faculty members. The department has highly qualified faculty members engaged in teaching and research activities with the aim of achieving excellence in different fields of Civil Engineering. The faculty members are specialized in different disciplines of Civil Engineering.The department has 10 well equipped laboratories attached to different divisions for conducting teaching and laboratory practices. The facilities available in the laboratories are highly admirable.The graduates passing out from the department are well prepared with knowledge and technical skills, refined with professional touch, capable of undertaking the Civil Engineering jobs to meet all the possible challenges emerging in the area.",

    vision:
      "To provide excellent civil engineering education by providing strong learning environment for all-round development of the students.",

    mission: [
      "To offer high quality graduate program in civil engineering education and to prepare students for professional career or higher studies. The department promotes excellence in teaching, collaborative activities and positive contributions to the society.",
    ],

    peo: [
      "PEO1.To gain the knowledge in mathematical, computing and engineering principles for achieving excellence in professional career and/or higher education.",
      "PEO2. To be updated with current trends as a part of long learning to show professionalism, ethical attitudes and team work in their profession.",
      "PEO3.To develop communication and managerial skills, leadership skills, professional ethics, and creative thinking.",
    ],

    pso: [
      "Program Outcomes are narrower statements that describe what the students are expected to know and be able to do upon the graduation. These relate to the knowledge, skills and behavior the students acquire through the program. They are specific to the program and are consistent with the Graduate Attributes and facilitate the attainment of PEOs. The graduate of BE program in Civil Engineering should be able to",
      "PO1 : An ability to apply engineering principles appropriate to the Civil Engineering using knowledge of computing, mathematics and science.",

      "PO2 : Design solutions for complex Civil Engineering problems to meet the needs of the society with respect to sustainable development considerations",

      "PO3 : An ability to use current techniques, modern tools to implement theoretical knowledge into experiments with proper analysis and interpretation of data.",

      "PO4 : Knowledge of professional, ethical, legal, security, social and contemporary issues and responsibilities.",

      "PO5 : An ability to work efficiently at individual level and also at team level with diverse and multidisciplinary areas to achieve a common goal.",

      "PO6 : An ability to communicate effectively to accomplish a task.",

      "PO7 : Knowledge of engineering and management ethics to apply those to individual and in team work as a leader to handle the assigned task projects.",

      "PO8 : Identification of the requirement and an ability to involve in continuing professional development.",
      
    ],

    labs: [
      {
        title: "Basics of Civil Engineering & Advanced Surveying",
        image: "/labs/Surveying.jpg",
        description:"Elements of Civil Engineering deals with the basic fundamentals of Surveying and levelling, Classification of surveying, Plans and maps, Scales, Units of measure and basic knowledge of types of building construction & materials.",
        experiments: [
          "Demonstration for lab Equipment",
          "Measurement of distance and offset measurement by swing Method And open cross staff by chain and tape method",
          "Measurement of bearing for prismatic compass and surveying compass",
          "Measurement of levels by dumpy level",
          "Plane Table Survey Project and Theodolite Traverse Survey Project.",
          "Setting out of Curve",
          "Units of measure and basic knowledge of types of building construction & materials.",
          "To Study Various Parts of Tacheometer& How To Measure Vertical Angle Using Tacheometer",
          "Determination of Tacheometeric Constants, Tacheometer Contour Survey Project",
          "Extension of Base Line",
          "Study Of Photogrammetry and Electromagnetic Distance Measurement",
          "Applications of Remote Sensing",
                  ],
      },

      {
        title: "Mechanics of Solid",
        image: "/labs/Concrete.jpg",
        description:"",
        experiments: [
          "Law of polygon of forces",
          "Wheel and differential axle",
          "Single purchase crab winch",
          "Brinell hardness test",
          "Rockwell hardness test",
          "Izod impact test",
          "Equilibrium of parallel force system - simply supported beam",
          "Coefficient of static friction",
          "Compression test on timber and metal",
          "Tension test on mild steel",
        ],
      },

      {
        title: "Concrete Technology",
        image: "/labs/Structural.jpg",
        description:"",
        experiments: [
          "Fineness of Cement by Dry Sieving",
          "Standard Consistency",
          "Initial & Final Setting Time",
          "Soundness of Cement",
          "Compressive Strength of Cement",
          "Bulk Density of Aggregate",
          "Bulking of Sand&Sieve Analysis",
          "Effect of Water/ Cement Ration on Slump",
          "Effect of W/C Ration on Compaction Factor&Vee-bee-Test",
          "Effect of W/C Ration on Effects of W/C Ration on compressive Strength of Concrete",
          "Effects of W/C Ration on flexure and Tensile Strength of Concrete",
        ],
      },

      {
        title: "Engineering Geology",
        image: "/labs/Environmental.jpg",
        description:"",
        experiments: [
          "Introduction to the Formation of rocks (Geological cycle).",
          "Introduction to Folds and Faults.",
          "Earthquake zones and its identifications.",
          "Classification of rocks, minerals and alloys.",
          "Understanding the Interior of Earth.",
          "Deformation of Earth.",
        ],
      },

      {
        title: "Highway Engineering",
        image: "/labs/Environmental.jpg",
        description:"",
        experiments: [
          "Determination of Specific Gravity and Water Absorption",
          "Determination of Bulk Density voids of Coarse and Fine Aggregates",
          "Determination of Aggregate Impact value, Aggregate Crushing Value& Shape Test",
          "Determination of Abrasion value of Aggregates by the use of Loss Angeles Abrasion Machine",
          "Determination of Stripping value of Road Aggregate",
          "Determination of Softening Point of Bitumen Material",
          "Determination of Penetration value of Bitumen",
          "Determination of Ductility of the Bitumen",
          "Determination of Viscosity of Bitumen",
          "Determination of Flash Point and Fire Point of Bitumen",
          "Determination of Bitumen Content by Centrifuge Extractor",
        ],
      },

      {
        title: "Geotechnical Engineering",
        image: "/labs/Environmental.jpg",
        description:"",
        experiments: [
          "Visual Identification and specific gravity, Sieve Analysis &Hydrometer Analysis",
          "Liquid Limit, Plastic Limit and Shrinkage Limit.",
          "Proctor Compaction Test",
          "Core-cutter Test.",
          "Sand replacement Test.",
          "Consolidation Test &Direct Shear Test.",
          "Unconfined Compression Test.",
          "Demonstration of Triaxial Test",
          "Relative Density",
          "California Bearing Ratio Test",
          "Permeability Test",
        ],
      },

      {
        title: "Environment Engineering",
        image: "/labs/Environmental.jpg",
        description:"",
        experiments: [
          "Introduction to Standards, Sampling, Collection and Preservation of Samples",
          "Determination of pH and Conductivity for Water and Waste water",
          "Determination of Solids (Total, Suspended, Dissolved)",
          "Determination of Acidity of Water",
          "Determination of Alkalinity of Water",
          "Determination of Hardness of Water",
          "Measurement of Noise at different sources using Sound meter",
          "Characterization of Municipal Solid Waste",
        ],
      },

      {
        title: "Fluid Mechanics",
        image: "/labs/Environmental.jpg",
        description:"",
        experiments: [
          "Experiments on Orificemeter,Venturimeter, Pitot Tube",
          "Reynold’s Experiments",
          "Flow through Nothes Weirs",
          "Bernoulli’s Apparatus",
          "Friction Losses In Pipes",
        ],
      },

      {
        title: "Applied Fluid Mechanics",
        image: "/labs/Environmental.jpg",
        description:"",
        experiments: [
          "Experiments on Orificemeter, Venturimeter, Pitot Tube",
          "Reynold’s Experiments",
          "Flow through Nothes Weirs",
          "Bernoulli’s Apparatus",
          "Friction Losses In Pipes",
          "Velocity diagram by using Wind Tunnel.",
          "Hydraulic Flume and its experimental analysis.",
          "Experiments on weirs and to determine the coefficient of discharge",
          "Design and study the performance characteristics of Peltonwheel and Francis Turbine",
        ],
      },

      {
        title: "Earhquake Engineering",
        image: "/labs/Environmental.jpg",
        description:"",
        experiments: [
          "Experiment and Analysis on Shake Table",
          "Analysis of G+5 and more storey buildings",
        ],
      },
    ],

    faculty: [
      {
        name: "Prof. Vikram Gupta",
        post: "HOD",
        qualification: "M.Tech MNIT Jaipur",
        email: "vikram.civil@srpec.org",
        image: "/faculty/vikram.jpg",
        branch: "Civil Engineering",
      },

      {
        name: "Prof. Hiren V Patel",
        post: "Assistant Professor",
        qualification: "M. E. (GTU)",
        email: "hirenV.civil@srpec.org",
        image: "/faculty/hiren.jpg",
        branch: "Civil Engineering",
      },

      {
        name: "Prof. Tushar Mistri",
        post: "Assistant Professor",
        qualification: "M. Tech. (MSU, Vadodara)",
        email: "tushar.civil@srpec.org",
        image: "/faculty/tushar.jpg",
        branch: "Civil Engineering",
        
      },

      {
        name: "Prof. Priya Sharma",
        post: "Assistant Professor",
        qualification: "M.Tech NIT Hamirpur",
        email: "priya.civil@srpec.org",
        image: "/faculty/priya.jpg",
        branch: "Civil Engineering",
      },

      // {
      //   name: "Prof. Jitendra Poddar",
      //   post: "Assistant Professor",
      // },
    ],
  },


  // =====================================================
  // MECHANICAL ENGINEERING
  // =====================================================

  mechanical: {
    title: "Mechanical Engineering",

    about:
      "The department offers Undergraduates & Postgraduate Programs in Mechanical Engineering. It has state of the art laboratories. Central Workshop is spread over 1134 sqm. housing carpentory shop, fitting shop, black-smithy and tin-smithy, plumbing shop, machine shop and foundry shop. The Mechanical engineers are required in automobile industries, steel plants, oil exploration and refining industries, technical wings of armed forces, aeronautical, agriculture industries etc. They get absorbed in private or public sector industries of various type. Several government department like SAIL , ONGC, DEFENCE, PWD, CPWD, reliance, L&T, Siemens etc employ mechanical engineers.",

    vision:
      "To provide excellent mechanical engineering education by providing strong learning environment for all-round development of the students.",

    mission: [
      "To offer high quality graduate and post graduate programs in mechanical engineering education and to prepare students for professional career or higher studies. The department promotes excellence in teaching, collaborative activities and positive contributions to the society.",
    ],

    peo: [
      "To excel in professional career and/or higher education by acquiring knowledge in mathematical, computing and engineering principles.",

      "To exibit professionalism, ethical attitude, team work in their profession and adapt to current trends by engaging in life long learning.",

      "To develop communication and managerial skills, leadership skills, professional ethics, and creative thinking.",
    ],

    pso: [
      "Program Outcomes are narrower statements that describe what the students are expected to know and be able to do upon the graduation. These relate to the knowledge, skills and behavior the students acquire through the program. They are specific to the program and are consistent with the Graduate Attributes and facilitate the attainment of PEOs. The graduate of BE program in Mechanical Engineering should be able to",

      "PO1. Analyze, design, optimise and evaluate mechanical components and systems using state-of-the-art IT tools.",

      "PO2. Analyze, design, optimise and evaluate thermal systems including IC engines, refrigerating, air-conditioning, and power generating systems.",

      "PO3. Plan, including methods design, process plan, and process automation, the manufacturing of given mechanical components and systems.",

      "PO4. Analyze and design quality assurance systems.",

      "PO5. Apply modern management methods to manufacture of components and systems.",

      "PO6. Understanding of professional and ethical responsibility",

      "PO7. Work in a team using common tools and environments to achieve project objectives.",

      "PO8. Recognize their professional and personal responsibility to the community.",

      "PO9. Pursue life-long learning as a means of enhancing the knowledge and skills necessary to contribute to the betterment of their profession and community.",
    ],

    labs: [
      {
        title: "Elements of Mechanical Engineering",
        image: "/labs/Manufacturing.jpg",
        description:"This course studies the fundamentals and models of various types of boilers, boiler mountings and accessories, power transmission elements like gears, clutches, couplings and brakes. and also includer basic knowledge about pump and compressors. This lab gives clear idea about importance and working of this elements of mechanical engineering.",
        experiments: [
          " Introduction to steam boilers",
          "Study of various type of boilers",
          "To study boiler mountings and accessories",
          "To study working of two stroke i.c.engine",
          "To study working of four stroke i.c.engine",
          "Study of pumps and air compressor",
          "Study of steam calorimeters",
          "Study of refrigerator and air conditioners",
          "Study of power and motion transmission system",
          "Study of couplings, clutches and brakes",
        ],
      },

      {
        title: "Material Science and Metalurgy Engineering",
        image: "/labs/Thermal.jpg",
        description:"Material science and Metallurgy plays a role in all manufacturing processes which convert raw materials into useful products adapted to human needs. The primary goal of the Material science and Metallurgy course is to provide undergraduates with a fundamental knowledge base associated with materials-processing, their properties, and their selection and application.",
        experiments: [
          " Study of phase diagrams for structure - property - correlation",
          "Study of Fe3 – C carbide equilibrium diagrams",
          "Study of optical metallurgical microscope",
          "Preparation of specimen for microscopic examination",
          "Mounting of specimen",
          "Micro structural observation of ferrous material",
          "Effect of quenching media on hardening of steel",
          "Determination of hardenability of steel",
          "Determine the effect of section size on hardness of material developed during quenching",
          "Detection of flaws in materials using ultrasonic flaw detector",
          "Detection of flaws in materials through dye - penetr ant and magnetic particle inspection methods",
        ],
      },

      {
        title: "Fluid Mechanics",
        image: "/labs/CAD/CAM.jpg",
        description:"Fluid mechanics refers to a broad engineering field that studies the fundamental behavior of fluids .The laboratory exercises outlined here are designed to assist the student in the investigation of fluid properties, application of flow measurement techniques, determination of turbomachinery characteristics, and application of conservation laws.",
        experiments: [
          "To determine the metacentric height of a ship model",
          "To reynolds apparatus",
          "Verification of bernoullis’ theorem apparatus",
          "To study venturimeter & orifice meter",
          "To study pitot – tube apparatus",
          "To study free & forced vortex flow apparatus",
          "To determine losses in pipe friction by pipe friction apparatus",
          "To study flow over weirs apparatus",
          "To study flow over notches apparatus",
          "To study variation of viscosity of given oil with temperature",
        ],
      },

      {
        title: "Manufacturing Processes-I & II",
        image: "/labs/Robotics.jpg",
        description:"These laboratories are introduction to the use and operation of selected industry machineries, various machining operations, and basic skills on conventional machines, such as lathes, mills, shapers, grinders, and drill presses. The students also learn about various welding processes on different kind of materials along with safety recommendations in manufacturing processes to get skilled profession attitude which help them to be professional engineers.",
        experiments: [
          " Study of lathe machine and its components",
          "Practice of tool geometry",
          "Practice of component preparation on lathe machine",
          "Shaper, planer and slotter machine tools, their components and operations",
          "Practice of component preparation on shaper machine",
          "Boring machine tools components & operations",
          "Milling machine tools components & operations",
          "Drilling machine tools components & operations",
          "Grinding machine tools components & operations",
          "Study of sawing & broaching machine",
          "Assignment",
        ],
      },
      {
        title: "Mechanical Measurement and Metrology",
        image: "/labs/CAD/CAM.jpg",
        description:"Material science and Metallurgy plays a role in all manufacturing processes which convert raw materials into useful products adapted to human needs. The primary goal of the Material science and Metallurgy course is to provide undergraduates with a fundamental knowledge base associated with materials-processing, their properties, and their selection and application.",
        experiments: [
          "To study about different terminology related to metrology",
          "To measure the dimensions of given work piece using vernier caliper and micrometer",
          "To study about linear measuring instruments",
          "Measurement of given angle, height and depth of given work piece with the help of combination set and bevel protractor",
          "To find unknown angle of a given component using sine bar",
          "To study about pressure measuring devicesv",
          "To measure the tooth thickness of a given spur gear using gear tooth vernier caliper",
          "To study about measurem ent of straightness, flatness, squareness and",
          "To study about measurement of surface finish",
          "To study about gear and thread measurement",
          "To study about temperature measurement",
        ],
      },
      {
        title: "Fluid Power Engineering",
        image: "/labs/CAD/CAM.jpg",
        description:"Fluid power plays an important role in industry. Uses of fluid power include machine tools, off-road vehicles, material testing systems etc. One objective of this course is to introduce students to this exciting field through hands on exercises of connecting up fluid power circuits and observing how they operate. The second objective of the course is to provide students with hands on experience in designing and implementing control systems for real systems.",
        experiments: [
          "Explanation of Hydro Power station",
          "Description o of Impact of Jets",
          "To perform the practical on Pelton wheel turbine and determine it’s operating characteristics",
          "To perform the practical on Francis turbine and determine it’s characteristics",
          "To perform the practical on Kaplan turbine and determine it’s characteristics",
          "To perform the practical on Gear pump and determine it’s operating characteristics",
          "To perform the practical on Reciprocating pump",
          "To perform a practical on Centrifugal pump and determine it’s operating characteristics",
          "Explanation of centrifugal and axial fl ow compressor",
          "Explanation of Various hydraulic system",
        ],
      },
      {
        title: "Theory of Machine",
        image: "/labs/CAD/CAM.jpg",
        description:"Mechanical engineers design, analyze, and manufacture new products and technologies. Theory of machines is a design-oriented subject which addresses the kinematics and dynamics of mechanisms with applications to linkage systems, reciprocating engines, automobile parts and industrial machinery. This lab transforms their basic theory knowledge into the practical approach.",
        experiments: [
          "Overviews of theory of machine",
          "Gyroscopic behavior of a spinning rotor",
          "Moment of inertia of irregular shaped bodies using bifilar suspension",
          "Moment of inertia of irregular bodies using trifilar suspension",
          "Study of characteristics curves of different governors",
          "Synthesis of mechanisms",
          "Study of mechanical brakes",
          "Study of dynamometers",
          "Inertia forces in reciprocating parts",
          "Study of flywheels",
        ],
      },
      {
        title: "Refrigeration and Air Conditioning",
        image: "/labs/CAD/CAM.jpg",
        description:"Refrigeration and air-conditioning is the subject which deals with the techniques to control the environments of the living and non-living subjects and thus provide them comforts to enable them to perform better and have longer lives. This course studies the fundamentals of how different refrigeration system works and their technology in real life application.",
        experiments: [
          "Demonstration of Mechanical Heat Pump cycle",
          "To determine COP for Heat Pump cycle",
          "Demonstration of Air conditioning cycle test",
          "Study of a humidification with Heating Process",
          "Dehumidification with cooling process",
          "To calculate refrigeration effect & coefficient of performance on VARS test rig",
          "To determine Coefficient of Performance (COP) fo r Carnot Cycle, Theoretical Cycle, Actual Cycle & Tonnes of refrigeration Cycle",
          "To study about vapour absorption refrigeration system",
          "To study different psychrometric process & chart",
          "Purging charging evacuating process in refrigeration",
          "To study of a steam jet refrigeration system",
        ],
      },
      {
        title: "Dynamics of Machines",
        image: "/labs/CAD/CAM.jpg",
        description:"The objective of the lab is to perform experiments which are related to engineering mechanics subject (Statics and Dynamics) in order to understand the behavior of different mechanical equipments which students study in theory.",
        experiments: [
          "An Overview of Dynamics of Machinery",
          "Balancing sheet Problems Sheet 1: Balancing of Rotating Masses Sheet 2 : Balancing of Reciprocating Masses",
          "Static And Dynamic Balancing Apparatus",
          "Balancing of V - Engine",
          "To study about different Vibration Measuring Instruments",
          "To determine the critical speed of the shaft (Whirling of Shaft) with different end condition and to compare the value with theoretical calculation",
          "To find the Natural frequency of different System.",
          "Universal Vibration Apparatus",
          "Tutorial 1",
          "Tutorial 2",
        ],
      },
      {
        title: "Heat and Mass Transfer",
        image: "/labs/CAD/CAM.jpg",
        description:"This lab is to introduce the basic principles of heat and mass transfer with emphasis on their analysis and applications to practical engineering problems and also it is used for performing the Heat Transfer experiments to verify some of the theoretical learning in our class by experiments.",
        experiments: [
          "To determine thermal conductivity of metal rod",
          "To determine thermal conductivity of Insulating powder",
          "Experiments on heat transfer through composite wall apparatus",
          "To determine thermal conductivity of liquid guarded hot plate",
          "To determine critical radius of insulating material",
          "Experiment on critical heat flux apparatus",
          "Experiment on heat transfer through Natural (free) convection. apparatus",
          "Experiment on heat transfer through forced convection apparatus",
          "Experiment on Parallel Flow & Counter Flow Heat Exchanger apparatus",
          "Experiment on Plate Type Heat Exchanger Apparatus",
          "To determine stifen - Boltzman constant",
          "To determine Emissivity of a Test Plate",
          "Experiments on Pin - Fin apparatus",
        ],
      },
      {
        title: "Computer Aided Design",
        image: "/labs/CAD/CAM.jpg",
        description:"Computer-aided design (CAD) is the use of computer systems to assist in the creation, modification, analysis, or optimization of a design. It is used for industrial designing and also to increase the productivity of the designer, improve the quality of design, improve communications through documentation, and to create a database for manufacturing. CAD is an important industrial art extensively used in many applications, including automotive, shipbuilding, and aerospace industries, industrial and architectural design.",
        experiments: [
          "To study about CAD system",
          "To study about 2 - D and 3 - D transformation",
          "To study the optimum design method and to solve problem using optimum design method on optimum design of mechanical element",
          "To study the finite element analysis and it’s application to solving mechanical engineering problems",
          "To study about Geometric Modeling and practices on modeling software",
        ],
      },
      {
        title: "Internal Combustion Engines",
        image: "/labs/CAD/CAM.jpg",
        description:"This course studies the fundamentals of how the design and operation of internal combustion engines affect their performance, operation, fuel requirements, and environmental impact. Topics include fluid flow, thermodynamics, combustion, heat transfer and friction phenomena, and fuel properties, with reference to engine power, efficiency, and emissions. Students examine the design features and operating characteristics of different types of internal combustion engines: spark-ignition, diesel, stratified-charge, and mixed-cycle engines. Class includes lab project in the Engine Laboratory.",
        experiments: [
          "To study about Two Stroke Internal Combustion Engines",
          "To study about Four Stroke Internal Combustion Engines",
          "To study about Fuel supply systems for S.I engines",
          "To study about Fuel supply systems for C.I engines",
          "To study about Fundamentals of Supercharging",
          "To study about Turbocharging",
          "To study about Intake Manifold Design",
          "To study about Emission of pollutants from SI & CI engines",
          "Performance on Two stroke two cylinder petrol engine test rig",
          "To study on Multi point ignition system for SI engine",
          "Performance on Four stroke four cylinder diesel engine test rig",
        ],
      },
      {
        title: "Automobile Engineering",
        image: "/labs/VLSI.jpg",
        description:"Automobile engineering deals with designing, manufacturing new products, repairing, and servicing vehicles. It is indeed a sub-branch of mechanical engineering.It involves studying motor systems, design, technology and many more.",
        experiments: [
          "General study about an automobile its component, different system and functions",
          "Chassis layout, type, objective, and frame of an automobile",
          "Clutch system, type, components, functions, and applications",
          "Gear box, different types of mechanism and application",
          "To study about propeller shaft, universal joints, differential gear box of an automobile",
          "Front axle and steering system, types, components, functions and applications",
          "Suspension system, types, components, functions and their applications",
          "Brake system, types, components, applications and functions",
          "Electrical system, components, functions and applications",
          "Advances in automobiles - a way to modern vehicle",
        ],
      },
      {
        title: "Computer Integrated Manufacturing",
        image: "/labs/VLSI.jpg",
        description:"The manufacturing companies today have faced intensive market competition, so that the higher quality and quantity are the basic demands of customers. To fulfill this demand we have well infrastructured laboratory for the training of computer integrated manufacturing .",
        experiments: [
          "Introduction of CIM and its importance in manufacturing environment",
          "Introduction of FMS",
          "Flexibility in FMS and its measurements",
          "Selection of FMC according to lamb technical method",
          "Increasing of Unutilized Workstation Capacity of a Complex FMS by Quantitative Analysis using Bottleneck model",
          "Introduction of GT and part family forming using different method",
          "Grouping Parts & Machines By Rank Order Clustering",
          "Study and Demonstration on Robots",
          "Prepare Program and carryout NC Job",
          "NC Programe - 1",
          "NC Programe - 2",
          "NC Programe - 3",
          "NC Programe - 4",
          "NC Programe - 5",
          "NC Programe - 6",
        ],
      },
      {
        title: "CFD Laboratory",
        image: "/labs/VLSI.jpg",
        description:"Computational fluid dynamics or CFD is one of the most important branches of supportive engineering that is very useful with mechanical engineering. In essence, computational fluid dynamics is analysis of fluid and solid body interactions including mass and heat transfer that takes place in the system.The analysis is done using computational techniques using the aid of computer programming as well as computational engineering softwares. We are providing training of Ansys software to our students by our well experienced faculties.",
        experiments: [
          "Exercise On Pinfin Analysis",
          "Exercise On 1 – D Steady State Conduction Analysis",
          "Exercise On 1 – D Unsteady State Conduction Analysis",
          "Exercise On 2 – D Steady State Conduction Analysis",
          "Exercise On 2 – D Unsteady State Conduction Analysis",
          "Exercise On Convection Problem",
        ],
      },
      {
        title: "Drawing Laboratory",
        image: "/labs/VLSI.jpg",
        description:"These laboratories are introduction to the use and representing various conics and curves. Perform dimensioning to a given drawing. Construction of Plain and Diagonal scales. Orthographic projections of Lines, Planes, and Solids. Construction of Isometric Scale, Isometric Projections and Views. Sectioning of various Solids and their representation. Understand Development of surfaces and their representation. Conversion of Pictorial views to Orthographic Projections.",
        experiments: [
          "Exercise On Pinfin Analysis",
          "Exercise On 1 – D Steady State Conduction Analysis",
          "Exercise On 1 – D Unsteady State Conduction Analysis",
          "Exercise On 2 – D Steady State Conduction Analysis",
          "Exercise On 2 – D Unsteady State Conduction Analysis",
          "Exercise On Convection Problem",
        ],
      },
    ],

    faculty: [
      {
        name: "Prof. Urvesh Patel",
        post: "HOD",
        qualification: "M.E. (GTU, Ahmedabad)",
        email: "urvesh.mech@srpec.org",
        image: "/faculty/urvesh.jpg",
        branch: "Mechanical Engineering",
      },

      {
        name: "Prof. Prakash Mistry",
        post: "Assistant Professor",
        qualification: "M.Tech. (GTU)",
        email: "prakash.mech@srpec.org",
        image: "/faculty/prakash.jpg",
        branch: "Mechanical Engineering",
      },

      // {
      //   name: "Prof. ",
      //   post: "Assistant Professor",
      // },
    ],
  },


  // =====================================================
  // ELECTRONICS & COMMUNICATION ENGINEERING
  // =====================================================

  ec: {
    title: "Electronics & Communication Engineering",

    about:
      "The Department of Electronics & Communication Engineering focuses on embedded systems, VLSI, communication systems, IoT, signal processing and wireless technologies with modern laboratories and industry-oriented learning.",

    vision:
      "To excel in electronics and communication engineering education, fostering innovation in embedded systems, communication and IoT technologies.",

    mission: [
      "Provide quality education in electronics and communication engineering.",
      "Encourage research in VLSI, embedded systems and IoT.",
      "Promote practical learning through modern laboratories.",
      "Develop ethical and industry-ready professionals.",
    ],

    peo: [
      "Develop strong fundamentals in electronics and communication systems.",
      "Prepare students for higher studies and research in ECE.",
      "Promote knowledge of emerging fields like IoT and VLSI.",
      "Build professional ethics and teamwork.",
    ],

    pso: [
      "Design and analyze embedded and communication systems.",
      "Apply signal processing and VLSI concepts to real applications.",
      "Develop IoT-based solutions for real-world problems.",
    ],

    labs: [
      {
        title: "Embedded Systems Lab",
        image: "/labs/Embedded.jpg",
        description:"",
        experiments: [
          "C Programming",
          "Data Structures",
          "Stack Implementation",
          "Queue Implementation",
          "Linked List",
          "Searching Algorithms",
          "Sorting Algorithms",
        ],
      },

      {
        title: "VLSI Design Lab",
        image: "/labs/VLSI.jpg",
        description:"",
        experiments: [
          "SQL Queries",
          "Normalization",
          "Joins",
          "Stored Procedures",
          "Cloud Storage",
        ],
      },

      {
        title: "Communication Systems Lab",
        image: "/labs/Communication.jpg",
        description:"",
        experiments: [
          "Linear Regression",
          "Decision Tree",
          "Random Forest",
          "KNN",
          "Neural Network",
        ],
      },

      {
        title: "IoT & Signal Processing Lab",
        image: "/labs/IoT.jpg",
        description:"",
        experiments: [
          "IP Addressing",
          "Subnetting",
          "Wireshark",
          "Firewall",
          "Packet Analysis",
        ],
      },
    ],

    faculty: [
      {
        name: "Prof. ",
        post: "Assistant Professor",
      },

      {
        name: "Prof. ",
        post: "Assistant Professor",
      },
    ],
  },
};
