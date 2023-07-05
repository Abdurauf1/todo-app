interface Props {
  onChange: (e: any) => void;
  value: string;
}

const Input = ({ onChange, value }: Props) => {
  return (
    <input value={value} type="text" onChange={onChange} className="form-control px-2" required />
  );
};

export default Input;
