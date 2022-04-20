// bai 1
// sơ đồ 3 khối
// khối 1 đầu vào nhập vào 3 số nguyên a,b,c
// khối 2 xử lý: nếu a > b & b > c thì a lớn nhất và c nhỏ nhất
//               nếu b > a & a > c thì b lơn nhất và c nhỏ nhất
//               nếu c > a & a > b thì c lớn nhất và b nhỏ nhất
// //////////////các trường hợp khác tương tự //////////////////////
//               nếu a == b == c yêu cầu nhập lại
//               nếu a === b === c yêu cầu nhập lại
// khối 3 đầu ra : xuất ra 3 số nguyên tăng dần
function bai_1() {
  var s_nguyen1 = document.getElementById("so1").value; //đầu vào
  var s_nguyen2 = document.getElementById("so2").value; // đầu vào
  var s_nguyen3 = document.getElementById("so3").value; // đầu vào

  //chuyển số người dùng nhập thành số nguyên
  s_nguyen1 = parseInt(s_nguyen1);
  s_nguyen2 = parseInt(s_nguyen2);
  s_nguyen3 = parseInt(s_nguyen3);

  // xử lý so sánh để xếp các số theo thứ tự tăng dần
  //321
  if (s_nguyen1 > s_nguyen2 && s_nguyen2 > s_nguyen3) {
    var _kq1 = s_nguyen3 + ", " + s_nguyen2 + ", " + s_nguyen1;
    console.log(1);
  }
  //213
  else if (s_nguyen3 > s_nguyen1 && s_nguyen1 > s_nguyen2) {
    var _kq1 = s_nguyen2 + ", " + s_nguyen1 + ", " + s_nguyen3;
    console.log(2);
  }
  //312
  else if (s_nguyen2 > s_nguyen1 && s_nguyen1 > s_nguyen3) {
    var _kq1 = s_nguyen3 + ", " + s_nguyen1 + ", " + s_nguyen2;
    console.log(3);
  }
  //132
  else if (s_nguyen2 > s_nguyen3 && s_nguyen3 > s_nguyen1) {
    var _kq1 = s_nguyen1 + ", " + s_nguyen3 + ", " + s_nguyen2;
    console.log(4);
  }
  //123
  else if (s_nguyen3 > s_nguyen2 && s_nguyen2 > s_nguyen1) {
    var _kq1 = s_nguyen1 + ", " + s_nguyen2 + ", " + s_nguyen3;
    console.log(5);
  }
  //231
  else if (s_nguyen1 > s_nguyen3 && s_nguyen3 > s_nguyen2) {
    var _kq1 = s_nguyen2 + ", " + s_nguyen3 + ", " + s_nguyen1;
    console.log(6);
  }
  // xử lý cho người dùng nhập lai
  else {
    var _kq1 = "==> Hãy nhập lại 3 số nguyên khác nhau :((";
  }
  //   đầu ra
  document.getElementById("kq1").innerHTML =
    "Kết quả thứ tự tăng dần là: " + _kq1; //xuất kết quả đầu ra
}
//
//
//
// Bài 2
// khối 1 :trước khi có đầu vào chương trình sẽ hỏi người dùng
//  là ai đang sử dụng máy.
// đầu vào: nhập tên
// khối 2 : xử lý
// khi nhập tên chương trình sẽ cộng string "xin chào" và value _ten
// khối 3 : đầu ra
// xuất dữ liệu vừa xử lý.
// hàm tính

var _ten = document.getElementById("n_ten").value; //dom biến _ten đến id nten
if (_ten === "") {
  //so sánh kiểu = rỗng thì chạy lệnh trong if
  document.getElementById("kq2").innerHTML = "Cho hỏi ai đang sử dụng máy";
  // console.log(123);
}
function xinchao() {
  //hàm tính nhập tên
  var _ten = document.getElementById("n_ten").value; //dom biến _ten đến id n_ten
  if (_ten !== "") {
    //so sánh kiểu khác rỗng thì chạy lệnh trong if
    document.getElementById("kq2").innerHTML = "Xin chào " + _ten; //xuất lời chào ra hình
    // console.log(456);
  }
}

