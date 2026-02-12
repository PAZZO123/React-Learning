import Jokes from './component/Jokes.jsx'


export default function App() {
    return (
        <>
        <Jokes 
        setup='I got my daughter a fridge for her birthday.'
        punchline="I can't wait to see her face light up when she opens it" />
        <Jokes 
        setup="He just ransomware!"
        punchline="How did the hacker escape the police?"
        />
        <Jokes 
        setup="Scurvy"
        punchline="Why don't pirates travel on mountain roads?"
        />
        <Jokes 
        setup="Swarm."
        punchline="Why do bees stay in the hive in the winter?"
        />
        </>
    )
}