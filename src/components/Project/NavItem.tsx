import scrollHandler from '@/utils/scrollHandler.ts';

function NavItem({ icon: Icon, text, to }: { icon: any; text: string; to: string }) {
  return (
    <button
      type="button"
      onClick={scrollHandler({ sectionId: to })}
      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
    >
      <Icon className="h-4 w-4" />
      <span className="text-base font-semibold">{text}</span>
    </button>
  );
}

export default NavItem;
