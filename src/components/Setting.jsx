import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { checkApiKey, checkGeminiApiKey } from '../utils/checkKeys';

const Setting = ({ modalOpen, setModalOpen, selectedOption }) => {
  const openAiApiKey = window.localStorage.getItem('openai-api-key') || '';
  const geminiApiKey = window.localStorage.getItem('gemini-api-key') || '';
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    if (modalOpen) {
      if (selectedOption === 'OpenAI') {
        setInput(openAiApiKey);
      } else if (selectedOption === 'Gemini') {
        setInput(geminiApiKey);
      }
    }
  }, [openAiApiKey, geminiApiKey, modalOpen, selectedOption]);

  const saveKey = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      if (selectedOption === 'OpenAI') {
        await checkApiKey(input);
        window.localStorage.setItem('openai-api-key', input);
      } else if (selectedOption === 'Gemini') {
        await checkGeminiApiKey(input);
        window.localStorage.setItem('gemini-api-key', input);
      }
      setModalOpen(false);
    } catch (error) {
      setErrorMsg('Error: Incorrect API key');
    }

    setLoading(false);
  };

  const removeApiKey = () => {
    if (selectedOption === 'OpenAI') {
      window.localStorage.removeItem('openai-api-key');
    } else if (selectedOption === 'Gemini') {
      window.localStorage.removeItem('gemini-api-key');
    }
    setInput('');
  };

  return modalOpen && (selectedOption === 'OpenAI' || selectedOption === 'Gemini') ? (
    <form onSubmit={saveKey} className='flex flex-col items-center justify-center gap-2'>
      <p className='text-lg font-semibold'>Use your API key:</p>
      <p>Keys are saved in your browser.</p>
      {selectedOption === 'OpenAI' && (
        <p className='italic'>
          Get your OpenAI API key{' '}
          <a
            className='text-blue-600'
            rel='noreferrer'
            target='_blank'
            href='https://platform.openai.com/account/api-keys'>
            here
          </a>
          .
        </p>
      )}
      {selectedOption === 'Gemini' && (
        <p className='italic'>
          Get your Gemini API key{' '}
          <a
            className='text-blue-600'
            rel='noreferrer'
            target='_blank'
            href='https://aistudio.google.com/app/apikey'>
            here
          </a>
          .
        </p>
      )}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type='password'
        className='w-full max-w-xs input input-bordered'
        placeholder='Enter API Key'
      />
      <button disabled={loading} className='w-full max-w-xs btn btn-outline'>
        {loading ? (
          <>
            <span className='loading loading-spinner' />
            <p>Checking API Key...</p>
          </>
        ) : (
          'Save to localStorage'
        )}
      </button>
      {input && (
        <button onClick={removeApiKey} disabled={loading} className='w-full max-w-xs btn btn-error'>
          Remove API Key
        </button>
      )}
      <p className='text-red-600'>{errorMsg}</p>
    </form>
  ) : null;
};

Setting.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  selectedOption: PropTypes.string.isRequired,
};

export default Setting;
