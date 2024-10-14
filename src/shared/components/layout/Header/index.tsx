import BackIcon from '@/shared/components/icons/BackIcon';
import Flex from '@/shared/components/layout/Flex';

interface HeaderProps {
  title: string;
}
export default function Header({ title }: HeaderProps) {
  return (
    <header className="w-full bg-white px-20 py-16">
      <Flex justify="between" align="center">
        <div>
          <button>
            <BackIcon />
          </button>
        </div>
        <div>
          <h2 className="text-16 font-semibold text-textPrimary">{title}</h2>
        </div>
        <div></div>
      </Flex>
    </header>
  );
}
