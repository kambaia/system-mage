import errors from '../../utils/errors.json';

import './styles.ts';

interface InputErrorProps {
  type: string;
  field: string;
}

export function InputError({ type, field }: InputErrorProps) {
  return <span className="field-error">{errors[field][type]}</span>;
}
