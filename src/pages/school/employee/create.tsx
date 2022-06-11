import Layout from '../../../Layout';
import {EmployeeCreateForm} from "@components/employee/Forms";
import * as C from "./styles";
export default function CreatePage() {
	return (
		<Layout>
			<C.WrapperContent>
			<div className="w-full p-1 h-screen bg-gray-100">
						<h3 style={{ fontSize: '1.8em', paddingTop: '0.5em' }}>Registro de Funcionários</h3>
					<EmployeeCreateForm />
			</div>
		
		
			</C.WrapperContent>
		</Layout>


	
	);
}
CreatePage.Layout = Layout;
