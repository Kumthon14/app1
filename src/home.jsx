import React from "react";

const Home = () => {
  return (
    <p style={{ textAlign: "center" }}>
      <h3>ยินดีต้อนรับสู่ React store</h3>รายชื่อ<a href="/product">สินค้า</a>
      ที่เรามีจำหน่าย
      <br />
      แต่ท่านต้องเป็น<a href="/member">สมาชิก</a>จึงจะสั่งซื้อได้
      <br />
      หากมีข้อสงสัย กรุณา <a href="/contact">ติดต่อเรา</a>
    </p>
  );
};

export default Home;
