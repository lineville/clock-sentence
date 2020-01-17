import { clockSentence } from './ClockSentence';

const pingTimeOnInterval = (interval: number): void => {
  console.log(clockSentence());
  setInterval(function() {
    console.clear();
    console.log(clockSentence());
  }, interval);
};

const main = () : void => {
  const timeBetweenPings : number = 60000; // * Every minutes
  pingTimeOnInterval(timeBetweenPings);
}

main();
