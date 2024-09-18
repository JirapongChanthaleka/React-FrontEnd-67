import Contract from "./assets/Contact"
import Counter from "./assets/Counter"
import Hello from "./assets/Hello"


function App() {
  const helloData = [
    { name: 'Anirach', message: 'Hi there' },
    { name: 'Tom', message: 'Hello..' }
  ];

  return (
    <div className="App" >
      < Counter />
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}
      <Contract email="s6506022620061@email.kmutnb.ac.th" phone="0631455024" />
    </div>
  );
}
  
export default App;