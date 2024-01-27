import { ImageDataLike } from "gatsby-plugin-image";

export interface Service {
  title: string;
  subtitle: string;
  icon: string;
  description: string;
}

export interface CompanyServiceProps {
  name: string;
  summary: string;
  description: string;
  imagePath: any;
  backgroundImage: string;
}

export interface ServiceBranchProps {
  name: string;
  description: string;
  imagePath: ImageDataLike;
  servicePath: string;
  services: CompanyServiceProps[];
}
