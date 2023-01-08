import Head from 'next/head';
import { useState } from 'react';


const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const callGenerateEndpoint = async (event) => {
    event.preventDefault();
    setIsGenerating(true);

    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });
    
    const data = await response.json();
    const { output } = data;

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  };

  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  }

  return (
    <div className="">
      <Head>
        <title>CronSchedule.xyz</title>
      </Head>
      {/* TODO: Breakout into components */}
      <header>
        <nav>
          <div className="m-5">
              <a href="/" className="text-white text-2xl font-bold">CronSchedule.xyz</a>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4">
        {/* Main Header & Sub Header  */}
        <div className="flex flex-col mt-12 md:mt-32">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-extrabold text-white">
              <h1>Cron Schedules Simplified</h1>
            </div>
            <div className="text-xl md:text-2xl text-slate-400 text-center mt-5">
              <h2>Effortlessly Create Cron Schedules in Plain English.</h2>
            </div>
          </div>
        </div>
        {/* Input & Output  */}
        <div className="mt-12 md:mt-20 flex flex-col items-center">
          <div className="rounded-lg bg-slate-700 w-full sm:w-[600px] border border-slate-600 ">
            <form>
              <div className="flex items-center px-3 py-2">
                  <input type="text" value={userInput} onChange={onUserChangedText} className="block mx-4 p-2.5 w-full text-sm sm:text-base rounded-lg bg-slate-800 placeholder-slate-400 text-white" placeholder="Run every hour between 1pm to 4pm everyday of the week..."></input>
                      <button type="submit" onClick={callGenerateEndpoint} className="inline-flex justify-center p-2  rounded-full cursor-pointer  bg-blue-600 hover:bg-blue-700">
                      {isGenerating ? 
                        <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg> :
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1200 1200">
                          <g fill="white">
                            <path d="m586.01 128.23 80.809-9.7188c7.7031-0.92578 13.129 7.3789 9.1797 14.062l-41.438 70.055c-1.5703 2.6523-1.7266 5.9023-0.43359 8.6992l34.211 73.848c3.2656 7.043-2.9648 14.762-10.535 13.066l-79.43-17.773c-3.0117-0.67188-6.1562 0.17969-8.4102 2.2695l-59.664 55.355c-5.6875 5.2812-14.965 1.7383-15.684-5.9883l-7.6445-81.035c-0.28906-3.0703-2.0742-5.7969-4.7656-7.2969l-71.09-39.637c-6.7812-3.7812-6.2773-13.691 0.83984-16.766l74.699-32.316c2.832-1.2227 4.8711-3.7578 5.4727-6.7812l15.73-79.859c1.5-7.6094 11.074-10.199 16.211-4.3789l53.82 61.055c2.0234 2.3516 5.0625 3.5156 8.1211 3.1406z"/>
                            <path d="m1026.4 138.34 47.988-5.7734c4.5703-0.55078 7.8008 4.3789 5.4492 8.3516l-24.613 41.605c-0.9375 1.5703-1.0312 3.5039-0.26562 5.1719l20.316 43.859c1.9336 4.1758-1.7656 8.7734-6.2656 7.7656l-47.172-10.547c-1.7891-0.39453-3.6484 0.10938-4.9922 1.3555l-35.438 32.879c-3.3828 3.1328-8.8789 1.0312-9.3125-3.5508l-4.5469-48.121c-0.16797-1.8242-1.2227-3.4453-2.832-4.332l-42.215-23.543c-4.0195-2.2422-3.7305-8.125 0.50391-9.9609l44.363-19.188c1.6797-0.73047 2.8906-2.2305 3.2539-4.0312l9.3477-47.426c0.88672-4.5234 6.5742-6.0586 9.625-2.6055l31.957 36.266c1.2266 1.3555 3.0234 2.0508 4.8477 1.8242z"/>
                            <path d="m900.31 692.83 24.191-37.32c2.3047-3.5625 7.6914-2.9297 9.1094 1.0664l14.902 41.902c0.5625 1.5859 1.8711 2.7969 3.5039 3.2266l42.973 11.473c4.0938 1.0938 5.1602 6.4062 1.8008 9l-35.242 27.133c-1.332 1.0312-2.0742 2.6406-1.9922 4.332l2.3633 44.41c0.22656 4.2344-4.5 6.8867-8.0039 4.4883l-36.695-25.141c-1.3906-0.94922-3.1562-1.1641-4.7266-0.55078l-41.508 15.973c-3.9609 1.5234-7.9453-2.1484-6.7422-6.2148l12.574-42.672c0.48047-1.6211 0.13281-3.3594-0.9375-4.668l-28.02-34.547c-2.6758-3.2891-0.40625-8.2188 3.8281-8.3398l44.461-1.2227c1.6992-0.035156 3.2461-0.91406 4.1602-2.3281z"/>
                            <path d="m771.27 584.47 133.68-133.68c20.172-20.172 20.172-53.184 0-73.355l-21.672-21.672c-20.172-20.172-53.184-20.172-73.355 0l-133.68 133.68z"/>
                            <path d="m651.18 514.5-516.23 516.23c-20.172 20.172-20.172 53.184 0 73.355l21.672 21.672c20.172 20.172 53.184 20.172 73.355 0l516.23-516.23z"/>
                          </g>
                        </svg>
                      }
                  </button>
              </div>
            </form>
          </div>
          <p className="text-xs italic text-gray-400 mt-1">Results are generated by AI and may be inconsistent.</p>
        </div>
        {/* Results Box */}
        {(apiOutput || isGenerating) && (
          <div className="flex justify-center">
            <div className="mt-8 border border-slate-600 bg-slate-700 rounded-lg w-full sm:w-[600px]">
                <div className="p-2 mb-1 text-sm font-semibold text-white">
                  <h3>Result</h3>
                </div>
              <div className={"px-4 py-2 rounded-b-lg bg-slate-800 " + (isGenerating ? "animate-pulse" : "")}>
                <div className="text-center h-8 sm:h-16 flex items-center justify-center">
                  <span className="text-white sm:text-2xl">{apiOutput}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="w-full fixed bottom-0 border-t-3 border-slate-100">
        <div className="text-slate-400 text-center p-4 hover:text-white">
          <a href="https://twitter.com/Marcard" target="_blank">
            <div className="flex justify-center font-bold">
              <svg className="fill-slate-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg><span className="ml-2">Marc A Card</span>
            </div>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
