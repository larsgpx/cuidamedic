import { InternaTratamiento } from "@/views/InternaTratamiento";
export function Bioremodelador() {
  const data = {
    title: "Bioremodelador",
    subtitle: "Bioremodelador es una bioremodelador que se utiliza para rejuvenecer la piel y mejorar la salud de la piel.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/bg1.jpg",
    backgroundImage: "/bg1.jpg",
    featured: false,
    position: "bottom-left",
    overlay: "from-green-100/80 to-emerald-100/80"
}
return <InternaTratamiento data={data} />
}
