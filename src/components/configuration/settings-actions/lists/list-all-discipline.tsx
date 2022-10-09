import Input from '../../../ui/input';
import Button from '../../../ui/button';
import { CardButton, CardGroup, ContentTable} from './styles';
import Link from 'next/link';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { allEmployQuery } from '@data/employee/employee-list';
import { useContext, useState } from 'react';
import { AuthContext } from '@contexts/AuthContext';
import Loader from '@components/ui/loader/loader';
import { ModalDiscipline } from '../../modals';
import { UIContext } from '@contexts/ui.context';
export const ListAllDisciplinePanel = () => {
  const { openModal } = useContext(UIContext);
  const { user } = useContext(AuthContext);
  const { isLoading } = allEmployQuery(user?.school._id!);
  return (
    <>
      <div className="w-full p-1 h-screen bg-gray-100">
        <CardButton>
          <h3 style={{ fontSize: '1.5em', paddingTop: '2em' }}>
            Listam de Todos Disciplina
          </h3>
          <Button onClick={openModal}>Registrar Disciplina
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
                  Disciplina
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                 Sigla
                </th>
                 <th className="p-3 w-40 text-sm font-semibold tracking-wide text-left">
                  Ano Letivo
                </th>
               
                <th
                  colSpan={2}
                  className="w-20 m-5 text-center p-2 text-sm font-semibold tracking-wide text-center"
                >
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {isLoading ? (
                <Loader />
              ) : (
                  <tr className="bg-white border-btransition duration-300 ease-in-out hover:bg-gray-100">
                   
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
                       1
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
                      <span className="p-1.5 text-xs font-medium uppercase tracking-wide cursor-pointer">
                    Lingua Portuguesa
                      </span>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
                   LP
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
                     2022
                    </td>
                    <td style={{width:'20px'}} className="text-sm text-gray-700 whitespace-nowrap cursor-pointer">
                      <FiEdit />
                    </td>
                    <td  style={{width:'20px'}} className="p-3 text-sm text-gray-700 whitespace-nowrap cursor-pointer">
                      <FiTrash2 />
                    </td>
                  </tr>
                )
              }
              
            </tbody>
          </table>
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
              <div className="text-gray-500">Ano letivo</div>
              <div>
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                  2022
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-700">
              <span className="font-medium text-black">Disciplina</span>
              : Lingua Portuguesa
             
            </div>
            <div className="text-sm">
              <span className="font-medium text-black">Sigla</span>:
             LP
            </div>
          </div>
         
        </div>
      </div>

      <ModalDiscipline/>
    </>
  );
};
