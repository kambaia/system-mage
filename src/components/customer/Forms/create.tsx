import Button from "@components/ui/button";
import Input from "@components/ui/input";
import Card from "@components/common/card";
import Description from "@components/ui/description";
import Label from "@components/ui/label";
import Radio from "@components/ui/radio/radio";
import { CardButton } from "./styles";

type FormValues = {
	name: string;
	email: string;
	contact: string;
	password: string;
	permission: string;
	permissionType: string;
};
const defaultValues = {
	permissionType: "client",
	email: "",
	password: "",
};

export const CustomerCreateForm = () => {

	async function onSubmit({ name, email, contact, permission, password }: FormValues) {

	}
	return (
		<form>
			<div className="flex flex-wrap my-5 sm:my-8">
				<Description
					title="Informação"
					details="Adicione suas informações de cliente e crie um novo cliente a partir daqui"
					className="w-full px-0 sm:pr-4 md:pr-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8"
				/>

				<Card className="w-full sm:w-8/12 md:w-2/3">
					<Input
						label="Nome"
						type="text"
						variant="outline"
						className="mb-4"
					/>
					<Input
						label="Email"

						type="email"
						variant="outline"
						className="mb-4"
					/>
					<Input
						label="Contato"
						type="text"
						variant="outline"
						className="mb-4"

					/>
					<div className="mb-5 mt-5">
						<Label>Tipo de Utilizador</Label>
						<Radio
							label="Cliente (Padrão)"
							value="client"

							id="client"
							className="mb-2"
						/>
						<Radio
							label="Funcionário"
							value="employer"
							id="employer"
							className="mb-2"
						/>


					</div>
					{/* {(permissionType === "employer") && (

          <div className="mb-5 mt-5">
            <Label>DEPARTAMENTO</Label>
            <Radio
              label="Geral"
              value="super_admin"
              id="super_admin"
              className="mb-2"
            />
            <Radio
              label="Administração"
              value="admin"
              id="admin"
              className="mb-2"
            />
            <Radio
              label="Faturação"
              value="billing"
              id="billing"
              className="mb-2"
            />
             <Radio
              label="Estoque (Stock)"
              value="stock"
              id="stock"
              className="mb-2"
            />
            <Radio
              label="Logística"
              value="logistics"
              id="logistics"
              className="mb-2"
            />
          </div>
          )} */}
				</Card>
			</div>

			<div className="mb-4 text-right">
				<CardButton>
					<Button>
						Criar a conta
					</Button>
				</CardButton>
			</div>
		</form>
	);
};

