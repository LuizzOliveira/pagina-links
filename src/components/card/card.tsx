import Image from "next/image";
import Button from "./components/Button";
import { FaInstagram, FaLinkedin, FaGithub, FaEdit } from "react-icons/fa";

export default function Card() {
  return (
    <div className="flex items-center justify-center bg-gray-950 h-screen">
      <div className="flex flex-col items-center text-center bg-gray-800 text-white p-6 rounded-xl
                      w-full h-full gap-6
                      sm:max-w-sm sm:h-auto sm:rounded-md
                      md:w-64 md:h-[500px]">

        {/* Imagem */}
        <div className="bg-amber-50 w-28 h-28 rounded-full overflow-hidden mt-4">
            <Image
              src="/perfil.png"
              alt="Foto de perfil"
              width={112}
              height={112}
              className="object-cover"
              priority={true} 
            />
        </div>

        {/* Nome e descrição */}
        <h2 className="text-xl font-bold">Luiz Henrique</h2>
        <p className="text-lime-300 text-sm">Acesse minhas redes sociais!</p>

        {/* Botões */}
        <div className="flex flex-col items-center w-full gap-4 mt-4">
          <Button label="Instagram" href="https://www.instagram.com/lluizh_so" icon={FaInstagram} />
          <Button label="Linkedin" href="https://www.linkedin.com/in/luiz-oliveira-2a3879255/" icon={FaLinkedin} />
          <Button label="GitHub" href="https://github.com/LuizzOliveira/" icon={FaGithub} />
          <Button label="Frontend Mentor" href="https://www.frontendmentor.io/profile/LuizzOliveira" icon={FaEdit} />
        </div>

      </div>
    </div>
  );
}
