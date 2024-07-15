import { ChatContextProvider } from './context/chatContext';
import SideBar from './components/SideBar';
import ChatView from './components/ChatView';
import { useEffect, useState } from 'react';
import Modal from './components/Modal';
import Setting from './components/Setting';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('OpenAI'); // Default option

  useEffect(() => {
    const apiKey = window.localStorage.getItem('api-key');
    if (!apiKey) {
      setModalOpen(true);
    }
  }, []);

  return (
    <ChatContextProvider>
      <Modal title='Setting' modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <Setting modalOpen={modalOpen} setModalOpen={setModalOpen} selectedOption={selectedOption} />
      </Modal>
      <div className='flex transition duration-500 ease-in-out'>
        <SideBar />
        <ChatView selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      </div>
    </ChatContextProvider>
  );
};

export default App;
