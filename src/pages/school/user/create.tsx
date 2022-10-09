import Layout from '../../../Layout';
import {CustomerCreateForm} from "@components/customer/Forms";
import * as C from "./styles";
import { parseContextCookie } from '@utils/parse-cookie';
import { GetServerSideProps } from 'next';
import { isTokenExpired } from 'src/helper/auth';
import { ROUTES } from '@utils/routes';
import { SUPER_ADMIN } from '@utils/constants';
export default function CreatePage() {
	return (
		<Layout>
			<C.WrapperContent>
			<div className="w-full p-1 h-screen bg-gray-100">
				<C.CardBody>
						<h3 style={{ fontSize: '1.8em', paddingTop: '0.5em' }}>Criação de conta para os usuários</h3>
					</C.CardBody>

					<CustomerCreateForm />
			</div>
		
		
			</C.WrapperContent>
		</Layout>


	
	);
}
CreatePage.Layout = Layout;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
	const cookies = parseContextCookie(context?.req?.headers?.cookie);
	if (cookies?.auth_token  || !isTokenExpired(cookies?.auth_token)) {
		if (!cookies?.auth_permissions?.includes(SUPER_ADMIN)) {
			return {
				redirect: { destination: ROUTES.DASHBOARD, permanent: false },
			};
		}
    return {
      props: {},
    };
	}
  return {
    redirect: { destination: "/login", permanent: false },
  };
};
