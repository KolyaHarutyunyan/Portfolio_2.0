type TSanityBody = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
};

type TImage = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

export type TSocial = TSanityBody & {
  _type: "social";
  title: string;
  url: string;
};

export type TPageInfo =
  | (TSanityBody & {
      _type: "pageInfo";
      address: string;
      backgroundInformation: string;
      email: string;
      role: string;
      heroImage: TImage;
      name: string;
      phoneNumber: string;
      profilePic: TImage;
      footerPic: TImage;
    })
  | null;

export type TExperience = TSanityBody & {
  _type: "experience";
  company: string;
  companyImage: TImage;
  dateStarted: Date;
  dateEnded: Date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: ISkill[];
};

export type TSkill = TSanityBody & {
  _type: "skill";
  title: string;
  progress: number;
  image: TImage;
};

export type TProject = TSanityBody & {
  _type: "project";
  title: string;
  desktopImage: TImage;
  tabletImage: TImage;
  mobileImage: TImage;
  summary: string;
  linkToBuild: string;
  technologies: ISkill[];
};