interface ValidationTextProps {
  text: string;
  error?: boolean;
}

export default function ValidationText({ text, error }: ValidationTextProps) {
  return (
    <p
      className={`before-content relative pl-10 text-12 font-normal ${error ? 'text-textError' : 'text-[#484B51]'} before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-[50%] ${error ? 'before:bg-textError' : 'before:bg-[#484B51]'}`}
    >
      {text}
    </p>
  );
}
