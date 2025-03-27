interface InputFieldProps {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({ type = "text", placeholder, value, onChange }: InputFieldProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-gray-300 p-2 rounded-md w-full focus:ring-2 focus:ring-blue-400"
    />
  );
}
