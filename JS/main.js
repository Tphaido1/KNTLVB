const slides = [
  {
    title: 'Kỹ năng viết CV',
    tag: 'Slide 1',
    content: `
      <div class="presenter-slide-content" style="display: grid; gap: 22px;">
        <div style="display: flex; justify-content: space-between; align-items: center; color: #1f314a; font-weight: 700; font-size: 0.96rem;">
          <div>Nhóm 6</div>
          <div>Kỹ năng tạo lập văn bản</div>
        </div>
        <h1 style="margin: 0; font-size: clamp(3rem, 6vw, 5rem); line-height: 0.92; letter-spacing: -0.04em; text-align: center; color: #0b1221;">Kỹ năng viết CV</h1>
        <div style="position: relative; display: grid; grid-template-columns: 1fr 0.95fr; gap: 24px; align-items: center; margin-top: 12px;">
          <div style="display: flex; justify-content: center; align-items: center;">
            <img src="Image/cv-hero.svg" alt="Hình minh họa CV" style="width: 100%; max-width: 620px; border-radius: 28px;" />
          </div>
          <div style="position: relative; min-height: 240px; display: flex; align-items: flex-start; justify-content: center;">
            <div style="position: absolute; top: 0; right: 0; width: 100%; max-width: 360px; padding: 24px 22px; background: #ffffff; border: 1px solid rgba(15, 23, 42, 0.08); border-radius: 24px; box-shadow: 0 24px 55px rgba(15, 23, 42, 0.09); color: #111827; line-height: 1.7;">
              <p style="margin: 0 0 8px;">• Mục tiêu nghề nghiệp</p>
              <p style="margin: 0 0 8px;">• Phần kinh nghiệm làm việc</p>
              <p style="margin: 0 0 8px;">• Phần trình độ và bằng cấp trong CV</p>
              <p style="margin: 0;">• Phần kỹ năng trong CV</p>
            </div>
            <div style="position: absolute; top: -14px; left: 20px; width: 120px; height: 22px; background: #111827; transform: rotate(-6deg); border-radius: 4px;"></div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Nội dung trình bày',
    tag: 'Slide 2',
    content: `
      <div class="presenter-slide-content">
        <h2>Nội dung trình bày</h2>
        <div style="margin-top: 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 18px;">
          <div style="display: flex; gap: 16px; align-items: center; background: #f4f7fa; border: 1px solid #e4e9ef; border-radius: 18px; padding: 18px;">
            <span style="width: 44px; height: 44px; display: grid; place-items: center; border-radius: 50%; background: #ffd800; font-weight: 800; color: #1d3153;">1</span>
            <span style="font-size: 1rem; color: #1f3552;">Khái niệm CV</span>
          </div>
          <div style="display: flex; gap: 16px; align-items: center; background: #f4f7fa; border: 1px solid #e4e9ef; border-radius: 18px; padding: 18px;">
            <span style="width: 44px; height: 44px; display: grid; place-items: center; border-radius: 50%; background: #ffd800; font-weight: 800; color: #1d3153;">2</span>
            <span style="font-size: 1rem; color: #1f3552;">Mục tiêu nghề nghiệp</span>
          </div>
          <div style="display: flex; gap: 16px; align-items: center; background: #f4f7fa; border: 1px solid #e4e9ef; border-radius: 18px; padding: 18px;">
            <span style="width: 44px; height: 44px; display: grid; place-items: center; border-radius: 50%; background: #ffd800; font-weight: 800; color: #1d3153;">3</span>
            <span style="font-size: 1rem; color: #1f3552;">Kinh nghiệm làm việc</span>
          </div>
          <div style="display: flex; gap: 16px; align-items: center; background: #f4f7fa; border: 1px solid #e4e9ef; border-radius: 18px; padding: 18px;">
            <span style="width: 44px; height: 44px; display: grid; place-items: center; border-radius: 50%; background: #ffd800; font-weight: 800; color: #1d3153;">4</span>
            <span style="font-size: 1rem; color: #1f3552;">Trình độ học vấn, bằng cấp</span>
          </div>
          <div style="display: flex; gap: 16px; align-items: center; background: #f4f7fa; border: 1px solid #e4e9ef; border-radius: 18px; padding: 18px;">
            <span style="width: 44px; height: 44px; display: grid; place-items: center; border-radius: 50%; background: #ffd800; font-weight: 800; color: #1d3153;">5</span>
            <span style="font-size: 1rem; color: #1f3552;">Kỹ năng</span>
          </div>
          <div style="display: flex; gap: 16px; align-items: center; background: #f4f7fa; border: 1px solid #e4e9ef; border-radius: 18px; padding: 18px;">
            <span style="width: 44px; height: 44px; display: grid; place-items: center; border-radius: 50%; background: #ffd800; font-weight: 800; color: #1d3153;">6</span>
            <span style="font-size: 1rem; color: #1f3552;">Tổng kết & Ôn tập</span>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Khái niệm',
    tag: 'Slide 3',
    content: `
      <div class="presenter-slide-content">
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 16px;">
          <h2 style="margin: 0; font-size: clamp(3rem, 5vw, 4.5rem);">Khái niệm</h2>
          <div style="flex: 1; min-height: 52px; max-width: 340px; background: #ffe300; border-radius: 18px;"></div>
        </div>
        <div style="margin-top: 24px; display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 24px; align-items: start;">
          <div>
            <ul style="margin: 0; padding-left: 20px; color: #141d2d; line-height: 1.9; font-size: 1rem;">
              <li>CV (Curriculum Vitae) thường được gọi là sơ yếu lý lịch. Đây là một bản tóm tắt chi tiết về trình độ học vấn, kinh nghiệm làm việc, kỹ năng và thành tựu của bản thân liên quan đến công việc mà bạn muốn ứng tuyển.</li>
              <li style="margin-top: 18px;">CV đóng vai trò quan trọng trong việc giúp bạn tạo ấn tượng tốt đẹp với nhà tuyển dụng và gia tăng cơ hội nhận được công việc mong muốn.</li>
              <li style="margin-top: 18px;">Một CV chuẩn và ấn tượng cần đảm bảo những yếu tố sau: Nội dung chính xác và đầy đủ, Trình bày rõ ràng và khoa học, Nổi bật những điểm mạnh, Chuyên nghiệp.</li>
            </ul>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div style="background: #f5f7fb; border-radius: 24px; padding: 20px; min-height: 320px; box-shadow: 0 18px 40px rgba(23, 35, 56, 0.08);">
              <div style="display: flex; gap: 14px; align-items: center; margin-bottom: 18px;">
                <div style="width: 48px; height: 48px; border-radius: 50%; background: #fff1b8;"></div>
                <div style="flex: 1;">
                  <div style="width: 100%; height: 12px; background: #dbe4ef; border-radius: 999px; margin-bottom: 10px;"></div>
                  <div style="width: 60%; height: 10px; background: #e8eef8; border-radius: 999px;"></div>
                </div>
              </div>
              <div style="display: grid; gap: 12px;">
                <div style="width: 100%; height: 12px; background: #e7eef8; border-radius: 999px;"></div>
                <div style="width: 100%; height: 12px; background: #e7eef8; border-radius: 999px;"></div>
                <div style="width: 92%; height: 12px; background: #e7eef8; border-radius: 999px;"></div>
                <div style="display: flex; gap: 10px; margin-top: 16px;"><div style="flex: 1; height: 10px; background: #dde6f0; border-radius:999px;"></div><div style="width: 40%; height: 10px; background: #dde6f0; border-radius:999px;"></div></div>
              </div>
            </div>
            <div style="background: #f5f7fb; border-radius: 24px; padding: 20px; min-height: 320px; box-shadow: 0 18px 40px rgba(23, 35, 56, 0.08);">
              <div style="display: flex; gap: 14px; align-items: center; margin-bottom: 18px;">
                <div style="width: 48px; height: 48px; border-radius: 50%; background: #d7ecff;"></div>
                <div style="flex: 1;">
                  <div style="width: 100%; height: 12px; background: #dbe4ef; border-radius: 999px; margin-bottom: 10px;"></div>
                  <div style="width: 60%; height: 10px; background: #e8eef8; border-radius: 999px;"></div>
                </div>
              </div>
              <div style="display: grid; gap: 12px;">
                <div style="width: 100%; height: 12px; background: #e7eef8; border-radius: 999px;"></div>
                <div style="width: 78%; height: 12px; background: #e7eef8; border-radius: 999px;"></div>
                <div style="width: 100%; height: 12px; background: #e7eef8; border-radius: 999px;"></div>
                <div style="display: flex; gap: 10px; margin-top: 16px;"><div style="flex: 1; height: 10px; background: #dde6f0; border-radius:999px;"></div><div style="width: 30%; height: 10px; background: #dde6f0; border-radius:999px;"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'khái niệm',
    tag: 'Slide 4',
    content: `
      <div class="presenter-slide-content">
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 16px;">
          <h2 style="margin: 0; font-size: clamp(3rem, 5vw, 4.5rem);">Khái niệm</h2>
          <div style="flex: 1; min-height: 52px; max-width: 340px; background: #ffe300; border-radius: 18px;"></div>
        </div>
        <div style="margin-top: 24px; display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 24px; align-items: start;">
          <div>
            <p style="margin: 0 0 16px; font-weight: 700; font-size: 1rem; color: #141d2d;">Một CV thường gồm các phần chính sau:</p>
            <ul style="margin: 0; padding-left: 20px; color: #141d2d; line-height: 1.9; font-size: 1rem;">
              <li>Thông tin cá nhân và thông tin liên hệ.</li>
              <li>Vị trí ứng tuyển.</li>
              <li>Mục tiêu nghề nghiệp.</li>
              <li>Trình độ học vấn, bằng cấp và chứng chỉ.</li>
              <li>Kinh nghiệm làm việc hoặc dự án đã tham gia.</li>
              <li>Kỹ năng chuyên môn và kỹ năng mềm.</li>
              <li>Hoạt động, thành tích hoặc sở thích có liên quan.</li>
            </ul>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 18px;">
            <div style="background: #f5f7fb; border-radius: 24px; padding: 18px; box-shadow: 0 18px 40px rgba(23, 35, 56, 0.08);">
              <img src="Image/ChatGPT Image 14_27_06 12 thg 7, 2026.png" alt="CV mẫu 1" style="width: 100%; height: auto; border-radius: 20px; display: block;" />
            </div>
            <div style="background: #f5f7fb; border-radius: 24px; padding: 18px; box-shadow: 0 18px 40px rgba(23, 35, 56, 0.08);">
              <img src="Image/ChatGPT Image 14_33_05 12 thg 7, 2026.png" alt="CV mẫu 2" style="width: 100%; height: auto; border-radius: 20px; display: block;" />
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Mục tiêu nghề nghiệp',
    tag: 'Slide 5',
    content: `
      <div class="presenter-slide-content">
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 16px;">
          <h2 style="margin: 0; font-size: clamp(3rem, 5vw, 4.5rem);">Mục tiêu nghề nghiệp</h2>
          <div style="flex: 1; min-height: 52px; max-width: 340px; background: #ffe300; border-radius: 18px;"></div>
        </div>
        <p style="margin: 24px 0 0; max-width: 760px; color: #121924; line-height: 1.8; font-size: 1rem;">Mục tiêu nghề nghiệp là một đoạn văn ngắn gọn (thường từ 2 đến 3 câu) nằm ở phần đầu của CV, ngay dưới thông tin liên hệ. Đây là cơ hội đầu tiên để ứng viên gây ấn tượng với nhà tuyển dụng bằng cách thể hiện rõ định hướng phát triển và sự phù hợp của bản thân với vị trí đang ứng tuyển.</p>
        <div style="margin-top: 28px; padding: 26px 28px; border: 5px solid #000; border-radius: 44px; background: #ffffff; max-width: 900px;">
          <p style="margin: 0 0 14px; font-weight: 700; font-size: 1rem;">Ví dụ:</p>
          <p style="margin: 0 0 14px;">Ứng tuyển vị trí Thực tập sinh Frontend Developer</p>
          <p style="margin: 0 0 14px;"><strong>Mục tiêu ngắn hạn:</strong> Áp dụng tư duy logic và các kỹ năng lập trình giao diện (ReactJS, Vite, Bootstrap) để xây dựng các ứng dụng web tương tác mượt mà, trực tiếp đóng góp vào việc tối ưu hóa trải nghiệm người dùng cho các dự án hiện tại của công ty.</p>
          <p style="margin: 0;"><strong>Mục tiêu dài hạn:</strong> Không ngừng nâng cao kỹ năng xử lý hệ thống và kiến trúc phần mềm để phát triển thành một Senior Frontend Engineer, có khả năng dẫn dắt đội ngũ trong các dự án công nghệ quy mô lớn.</p>
        </div>
      </div>
    `
  },
  {
    title: 'Kinh nghiệm làm việc',
    tag: 'Slide 6',
    content: `
      <div class="presenter-slide-content">
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 16px;">
          <h2 style="margin: 0; font-size: clamp(2.4rem, 4vw, 3.5rem);">Kinh nghiệm làm việc</h2>
          <div style="flex: 1; min-height: 74px; max-width: 420px; background: #ffe300; border-radius: 22px;"></div>
        </div>
        <p style="margin: 24px 0 0; max-width: 860px; color: #121924; line-height: 1.8; font-size: 1rem;">Kinh nghiệm làm việc là một trong những phần quan trọng nhất của CV vì giúp nhà tuyển dụng đánh giá ứng viên đã từng làm những công việc gì, có những kỹ năng nào và có phù hợp với vị trí đang tuyển hay không.</p>
        <div style="margin-top: 28px; position: relative; background: #eef2f7; border-radius: 28px; padding: 28px 32px; max-width: 920px;">
          <p style="margin: 0 0 14px; font-weight: 700; font-size: 1rem; color: #111827;">Mỗi kinh nghiệm cần trình bày đầy đủ các nội dung sau:</p>
          <ul style="margin: 0; padding-left: 20px; color: #111827; line-height: 1.9; font-size: 0.98rem;">
            <li>Tên công ty hoặc đơn vị làm việc.</li>
            <li>Vị trí đảm nhiệm.</li>
            <li>Thời gian làm việc (tháng/năm bắt đầu – tháng/năm kết thúc).</li>
            <li>Mô tả công việc chính, trình bày bằng các gạch đầu dòng, tập trung vào những nhiệm vụ liên quan đến vị trí ứng tuyển.</li>
            <li>Thành tích hoặc kết quả đạt được, ưu tiên sử dụng số liệu cụ thể để tăng tính thuyết phục.</li>
          </ul>
          <div style="position: absolute; bottom: -58px; right: 18px; width: 128px; padding: 10px 12px; background: #ffffff; border: 2px solid #000000; border-radius: 16px; box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);">
            <p style="margin: 0; font-weight: 700; font-size: 0.78rem; line-height: 1.2;">Kinh<br>nghiệm<br>làm việc</p>
          </div>
          <div style="position: absolute; top: 16px; left: 22px; width: 36px; height: 10px; background: #000000; transform: rotate(-6deg); border-radius: 4px;"></div>
        </div>
      </div>
    `
  },  
  {
    title: 'Ví dụ kinh nghiệm làm việc',
    tag: 'Slide 7',
    content: `
      <div class="presenter-slide-content">
        <div style="display:flex; justify-content:center; align-items:center; margin-top:12px;">
          <a href="Image/ChatGPT%20Image%2014_33_05%2012%20thg%207%2C%202026.png" target="_blank" rel="noopener" style="display:block; width:100%;">
            <img src="Image/ChatGPT%20Image%2014_33_05%2012%20thg%207%2C%202026.png" alt="Ví dụ kinh nghiệm (ảnh)" style="display:block; width:100%; height:auto; max-height:calc(100vh - 220px); object-fit:contain; border-radius:12px; box-shadow:0 18px 40px rgba(0,0,0,0.14); background:#ffffff; padding:8px;"/>
          </a>
        </div>
      </div>
    `
  },
{
    title: 'Bằng cấp, chứng chỉ, học vấn',
    tag: 'Slide 8',
    content: `
      <div class="presenter-slide-content">
        <h2>Bằng cấp, chứng chỉ, học vấn</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 24px; font-size: 0.95rem;">
          <div style="background: #f7fbff; border: 1px solid #dcebf8; border-radius: 14px; padding: 18px;">
            <h3 style="margin-bottom: 8px; font-size: 1.05rem; color: #0070cc;">Thông tin học vấn</h3>
            <p>✔ Tên trường</p>
            <p>✔ Chuyên ngành</p>
            <p>✔ Thời gian học</p>
            <p>✔ GPA / Xếp loại</p>
          </div>
          <div style="background: #f7fbff; border: 1px solid #dcebf8; border-radius: 14px; padding: 18px;">
            <h3 style="margin-bottom: 8px; font-size: 1.05rem; color: #0070cc;">Chứng chỉ & kỹ năng</h3>
            <p>✔ TOEIC / IELTS</p>
            <p>✔ MOS</p>
            <p>✔ Chứng chỉ chuyên môn</p>
            <p>✔ Khóa học liên quan</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Vai trò',
    tag: 'Slide 9',
    content: `
      <div class="presenter-slide-content">
        <h2>Vai trò</h2>
        <div style="display: grid; gap: 16px; margin-top: 24px;">
          <div style="background: #f0f6ff; padding: 16px; border-radius: 12px; border-left: 4px solid #0052a3;">
            <h3 style="margin: 0 0 8px; color: #0052a3;">📚 Vai trò của trình độ học vấn 🎓</h3>
            <ul style="margin: 0; padding-left: 20px; color: #213a55; line-height: 1.6;">
              <li>Thể hiện nền tảng kiến thức chuyên môn.</li>
              <li>Giúp đánh giá mức độ phù hợp với vị trí ứng tuyển.</li>
              <li>Quan trọng đối với sinh viên và người mới tốt nghiệp.</li>
            </ul>
          </div>
          <div style="background: #f0f6ff; padding: 16px; border-radius: 12px; border-left: 4px solid #0052a3;">
            <h3 style="margin: 0 0 8px; color: #0052a3;">🏆 Vai trò của bằng cấp & chứng chỉ 🏅</h3>
            <ul style="margin: 0; padding-left: 20px; color: #213a55; line-height: 1.6;">
              <li>Chứng minh kỹ năng và năng lực.</li>
              <li>Thể hiện tinh thần học hỏi.</li>
              <li>Tăng lợi thế cạnh tranh khi ứng tuyển.</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Ảnh minh họa',
    tag: 'Slide 10',
    content: `
      <div class="presenter-slide-content">
        <h2>Ảnh minh họa</h2>
        <div style="display: flex; justify-content: center; align-items: center; margin-top: 24px;">
          <img src="Image/ChatGPT%20Image%2001_06_25%2012%20thg%207,%202026.png" alt="Ảnh minh họa ChatGPT" style="max-width: 100%; max-height: 420px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);" />
        </div>
      </div>
    `
  },
  {
    title: 'Kỹ năng',
    tag: 'Slide 11',
    content: `
      <div class="presenter-slide-content">
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 18px; flex-wrap: wrap;">
          <h2 style="margin: 0; font-size: clamp(3rem, 5vw, 4.4rem); letter-spacing: -0.04em; color: #17233c;">Kỹ năng</h2>
          <div style="flex: 1; min-height: 58px; max-width: 440px; background: #ffe300; border-radius: 20px;"></div>
        </div>
        <div style="background: #ffffff; border-radius: 32px; padding: 26px; box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08); border: 1px solid rgba(15, 23, 42, 0.08); margin-top: 28px;">
          <div style="display: grid; grid-template-columns: 0.5fr 0.5fr; gap: 24px; align-items: stretch;">
            <div style="background: #ffe200; border-radius: 28px; padding: 32px; min-height: 320px; box-shadow: 0 20px 40px rgba(255, 214, 0, 0.18); display: flex; flex-direction: column; justify-content: flex-start;">
              <div style="font-size: 1.5rem; font-weight: 900; color: #111827; line-height: 1.1; text-align: center; font-style: italic; margin-bottom: 18px;">Khái niệm</div>
              <p style="margin: 0; color: #17233c; line-height: 1.85; font-size: 1rem;">Trong một bản CV xin việc, phần kỹ năng (Skills) là nơi thể hiện những năng lực thực tế giúp bạn hoàn thành công việc hiệu quả.</p>
              <p>Đây là yếu tố quan trọng để nhà tuyển dụng đánh giá mức độ phù hợp của ứng viên với yêu cầu của vị trí đang tuyển. Kỹ năng nên được trình bày ngắn gọn, rõ ràng và liên quan trực tiếp đến công việc.</p>
            </div>
            <div style="background: #f5f8fd; border-radius: 28px; padding: 32px; display: grid; gap: 18px; box-shadow: 0 20px 40px rgba(16, 24, 40, 0.08);">
              <div style="background: #ffffff; border-radius: 22px; padding: 18px 20px; box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);">
                <p style="margin: 0 0 10px; font-weight: 700; color: #17233c;">Đặc điểm cần có</p>
                <ul style="margin: 0; padding-left: 18px; color: #334155; line-height: 1.8; font-size: 0.98rem;">
                  <li>Ngắn gọn, súc tích, dễ quét</li>
                  <li>Liên quan trực tiếp đến vị trí ứng tuyển</li>
                  <li>Dùng từ khóa quan trọng</li>
                </ul>
              </div>
              <div style="background: #ffffff; border-radius: 22px; padding: 18px 20px; box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);">
                <p style="margin: 0 0 10px; font-weight: 700; color: #17233c;">Lưu ý trình bày</p>
                <p style="margin: 0; color: #334155; line-height: 1.75; font-size: 0.98rem;">Sắp xếp rõ ràng, chia thành nhóm kỹ năng, và ưu tiên kỹ năng phù hợp với công việc nhất.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Phân loại Kỹ năng',
    tag: 'Slide 12',
    content: `
      <div class="presenter-slide-content">
        <h2>Phân loại Kỹ năng</h2>
        <div style="display: grid; gap: 14px; margin-top: 24px;">
          <div style="background: #f5faff; padding: 16px; border-radius: 12px; border-left: 4px solid #0052a3;">
            <h3 style="margin: 0 0 6px; color: #0052a3; font-size: 1rem;">💻 Hard Skills (Kỹ năng cứng)</h3>
            <p style="margin: 0; color: #213a55; font-size: 0.95rem;">Kiến thức chuyên môn, công cụ, ngôn ngữ (Ví dụ: Java, SQL, Thiết kế đồ họa, Kế toán).</p>
          </div>
          <div style="background: #f5faff; padding: 16px; border-radius: 12px; border-left: 4px solid #0052a3;">
            <h3 style="margin: 0 0 6px; color: #0052a3; font-size: 1rem;">🤝 Soft Skills (Kỹ năng mềm)</h3>
            <p style="margin: 0; color: #213a55; font-size: 0.95rem;">Cách bạn tương tác và xử lý vấn đề (Ví dụ: Giao tiếp, Quản lý thời gian, Làm việc nhóm).</p>
          </div>
          <div style="background: #f5faff; padding: 16px; border-radius: 12px; border-left: 4px solid #0052a3;">
            <h3 style="margin: 0 0 6px; color: #0052a3; font-size: 1rem;">🔄 Transferable Skills (Kỹ năng chuyển đổi)</h3>
            <p style="margin: 0; color: #213a55; font-size: 0.95rem;">Những kỹ năng dùng được ở nhiều môi trường khác nhau (Ví dụ: Giải quyết vấn đề, Khả năng lãnh đạo).</p>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Tại sao phần "Kỹ năng" lại quan trọng?',
    tag: 'Slide 13',
    content: `
      <div class="presenter-slide-content">
        <h2>Tại sao phần "Kỹ năng" lại quan trọng?</h2>
        <div style="display: grid; gap: 16px; margin-top: 24px;">
          <div style="background: #f0f6ff; padding: 18px; border-radius: 12px; border-left: 5px solid #0070cc;">
            <h3 style="margin: 0 0 8px; color: #0070cc; font-size: 1.05rem;">📋 Điểm chạm đầu tiên</h3>
            <p style="margin: 0; color: #213a55; line-height: 1.6;">Nhà tuyển dụng thường quét nhanh (scan) phần kỹ năng để xem bạn có "khớp" với JD (Mô tả công việc) hay không.</p>
          </div>
          <div style="background: #f0f6ff; padding: 18px; border-radius: 12px; border-left: 5px solid #0070cc;">
            <h3 style="margin: 0 0 8px; color: #0070cc; font-size: 1.05rem;">⚡ Tóm tắt năng lực</h3>
            <p style="margin: 0; color: #213a55; line-height: 1.6;">Giúp người xem nắm bắt nhanh những gì bạn làm được mà không cần đọc hết kinh nghiệm làm việc.</p>
          </div>
          <div style="background: #f0f6ff; padding: 18px; border-radius: 12px; border-left: 5px solid #0070cc;">
            <h3 style="margin: 0 0 8px; color: #0070cc; font-size: 1.05rem;">🎯 Tối ưu hóa ATS</h3>
            <p style="margin: 0; color: #213a55; line-height: 1.6;">Là "mỏ vàng" để chứa các từ khóa (Keywords) giúp vượt qua hệ thống sàng lọc tự động (ATS).</p>
          </div>
        </div>
      </div>
    `
  },

  {
    title: 'Quy tắc "Vàng" & Những lỗi thường gặp',
    tag: 'Slide 14',
    content: `
      <div class="presenter-slide-content">
        <h2>Quy tắc "Vàng" & Những lỗi thường gặp</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 20px; font-size: 0.93rem; margin-bottom: 20px;">
          <div style="background: #f0f8ff; padding: 16px; border-radius: 12px; border: 1px solid #bfe0ff;">
            <h3 style="margin: 0 0 12px; color: #0070cc; font-size: 1rem;">✅ Quy tắc "Vàng"</h3>
            <ul style="margin: 0; padding-left: 18px; color: #213a55; line-height: 1.7;">
              <li>Đừng liệt kê tràn lan - chỉ chọn những kỹ năng liên quan.</li>
              <li>Định lượng khi có thể: "3 năm kinh nghiệm Java" thay vì "Thành thạo Java".</li>
              <li>Sử dụng thang đo hợp lý: Người mới, Có kinh nghiệm, Thành thạo, Chuyên gia.</li>
            </ul>
          </div>
          <div style="background: #fff5f5; padding: 16px; border-radius: 12px; border: 1px solid #ffcccc;">
            <h3 style="margin: 0 0 12px; color: #dc2626; font-size: 1rem;">❌ Lỗi thường gặp</h3>
            <ul style="margin: 0; padding-left: 18px; color: #213a55; line-height: 1.7;">
              <li>Quá chung chung: "Chăm chỉ" → hành động cụ thể.</li>
              <li>Liệt kê quá nhiều: làm loãng hồ sơ.</li>
              <li>Sai chính tả: đặc biệt tên phần mềm, ngôn ngữ lập trình.</li>
            </ul>
          </div>
        </div>  
      </div>
    `
  },
  {
    title: 'Ví dụ theo nghề',
    tag: 'Slide 15',
    content: `
      <div class="presenter-slide-content">
        <div style="display:flex; justify-content:center; align-items:center; margin-top:20px;">
          <img src="Image/ChatGPT%20Image%2014_27_06%2012%20thg%207%2C%202026.png" alt="Ví dụ theo nghề" style="max-width:100%; max-height:460px; border-radius:12px; box-shadow:0 12px 30px rgba(0,0,0,0.12);"/>
        </div>
      </div>
    `
  },
  {
    title: 'CV mẫu hoàn chỉnh',
    tag: 'Slide 16',
    content: `
      <div class="presenter-slide-content">
        <h2>CV mẫu hoàn chỉnh</h2>
        <div style="display: flex; justify-content: center; gap: 18px; margin-top: 24px; flex-wrap: wrap;">
          <img src="Image/Cv.jpg" alt="CV mẫu hoàn chỉnh" style="max-width: 100%; max-height: 420px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);" />
          <img src="Image/cv-badge.svg" alt="Biểu tượng CV" style="max-width: 120px; align-self: center;" />
        </div>
      </div>
    `
  },
  {
    title: 'Bài học rút ra khi viết CV',
    tag: 'Slide 17',
    content: `
      <div class="presenter-slide-content">
        <h2>Bài học rút ra khi viết CV</h2>
        <div style="margin-top: 24px; background: #f5faff; padding: 20px; border-radius: 14px; border-left: 5px solid #0070cc; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);">
          <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: #213a55; font-size: 1rem;">
            <li>Trình bày đẹp, dễ đọc.</li>
            <li>Lựa chọn ảnh lịch sự, chuyên nghiệp.</li>
            <li>Ngắn gọn (1–2 trang A4).</li>
            <li>Không sai chính tả.</li>
            <li>Thông tin trung thực.</li>
            <li>Nhấn mạnh thành tích bằng số liệu.</li>
            <li>Phù hợp với vị trí ứng tuyển.</li>
            <li>Cập nhật thường xuyên khi có kinh nghiệm mới.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    title: 'Tổng kết',
    tag: 'Slide 18',
    content: `
      <div class="presenter-slide-content">
        <h2>Tổng kết</h2>
        <div style="margin-top: 18px; background: #f7fbff; padding: 16px; border-radius: 12px; border-left: 4px solid #0070cc; font-size: 0.95rem; line-height: 1.7;">
          <p>Qua nội dung trình bày, nhóm nhận thấy rằng CV là "tấm vé đầu tiên" giúp ứng viên tiếp cận nhà tuyển dụng. Một CV hiệu quả không chỉ trình bày đầy đủ thông tin mà còn phải thể hiện rõ mục tiêu nghề nghiệp, kinh nghiệm làm việc, trình độ học vấn và các kỹ năng phù hợp với vị trí ứng tuyển.</p>
          <p>Đối với sinh viên, dù chưa có nhiều kinh nghiệm, vẫn có thể tạo ấn tượng bằng các dự án học tập, hoạt động ngoại khóa, chứng chỉ và kỹ năng chuyên môn. Bên cạnh đó, cần trình bày CV ngắn gọn, rõ ràng, trung thực và sử dụng số liệu cụ thể để chứng minh năng lực.</p>
          <p>Việc đầu tư xây dựng một CV chất lượng sẽ giúp tăng khả năng vượt qua vòng sàng lọc hồ sơ và mở ra nhiều cơ hội nghề nghiệp trong tương lai.</p>
        </div>
      </div>
    `
  },
  {
    title: 'Câu hỏi ôn tập trắc nghiệm 1',
    tag: 'Slide 19',
    content: `
      <div class="presenter-slide-content">
        <h2>Câu hỏi ôn tập trắc nghiệm 1</h2>
        <div class="quiz-wrap">
          <div class="quiz-question" data-correct-text="B. Viết ngắn gọn, phù hợp với vị trí ứng tuyển.">
            <div class="quiz-question-title">Câu 1. Mục tiêu nghề nghiệp trong CV nên viết như thế nào?</div>
            <div class="quiz-options">
              <button class="quiz-option" type="button" data-correct="false">A. Viết thật dài để gây ấn tượng.</button>
              <button class="quiz-option" type="button" data-correct="true">B. Viết ngắn gọn, phù hợp với vị trí ứng tuyển.</button>
              <button class="quiz-option" type="button" data-correct="false">C. Sao chép từ Internet.</button>
              <button class="quiz-option" type="button" data-correct="false">D. Không cần ghi.</button>
            </div>
            <div class="quiz-answer-note">Chọn đáp án để xem kết quả.</div>
            <div class="quiz-correct-answer"></div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Câu hỏi ôn tập trắc nghiệm 2',
    tag: 'Slide 20',
    content: `
      <div class="presenter-slide-content">
        <h2>Câu hỏi ôn tập trắc nghiệm 2</h2>
        <div class="quiz-wrap">
          <div class="quiz-question" data-correct-text="B. Thành tích và kết quả đạt được.">
            <div class="quiz-question-title">Câu 2. Khi trình bày kinh nghiệm làm việc, nội dung nào quan trọng nhất?</div>
            <div class="quiz-options">
              <button class="quiz-option" type="button" data-correct="false">A. Màu sắc CV.</button>
              <button class="quiz-option" type="button" data-correct="true">B. Thành tích và kết quả đạt được.</button>
              <button class="quiz-option" type="button" data-correct="false">C. Sở thích cá nhân.</button>
              <button class="quiz-option" type="button" data-correct="false">D. Chiều cao, cân nặng.</button>
            </div>
            <div class="quiz-answer-note">Chọn đáp án để xem kết quả.</div>
            <div class="quiz-correct-answer"></div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Câu hỏi ôn tập trắc nghiệm 3',
    tag: 'Slide 21',
    content: `
      <div class="presenter-slide-content">
        <h2>Câu hỏi ôn tập trắc nghiệm 3</h2>
        <div class="quiz-wrap">
          <div class="quiz-question" data-correct-text="A. Hoạt động câu lạc bộ, tình nguyện và dự án học tập.">
            <div class="quiz-question-title">Câu 3. Sinh viên chưa có kinh nghiệm làm việc có thể ghi nội dung nào trong CV?</div>
            <div class="quiz-options">
              <button class="quiz-option" type="button" data-correct="true">A. Hoạt động câu lạc bộ, tình nguyện và dự án học tập.</button>
              <button class="quiz-option" type="button" data-correct="false">B. Bỏ trống hoàn toàn.</button>
              <button class="quiz-option" type="button" data-correct="false">C. Chép kinh nghiệm của người khác.</button>
              <button class="quiz-option" type="button" data-correct="false">D. Ghi thông tin không đúng sự thật.</button>
            </div>
            <div class="quiz-answer-note">Chọn đáp án để xem kết quả.</div>
            <div class="quiz-correct-answer"></div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: 'Câu hỏi ôn tập trắc nghiệm 4',
    tag: 'Slide 22',
    content: `
      <div class="presenter-slide-content">
        <h2>Câu hỏi ôn tập trắc nghiệm 4</h2>
        <div class="quiz-wrap">
          <div class="quiz-question" data-correct-text="C. Giao tiếp và làm việc nhóm.">
            <div class="quiz-question-title">Câu 4. Kỹ năng nào sau đây thuộc nhóm kỹ năng mềm?</div>
            <div class="quiz-options">
              <button class="quiz-option" type="button" data-correct="false">A. Microsoft Excel.</button>
              <button class="quiz-option" type="button" data-correct="false">B. Canva.</button>
              <button class="quiz-option" type="button" data-correct="true">C. Giao tiếp và làm việc nhóm.</button>
              <button class="quiz-option" type="button" data-correct="false">D. Photoshop.</button>
            </div>
            <div class="quiz-answer-note">Chọn đáp án để xem kết quả.</div>
            <div class="quiz-correct-answer"></div>
          </div>
        </div>
      </div>
    `
  },
  {
    title: '16. Câu hỏi ôn tập trắc nghiệm 5',
    tag: 'Slide 23',
    content: `
      <div class="presenter-slide-content">
        <h2>16. Câu hỏi ôn tập trắc nghiệm 5</h2>
        <div class="quiz-wrap">
          <div class="quiz-question" data-correct-text="B. Trình bày ngắn gọn, rõ ràng, trung thực và phù hợp với vị trí ứng tuyển.">
            <div class="quiz-question-title">Câu 5. Một CV chuyên nghiệp nên có đặc điểm nào sau đây?</div>
            <div class="quiz-options">
              <button class="quiz-option" type="button" data-correct="false">A. Dài trên 5 trang.</button>
              <button class="quiz-option" type="button" data-correct="true">B. Trình bày ngắn gọn, rõ ràng, trung thực và phù hợp với vị trí ứng tuyển.</button>
              <button class="quiz-option" type="button" data-correct="false">C. Chỉ ghi thông tin cá nhân.</button>
              <button class="quiz-option" type="button" data-correct="false">D. Sử dụng nhiều màu sắc và hình ảnh.</button>
            </div>
            <div class="quiz-answer-note">Chọn đáp án để xem kết quả.</div>
            <div class="quiz-correct-answer"></div>
          </div>
        </div>
      </div>
    `
  }
];

