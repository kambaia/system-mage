import errors from '@utils/errors.json';
import { FieldError } from './styles';
interface InputErrorProps {
	type: string;
	field: string;
}

export function InputError({ type, field }: InputErrorProps) {
	return (
		<FieldError>
			{errors[field][type]}
		</FieldError>
	)
}
