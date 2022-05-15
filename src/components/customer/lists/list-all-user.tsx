import dayjs from "dayjs";
import { Table } from "../../ui/table";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Input from "../..//ui/input";
import Button from "../..//ui/button";
import { CardButton, CardGroup } from "./styles";
import Link from "next/link";


export const ListAllUserPanel = () => {
     
	 
	return (
		<>
			<div className="w-full p-1 h-screen bg-gray-100">
				<CardButton>
					<h3 style={{ fontSize: '1.5em', paddingTop: '2em' }}>Listam de Todos Usuários do Sistema</h3>
					<Button>	<Link as={'/school/user/create'} href="/school/user/create">
						<a>
							<span className="icon">
							</span>
							<span className="title">Registrar</span>
						</a>
					</Link>
					</Button>
				</CardButton>
				<div className="overflow-auto rounded-lg shadow hidden md:block">
					<CardGroup>
						<Input
							variant="outline"
							className="mb-5"
							placeholder="Pesquisa aqui"
						/>
					</CardGroup>

				</div>

				<div className="overflow-auto rounded-lg shadow hidden md:block">
					<table className="w-full border-collapse border border-slate-400">
						<thead className="bg-gray-50 border-b-2 ">
							<tr>
								<th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">Id</th>
								<th className="p-3 text-sm font-semibold tracking-wide text-left">Foto</th>
								<th className="p-3 text-sm font-semibold tracking-wide text-left">Nome</th>
								<th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Email</th>
								<th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Telefone</th>
								<th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Função</th>
								<th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">data c</th>
								<th className="w-32 p-3 text-sm font-semibold tracking-wide text-center">Ações</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-100">
							<tr className="bg-white border-btransition duration-300 ease-in-out hover:bg-gray-100">
								<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
									1
								</td>
								<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer hover:bg-gray-100">
									foto
								</td>
								<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer hover:bg-gray-100">
									Maria José Alberto
								</td>
								<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer ">
									mariajose@gmail.com
								</td>
								<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
									938288211
								</td>
								<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
									<span
										className="p-1.5 text-xs font-medium uppercase tracking-wide cursor-pointer">Direitora</span>
								</td>
								<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">20-10-2022</td>
								<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">Editar remover</td>
							</tr>



							<tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-slate-300">
								<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
									<a href="#" className="font-bold text-blue-500 hover:underline">2</a>
								</td>

								<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer hover:bg-gray-100">
									foto
								</td>
								<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
									Marculino Fernando Abel
								</td>

								<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
									marculinoalbel@gmail.com
								</td>

								<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
									913288211
								</td>


								<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">Tesoureiro</td>
								<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">16-10-2021</td>
								<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">Editar remover</td>
							</tr>
							<tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-slate-300">
								<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
									<a href="#" className="font-bold text-blue-500 hover:underline">3</a>
								</td>
								<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer hover:bg-gray-100">
									foto
								</td>
								<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
									Mateus Lucambo
								</td>
								<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
									mateuslucambo@gmail.com
								</td>
								<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
									913288211
								</td>
								<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
									<span
										className="p-1.5 text-xs font-medium uppercase tracking-wider rounded-lg">Direitor academico</span>
								</td>
								<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">16-10-2021</td>
								<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">Editar remover</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
					<div className="bg-white space-y-3 p-4 rounded-lg shadow">
						<div className="flex items-center space-x-2 text-sm">
							<div>
								<a href="#" className="text-blue-500 font-bold hover:underline">1</a>
							</div>
							<div className="text-gray-500">Geral</div>
							<div>
								<span
									className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">20-10-2022</span>
							</div>
						</div>
						<div className="text-sm text-gray-700">
							<span className="font-medium text-black">Nome</span>: 	Maria José Alberto
						</div>
						<div className="text-sm">
							<span className="font-medium text-black">Email</span>: 	mariajose@gmail.com
						</div>
					</div>
					<div className="bg-white space-y-3 p-4 rounded-lg shadow">
						<div className="flex items-center space-x-2 text-sm">
							<div>
								<a href="#" className="text-blue-500 font-bold hover:underline">2</a>
							</div>
							<div className="text-gray-500">Restrito</div>
							<div>
								<span
									className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">16-10-2021</span>
							</div>
						</div>
						<div className="text-sm text-gray-700">
							<span className="font-medium text-black">Nome</span>: Marculino Fernando Abel
						</div>
						<div className="text-sm">
							<span className="font-medium text-black">Email</span>: Francisco@gmail.com
						</div>
					</div>
					<div className="bg-white space-y-3 p-4 rounded-lg shadow">
						<div className="flex items-center space-x-2 text-sm">
							<div>
								<a href="#" className="text-blue-500 font-bold hover:underline">3</a>
							</div>
							<div className="text-gray-500">Restrito</div>
							<div>
								<span
									className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">15-10-2021</span>
							</div>
						</div>
						<div className="text-sm text-gray-700">
							<span className="font-medium text-black">Nome</span>: Mateus Lucambo
						</div>
						<div className="text-sm">
							<span className="font-medium text-black">Email</span>: mateuslucambo@gmail.com
						</div>
					</div>
				</div>
			</div>
		</>
	);
};



