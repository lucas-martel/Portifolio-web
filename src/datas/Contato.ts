import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { SvgIconComponent } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";

export type ContatoType = {
  icon: SvgIconComponent; // Usando ReactElement ao invés de ReactNode para um componente React
  title: string;
  url?: string;
};

export const ContatosData: ContatoType[] = [
  {
    icon: LinkedInIcon,
    title: "Linkedin",
    url: "https://www.linkedin.com/in/lucasmarteldev/",
  },
  { icon: EmailIcon, title: "lucasmartelcavalcante@gmail.com" },
  {
    icon: InstagramIcon,
    title: "Instagram/lucasmartel_",
    url: "https://www.instagram.com/lucasmartel_/#",
  },
  {
    icon: GitHubIcon,
    title: "Github/lucas-martel",
    url: "https://github.com/lucas-martel"
  },
];
