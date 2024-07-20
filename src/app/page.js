import Header from './component/Header';
import Taskinput from './component/Taskinput';
import Task from './component/Task';
import Footer from './component/Footer';

function Home() {
  const tasks = [
    { id: 1, title: "Read a book", isDone: true },
    { id: 2, title: "Take a shower", isDone: false },
    { id: 3, title: "Sleep", isDone: false },
  ];

  return (
    // Main container
    <div className="fs-6 container mx-auto">

      {/* Header section */}
      <Header />

      {/* Tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">

        {/* Task input */}
        <Taskinput />

        {/* Task detail */}
        <Task {...tasks[0]} />
        <Task {...tasks[1]} />
        <Task {...tasks[2]} />
      </div>

      {/* Footer section */}
      <Footer year="2024" fullname="Dararat Buayim" studentid="660610759" />
    </div>
  );
}

export default Home;