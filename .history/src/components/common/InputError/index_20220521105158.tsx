import errors from '@utils/errors.json';
import { Container } from './styles';

import './styles.ts';

interface InputErrorProps {
  type: string;
  field: string;
}

export function InputError({ type, field }: InputErrorProps) {
  // @ts-expect-error
	<Container>

	</Container>
  return <span className="field-error">{errors[field][type]}</span>;
}

}
