import * as yup from "yup";
export const employeeValidationSchema = yup.object().shape({
		firstName: yup.string().required(),
		lastName: yup.string().required(),
		email: yup.string().required(),
		gender: yup.string().required(),
		birthDate: yup.string().required(),
		employeeIdentity: yup.string().required(),
		street: yup.string().required(),
		province: yup.string().required(),
		county: yup.string().required(),
		neighborhood: yup.string().required(),
		unitel: yup.string().required(),
		movicel: yup.string().required(),
});
