import './App.css';
import Question from './Components/Question.jsx'

function App() {
  return (
    <div className='principal'>
      <h1>Project 2: FAQ/Accordion</h1>
      <div className='container'>
        <h2>Frequently Asked Questions</h2>
        <div className='questions'>
          {
            questions.map(elemento => (
              <Question key={elemento.id} question={elemento} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

const questions = [
  {
    id: 1,
    title: "Is this a good product?",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
  {
    id: 2,
    title: "How much does it cost?",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
  {
    id: 3,
    title: "When can I get it?",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  }
];


export default App;
