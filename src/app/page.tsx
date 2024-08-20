import ChatWindow from '@/components/ChatWindow';

export const metadata = {
  title: 'Support Chat',
  description: 'Customer Support Chat',
};

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <h1 className="font-extrabold text-2xl md:text-4xl text-center pt-2 pb-2 md:pt-3  text-gray-800">
          ai chat
        </h1>
      </div>
      <ChatWindow />
    </>
  );
}
