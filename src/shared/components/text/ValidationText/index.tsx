interface ValidationTextProps {
  text: string;
}

export default function ValidationText({ text }: ValidationTextProps) {
  return (
    <p className="before-content relative pl-10 text-12 font-normal text-[#484B51] before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-[50%] before:bg-[#484B51]">
      {text}
    </p>
  );
}
