import Input from '../..//ui/input';
import Button from '../..//ui/button';
import { CardButton, CardGroup, ContentTable } from './styles';
import Link from 'next/link';

import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { userSchoolListQuery } from '@data/user/use-me.query';
import { useContext, useState } from 'react';
import { AuthContext } from '@contexts/AuthContext';
import Loader from '@components/ui/loader/loader';
import { formatDate } from '@utils/form-date';
import ErrorMessage from '@components/ui/error-message';
import { useUsersQuery } from '@data/user/use-users.query';
import Pagination from '@components/ui/pagination';
import { UserPaginator } from '@ts-types/generated';


type userListProps = {
	profile: string;
	firstName: string;
	unitel: string,
	email: string,
	phoneNumber: string,
	dateCreated: string,
	permission: string,
	id: string;
}
type IProps = {
	customers: UserPaginator | null | undefined;
	onPagination: (current: number) => void;
};

export const ListAllUserPanel = ({ customers, onPagination }: IProps) => {
	const { data, paginatorInfo } = customers!;
	console.log(customers)
	return (

		<>
			<div className="w-full p-1 h-screen bg-gray-100">
				<CardButton>
					<h3 style={{ fontSize: '1.5em', paddingTop: '2em' }}>
						Listam de Todos Usuários do Sistema
					</h3>
					<Button>
						{' '}
						<Link as={'/school/user/create'} href="/school/user/create">
							<a>
								<span className="icon"></span>
								<span className="title">Registrar</span>
							</a>
						</Link>
					</Button>
				</CardButton>
				<div className="overflow-auto rounded-lg shadow hidden md:block">
					<CardGroup>
						<Input
							name="fullName"
							variant="outline"
							className="mb-5"
							placeholder="Pesquisa aqui"
						/>
					</CardGroup>
				</div>

				<div className="overflow-auto rounded-lg shadow hidden md:block">
					<ContentTable>
						<table className="w-full border-collapse border border-slate-400">
							<thead className="bg-gray-50 border-b-2 ">
								<tr>
									<th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
										Id
									</th>
									<th className="p-3 text-sm font-semibold tracking-wide text-left">
										Foto
									</th>
									<th className="p-3 text-sm font-semibold tracking-wide text-left">
										Nome
									</th>
									<th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
										Email
									</th>
									<th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
										Telefone
									</th>
									<th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
										Função
									</th>
									<th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
										data c
									</th>
									<th
										colSpan={2}
										className="w-20 p-2 text-sm font-semibold tracking-wide text-center"
									>
										Ações
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-100">


								{
									data?.map((items: any, index: number) => (

										<tr className="bg-white border-btransition duration-300 ease-in-out hover:bg-gray-100">
											<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
												{index + 1}
											</td>
											<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer hover:bg-gray-100">
												<div className='user-profile'>
													<img className='rounded-full' src={items?.profile?.thumbnail} alt="profile user" />
												</div>
											</td>
											<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer hover:bg-gray-100">
												{items.name}
											</td>
											<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer ">
												{items.email}
											</td>
											<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
												{items.phoneNumber}
											</td>
											<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
												<span className="p-1.5 text-xs font-medium uppercase tracking-wide cursor-pointer">
													{items.permission.role}
												</span>
											</td>
											<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
												{formatDate(items?.createdAt)}
											</td>
											<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
												<Link href={`/school/user/update/${items.id}`}>
													<a>
														<FiEdit />
													</a>
												</Link>


											</td>
											<td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
												<FiTrash2 />
											</td>
										</tr>
									))
								}
							</tbody>
						</table>

						{!!paginatorInfo.total && (
							<div className="flex justify-end items-center p-4">
								<Pagination
									total={paginatorInfo.total}
									current={paginatorInfo.currentPage}
									pageSize={paginatorInfo.perPage}
									onChange={onPagination}
								/>
							</div>
						)}
					</ContentTable>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
					<div className="bg-white space-y-3 p-4 rounded-lg shadow">
						<div className="flex items-center space-x-2 text-sm">
							<div>
								<a href="#" className="text-blue-500 font-bold hover:underline">
									1
								</a>
							</div>
							<div className="text-gray-500">Geral</div>
							<div>
								<span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
									20-10-2022
								</span>
							</div>
						</div>
						<div className="text-sm text-gray-700">
							<span className="font-medium text-black">Nome</span>: Maria José
							Alberto
						</div>
						<div className="text-sm">
							<span className="font-medium text-black">Email</span>:
							mariajose@gmail.com
						</div>
					</div>
					<div className="bg-white space-y-3 p-4 rounded-lg shadow">
						<div className="flex items-center space-x-2 text-sm">
							<div>
								<a href="#" className="text-blue-500 font-bold hover:underline">
									2
								</a>
							</div>
							<div className="text-gray-500">Restrito</div>
							<div>
								<span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
									16-10-2021
								</span>
							</div>
						</div>
						<div className="text-sm text-gray-700">
							<span className="font-medium text-black">Nome</span>: Marculino
							Fernando Abel
						</div>
						<div className="text-sm">
							<span className="font-medium text-black">Email</span>:
							Francisco@gmail.com
						</div>
					</div>
					<div className="bg-white space-y-3 p-4 rounded-lg shadow">
						<div className="flex items-center space-x-2 text-sm">
							<div>
								<a href="#" className="text-blue-500 font-bold hover:underline">
									3
								</a>
							</div>
							<div className="text-gray-500">Restrito</div>
							<div>
								<span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
									15-10-2021
								</span>
							</div>
						</div>
						<div className="text-sm text-gray-700">
							<span className="font-medium text-black">Nome</span>: Mateus
							Lucambo
						</div>
						<div className="text-sm">
							<span className="font-medium text-black">Email</span>:
							mateuslucambo@gmail.com
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
