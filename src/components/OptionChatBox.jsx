const OptionChatBox = () => {
  return (
    <div className="absolute w-[192px] h-auto bg-primary flex origin-top-right py-1 rounded-md top-14 right-5">
      <ul className="w-full text-white">
        <li className="py-2 hover:bg-secondary px-4">Info kontak</li>
        <li className="py-2 hover:bg-secondary px-4">Pilih pesan</li>
        <li className="py-2 hover:bg-secondary px-4">Tutup chat</li>
        <li className="py-2 hover:bg-secondary px-4">Bisukan notifikasi</li>
        <li className="py-2 hover:bg-secondary px-4">Pesan sementara</li>
        <li className="py-2 hover:bg-secondary px-4">Bersikan pesan</li>
        <li className="py-2 hover:bg-secondary px-4">Hapus chat</li>
      </ul>
    </div>
  );
};

export default OptionChatBox;