const overlay = document.getElementById('presenterOverlay');
const stage = document.getElementById('presenterStage');
const counter = document.getElementById('presenterCounter');
const closeBtn = document.getElementById('closePresenter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const thumbList = document.getElementById('thumbList');
const slideNav = document.getElementById('slideNav');
let thumbItems = [];
let navDots = [];
const chip = document.querySelector('.chip');
const previewChip = document.getElementById('previewChip');
const previewStage = document.getElementById('previewStage');
const previewPanel = document.getElementById('previewPanel');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const decorCanvas = document.getElementById('decorCanvas');
const presenterDecorCanvas = document.getElementById('presenterDecorCanvas');

const slideIcons = [
  '📘','🧭','🎯','💼','📋','📝','🎓','🧭','🖼️','❓','📚','⚡','🧩','📄','💡','🧾','❓','❓','❓','❓','✅','📌','📑'
];

function buildNavigation() {
  if (!thumbList || !slideNav) return;

  thumbList.innerHTML = '';
  slideNav.innerHTML = '';

  slides.forEach((slide, index) => {
    const thumb = document.createElement('button');
    thumb.type = 'button';
    thumb.className = 'thumb-item';
    thumb.dataset.slideIndex = index;
    thumb.innerHTML = `
      <span class="thumb-number">${String(index + 1).padStart(2, '0')}</span>
      <span class="thumb-icon">${slideIcons[index] || '📄'}</span>
      <div><strong>${slide.title}</strong></div>
    `;
    thumb.addEventListener('click', () => renderSlide(index));
    thumbList.appendChild(thumb);

    const dot = document.createElement('span');
    dot.dataset.index = index;
    dot.addEventListener('click', () => renderSlide(index));
    slideNav.appendChild(dot);
  });

  thumbItems = Array.from(thumbList.querySelectorAll('.thumb-item'));
  navDots = Array.from(slideNav.querySelectorAll('span'));
}

function setupDecorCanvas(canvas) {
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let particles = [];

  const resizeCanvas = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    particles = Array.from({ length: Math.min(18, Math.max(8, Math.floor(width / 120))) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.4 + 1,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.2 + 0.08
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, width, height);

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(1, 'rgba(0, 82, 163, 0.08)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < -20 || particle.x > width + 20) particle.vx *= -1;
      if (particle.y < -20 || particle.y > height + 20) particle.vy *= -1;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 112, 204, ${particle.alpha})`;
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 140) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(0, 82, 163, ${0.04 * (1 - distance / 140)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  };

  resizeCanvas();
  draw();
  window.addEventListener('resize', resizeCanvas);
}

setupDecorCanvas(decorCanvas);
setupDecorCanvas(presenterDecorCanvas);

let currentIndex = 0;

buildNavigation();

// Animate list items with a staggered reveal
function animateReveal(root) {
  if (!root) return;
  const lists = root.querySelectorAll('ul');
  lists.forEach((list) => {
    const items = Array.from(list.querySelectorAll('li'));
    items.forEach((li, i) => {
      li.classList.add('reveal');
      li.classList.remove('visible');
      setTimeout(() => li.classList.add('visible'), i * 85);
    });
  });
}

// Title pop animation
function applyTitleAnimation(root) {
  if (!root) return;
  const h2 = root.querySelector('h2');
  if (!h2) return;
  h2.classList.remove('title-animate');
  // trigger reflow to restart animation
  void h2.offsetWidth;
  h2.classList.add('title-animate');
}

// Simple confetti launcher
function launchConfetti(count = 28) {
  const colors = ['#ff4757', '#ffa502', '#2ed573', '#1e90ff', '#ff6b81', '#7f8fa6'];
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.left = '0';
  container.style.top = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.pointerEvents = 'none';
  container.style.overflow = 'visible';
  container.style.zIndex = 99999;

  for (let i = 0; i < count; i += 1) {
    const c = document.createElement('div');
    c.className = 'confetti';
    const w = 8 + Math.round(Math.random() * 10);
    const left = Math.random() * 100;
    c.style.left = `${left}vw`;
    c.style.top = `${-5 - Math.random() * 5}vh`;
    c.style.width = `${w}px`;
    c.style.height = `${Math.round(w * 1.3)}px`;
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    const dur = 1400 + Math.round(Math.random() * 900);
    c.style.animation = `confettiFall ${dur}ms cubic-bezier(.2,.6,.2,1) forwards`;
    c.style.transform = `rotate(${Math.round(Math.random() * 360)}deg)`;
    container.appendChild(c);
  }

  document.body.appendChild(container);
  setTimeout(() => {
    container.remove();
  }, 2600);
}

// Per-slide geometric badges (appear when rendering slide)
function addGeoBadges(root, index) {
  if (!root) return;
  // remove existing
  root.querySelectorAll('.geo-badge').forEach(n => n.remove());

  // Use a single AVIF image as geometric badge content so it's consistent
  const imgSrc = 'Image/Element.avif';
  const count = 2 + (index % 2); // 2 or 3 badges
  const positions = [
    { left: '6%', top: '8%' },
    { left: '84%', top: '8%' },
    { left: '6%', top: '76%' },
    { left: '82%', top: '72%' },
    { left: '28%', top: '6%' },
    { left: '72%', top: '6%' }
  ];

  for (let i = 0; i < count; i++) {
    const badge = document.createElement('div');
    badge.className = 'geo-badge pop float';
    const pos = positions[(index * 3 + i) % positions.length];
    badge.style.left = pos.left;
    badge.style.top = pos.top;
    badge.style.opacity = `${0.12 + (i * 0.04)}`;
    badge.style.animationDelay = `${i * 150}ms`;
    // image element
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = 'decorative element';
    img.className = 'geo-badge-img';
    // slight rotation variation
    badge.style.transform = `rotate(${(index * 13 + i * 11) % 20 - 10}deg)`;
    badge.appendChild(img);
    root.appendChild(badge);
  }
}

function renderSlide(index) {
  currentIndex = (index + slides.length) % slides.length;
  const content = slides[currentIndex].content.replace('presenter-slide-content', 'presenter-slide-content slide-enter');
  stage.innerHTML = content;
  previewStage.innerHTML = content;
  counter.textContent = `${currentIndex + 1} / ${slides.length}`;
  chip.textContent = `Slide ${currentIndex + 1} / ${slides.length}`;
  previewChip.textContent = `Slide ${currentIndex + 1} / ${slides.length}`;
  thumbItems.forEach((item, itemIndex) => {
    item.classList.toggle('active', itemIndex === currentIndex);
  });
  navDots.forEach((dot, dotIndex) => {
    dot.classList.toggle('active', dotIndex === currentIndex);
  });

  // apply UI animations
  // animate reveal of list items and title in both preview & presenter
  animateReveal(stage);
  animateReveal(previewStage);
  applyTitleAnimation(stage);
  applyTitleAnimation(previewStage);

  // add per-slide geometric badges
  try { addGeoBadges(previewStage, currentIndex); } catch (e) {}
  try { addGeoBadges(stage, currentIndex); } catch (e) {}

  attachQuizHandlers();
}

function attachQuizHandlers() {
  document.querySelectorAll('.quiz-question').forEach((question) => {
    const options = question.querySelectorAll('.quiz-option');

    options.forEach((option) => {
      option.addEventListener('click', () => {
        const correctOption = question.querySelector('.quiz-option[data-correct="true"]');
        const note = question.querySelector('.quiz-answer-note');
        const answerText = question.querySelector('.quiz-correct-answer');

        options.forEach((item) => {
          item.classList.remove('correct', 'incorrect');
          if (item === correctOption) {
            item.classList.add('correct');
          } else if (item === option) {
            item.classList.add(option.dataset.correct === 'true' ? 'correct' : 'incorrect');
          }
        });

        if (note) {
          note.textContent = option.dataset.correct === 'true' ? 'Đúng rồi!' : 'Sai rồi!';
          note.style.color = option.dataset.correct === 'true' ? '#16a34a' : '#dc2626';
        }

        if (answerText) {
          answerText.textContent = option.dataset.correct === 'true' ? '' : `Đáp án đúng: ${question.dataset.correctText}`;
        }
        // launch confetti when correct
        if (option.dataset.correct === 'true') {
          try { launchConfetti(); } catch (e) { /* ignore */ }
        }
      });
    });
  });
}

function openPresenter(index, autoFullscreen = true) {
  renderSlide(index);
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  if (autoFullscreen && !document.fullscreenElement) {
    const target = overlay || document.documentElement;
    const requestFullScreen = target.requestFullscreen || target.webkitRequestFullscreen || target.msRequestFullscreen;
    const fullscreenOptions = { navigationUI: 'hide' };

    if (requestFullScreen) {
      try {
        requestFullScreen.call(target, fullscreenOptions);
      } catch (error) {
        requestFullScreen.call(target);
      }
    }
  }
}

function closePresenter() {
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');

  if (document.fullscreenElement) {
    document.exitFullscreen?.();
  }
}

thumbItems.forEach((item, itemIndex) => {
  item.addEventListener('click', () => renderSlide(itemIndex));
});

previewPanel.addEventListener('click', () => openPresenter(currentIndex, true));
previewPanel.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openPresenter(currentIndex, true);
  }
});

fullscreenBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  openPresenter(currentIndex, true);
});

navDots.forEach((dot, dotIndex) => {
  dot.addEventListener('click', () => renderSlide(dotIndex));
});

closeBtn.addEventListener('click', closePresenter);
overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    closePresenter();
  }
});

prevBtn.addEventListener('click', () => renderSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => renderSlide(currentIndex + 1));

document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement && overlay.classList.contains('open')) {
    closePresenter();
  }
});

document.addEventListener('keydown', (event) => {
  if (!overlay.classList.contains('open')) return;
  if (event.key === 'Escape') {
    closePresenter();
  } else if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
    event.preventDefault();
    renderSlide(currentIndex + 1);
  } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
    event.preventDefault();
    renderSlide(currentIndex - 1);
  }
});

renderSlide(0);
