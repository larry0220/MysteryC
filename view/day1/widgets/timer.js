function formatTime(countingTime) {
  let minute, second, milSecond;

  minute = Math.floor(countingTime/(60*1000));
  second = Math.floor((countingTime-60*1000*minute)/1000);
  milSecond = Math.floor((countingTime%1000)/10);

  return (minute<10? "0"+minute:minute)+":"+(second<10? "0"+second:second)+"."+(milSecond<10? "0"+milSecond:milSecond);
}

class Timer {
  constructor() {
    this.totalTime = 0;
    this.timeAccumulation = 0;
    this.sectionTime = 0;
    this.recordTime = 0;
    this.interval = 0;
  }

  start(cb) {
    let initialTime = Date.now();
    let currentTotal = this.totalTime;

    this.interval = setInterval(() => {
      let currentTime = Date.now();
      this.timeAccumulation = currentTime - initialTime;
      this.totalTime = currentTotal + this.timeAccumulation;
      this.sectionTime = this.totalTime - this.recordTime;

      if (typeof cb === 'function') {
        cb();
      }
    }, 20);
  }

  pause() {
    clearInterval(this.interval)
  }

  reset() {
    this.totalTime = 0;
    this.timeAccumulation = 0;
    this.sectionTime = 0;
    this.recordTime = 0;
    this.interval = 0;
  }

  formatTotal() {
    return formatTime(this.totalTime);
  }

  formatSection() {
    return formatTime(this.sectionTime);
  }

  getSection() {
    this.recordTime += this.sectionTime;

    return formatTime(this.sectionTime);
  }
}

export default Timer;
