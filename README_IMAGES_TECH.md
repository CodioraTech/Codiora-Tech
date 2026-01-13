# Tech Stack Logos Configuration

This project uses a dynamic Tech Stack Marquee in `components/TechMarquee.js`.
To display the logos correctly, you need to add the corresponding image files to the `public/images/tech/` folder.

## 1. Create the Directory
First, ensure this folder exists:
`public/images/tech/`

## 2. Add Logo Images
Save your logo images in that folder using the **EXACT** filenames listed below.
Recommended format: **PNG** with transparent background.
Recommended size: **100x100px** or similar aspect ratio.

### Required Files:
| Technology | Filename |
| :--- | :--- |
| **React** | `react.png` |
| **Next.js** | `nextjs.png` |
| **Tailwind CSS** | `tailwind.png` |
| **Three.js** | `threejs.png` |
| **Node.js** | `nodejs.png` |
| **GraphQL** | `graphql.png` |
| **AWS** | `aws.png` |
| **Framer Motion** | `framermotion.png` |
| **Python** | `python.png` |
| **Rust** | `rust.png` |
| **Solidity** | `solidity.png` |
| **Docker** | `docker.png` |
| **Kubernetes** | `kubernetes.png` |
| **Google Cloud** | `gcp.png` |
| **Azure** | `azure.png` |
| **TypeScript** | `typescript.png` |
| **Vue.mjs** | `vue.png` |
| **MongoDB** | `mongodb.png` |
| **PostgreSQL** | `postgresql.png` |

## 3. How to Update the List
If you want to add more technologies:
1.  Add the image to the folder (e.g., `ruby.png`).
2.  Open `components/TechMarquee.js`.
3.  Add the tech name and filename to the `techData` array.
