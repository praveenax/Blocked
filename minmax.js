var n, min, max, arr, tmpsum, i, tmparr, j;


arr = [1, 2, 3, 4, 5];
max = 0;
min = 0;
n = 5;
for (var i_index in arr) {
  i = arr[i_index];
  tmparr = [];
  tmpsum = 0;
  var j_end = arr.length;
  var j_inc = 1;
  if (1 > j_end) {
    j_inc = -j_inc;
  }
  for (j = 1; j_inc >= 0 ? j <= j_end : j >= j_end; j += j_inc) {
    if (i != j) {
      tmpsum = tmpsum + arr[(j - 1)];
    }
  }
  if (tmpsum < min || min == 0) {
    min = tmpsum;
  }
  if (tmpsum > max || max == 0) {
    max = tmpsum;
  }
}
window.alert(min);
window.alert(max);
