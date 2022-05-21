import Layout from '../../../Layout';
import {CustomerCreateForm} from "@components/customer/Forms";
import * as C from "./styles";
export default function CreatePage() {
	return (
		<Layout>
			<C.WrapperContent>
			<div className="w-full p-1 h-screen bg-gray-100">
				<C.CardBody>
						<h3 style={{ fontSize: '1.8em', paddingTop: '2em' }}>Criação de conta para os usuários</h3>
					</C.CardBody>

					<CustomerCreateForm />
			</div>
		
		
			</C.WrapperContent>
		</Layout>


	
	);
}
CreatePage.Layout = Layout;
