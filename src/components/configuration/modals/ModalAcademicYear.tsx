import Button from '@components/ui/button';
import Input from '@components/ui/input';
import Select from '@components/ui/select/select';
import { CardButton, Container } from './style/styles';
import { UIContext } from '@contexts/ui.context';
import { useContext, useEffect, useState } from 'react';
import { getDate } from 'src/helper/getAllData';
import { AcademicPropos } from '@ts-types/generated';
import { useForm } from 'react-hook-form';
type ModalProps= {
  setFormData?: (value:AcademicPropos)=>void;
  formData?:AcademicPropos;
}
type FormValues = {
  description:string,
  startYear: string,
  endYear: string,
};
const defaultValues = {
  description:"",
  startYear: "",
  endYear: "",
};

const ModalAcademicYear = ({setFormData}:ModalProps) => {
  const { closeModal, displayModal } = useContext(UIContext);
  const [startYear, setStartYear] = useState({ value: '1', label: '' });
  const [endYear, setStartEndYear] = useState({ value: '1', label: '' });
  if (!displayModal) return null;

  const {
		register,
		handleSubmit,
	} = useForm<FormValues>({
		defaultValues,
	});
	async function onSubmit({
	  description,
    endYear,
    startYear
	}: FormValues) {
    console.log(description, startYear, endYear)
  }

  const options = getDate();
  return (
    <Container>
      <div onClick={closeModal} className='h-screen bg-black bg-opacity-80 fixed inset-0 z-50 top-0 bottom-0 left-0 right-0'>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='modalContainer'
        >
          <div className='modalRight'>
            <p className='closeBtn' onClick={closeModal}>
              X
            </p>
            <div className='content'>
              
              <div className='body-main'>
                <div className='header-modal'>
                  <h3 className='block text-gray-600 font-semibold text-sm leading-none mb-3'>Registro de um novo ano letivo</h3>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <Input
                      label="Descrição"
                      type="text"
                      variant="outline"
                      placeholder='Digite a descrição para o ano lectivo. Ex.: 2022/2023'
                    	{...register('description')}
                      
                    />
                  </div>
                  <div className='group'>
                    <label className='block text-gray-600 font-semibold text-sm leading-none mb-3'>Selecione o inicio do ano letivo </label>
                    <Select
                      options={options}
                      defaultValue={"Cargo do funcionario"}
                      className="mb-4"
                      placeholder='Seleciona ou pesquisa a propina'
                      value={options?.label} // this doesn't let me click options
                      onChange={option => setStartYear(option)}
                    />


                  </div>
                  <div className='group'>
                    <label className='block text-gray-600 font-semibold text-sm leading-none mb-3'>Selecione o final do ano letivo </label>
                    <Select
                      options={options}
                      defaultValue={"Cargo do funcionario"}
                      className="mb-4"
                      placeholder='Seleciona ou pesquisa a propina'
                    />


                  </div>




                  <CardButton>
                    <Button>Salvar</Button>
                  </CardButton>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { ModalAcademicYear };