// Bài 3
// khối 1 nhập 3 số nguyên
// khối 2 xử lý
// chỉ nhập số nguyên dương, nhập số âm thì nhập lại
// đếm có bao nhiêu số chẵn, lẻ trong 3 số vừa nhập
// khối 3 xuất kết quả
// hàm tính
function chan_le() {
  var _snguyen1 = document.getElementById("s1").value; //đầu vào
  var _snguyen2 = document.getElementById("s2").value; // đầu vào
  var _snguyen3 = document.getElementById("s3").value; // đầu vào
  // chuyển ra số nguyên
  _snguyen1 = parseInt(_snguyen1);
  _snguyen2 = parseInt(_snguyen2);
  _snguyen3 = parseInt(_snguyen3);

  var a = 0; //chẵn
  var b = 0; //lẻ

  // check số chẵn
  if (_snguyen1 % 2 == 0) {
    // chia dư so sánh số dư là 0 là số chẵn
    a = a + 1; //tăng biến chẵn lên 1
  }
  if (_snguyen2 % 2 == 0) {
    a = a + 1;
  }
  if (_snguyen3 % 2 == 0) {
    a = a + 1;
  }
  // check số lẻ
  if (_snguyen1 % 2 == 1) {
    // chia dư so sánh số dư  là 1 thì lẻ
    b = b + 1; // tăng biến lẻ lên 1
  }
  if (_snguyen2 % 2 == 1) {
    b = b + 1;
  }
  if (_snguyen3 % 2 == 1) {
    b = b + 1;
  }
  document.getElementById("kq3").innerHTML = a + " số chẵn " + b + " số lẻ"; // xuất ra màn hình
}

// Bài 4
// khối 1 nhập 3 cạnh góc vuông a,b,c
// khối 2 xử lý so sánh 1 trong 2 cạnh còn lại nếu lớn hơn thì đó là cạnh huyền
// tam giac vuông thì cạnh huyền = tổng bình phuong hai canh góc vuông
// tam giác cân thì cạnh kề và cạnh đối chiều dài bằng nhau
// tam giác đều 3 cạnh bằng nhau
// còn lại là tam giác thường
// khối 3 xuất kết quả ra màn hình.
function check_tamgiac() {
  var _canha = document.getElementById("canh_a").value; //đầu vào
  var _canhb = document.getElementById("canh_b").value; //đầu vào
  var _canhc = document.getElementById("canh_c").value; //đầu vào

  // var tg_vuong = 0;
  // var tg_can;
  // var tg_deu;
  // xử lý
  // check cạnh huyền, check tam giác vuông hay thường
  if (_canha > _canhb && _canha > _canhc && _canhb != _canhc) {
    //phân biệt cạnh huyền với các cạnh còn lại bằng cách so sánh cạnh huyền lớn hơn các cạnh còn lại
    _canha = _canha * _canha; // bình phuong cạnh huyền
    var _canh_bc = _canhb * _canhb + _canhc * _canhc; // tổng bình phuong hai cạnh góc vuông
    //
    if (_canha == _canh_bc) { // pi ta go đảo
      document.getElementById("kq4").innerHTML = "Tam giác vuông"; // đầu ra
    } else {
      document.getElementById("kq4").innerHTML = "Tam giác thường"; //đầu ra
      console.log(1);
    }
  } else if (_canhb > _canha && _canhb > _canhc && _canha != _canhc) {
    //
    _canhb = _canhb * _canhb;
    var _canh_ac = _canha * _canha + _canhc * _canhc;
    //
    if (_canhb == _canh_ac) {
      document.getElementById("kq4").innerHTML = "Tam giác vuông";
    } else {
      document.getElementById("kq4").innerHTML = "Tam giác thường";
      console.log(2);
    }
  } else if (_canhc > _canhb && _canhc > _canha && _canhb != _canha) {
    _canhc = _canhc * _canhc;
    var _canh_ab = _canha * _canha + _canhb * _canhb;
    if (_canhc == _canh_ab) {
      document.getElementById("kq4").innerHTML = "Tam giác vuông";
    } else {
      document.getElementById("kq4").innerHTML = "Tam giác thường";
      console.log(3);
    }
  }
  //check  tam giác cân
  else if (_canha == _canhb && (_canhc > _canha || _canhc < _canha)) {
    //so sánh cạnh đối và cạnh kề bằng nhau và cạnh huyền
    // lớn hơn hoặc nhỏ hơn cạnh đối và cạnh kề thì đó là tam giác cân
    document.getElementById("kq4").innerHTML = "Tam giác cân"; // đầu ra
    console.log(4);
  } else if (_canhb == _canhc && (_canha > _canhb || _canha < _canhb)) {
    document.getElementById("kq4").innerHTML = "Tam giác cân";
  } else if (_canha == _canhc && (_canhb > _canha || _canhb < _canha)) {
    document.getElementById("kq4").innerHTML = "Tam giác cân";
  }
  // check tam giac đều
  else if ((_canha = _canhb = _canhc)) {
    // so sánh 3 cạnh bằng nhau thì đó là tam giác cân
    document.getElementById("kq4").innerHTML = "Tam giác đều"; // đầu ra
  } else {
    document.getElementById("kq4").innerHTML = "Tam giác thường";
    console.log(7);
  }
}
