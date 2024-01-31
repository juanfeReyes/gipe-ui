import { ImageDataLike } from "gatsby-plugin-image";

export interface Service {
  title: string;
  subtitle: string;
  icon: string;
  description: string;
}

export interface CompanyServiceProps {
  title: string;
  summary: string;
  description: string;
  imagePath: any;
  backgroundImage: string;
}

export interface ServiceBranchProps {
  title: string;
  description: string;
  imagePath: ImageDataLike;
  services: CompanyServiceProps[];
}

export const nodeToCompanyService = (n) => ({...n.frontmatter})
