type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Sahil Gidwani - Full Stack Developer",
    fullName: "Sahil Gidwani",
    email: "sahilgidwani50@mail.com",
  },
  hero: {
    name: "Sahil",
    p: [ "Full Stack Developer specializing in MERN stack",
      "Building scalable web applications and modern user interfaces",],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content:  `I'm Sahil Gidwani, a passionate Full Stack Developer currently pursuing
      B.Tech in Computer Science Engineering (2022–2026). I specialize in
      building scalable web applications using the MERN stack (MongoDB,
      Express.js, React.js, Node.js).

      I enjoy solving real-world problems through clean and efficient code.
      I have experience building full-stack projects, integrating APIs,
      handling databases, and creating responsive user interfaces.

      I am constantly learning new technologies and improving my skills in
      system design, backend development, and modern web frameworks.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
  p: "My Achievements",
  h2: "Achievements.",
},
    works: {
      p: "My work",
      h2: "Projects.",
      content:  `The following projects showcase my skills and experience in
      full stack web development. Each project demonstrates my ability
      to build scalable applications, work with modern technologies,
      and solve real-world problems.

      Projects include MERN stack applications, real-time systems,
      dashboards, and interactive web applications with modern UI.`,
    },
  },
};
