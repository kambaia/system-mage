import Layout from '../../../../Layout';
import { CustomerUpdateForm } from "@components/customer/Forms";
import * as C from "../styles";
import { useRouter } from "next/router";
import { userQuery } from '@data/user/use-me.query';
import { AuthContext } from '@contexts/AuthContext';
import { useContext } from 'react';
import Loader from '@components/ui/loader/loader';
import ErrorMessage from '@components/ui/error-message';
export default function CreatePage() {
	const { query } = useRouter();
	const { data, isLoading:loading, error} = userQuery(query.id as string);
	if (loading) return <Loader />;
	if (error) return <ErrorMessage message={error.message} />;
	return (
		<Layout>
			<C.WrapperContent>
				<div className="w-full p-1 h-screen bg-gray-100">
					<C.CardBody>
						<h3 style={{ fontSize: '1.8em', paddingTop: '2em' }}>Atualizar as informaçẽos do usuário</h3>
					</C.CardBody>
					
					<CustomerUpdateForm initialValues={data} />
				</div>


			</C.WrapperContent>
		</Layout>



	);
}
CreatePage.Layout = Layout;
