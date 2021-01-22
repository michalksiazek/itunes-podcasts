import styles from "./App.module.css";
import { Button } from '@chakra-ui/react';
import { Counter } from './counter/Counter'
import { Itunes } from './itunes'

function App({ title }: { title: String }) {
  return (
    <div className={styles["App"]}>
      <header className={styles["App-header"]}>
        {/*<Counter />*/}
        <Itunes />
      </header>
    </div>
  );
}

export default App;
