import { useEffect, useState } from "react";

export const WordOmitter = () => {
   const [sentence, setSentence] = useState<string>("");
   const [omit, setOmit] = useState<string>("");
   const [result, setResult] = useState<string>("");
   useEffect(() => {
    if(sentence && omit){
        const words = sentence.split(" ");  
        const omitLower = omit.toLowerCase();
        const filteredWords = words.filter(word => word.toLowerCase() !== omitLower);
        setResult(filteredWords.join(" "));
    }
   }, [sentence, omit]);
   
    return (
        <div className='container'>
            <h1>Word Omitter</h1>
            <p>
                This component takes a sentence and a number n as input and returns the sentence with every nth word omitted.
            </p>
            <input type='text' onChange={(e) => setSentence(e.target.value)} placeholder='Enter a sentence' />
            <input type='text' onChange={(e) => setOmit(e.target.value)} placeholder='Enter omitted word' />
            {result && <p>Result: {result}</p>}
        </div>
    );
}