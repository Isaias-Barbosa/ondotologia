import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://sorridents.com.br/business/wp-content/uploads/sites/2/2017/10/128879-dentista-entenda-a-importancia-da-humanizacao-no-atendimento.jpg)",
        backgroundColor: "rgba(0,0,0,0.3)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-8 w-full max-w-md">
       <div className="text-left text-lg hover:underline cursor-pointer">
            <Link to="/" className="text-red-500 ">
           Voltar 
            </Link>
          </div>
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Login</h2>

        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input id="email" type="email" placeholder="Digite seu email" className="mt-1 text-gray-700" />
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <Input id="senha" type="password" placeholder="Digite sua senha" className="mt-1 text-gray-700" />
          </div>

          <div className="text-right text-sm text-blue-600 hover:underline cursor-pointer">
            Esqueceu a senha?
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <Button className="bg-blue-600 hover:bg-blue-900 text-white">Login</Button>
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-500">
              Cadastre-se
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
