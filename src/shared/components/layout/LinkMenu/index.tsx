import NextIcon from "../../icons/NextIcon";
import Flex from '@/shared/components/layout/Flex';


interface LinkmenuProps {
    title: string;
  }



export default function LinkMenu({ title }: LinkmenuProps) {

    return (
      <header className="w-full bg-white px-20 py-16">
        <Flex justify="between" align="center">
          <div>
            <h2 className="text-16 font-semibold text-textPrimary">{title}</h2>
          </div>
          <NextIcon />
        </Flex>
      </header>
    );
  }
  