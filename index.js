const app = document.getElementById("app");

const content = `
<h2>1. Khái niệm</h2>
<p>Sắc ký giấy là phương pháp phân tích hỗn hợp dựa trên sự khác nhau về khả năng hòa tan và di chuyển của các chất trên giấy.</p>

<h2>2. Nguyên lý</h2>
<p>Dựa vào sự khác biệt về ái lực giữa chất phân tích với pha động và pha tĩnh.</p>

<h2>3. Các bước tiến hành</h2>
<ol>
  <li>Cắt giấy sắc ký hình chữ nhật</li>
  <li>Chấm mẫu cách mép dưới 2 cm</li>
  <li>Đặt vào cốc chứa dung môi</li>
  <li>Lấy ra, sấy khô</li>
</ol>

<h2>4. Ứng dụng</h2>
<ul>
  <li>Phân tích phẩm màu</li>
  <li>Phát hiện chất cấm</li>
  <li>Kiểm tra độ tinh khiết thuốc</li>
</ul>

<h2>5. Video minh họa</h2>
<iframe width="300" height="200" src="https://www.youtube.com/embed/6N1PGS78wFg" frameborder="0" allowfullscreen></iframe>

<h2>6. Trắc nghiệm</h2>
<p><strong>Câu 1:</strong> Sắc ký giấy dựa trên nguyên lý nào?</p>
<p>A. Tốc độ bay hơi &nbsp; B. Độ tan khác nhau &nbsp; C. Độ dẫn điện</p>

<h2>💬 Bình luận</h2>
<div id="comments"></div>
<textarea id="commentBox" placeholder="Viết bình luận..."></textarea>
<br/>
<button onclick="addComment()">Gửi</button>
`;

app.innerHTML = content;

function addComment() {
  const box = document.getElementById("commentBox");
  const comments = document.getElementById("comments");
  if (box.value.trim()) {
    const p = document.createElement("p");
    p.className = "comment";
    p.innerText = "👉 " + box.value;
    comments.appendChild(p);
    box.value = "";
  }
}
