type Props = {
  options: string[];
  setCurrentOption: (option: string) => void;
};

function DropDown({ options, setCurrentOption }: Props) {
  const handleChangeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    console.log('🚀  file: List.tsx:12  value', value);
    setCurrentOption(value);
  };

  return (
    <div className='w-full flex justify-end mb-4 md:mb-0 text-primary'>
      <select
        onChange={handleChangeOption}
        className='select select-ghost select-xs sm:select-sm max-w-xs border border-primary'>
        {options.map(option => (
          <option key={option} className='bg-transparent'>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
