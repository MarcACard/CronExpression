import Head from 'next/head';
import { useState } from 'react';

import { InputForm } from '../components/input-form';
import { Layout } from '../components/layout';
import { Results } from '../components/results';

const Home = () => {
  const [apiOutput, setApiOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const callGenerateEndpoint = async (userInput) => {
    setIsGenerating(true);
    setApiOutput('')

    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;

    setApiOutput(`${output}`);
    setIsGenerating(false);
  };


  return (
    <Layout>
      <Head>
        <title>CronExpression.com | AI-Powered Cron Expression Generator</title>
      </Head>
      <div className="container mx-auto px-4">
        {/* Main Header & Sub Header  */}
        <div className="flex flex-col mt-12 sm:mt-20 xl:mt-26">
          <div className="text-center">
            <div className="text-4xl  lg:text-5xl xl:text-6xl font-extrabold text-white">
              <h1>Cron Expressions Simplified</h1>
            </div>
            <div className="text-xl  lg:text-2xl xl:text-3xl text-slate-400 text-center mt-5">
              <h2>Effortlessly Create Cron Expressions<br className="invisible" /> with Natural Language and AI</h2>
            </div>
          </div>
        </div>
        <InputForm isGenerating={isGenerating} callGenerateEndpoint={callGenerateEndpoint} />
        <Results apiOutput={apiOutput} isGenerating={isGenerating} />
      </div>
    </Layout>
  );
};

export default Home;
