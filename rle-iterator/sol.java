class RLEIterator {
    
  int idx = 0;
  
  int[] encoding;
  boolean stop = false;
  public RLEIterator(int[] encoding) {
      this.encoding = encoding;
  }
  
  public int next(int n) {
      while(encoding.length > idx && !stop) {            
          if(encoding[idx] == n) {
              encoding[idx] = encoding[idx] - n;
              int val = encoding[idx+1];
              idx = idx + 2;
              return val;
          }
          if(encoding[idx] > n) {
              encoding[idx] = encoding[idx] - n;
              return encoding[idx+1];
          }
          if(encoding[idx] < n) {
              if(idx + 2 >= encoding.length) {
                  stop=true;
                  return -1;
              }
              int temp = encoding[idx];
              encoding[idx] = encoding[idx] - n;
              n = n - temp;
              idx = idx + 2;
              continue;
          }
      }
      stop = true;
      return -1;
  }
}

/**
* Your RLEIterator object will be instantiated and called as such:
* RLEIterator obj = new RLEIterator(encoding);
* int param_1 = obj.next(n);
*/