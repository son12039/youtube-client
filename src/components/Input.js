const Input = ({ label, type, placeholder, value, change }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={change}
        className="w-full px-4 py-3 border focus:outline-none"
      />
    </div>
  );
};
export default Input;
